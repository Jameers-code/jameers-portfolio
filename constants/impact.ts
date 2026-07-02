import { Trophy, Cloud, Users, Award, CalendarDays, GitBranch } from "lucide-react";
import type { Stat } from "@/types";

/**
 * Impact metrics for the stats section.
 *
 * Cards with `display` are label-only (rendered as-is). Cards with `value`
 * animate a counter. Numbers marked `approximate` are conservative estimates
 * — TODO: confirm and adjust to your real figures.
 */
export const STATS: Stat[] = [
  {
    display: "Top 2",
    label: "GDG Study Jams · India",
    description: "Mentored our college to a Top 2 national ranking.",
    icon: Trophy,
  },
  {
    display: "Founding",
    label: "AWS Student Builder Group",
    description: "Onboarded the campus to the official AWS Builder platform.",
    icon: Cloud,
  },
  {
    value: 200,
    suffix: "+",
    label: "Students Mentored",
    description: "Across cloud, DSA & community programs.",
    icon: Users,
    approximate: true,
  },
  {
    value: 15,
    suffix: "+",
    label: "Events Organized",
    description: "Workshops, study jams & community meetups.",
    icon: CalendarDays,
    approximate: true,
  },
  {
    value: 18,
    suffix: "+",
    label: "Certifications & Badges",
    description: "AWS, Google Cloud, Microsoft & coding.",
    icon: Award,
  },
  {
    value: 100,
    suffix: "+",
    label: "Day LeetCode Streak",
    description: "Consistent DSA problem solving in C++.",
    icon: GitBranch,
  },
];
