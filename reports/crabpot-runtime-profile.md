# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6279 ms            |
| Command P95 wall time  | 6536 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5390               |
| CPU samples            | 5390               |
| Max peak RSS           | 217.9 MB           |
| Max RSS delta          | 190.2 MB           |
| Max CPU estimate       | 7419 ms            |
| Max harness heap delta | 3.5 MB             |

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
| node-boot              | Node boot                                       | 26 ms       | 28 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6144 ms     | 6172 ms  | 205.8 MB     | 177.6 MB      | 7227 ms      | 3.4 MB     | 735/735         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6324 ms     | 6336 ms  | 209.6 MB     | 181.3 MB      | 7419 ms      | 3.5 MB     | 755/755         | 0          |
| contract-capture       | Contract capture inventory                      | 6399 ms     | 6445 ms  | 200.4 MB     | 177.6 MB      | 7386 ms      | 3.4 MB     | 766/766         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6422 ms     | 6450 ms  | 199.8 MB     | 172.6 MB      | 7334 ms      | 3.5 MB     | 769/769         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6205 ms     | 6258 ms  | 201.8 MB     | 173.9 MB      | 7316 ms      | 2.7 MB     | 743/743         | 0          |
| workspace-plan         | Workspace execution plan                        | 6279 ms     | 6301 ms  | 217.9 MB     | 190.2 MB      | 7390 ms      | 2.6 MB     | 750/750         | 0          |
| platform-probes        | Platform and loader probes                      | 6536 ms     | 6540 ms  | 212 MB       | 183.9 MB      | 7333 ms      | 3.2 MB     | 782/782         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 726 ms      | 734 ms   | 67.5 MB      | 40.1 MB       | 382 ms       | 1.7 MB     | 87/87           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 26 ms    | 28 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6144 ms  | 6172 ms  | 205.8 MB     | 7227 ms      | 735/735         | fixture-inspection     |
| target-registry  | 1        | 6324 ms  | 6336 ms  | 209.6 MB     | 7419 ms      | 755/755         | compat-report-registry |
| contract-capture | 1        | 6399 ms  | 6445 ms  | 200.4 MB     | 7386 ms      | 766/766         | contract-capture       |
| synthetic-probes | 1        | 6422 ms  | 6450 ms  | 199.8 MB     | 7334 ms      | 769/769         | synthetic-probe-plan   |
| cold-import      | 1        | 6205 ms  | 6258 ms  | 201.8 MB     | 7316 ms      | 743/743         | cold-import-readiness  |
| workspace-plan   | 1        | 6279 ms  | 6301 ms  | 217.9 MB     | 7390 ms      | 750/750         | workspace-plan         |
| platform-probes  | 1        | 6536 ms  | 6540 ms  | 212 MB       | 7333 ms      | 782/782         | platform-probes        |
| import-loop      | 1        | 726 ms   | 734 ms   | 67.5 MB      | 382 ms       | 87/87           | import-loop-profile    |
