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
| p50WallMs                      | 2872     |
| p95WallMs                      | 2880     |
| p50PluginWallDeltaMs           | 1        |
| p95PluginWallDeltaMs           | 9        |
| maxPluginPeakRssDeltaMb        | 3.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 35 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113.5 ms |
| p95OpenClawImportMs            | 122 ms   |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 279.8 MB |
| maxCpuMsEstimate               | 3932 ms  |
| baselineReferenceWallMs        | 2871 ms  |
| baselineReferencePeakRssMb     | 276.7 MB |
| baselineReferenceCpuMsEstimate | 3897 ms  |
| statSampleCount                | 344      |
| rssSampleCount                 | 344      |
| cpuSampleCount                 | 344      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2871 ms                                  |
| referencePeakRssMb     | 276.7 MB                                 |
| referenceCpuMsEstimate | 3897 ms                                  |
| maxWallMs              | 6108 ms                                  |
| maxPeakRssMb           | 346.1 MB                                 |
| maxCpuMsEstimate       | 5492 ms                                  |
| statSampleCount        | 470                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 122 ms          | 0.6 ms            | 0 ms              | 2.1 MB           | 0 ms             | 2850 ms  | 278.8 MB     | 3843 ms          | 114/114         | 0    |
| 1   | captured | 2        | 112.7 ms        | 0.4 ms            | 1 ms              | 3.1 MB           | 0 ms             | 2872 ms  | 279.8 MB     | 3876 ms          | 115/115         | 0    |
| 2   | captured | 2        | 113.5 ms        | 0.5 ms            | 9 ms              | 0.4 MB           | 35 ms            | 2880 ms  | 277.1 MB     | 3932 ms          | 115/115         | 0    |
