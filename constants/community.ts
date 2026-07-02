import { Cloud, GraduationCap, Users, Rocket } from "lucide-react";
import type { CommunityRole } from "@/types";

export const COMMUNITY_ROLES: CommunityRole[] = [
  {
    organization: "AWS Student Builder Group",
    role: "Founding Lead",
    description:
      "Brought a global cloud community to campus for the first time and onboarded students onto the official AWS Builder platform.",
    icon: Cloud,
    highlights: ["Founding lead", "AWS Builder onboarding", "Cloud workshops"],
  },
  {
    organization: "Microsoft",
    role: "Learn Student Ambassador",
    description:
      "Organizing events and collaborating with industry professionals to grow the developer community on campus.",
    icon: Rocket,
    highlights: ["Event leadership", "Community growth", "Industry collaboration"],
  },
  {
    organization: "Google Developer Groups",
    role: "Study Jams Mentor",
    description:
      "Mentored peers through Google Cloud Study Jams to a Top 2 national ranking across India.",
    icon: GraduationCap,
    highlights: ["Top 2 in India", "Cloud mentoring", "DevFest participation"],
  },
  {
    organization: "DevLoom",
    role: "Product Contributor",
    description:
      "Collaborating on product initiatives and contributing to open, community-driven development.",
    icon: Users,
    highlights: ["Product contribution", "Collaboration", "Open source"],
  },
];
