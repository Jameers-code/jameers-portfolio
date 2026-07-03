import {
  AwsLogo,
  MicrosoftLogo,
  GoogleLogo,
  DevloomLogo,
} from "@/components/shared/logos";
import type { CommunityRole } from "@/types";

export const COMMUNITY_ROLES: CommunityRole[] = [
  {
    organization: "AWS Student Builder Group",
    role: "Founding Lead",
    description:
      "Brought a global cloud community to campus for the first time and onboarded students onto the official AWS Builder platform.",
    icon: AwsLogo,
    highlights: ["Founding lead", "AWS Builder onboarding", "Cloud workshops"],
  },
  {
    organization: "Microsoft",
    role: "Learn Student Ambassador",
    description:
      "Organizing events and collaborating with industry professionals to grow the developer community on campus.",
    icon: MicrosoftLogo,
    highlights: ["Event leadership", "Community growth", "Industry collaboration"],
  },
  {
    organization: "Google Developer Groups",
    role: "Study Jams Mentor",
    description:
      "Mentored peers through Google Cloud Study Jams to a Top 2 national ranking across India.",
    icon: GoogleLogo,
    highlights: ["Top 2 in India", "Cloud mentoring", "DevFest participation"],
  },
  {
    organization: "DevLoom",
    role: "Product Contributor",
    description:
      "Collaborating on product initiatives and contributing to open, community-driven development.",
    icon: DevloomLogo,
    highlights: ["Product contribution", "Collaboration", "Open source"],
  },
];
