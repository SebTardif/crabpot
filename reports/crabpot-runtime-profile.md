# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6109 ms            |
| Command P95 wall time  | 6327 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5203               |
| CPU samples            | 5203               |
| Max peak RSS           | 218 MB             |
| Max RSS delta          | 189.2 MB           |
| Max CPU estimate       | 7569 ms            |
| Max harness heap delta | 4.3 MB             |

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
| node-boot              | Node boot                                       | 26 ms       | 27 ms    | 30.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6026 ms     | 6032 ms  | 206.5 MB     | 178.3 MB      | 7232 ms      | 4.3 MB     | 718/718         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6124 ms     | 6151 ms  | 206.5 MB     | 178.2 MB      | 7343 ms      | 1.7 MB     | 731/731         | 0          |
| contract-capture       | Contract capture inventory                      | 6109 ms     | 6161 ms  | 206.7 MB     | 178.1 MB      | 7313 ms      | 3 MB       | 729/729         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6130 ms     | 6152 ms  | 202.3 MB     | 174 MB        | 7318 ms      | 2.8 MB     | 730/730         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6106 ms     | 6189 ms  | 210.7 MB     | 182.5 MB      | 7346 ms      | 2.8 MB     | 731/731         | 0          |
| workspace-plan         | Workspace execution plan                        | 6219 ms     | 6233 ms  | 216.6 MB     | 188.3 MB      | 7436 ms      | 2.5 MB     | 742/742         | 0          |
| platform-probes        | Platform and loader probes                      | 6327 ms     | 6334 ms  | 218 MB       | 189.2 MB      | 7569 ms      | 2.9 MB     | 754/754         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 559 ms      | 564 ms   | 63.5 MB      | 35.3 MB       | 299 ms       | 1.3 MB     | 65/65           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 26 ms    | 27 ms    | 30.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6026 ms  | 6032 ms  | 206.5 MB     | 7232 ms      | 718/718         | fixture-inspection     |
| target-registry  | 1        | 6124 ms  | 6151 ms  | 206.5 MB     | 7343 ms      | 731/731         | compat-report-registry |
| contract-capture | 1        | 6109 ms  | 6161 ms  | 206.7 MB     | 7313 ms      | 729/729         | contract-capture       |
| synthetic-probes | 1        | 6130 ms  | 6152 ms  | 202.3 MB     | 7318 ms      | 730/730         | synthetic-probe-plan   |
| cold-import      | 1        | 6106 ms  | 6189 ms  | 210.7 MB     | 7346 ms      | 731/731         | cold-import-readiness  |
| workspace-plan   | 1        | 6219 ms  | 6233 ms  | 216.6 MB     | 7436 ms      | 742/742         | workspace-plan         |
| platform-probes  | 1        | 6327 ms  | 6334 ms  | 218 MB       | 7569 ms      | 754/754         | platform-probes        |
| import-loop      | 1        | 559 ms   | 564 ms   | 63.5 MB      | 299 ms       | 65/65           | import-loop-profile    |
