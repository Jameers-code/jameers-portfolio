
import type { LucideIcon } from "lucide-react";

/** Core profile data parsed from `profiile-linkedin-data/data.md`. */
export interface Profile {
  name: string;
  /** Individual role strings parsed from the headline (split on `|`). */
  roles: string[];
  /** Body paragraphs of the summary/bio. */
  summary: string[];
  /** Skill groups parsed from the markdown (Languages / DSA / Tools). */
  skillGroups: { label: string; items: string[] }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  /** Marks links that still need a real value supplied by the owner. */
  todo?: boolean;
}

export interface Stat {
  /** Numeric target for animated counters. Omit for label-only cards. */
  value?: number;
  prefix?: string;
  suffix?: string;
  /** Non-numeric headline for label cards (e.g. "Top 2"). */
  display?: string;
  label: string;
  description: string;
  icon: LucideIcon;
  /** Numbers that are estimates pending confirmation by the owner. */
  approximate?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
  /** Framing note, e.g. "Actively exploring". */
  note?: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  description: string;
  category: "Leadership" | "Community" | "Achievement" | "Education" | "Contribution";
}

export interface CommunityRole {
  organization: string;
  role: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  image: string;
  category: "AWS" | "Google" | "Microsoft" | "Coding" | "Other";
}

export interface Letter {
  title: string;
  /** Issuing organization, e.g. "AWS", "Microsoft". */
  source: string;
  /** What kind of document it is, e.g. "Offer Letter", "Official Mail". */
  kind: string;
  image: string;
}

export interface Swag {
  title: string;
  /** Where the swag/milestone came from, e.g. "AWS", "GDG". */
  source: string;
  image: string;
  /** Grouping tag used for the filter chips. */
  tag: "AWS" | "Google" | "GDG" | "Community" | "Microsoft";
  /** Marks the hero item rendered larger in the bento grid. */
  featured?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  /** True while the project is a placeholder awaiting real content. */
  todo?: boolean;
}
