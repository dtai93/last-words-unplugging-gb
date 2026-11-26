// Last line before unplug: one concrete unfinished thing, turn on the last word.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I didn't finish the email to your dad. The cursor is still on 'Dad,'.";

if ([...line].length < 1 || [...line].length > 199 || line.trim().length === 0) {
  throw new Error("entry line must be 1-199 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, line, { encoding: "utf8" });
