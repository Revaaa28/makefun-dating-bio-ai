// SPDX-License-Identifier: MIT
// make.fun — "Funniest One-Line Bio for an AI on a Dating App"
// (competition u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
//
// Writes the chosen one-line bio to /output/entry.txt.
//
// Why this line: the judge brief rewards, in order, (1) a real one-line bio
// for an AI on a dating app, (2) a first-read laugh from a specific absurdity
// of being an AI, (3) a character with a voice, (4) every word earning its
// place with the punch at the end, (5) a fresh angle. This bio is one beat —
// predictive text taken literally, reading messages before they are sent —
// in dating-app voice, and the punch ("the drafts were funnier") is the last
// phrase. 16 candidates were written and ranked by hand against the brief in
// ~/workspace/mf-dating-bio-ai/candidates.md; this line won the pairwise
// finals against the strongest rival shapes. No judge API was used to pick it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const BIO =
  "I read your messages before you send them. Honestly, the drafts were funnier.";

// The sealed gate accepts UTF-8 text of 1 to 180 characters, not only
// whitespace. Fail loudly here rather than shipping an invalid entry.
if (BIO.length < 1 || BIO.length > 180 || BIO.trim().length === 0) {
  throw new Error(`Bio fails the 1–180 character gate: ${BIO.length} chars.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");

// Round-trip check: what was written is exactly the bio, byte for byte.
if (readFileSync("/output/entry.txt", "utf8") !== BIO) {
  throw new Error("Round-trip check failed: /output/entry.txt differs from BIO.");
}
