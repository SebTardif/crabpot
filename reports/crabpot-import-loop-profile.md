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
| p50WallMs                      | 3066     |
| p95WallMs                      | 3108     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 4        |
| maxPluginPeakRssDeltaMb        | 0.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 16 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 129.1 ms |
| p95OpenClawImportMs            | 144.7 ms |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 282.8 MB |
| maxCpuMsEstimate               | 4228 ms  |
| baselineReferenceWallMs        | 3104 ms  |
| baselineReferencePeakRssMb     | 282.1 MB |
| baselineReferenceCpuMsEstimate | 4212 ms  |
| statSampleCount                | 364      |
| rssSampleCount                 | 364      |
| cpuSampleCount                 | 364      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3104 ms                                  |
| referencePeakRssMb     | 282.1 MB                                 |
| referenceCpuMsEstimate | 4212 ms                                  |
| maxWallMs              | 6659 ms                                  |
| maxPeakRssMb           | 352 MB                                   |
| maxCpuMsEstimate       | 6015 ms                                  |
| statSampleCount        | 506                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 144.7 ms        | 0.5 ms            | 4 ms              | 0.7 MB           | 16 ms            | 3108 ms  | 282.8 MB     | 4228 ms          | 123/123         | 0    |
| 1   | captured | 2        | 129.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 3066 ms  | 281.6 MB     | 4204 ms          | 122/122         | 0    |
| 2   | captured | 2        | 119.2 ms        | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3013 ms  | 274 MB       | 4069 ms          | 119/119         | 0    |
