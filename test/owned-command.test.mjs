import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, realpath, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Worker } from "node:worker_threads";
import { runOwnedCommand } from "../scripts/owned-command.mjs";

test("owned command preserves synchronous results, cwd, environment, and argument bytes", async (t) => {
  const root = await temporaryRoot(t);
  const args = ["space here", 'embedded"quote', "trailing\\", "\u03a9", "%PATH%", "&"];
  const result = runOwnedCommand(process.execPath, ["-e", `
    process.stdout.write(JSON.stringify({ cwd: process.cwd(), env: process.env.OWNER_TEST, args: process.argv.slice(1) }));
    process.stderr.write("retained stderr");
    process.exitCode = 7;
  `, ...args], {
    cwd: root, env: { ...process.env, OWNER_TEST: "retained value" }, timeout: 5000, encoding: "utf8",
  });
  assert.equal(typeof result.then, "undefined");
  assert.ifError(result.error);
  assert.equal(result.status, 7);
  assert.equal(result.signal, null);
  assert.deepEqual(JSON.parse(result.stdout), { cwd: await realpath(root), env: "retained value", args });
  assert.equal(result.stderr, "retained stderr");
});

test("owned command applies the default combined capture limit, including large valid output", () => {
  const limit = 1024 * 1024;
  for (const extra of [0, 1]) {
    const result = runOwnedCommand(process.execPath, ["-e", `
      process.stdout.write(Buffer.alloc(${limit / 2}, "a"));
      process.stderr.write(Buffer.alloc(${limit / 2 + extra}, "b"));
    `], { timeout: 5000 });
    assert.ok(result.stdout.length + result.stderr.length <= limit);
    if (extra) {
      assert.equal(result.error?.code, "ENOBUFS");
    } else {
      assert.ifError(result.error);
      assert.equal(result.status, 0);
      assert.equal(result.stdout.length, limit / 2);
      assert.equal(result.stderr.length, limit / 2);
      assert.equal(result.stdout.equals(Buffer.alloc(limit / 2, "a")), true);
      assert.equal(result.stderr.equals(Buffer.alloc(limit / 2, "b")), true);
    }
  }
});

test("owned command retains an explicit caller capture budget across repeated invocations", () => {
  for (let index = 0; index < 4; index += 1) {
    const result = runOwnedCommand(process.execPath, ["-e", `process.stdout.write("${index}");`], {
      timeout: 5000, maxBuffer: 8, encoding: "utf8",
    });
    assert.ifError(result.error);
    assert.equal(result.status, 0);
    assert.equal(result.stdout, String(index));
    assert.equal(result.stderr, "");
  }
});

test("owned command preserves a missing executable error rather than reporting child success", async (t) => {
  const root = await temporaryRoot(t);
  const command = path.join(root, "absent-command");
  const result = runOwnedCommand(command, ["argument"], { timeout: 5000, encoding: "utf8" });
  assert.equal(result.status, null);
  assert.equal(result.error?.code, "ENOENT");
  assert.equal(result.error?.path, command);
  assert.equal(result.stdout, "");
});

test("restricted Linux procfs entries do not prevent timeout escalation", {
  skip: process.platform !== "linux", timeout: 10_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const ownerPath = await copyOwner(root);
  const owner = await readFile(ownerPath, "utf8");
  const restricted = path.join(root, "restricted-read");
  await writeFile(ownerPath, owner.replace('from "node:fs";', 'from "./restricted-fs.mjs";'));
  await writeFile(path.join(root, "scripts/restricted-fs.mjs"), `
    export { existsSync, readdirSync, statSync } from "node:fs";
    import { readFileSync as read, writeFileSync } from "node:fs";
    export function readFileSync(file, ...args) {
      if (file === "/proc/1/stat") {
        writeFileSync(${JSON.stringify(restricted)}, "observed");
        throw Object.assign(new Error("restricted foreign procfs"), { code: "EACCES" });
      }
      return read(file, ...args);
    }
  `);
  const pidFile = path.join(root, "command-pid");
  const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
  const started = performance.now();
  const result = invoke(process.execPath, ["-e", `
    require("node:fs").writeFileSync(${JSON.stringify(pidFile)}, String(process.pid));
    process.on("SIGTERM", () => {});
    setInterval(() => {}, 1000);
    setTimeout(() => process.exit(99), 7000).unref();
  `], { timeout: 750 });
  assert.equal(result.error?.code, "ETIMEDOUT");
  assert.equal(await readFile(restricted, "utf8"), "observed");
  assert.ok(performance.now() - started < 4000);
  const pid = Number(await readFile(pidFile, "utf8"));
  assert.equal(await waitForExit(pid, 250), true, "owned command must exit before fixture escape");
});

test("owned command bounds a missing Worker bootstrap without starting the requested command", {
  timeout: 20_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const ownerPath = await copyOwner(root);
  const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
  await rm(ownerPath);
  const marker = path.join(root, "command-started");
  const started = performance.now();
  const result = invoke(process.execPath, ["-e", `
    require("node:fs").writeFileSync(${JSON.stringify(marker)}, "started");
  `], { timeout: 1000 });
  assert.equal(result.error?.code, "EOWNERSTART");
  assert.ok(performance.now() - started < 15_000);
  await assert.rejects(readFile(marker), { code: "ENOENT" });
});

test("Windows adapter setup failure never runs an uncontained command", {
  skip: process.platform !== "win32", timeout: 20_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const ownerPath = await copyOwner(root);
  const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
  const marker = path.join(root, "command-started");
  const result = invoke(process.execPath, ["-e", `
    require("node:fs").writeFileSync(${JSON.stringify(marker)}, "started");
  `], { timeout: 1000 });
  assert.ok(result.error);
  assert.equal(result.status, null);
  await assert.rejects(readFile(marker), { code: "ENOENT" });
});

test("Windows command preserves the native process creation error", {
  skip: process.platform !== "win32", timeout: 20_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const command = path.join(root, "invalid executable.exe");
  await writeFile(command, "not a Windows executable\n");
  const result = runOwnedCommand(command, ["argument"], { timeout: 1000 });
  assert.equal(result.status, null);
  assert.deepEqual({
    code: result.error?.code,
    nativeCode: result.error?.nativeCode,
    operation: result.error?.operation,
  }, { code: "ENOEXEC", nativeCode: 193, operation: "CreateProcessW(JOB_LIST)" }, result.error?.message);
  assert.equal(result.error?.path, command);
  assert.deepEqual(result.error?.spawnargs, ["argument"]);
});

for (const ownerLost of [false, true]) {
  test(`Windows blocked bootstrap ${ownerLost ? "observes owner loss" : "has a deadline"} before native admission`, {
    skip: process.platform !== "win32", timeout: 30_000,
  }, async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "crabpot bootstrap owner "));
    const ownerPath = await copyOwner(root);
    const pidFile = path.join(root, "helper-pid");
    const commandMarker = path.join(root, "command-started");
    const original = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
    const compilation = 'Add-Type -Path (Join-Path $PSScriptRoot "owned-command-windows.cs")';
    assert.equal(original.split(compilation).length, 2);
    // Stall the real bootstrap at compilation, retaining its actual control-pipe
    // ownership. The bounded fixture escape only runs after the assertions fail.
    const blocked = original.replace(compilation, `
        [System.IO.File]::WriteAllText('${pidFile.replaceAll("'", "''")}', [string]$PID)
        Start-Sleep -Seconds 20
        exit 99
    `);
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), blocked);
    const resultFile = path.join(root, "result.json");
    const worker = new Worker(`
      const { workerData } = require("node:worker_threads");
      import(workerData.owner).then(({ runOwnedCommand }) => {
        const result = runOwnedCommand(process.execPath, ["-e", workerData.command], { timeout: 1000 });
        const fs = require("node:fs");
        fs.writeFileSync(workerData.result + ".pending", JSON.stringify(result));
        fs.renameSync(workerData.result + ".pending", workerData.result);
      });
    `, { eval: true, workerData: {
      owner: pathToFileURL(ownerPath).href, result: resultFile,
      command: `require("node:fs").writeFileSync(${JSON.stringify(commandMarker)}, "started")`,
    } });
    const errors = [];
    worker.on("error", (error) => errors.push(error));
    let helperPid;
    t.after(async () => {
      await worker.terminate();
      // Rescue does not signal a possibly recycled PID. The fixture expires itself.
      if (helperPid) await waitForExit(helperPid, 22_000);
      await rm(root, { recursive: true, force: true });
    });
    for (let attempt = 0; attempt < 150 && !helperPid; attempt += 1) {
      try { helperPid = Number(await readFile(pidFile, "utf8")); } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      if (!helperPid) await delay(50);
    }
    assert.ok(helperPid, "the actual helper must reach the blocked bootstrap");
    if (ownerLost) {
      await worker.terminate();
      assert.equal(await waitForExit(helperPid, 2000), true);
    } else {
      let result;
      for (let attempt = 0; attempt < 250 && !result; attempt += 1) {
        try { result = JSON.parse(await readFile(resultFile, "utf8")); } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        if (!result) await delay(50);
      }
      assert.ok(result, "bootstrap must return before the fixture's independent escape");
      assert.ok(result.error);
      assert.equal(await waitForExit(helperPid, 100), true);
    }
    assert.deepEqual(errors, []);
    await assert.rejects(readFile(commandMarker), { code: "ENOENT" });
  });
}

for (const [ownerLost, guarded] of [[false, true], [true, true], [false, false], [true, false]]) {
  test(`Windows actual compiler ${guarded ? "exits" : "negative control survives"} on ${ownerLost ? "owner loss" : "startup expiry"}`, {
    skip: process.platform !== "win32", timeout: 45_000,
  }, async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "crabpot compiler owner "));
    const ownerPath = await copyOwner(root);
    const pidFile = path.join(root, "helper-pid");
    const commandMarker = path.join(root, "command-started");
    const resultFile = path.join(root, "result.json");
    const original = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
    const compilation = 'Add-Type -Path (Join-Path $PSScriptRoot "owned-command-windows.cs")';
    assert.equal(original.split(compilation).length, 2);
    const guardStart = original.indexOf("    # CodeDOM starts csc.exe.");
    const guardEnd = original.indexOf(`    ${compilation}`);
    assert.ok(guardStart > 0 && guardEnd > guardStart);
    const helperSource = guarded ? original : original.slice(0, guardStart) + original.slice(guardEnd);
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), helperSource.replace(compilation, `
      [System.IO.File]::WriteAllText('${pidFile.replaceAll("'", "''")}', [string]$PID)
      ${compilation}
    `));
    const native = await readFile(new URL("../scripts/owned-command-windows.cs", import.meta.url), "utf8");
    // Keep a real CodeDOM compilation active long enough for native observation,
    // without replacing the compiler or introducing a production test seam.
    const source = native + Array.from({ length: 10_000 }, (_, index) =>
      `\ninternal class CompilerObservation${index} { }`).join("");
    await writeFile(path.join(root, "scripts/owned-command-windows.cs"), source);
    const powershell = path.join(process.env.SystemRoot, "System32/WindowsPowerShell/v1.0/powershell.exe");
    const observer = new Worker(`
      const { workerData, parentPort } = require("node:worker_threads");
      import(workerData.owner).then(({ runOwnedCommand }) => {
        parentPort.postMessage(runOwnedCommand(workerData.command, workerData.args, {
          timeout: 35000, maxBuffer: 8192, encoding: "utf8",
        }));
      });
    `, { eval: true, workerData: {
      owner: new URL("../scripts/owned-command.mjs", import.meta.url).href,
      command: powershell, args: [
        "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
        "-File", fileURLToPath(new URL("./fixtures/owned-command-compiler-observer.ps1", import.meta.url)), root,
      ],
    } });
    let observerResult;
    const observerClosed = new Promise((resolve) => {
      observer.once("message", (result) => { observerResult = result; resolve(); });
      observer.once("exit", resolve);
    });
    const observerError = () => observerResult?.stderr ?? "";
    const sentinel = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { stdio: "ignore" });
    const sentinelClosed = new Promise((resolve) => sentinel.once("close", resolve));
    const errors = [];
    observer.on("error", (error) => errors.push(error));
    sentinel.on("error", (error) => errors.push(error));
    let worker;
    let compiler;
    t.after(async () => {
      try {
        await writeFile(path.join(root, "observer-rescue"), "stop");
        await worker?.terminate();
        const completed = await Promise.race([observerClosed.then(() => true), delay(6000).then(() => false)]);
        if (compiler) {
          assert.equal(completed, true, "owned compiler rescue must complete before observer termination");
          assert.equal(observerResult?.status, 0, observerError());
          assert.ifError(observerResult.error);
          assert.equal(await waitForExit(compiler.pid, 1000), true, "fixture rescue must leave no compiler process");
        }
      } finally {
        await observer.terminate();
        sentinel.kill();
        await sentinelClosed;
        await rm(root, { recursive: true, force: true });
      }
    });
    await readReceipt(path.join(root, "observer-ready"), 10_000, observerError);
    worker = new Worker(`
      const { workerData } = require("node:worker_threads");
      import(workerData.owner).then(({ runOwnedCommand }) => {
        const result = runOwnedCommand(process.execPath, ["-e", workerData.command], { timeout: 1000 });
        const fs = require("node:fs");
        fs.writeFileSync(workerData.result + ".pending", JSON.stringify(result));
        fs.renameSync(workerData.result + ".pending", workerData.result);
      });
    `, { eval: true, workerData: {
      owner: pathToFileURL(ownerPath).href, result: resultFile,
      command: `require("node:fs").writeFileSync(${JSON.stringify(commandMarker)}, "started")`,
    } });
    worker.on("error", (error) => errors.push(error));
    compiler = await readReceipt(path.join(root, "compiler-suspended.json"), 8000, observerError);
    assert.equal(compiler.name, "csc.exe");
    assert.equal(compiler.suspended, true);
    assert.ok(compiler.pid > 0 && compiler.helperPid > 0);
    assert.equal(process.kill(compiler.pid, 0), true, "actual compiler must be alive at interruption");
    if (ownerLost) {
      await worker.terminate();
    } else {
      const result = await readReceipt(resultFile, 14_000, observerError);
      assert.equal(result.error?.code, "EOWNERSTART");
      assert.equal(result.status, null);
    }
    assert.equal(await waitForExit(compiler.helperPid, 1000), true);
    const extinct = await waitForExit(compiler.pid, 2500);
    const requireExtinction = () => assert.equal(extinct, true, "actual compiler must exit before fixture rescue");
    if (guarded) {
      requireExtinction();
      const exited = await readReceipt(path.join(root, "compiler-exited.json"), 1000, observerError);
      assert.deepEqual(exited, { pid: compiler.pid, exited: true, rescued: false });
    } else {
      assert.throws(requireExtinction, {
        code: "ERR_ASSERTION", message: /actual compiler must exit before fixture rescue/,
      });
      t.diagnostic("negative control: helper exited; real csc.exe survived; extinction assertion failed before rescue");
    }
    assert.equal(sentinel.exitCode, null);
    assert.equal(sentinel.signalCode, null);
    assert.equal(process.kill(sentinel.pid, 0), true);
    await assert.rejects(readFile(commandMarker), { code: "ENOENT" });
    assert.deepEqual(errors, []);
  });
}

test("Windows Job outlives its Worker only long enough to clean the admitted command", {
  skip: process.platform !== "win32", timeout: 25_000,
}, async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot owner loss "));
  const pidFile = path.join(root, "command-pid");
  const stopFile = path.join(root, "fixture-rescue");
  const source = `
    const fs = require("node:fs");
    fs.writeFileSync(${JSON.stringify(pidFile)}, String(process.pid));
    setInterval(() => {
      if (fs.existsSync(${JSON.stringify(stopFile)})) process.exit(99);
    }, 10);
    setTimeout(() => process.exit(98), 20000).unref();
  `;
  const worker = new Worker(`
    const { workerData } = require("node:worker_threads");
    import(workerData.owner).then(({ runOwnedCommand }) => {
      runOwnedCommand(process.execPath, ["-e", workerData.source], { timeout: 15000 });
    });
  `, { eval: true, workerData: { owner: new URL("../scripts/owned-command.mjs", import.meta.url).href, source } });
  t.after(async () => {
    await writeFile(stopFile, "stop");
    await worker.terminate();
    await rm(root, { recursive: true, force: true });
  });
  let pid;
  for (let attempt = 0; attempt < 150 && !pid; attempt += 1) {
    try { pid = Number(await readFile(pidFile, "utf8")); } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    if (!pid) await delay(50);
  }
  assert.ok(pid, "the command must be admitted before its Worker is terminated");
  await worker.terminate();
  let running = true;
  for (let attempt = 0; attempt < 100 && running; attempt += 1) {
    try { process.kill(pid, 0); } catch (error) {
      if (error.code !== "ESRCH") throw error;
      running = false;
    }
    if (running) await delay(25);
  }
  assert.equal(running, false, "native owner-loss cleanup must precede fixture rescue");
});

async function temporaryRoot(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot command owner "));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

async function copyOwner(root) {
  await mkdir(path.join(root, "scripts"));
  await writeFile(path.join(root, "package.json"), '{"type":"module"}\n');
  for (const name of ["owned-command.mjs", "portable-command.mjs"]) {
    await copyFile(new URL(`../scripts/${name}`, import.meta.url), path.join(root, "scripts", name));
  }
  return path.join(root, "scripts/owned-command.mjs");
}

async function waitForExit(pid, timeout) {
  const deadline = performance.now() + timeout;
  while (performance.now() < deadline) {
    try { process.kill(pid, 0); } catch (error) {
      if (error.code === "ESRCH") return true;
      throw error;
    }
    await delay(25);
  }
  return false;
}

async function readReceipt(file, timeout, detail) {
  const deadline = performance.now() + timeout;
  while (performance.now() < deadline) {
    try { return JSON.parse(await readFile(file, "utf8")); } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    await delay(20);
  }
  assert.fail(`receipt ${path.basename(file)} was not produced: ${detail()}`);
}
