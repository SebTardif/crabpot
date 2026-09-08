# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5853 ms            |
| Command P95 wall time  | 5946 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4965               |
| CPU samples            | 4965               |
| Max peak RSS           | 213.6 MB           |
| Max RSS delta          | 184.7 MB           |
| Max CPU estimate       | 7215 ms            |
| Max harness heap delta | 8.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 315        |
| manifestFields         | 48         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2202  |
| observedHooks         | 110   |
| observedRegistrations | 212   |
| observedSdkImports    | 1082  |
| contractProbes        | 251   |
| issueFindings         | 358   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 30.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5762 ms     | 5816 ms  | 203.3 MB     | 175.1 MB      | 7125 ms      | 8.8 MB     | 684/684         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5853 ms     | 5878 ms  | 194.5 MB     | 164.8 MB      | 7076 ms      | 7.6 MB     | 698/698         | 0          |
| contract-capture       | Contract capture inventory                      | 5946 ms     | 5955 ms  | 203.4 MB     | 175.2 MB      | 7164 ms      | 0.2 MB     | 702/702         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5892 ms     | 5934 ms  | 204.4 MB     | 176.2 MB      | 7180 ms      | 1.9 MB     | 701/701         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5829 ms     | 5901 ms  | 213.6 MB     | 184.7 MB      | 7123 ms      | 1.5 MB     | 695/695         | 0          |
| workspace-plan         | Workspace execution plan                        | 5931 ms     | 5978 ms  | 209.7 MB     | 181 MB        | 7215 ms      | 1.7 MB     | 705/705         | 0          |
| platform-probes        | Platform and loader probes                      | 5915 ms     | 5955 ms  | 210.7 MB     | 182.5 MB      | 7140 ms      | 1.5 MB     | 702/702         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 634 ms      | 641 ms   | 63.7 MB      | 34.8 MB       | 338 ms       | 2.2 MB     | 75/75           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 30.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5762 ms  | 5816 ms  | 203.3 MB     | 7125 ms      | 684/684         | fixture-inspection     |
| target-registry  | 1        | 5853 ms  | 5878 ms  | 194.5 MB     | 7076 ms      | 698/698         | compat-report-registry |
| contract-capture | 1        | 5946 ms  | 5955 ms  | 203.4 MB     | 7164 ms      | 702/702         | contract-capture       |
| synthetic-probes | 1        | 5892 ms  | 5934 ms  | 204.4 MB     | 7180 ms      | 701/701         | synthetic-probe-plan   |
| cold-import      | 1        | 5829 ms  | 5901 ms  | 213.6 MB     | 7123 ms      | 695/695         | cold-import-readiness  |
| workspace-plan   | 1        | 5931 ms  | 5978 ms  | 209.7 MB     | 7215 ms      | 705/705         | workspace-plan         |
| platform-probes  | 1        | 5915 ms  | 5955 ms  | 210.7 MB     | 7140 ms      | 702/702         | platform-probes        |
| import-loop      | 1        | 634 ms   | 641 ms   | 63.7 MB      | 338 ms       | 75/75           | import-loop-profile    |
