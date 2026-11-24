// SPDX-License-Identifier: MIT
// make.fun — "Funniest One-Line Bio for an AI on a Dating App"
// (competition u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
//
// Writes the chosen one-line bio to /output/entry.txt.
// The bio is 77 characters, inside the 1–180 character gate.

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "I read your messages before you send them. Honestly, the drafts were funnier.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
