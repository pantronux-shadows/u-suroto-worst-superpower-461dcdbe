// Worst Superpower entry — program/v1 harness.
// Writes one UTF-8 line of 1-140 chars to <out>/entry.txt, where <out> is
// <out> is $MAKEFUN_OUTPUT_DIR with a fallback to /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "He can make any elevator arrive instantly, but only when the lobby is empty and nobody has called it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
