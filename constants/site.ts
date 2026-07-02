import { Mail, Code2 } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import type { NavItem, SocialLink } from "@/types";

/**
 * Central place for everything that points outside the site.
 *
 * NOTE: values wrapped as `TODO_*` are placeholders. Replace them with your
 * real URLs/handle and delete the `todo` flag on the matching social link.
 */
export const CONTACT = {
  /** TODO: replace with your real public email address. */
  email: "TODO-your-email@example.com",
  location: "India",
  availability: "Open to Product Engineer / SDE roles & internships",
} as const;

export const SOCIALS = {
  // TODO: paste your real profile URLs here.
  github: "https://github.com/TODO-your-github",
  linkedin: "https://www.linkedin.com/in/TODO-your-linkedin",
  leetcode: "https://leetcode.com/u/TODO-your-leetcode",
} as const;

/** Path to the résumé placed in /public. TODO: add your real resume.pdf. */
export const RESUME_URL = "/resume.pdf";

export const SITE = {
  name: "Jameer Ahmed",
  shortName: "Jameer",
  title: "Jameer Ahmed — Product Engineer · Full Stack · AI · Cloud",
  description:
    "Final-year CSBS student building AI-powered cloud products. AWS Student Builder Group founding lead, Microsoft Learn Student Ambassador, and Top 2 GDG Study Jams mentor.",
  tagline: "Building AI-Powered Cloud Products for the Future.",
  // TODO: replace with your deployed domain (used for SEO / OG / sitemap).
  url: "https://jameer.dev",
  locale: "en_US",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: SOCIALS.github, icon: Github, todo: true },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin, todo: true },
  { label: "LeetCode", href: SOCIALS.leetcode, icon: Code2, todo: true },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail, todo: true },
];
