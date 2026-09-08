# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 4195 ms            |
| Command P95 wall time  | 4268 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 3583               |
| CPU samples            | 3583               |
| Max peak RSS           | 206.1 MB           |
| Max RSS delta          | 179.8 MB           |
| Max CPU estimate       | 5184 ms            |
| Max harness heap delta | 3.2 MB             |

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
| fixtures              | 60    |
| sourceFiles           | 2229  |
| observedHooks         | 110   |
| observedRegistrations | 215   |
| observedSdkImports    | 1132  |
| contractProbes        | 256   |
| issueFindings         | 365   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 21 ms       | 29 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 4236 ms     | 4416 ms  | 205.1 MB     | 177 MB        | 5184 ms      | 3.2 MB     | 511/511         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 4182 ms     | 4199 ms  | 192.2 MB     | 165.5 MB      | 4953 ms      | 2.3 MB     | 501/501         | 0          |
| contract-capture       | Contract capture inventory                      | 4195 ms     | 4214 ms  | 192 MB       | 165.8 MB      | 4956 ms      | 2.2 MB     | 501/501         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 4153 ms     | 4261 ms  | 206.1 MB     | 179.8 MB      | 4947 ms      | 2.3 MB     | 501/501         | 0          |
| cold-import-readiness  | Cold import readiness                           | 4225 ms     | 4240 ms  | 203.4 MB     | 178.3 MB      | 4974 ms      | 1.6 MB     | 505/505         | 0          |
| workspace-plan         | Workspace execution plan                        | 4239 ms     | 4291 ms  | 205.2 MB     | 178.9 MB      | 5025 ms      | 2.5 MB     | 508/508         | 0          |
| platform-probes        | Platform and loader probes                      | 4268 ms     | 4279 ms  | 200.6 MB     | 174.3 MB      | 4964 ms      | 2 MB       | 510/510         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 361 ms      | 380 ms   | 63.5 MB      | 37.6 MB       | 187 ms       | 1.4 MB     | 43/43           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 21 ms    | 29 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 4236 ms  | 4416 ms  | 205.1 MB     | 5184 ms      | 511/511         | fixture-inspection     |
| target-registry  | 1        | 4182 ms  | 4199 ms  | 192.2 MB     | 4953 ms      | 501/501         | compat-report-registry |
| contract-capture | 1        | 4195 ms  | 4214 ms  | 192 MB       | 4956 ms      | 501/501         | contract-capture       |
| synthetic-probes | 1        | 4153 ms  | 4261 ms  | 206.1 MB     | 4947 ms      | 501/501         | synthetic-probe-plan   |
| cold-import      | 1        | 4225 ms  | 4240 ms  | 203.4 MB     | 4974 ms      | 505/505         | cold-import-readiness  |
| workspace-plan   | 1        | 4239 ms  | 4291 ms  | 205.2 MB     | 5025 ms      | 508/508         | workspace-plan         |
| platform-probes  | 1        | 4268 ms  | 4279 ms  | 200.6 MB     | 4964 ms      | 510/510         | platform-probes        |
| import-loop      | 1        | 361 ms   | 380 ms   | 63.5 MB      | 187 ms       | 43/43           | import-loop-profile    |
