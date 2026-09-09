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
| p50WallMs                      | 2822     |
| p95WallMs                      | 2915     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 4        |
| maxPluginPeakRssDeltaMb        | 1.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 24 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 119.3 ms |
| p95OpenClawImportMs            | 122.6 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 282.6 MB |
| maxCpuMsEstimate               | 4017 ms  |
| baselineReferenceWallMs        | 2911 ms  |
| baselineReferencePeakRssMb     | 280.8 MB |
| baselineReferenceCpuMsEstimate | 3993 ms  |
| statSampleCount                | 339      |
| rssSampleCount                 | 339      |
| cpuSampleCount                 | 339      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2911 ms                                  |
| referencePeakRssMb     | 280.8 MB                                 |
| referenceCpuMsEstimate | 3993 ms                                  |
| maxWallMs              | 6582 ms                                  |
| maxPeakRssMb           | 350.5 MB                                 |
| maxCpuMsEstimate       | 5906 ms                                  |
| statSampleCount        | 491                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 122.6 ms        | 0.4 ms            | 4 ms              | 0 MB             | 24 ms            | 2915 ms  | 276.2 MB     | 4017 ms          | 116/116         | 0    |
| 1   | captured | 2        | 119.3 ms        | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2822 ms  | 279.5 MB     | 3823 ms          | 112/112         | 0    |
| 2   | captured | 2        | 113.2 ms        | 0.4 ms            | 0 ms              | 1.8 MB           | 0 ms             | 2801 ms  | 282.6 MB     | 3846 ms          | 111/111         | 0    |
