#!/usr/bin/env node
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  defaultPluginInspectorTimeoutMs,
  resolvePluginInspectorCliInvocation,
} from "./plugin-inspector-source.mjs";
import { configuredTimeoutMs, runOwnedCommand } from "./owned-command.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outDir = outIndex === -1 ? ".crabpot/plugin-inspector-smoke" : args[outIndex + 1];
const configIndex = args.indexOf("--config");
const configPath = configIndex === -1 ? "crabpot.config.json" : args[configIndex + 1];

const inspectorArgs = ["report", "--config", configPath, "--out", outDir, ...(args.includes("--check") ? ["--check"] : [])];
const invocation = resolvePluginInspectorCliInvocation();
const timeout = configuredTimeoutMs("CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS", defaultPluginInspectorTimeoutMs);
const result = runOwnedCommand(invocation.command, [...invocation.args, ...inspectorArgs], {
  cwd: repoRoot,
  encoding: "utf8",
  stdio: "inherit",
  timeout,
});

if (result.error) {
  if (result.error.code === "ETIMEDOUT" && !result.cleanupError) {
    throw new Error(`plugin-inspector smoke timed out after ${timeout}ms`);
  }
  throw result.error;
}
process.exitCode = result.status ?? 1;
