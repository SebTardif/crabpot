# Crabpot Import Loop Profile

Generated: deterministic
Mode: openclaw-loader-lifecycle-profile
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric                         | Value    |
| ------------------------------ | -------- |
| runs                           | 3        |
| baselineRuns                   | 3        |
| baselineFailCount              | 0        |
| p50WallMs                      | 2387     |
| p95WallMs                      | 2387     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 101.5 ms |
| p95OpenClawImportMs            | 103.7 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 280.6 MB |
| maxCpuMsEstimate               | 3373 ms  |
| baselineReferenceWallMs        | 2405 ms  |
| baselineReferencePeakRssMb     | 279.4 MB |
| baselineReferenceCpuMsEstimate | 3400 ms  |
| statSampleCount                | 284      |
| rssSampleCount                 | 284      |
| cpuSampleCount                 | 284      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2405 ms                                  |
| referencePeakRssMb     | 279.4 MB                                 |
| referenceCpuMsEstimate | 3400 ms                                  |
| maxWallMs              | 5967 ms                                  |
| maxPeakRssMb           | 348.1 MB                                 |
| maxCpuMsEstimate       | 5340 ms                                  |
| statSampleCount        | 429                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 101.5 ms        | 0.3 ms            | 0 ms              | 0.3 MB           | 0 ms             | 2387 ms  | 279.7 MB     | 3354 ms          | 95/95           | 0    |
| 1   | captured | 2        | 96.1 ms         | 0.4 ms            | 0 ms              | 1.2 MB           | 0 ms             | 2355 ms  | 280.6 MB     | 3373 ms          | 94/94           | 0    |
| 2   | captured | 2        | 103.7 ms        | 0.4 ms            | 0 ms              | 0.9 MB           | 0 ms             | 2387 ms  | 280.3 MB     | 3337 ms          | 95/95           | 0    |
