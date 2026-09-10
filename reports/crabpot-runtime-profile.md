# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6018 ms            |
| Command P95 wall time  | 6289 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5163               |
| CPU samples            | 5163               |
| Max peak RSS           | 221.3 MB           |
| Max RSS delta          | 193.1 MB           |
| Max CPU estimate       | 7186 ms            |
| Max harness heap delta | 2.9 MB             |

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
| observedSdkImports    | 1162  |
| contractProbes        | 252   |
| issueFindings         | 359   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 23 ms       | 25 ms    | 30.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5837 ms     | 5881 ms  | 209.6 MB     | 180.1 MB      | 6934 ms      | 2.9 MB     | 697/697         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6032 ms     | 6079 ms  | 198.8 MB     | 170.6 MB      | 7090 ms      | 1.2 MB     | 721/721         | 0          |
| contract-capture       | Contract capture inventory                      | 6050 ms     | 6159 ms  | 198.5 MB     | 170.4 MB      | 7101 ms      | 2.5 MB     | 725/725         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6145 ms     | 6190 ms  | 210.5 MB     | 180.8 MB      | 7119 ms      | 2.8 MB     | 733/733         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5982 ms     | 6049 ms  | 210.2 MB     | 180.5 MB      | 7144 ms      | 2.5 MB     | 715/715         | 0          |
| workspace-plan         | Workspace execution plan                        | 6018 ms     | 6026 ms  | 221.3 MB     | 193.1 MB      | 7087 ms      | 2 MB       | 718/718         | 0          |
| platform-probes        | Platform and loader probes                      | 6289 ms     | 6326 ms  | 212.2 MB     | 182.4 MB      | 7186 ms      | 2.9 MB     | 752/752         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 837 ms      | 845 ms   | 68 MB        | 39.8 MB       | 423 ms       | 1.8 MB     | 99/99           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 23 ms    | 25 ms    | 30.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5837 ms  | 5881 ms  | 209.6 MB     | 6934 ms      | 697/697         | fixture-inspection     |
| target-registry  | 1        | 6032 ms  | 6079 ms  | 198.8 MB     | 7090 ms      | 721/721         | compat-report-registry |
| contract-capture | 1        | 6050 ms  | 6159 ms  | 198.5 MB     | 7101 ms      | 725/725         | contract-capture       |
| synthetic-probes | 1        | 6145 ms  | 6190 ms  | 210.5 MB     | 7119 ms      | 733/733         | synthetic-probe-plan   |
| cold-import      | 1        | 5982 ms  | 6049 ms  | 210.2 MB     | 7144 ms      | 715/715         | cold-import-readiness  |
| workspace-plan   | 1        | 6018 ms  | 6026 ms  | 221.3 MB     | 7087 ms      | 718/718         | workspace-plan         |
| platform-probes  | 1        | 6289 ms  | 6326 ms  | 212.2 MB     | 7186 ms      | 752/752         | platform-probes        |
| import-loop      | 1        | 837 ms   | 845 ms   | 68 MB        | 423 ms       | 99/99           | import-loop-profile    |
