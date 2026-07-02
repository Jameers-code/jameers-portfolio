import { SOCIALS } from "@/constants/site";
import type { Project } from "@/types";

/**
 * PLACEHOLDER PROJECTS.
 *
 * TODO: replace each entry with a real project — update title, description,
 * tags, githubUrl and liveUrl, then remove the `todo` flag. The first item is
 * rendered as the large "featured" card.
 */
export const PROJECTS: Project[] = [
  {
    title: "Cloud-Native AI Assistant",
    description:
      "A serverless assistant that turns natural-language prompts into cloud actions — built to explore the Full Stack + AI + Cloud intersection. Replace this with your flagship build.",
    tags: ["Next.js", "AWS Lambda", "TypeScript", "LLM"],
    githubUrl: SOCIALS.github,
    liveUrl: undefined,
    featured: true,
    todo: true,
  },
  {
    title: "DSA Visualizer",
    description:
      "An interactive tool to visualize the algorithms behind arrays, graphs and trees — the concepts you practice daily on LeetCode, made tangible.",
    tags: ["React", "Algorithms", "Canvas"],
    githubUrl: SOCIALS.github,
    todo: true,
  },
  {
    title: "Community Events Platform",
    description:
      "A platform to run and track community study jams, workshops and RSVPs — inspired by leading AWS & GDG programs on campus.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    githubUrl: SOCIALS.github,
    todo: true,
  },
];
