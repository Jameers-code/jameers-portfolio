import { SOCIALS } from "@/constants/site";
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "MockMind",
    description:
      "AI-powered mock interview platform. Generates personalized questions from your resume, evaluates answers in real time, and produces a performance report — powered by Groq LLaMA 3.1.",
    tags: ["Next.js", "Groq", "LLaMA 3.1", "TypeScript"],
    githubUrl: "https://github.com/Jameers-code/mockmind",
    image: "https://opengraph.githubassets.com/1/Jameers-code/mockmind",
  },
  {
    title: "Formix",
    description:
      "Easy-to-use form builder for teams. Create custom forms, add smart conditional rules, and collect files like photos and videos in one place.",
    tags: ["Next.js", "TypeScript", "Forms"],
    githubUrl: "https://github.com/Jameers-code/formix",
    image: "https://opengraph.githubassets.com/1/Jameers-code/formix",
  },
  {
    title: "MindWell",
    description:
      "AI-powered mental health web app with LLM-driven assistance. Built with Next.js, Node.js, PostgreSQL, Prisma, and AWS.",
    tags: ["Next.js", "PostgreSQL", "AWS", "LLM"],
    githubUrl: "https://github.com/Jameers-code/mindwell",
    image: "https://opengraph.githubassets.com/1/Jameers-code/mindwell",
  },
  {
    title: "Jameer's Portfolio",
    description:
      "Current personal portfolio — community leadership, certifications, swag gallery, and projects. Built with Next.js, TypeScript, Tailwind v4, and shadcn/ui.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Portfolio"],
    githubUrl: "https://github.com/Jameers-code/jameers-portfolio",
    image: "https://opengraph.githubassets.com/1/Jameers-code/jameers-portfolio",
  },
];
