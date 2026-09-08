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
| p50WallMs                      | 1725     |
| p95WallMs                      | 1733     |
| p50PluginWallDeltaMs           | 16       |
| p95PluginWallDeltaMs           | 24       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 62 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 74.3 ms  |
| p95OpenClawImportMs            | 75.1 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 276.8 MB |
| maxCpuMsEstimate               | 2451 ms  |
| baselineReferenceWallMs        | 1709 ms  |
| baselineReferencePeakRssMb     | 283.2 MB |
| baselineReferenceCpuMsEstimate | 2389 ms  |
| statSampleCount                | 204      |
| rssSampleCount                 | 204      |
| cpuSampleCount                 | 204      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1709 ms                                  |
| referencePeakRssMb     | 283.2 MB                                 |
| referenceCpuMsEstimate | 2389 ms                                  |
| maxWallMs              | 4609 ms                                  |
| maxPeakRssMb           | 345.4 MB                                 |
| maxCpuMsEstimate       | 4036 ms                                  |
| statSampleCount        | 318                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 73.2 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1674 ms  | 276.8 MB     | 2330 ms          | 66/66           | 0    |
| 1   | captured | 2        | 75.1 ms         | 0.3 ms            | 24 ms             | 0 MB             | 62 ms            | 1733 ms  | 273.8 MB     | 2451 ms          | 69/69           | 0    |
| 2   | captured | 2        | 74.3 ms         | 0.3 ms            | 16 ms             | 0 MB             | 20 ms            | 1725 ms  | 274.6 MB     | 2409 ms          | 69/69           | 0    |
