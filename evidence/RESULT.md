# RESULT.md — u-suroto-worst-superpower-461dcdbe

## Entry

- `main.ts` (Node 22, stdlib only): writes one UTF-8 line, 101 chars, to
  `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`), no trailing newline:
  "He can make any elevator arrive instantly, but only when the lobby is empty and nobody has called it."
- `LICENSE`: MIT (OSI-approved, SPDX-License-Identifier: MIT).
- Determinism: ran main.ts twice into separate output dirs; outputs are
  byte-identical (`cmp` clean, 101 bytes / 101 chars each). No clock, random,
  or network use.

## Check command (exact)

```
node cli/makefun.mjs check --kit . --repo <entry> --worktree --transcripts transcripts.tar.gz
```

run from the unpacked kit dir
`/srv/makefun-work/u-suroto-worst-superpower-461dcdbe.20261126T004756Z/kitdir/u-suroto-worst-superpower-461dcdbe-kit`
with the transcript bundle at
`/srv/makefun-build/.hermes/cache/scratch/transcripts-2ee330b8.tar.gz`
(sha256 e6b0438b618ae7cb4776b754f0ec30a12c642f6fd9995b8b7f998b9a7ff2586a;
copy kept at `../transcripts.tar.gz` next to this work dir).

## Exit status and counts

- Exit status: 0
- Printed: "14 passed, 0 failed, 5 skipped, 5 checked at submission"
  followed by "ok: every check run here passes; the rest are the site's at submission"
- Passed checks include: competition_open, snapshot, license_osi, entrypoint,
  transcripts_present, transcripts_recorded, thinking_wellformed,
  thinking_in_window, thinking_reproduces (100% of counted lines authored),
  thinking_turns (13 of 5), thinking_priced, thinking_revised (3 of 2 writes),
  transcripts_run_record, thinking_own_work.
- Skips are structural (strategy_note, committed_secret, thinking_committed
  — entry unsigned locally, thinking_fresh — no beacon root), not failures.
- The 5 "checked at submission" items (repo_public, repo_owner,
  repo_created_after_open, commit_in_repo, duplicate_snapshot) only the site
  can check; the pipeline handles submission.

## Steps from RULES.txt

- Read RULES.txt and competition.yaml first.
- Repository-init step: `makefun.mjs init` is named by RULES.txt only for a
  source-bundle entry run "in it first, while it is empty". The round's
  repository at `entry/` was pre-seeded by the pipeline with an
  "entry start" commit and is owned by another user; init refuses a
  repository that already holds a commit, so the step does not apply here.
  No wallet/keypair exists in ~/.makefun (only `trials`), and stop condition 2
  forbids creating/signing submissions.

## Remaining limitations

- No local grade exists for this competition (RULES.txt, "Grade locally"):
  scoring (judge heat) runs on the server only. The local check verifies the
  gate-side deliverables and the transcript policy, and it is fully green.
- Local run was exercised with Node 26.12.1
  (~/.hermes/tools/node-26.12.1-linux-x64/bin/node) because the host's
  Node 22.22.1 is not compiled with native .ts support; the grader runs
  Node 22.23.4, which runs TypeScript natively. The program uses only
  node:fs/node:path and a top-level `??` on process.env — no
  version-sensitive syntax beyond what Node 22.6+ strips/runs.
- /output is not writable on this host; local runs used MAKEFUN_OUTPUT_DIR
  (the documented env override) and the probe dirs were cleaned.
