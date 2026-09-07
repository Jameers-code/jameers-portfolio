import type { Swag } from "@/types";

/**
 * Swag & milestones — real photos from community programs & leadership kits.
 * Images live in /public/swags. The `featured` item leads the bento grid.
 */
export const SWAGS: Swag[] = [
  {
    title: "AWS Leader Kit",
    source: "AWS Student Builder Group",
    image: "/swags/aws-leader-kit.jpg",
    tag: "AWS",
    featured: true,
  },
  {
    title: "AWS Captain Swag",
    source: "AWS",
    image: "/swags/aws-captain-swag.jpg",
    tag: "AWS",
  },
  {
    title: "AWS Onboarding Leader Kit",
    source: "AWS",
    image: "/swags/aws-onboarding-kit.jpg",
    tag: "AWS",
  },
  {
    title: "AWS Bronze Level Swag",
    source: "AWS Builder",
    image: "/swags/aws-bronze-swag.jpg",
    tag: "AWS",
  },
  {
    title: "AWS Swag Haul",
    source: "AWS",
    image: "/swags/aws-swags.jpg",
    tag: "AWS",
  },
  {
    title: "AWS Student Community Day",
    source: "AWS",
    image: "/swags/aws-community-day-swag.png",
    tag: "AWS",
  },
  {
    title: "GDG DevFest Swag",
    source: "Google Developer Groups",
    image: "/swags/gdg-devfest-swag.jpg",
    tag: "GDG",
  },
  {
    title: "Google Swag",
    source: "Google",
    image: "/swags/google-swag.jpg",
    tag: "Google",
  },
  {
    title: "Swag Collection",
    source: "Community Programs",
    image: "/swags/swag-collection.jpg",
    tag: "Community",
  },
  {
    title: "Community Milestone",
    source: "Events & Meetups",
    image: "/swags/community-moment-1.jpg",
    tag: "Community",
  },
  {
    title: "On the Ground",
    source: "Events & Meetups",
    image: "/swags/community-moment-2.jpg",
    tag: "Community",
  },
  {
    title: "Building Community",
    source: "Events & Meetups",
    image: "/swags/community-moment-3.jpg",
    tag: "Community",
  },
  {
    title: "Microsoft Swag",
    source: "Microsoft",
    image: "/swags/microsoft-swag.jpg",
    tag: "Microsoft",
  },
];

export const SWAG_TAGS = ["All", "AWS", "Google", "GDG", "Community", "Microsoft"] as const;
