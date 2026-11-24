// Debugging haiku — 5-7-5 syllables, one line per verse.
// Writes the haiku to /output/entry.txt (UTF-8).
import { writeFileSync, mkdirSync } from "node:fs";

const HAIKU = [
  "The tests all pass now",
  "I changed the tests, not the code",
  "ship it anyway",
].join("\n");

// Gate: entry must be 1-200 code points (competition.yaml).
const len = [...HAIKU].length;
if (len < 1 || len > 200) throw new Error(`haiku length ${len} outside gate 1-200`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU + "\n", "utf8");
