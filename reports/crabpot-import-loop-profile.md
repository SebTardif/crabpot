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
| p50WallMs                      | 2791     |
| p95WallMs                      | 2815     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 8        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 18 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 118.1 ms |
| p95OpenClawImportMs            | 118.8 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 282.6 MB |
| maxCpuMsEstimate               | 3828 ms  |
| baselineReferenceWallMs        | 2807 ms  |
| baselineReferencePeakRssMb     | 283.4 MB |
| baselineReferenceCpuMsEstimate | 3810 ms  |
| statSampleCount                | 333      |
| rssSampleCount                 | 333      |
| cpuSampleCount                 | 333      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2807 ms                                  |
| referencePeakRssMb     | 283.4 MB                                 |
| referenceCpuMsEstimate | 3810 ms                                  |
| maxWallMs              | 6171 ms                                  |
| maxPeakRssMb           | 342.6 MB                                 |
| maxCpuMsEstimate       | 5635 ms                                  |
| statSampleCount        | 468                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 118.1 ms        | 0.4 ms            | 8 ms              | 0 MB             | 13 ms            | 2815 ms  | 282.6 MB     | 3823 ms          | 112/112         | 0    |
| 1   | captured | 2        | 118.8 ms        | 0.4 ms            | 0 ms              | 0 MB             | 18 ms            | 2791 ms  | 274.9 MB     | 3828 ms          | 111/111         | 0    |
| 2   | captured | 2        | 112.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2775 ms  | 280.7 MB     | 3775 ms          | 110/110         | 0    |
