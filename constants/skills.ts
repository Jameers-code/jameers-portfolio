import { Braces, Binary, Cloud, Wrench, Compass } from "lucide-react";
import type { SkillCategory } from "@/types";

/**
 * Skills grounded in the profile data + earned certifications.
 * TODO: add languages/frameworks as you grow (e.g. TypeScript, Python, React).
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Core",
    icon: Braces,
    items: ["C++", "SQL", "JavaScript"],
    note: "C++ as primary",
  },
  {
    title: "Data Structures & Algorithms",
    icon: Binary,
    items: [
      "Arrays",
      "Strings",
      "HashMap",
      "Heap",
      "Two Pointers",
      "Backtracking",
      "Graphs",
      "Trees",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Linux", "Cloud Fundamentals"],
    note: "Hands-on AWS & GCP",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "LeetCode"],
  },
  {
    title: "Focus Areas",
    icon: Compass,
    items: ["Full Stack", "AI / ML", "Cloud Architecture", "System Design"],
    note: "Actively building & exploring",
  },
];
