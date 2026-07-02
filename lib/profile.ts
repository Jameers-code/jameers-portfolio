import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import type { Profile } from "@/types";

const DATA_PATH = path.join(process.cwd(), "profiile-linkedin-data", "data.md");

/** Remove authoring placeholders like "(add more)" from parsed content. */
function stripPlaceholders(value: string): string {
  return value.replace(/\((?:add more|todo)[^)]*\)/gi, "").trim();
}

function parseProfile(raw: string): Profile {
  const lines = raw.split(/\r?\n/);
  const nonEmpty = lines.map((l) => l.trim()).filter(Boolean);

  const name = nonEmpty[0] ?? "Jameer Ahmed";

  const roles = (nonEmpty[1] ?? "")
    .split("|")
    .map((r) => stripPlaceholders(r))
    .filter(Boolean);

  // Body paragraphs: everything between the headline and the "## Skills" heading.
  const skillsIndex = lines.findIndex((l) => /^#+\s*skills/i.test(l.trim()));
  const bodyEnd = skillsIndex === -1 ? lines.length : skillsIndex;
  const summary = lines
    .slice(2, bodyEnd)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .map(stripPlaceholders)
    .filter(Boolean);

  // Skill groups: lines like "**Languages:** C++, Git".
  const skillGroups: Profile["skillGroups"] = [];
  if (skillsIndex !== -1) {
    for (const line of lines.slice(skillsIndex + 1)) {
      const match = line.match(/\*\*(.+?):\*\*\s*(.+)/);
      if (!match) continue;
      const items = stripPlaceholders(match[2])
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      if (items.length) skillGroups.push({ label: match[1].trim(), items });
    }
  }

  return { name, roles, summary, skillGroups };
}

/** Reads and parses the profile markdown. Memoized per request. */
export const getProfile = cache(async (): Promise<Profile> => {
  const raw = await readFile(DATA_PATH, "utf8");
  return parseProfile(raw);
});
