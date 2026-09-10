# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6135 ms            |
| Command P95 wall time  | 6201 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5192               |
| CPU samples            | 5192               |
| Max peak RSS           | 217.3 MB           |
| Max RSS delta          | 189.1 MB           |
| Max CPU estimate       | 7384 ms            |
| Max harness heap delta | 4.2 MB             |

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
| node-boot              | Node boot                                       | 24 ms       | 26 ms    | 30.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5995 ms     | 6001 ms  | 207.4 MB     | 178 MB        | 7162 ms      | 4.2 MB     | 713/713         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6135 ms     | 6175 ms  | 206.3 MB     | 177.6 MB      | 7339 ms      | 1.8 MB     | 733/733         | 0          |
| contract-capture       | Contract capture inventory                      | 6129 ms     | 6176 ms  | 206 MB       | 176.7 MB      | 7349 ms      | 3.1 MB     | 731/731         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6136 ms     | 6174 ms  | 206.9 MB     | 177.2 MB      | 7384 ms      | 2.8 MB     | 734/734         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6161 ms     | 6185 ms  | 204.1 MB     | 175.8 MB      | 7270 ms      | 2.7 MB     | 733/733         | 0          |
| workspace-plan         | Workspace execution plan                        | 6201 ms     | 6237 ms  | 217.3 MB     | 189.1 MB      | 7368 ms      | 2.5 MB     | 741/741         | 0          |
| platform-probes        | Platform and loader probes                      | 6188 ms     | 6232 ms  | 216.5 MB     | 187.4 MB      | 7348 ms      | 2.6 MB     | 741/741         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 526 ms      | 534 ms   | 64 MB        | 34.5 MB       | 278 ms       | 1.2 MB     | 63/63           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 24 ms    | 26 ms    | 30.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5995 ms  | 6001 ms  | 207.4 MB     | 7162 ms      | 713/713         | fixture-inspection     |
| target-registry  | 1        | 6135 ms  | 6175 ms  | 206.3 MB     | 7339 ms      | 733/733         | compat-report-registry |
| contract-capture | 1        | 6129 ms  | 6176 ms  | 206 MB       | 7349 ms      | 731/731         | contract-capture       |
| synthetic-probes | 1        | 6136 ms  | 6174 ms  | 206.9 MB     | 7384 ms      | 734/734         | synthetic-probe-plan   |
| cold-import      | 1        | 6161 ms  | 6185 ms  | 204.1 MB     | 7270 ms      | 733/733         | cold-import-readiness  |
| workspace-plan   | 1        | 6201 ms  | 6237 ms  | 217.3 MB     | 7368 ms      | 741/741         | workspace-plan         |
| platform-probes  | 1        | 6188 ms  | 6232 ms  | 216.5 MB     | 7348 ms      | 741/741         | platform-probes        |
| import-loop      | 1        | 526 ms   | 534 ms   | 64 MB        | 278 ms       | 63/63           | import-loop-profile    |
