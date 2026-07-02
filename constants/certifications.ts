import type { Certification } from "@/types";

/**
 * Certifications & badges. Images live in /public/certificates.
 * TODO: add credential verification URLs if you want to link them out.
 */
export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    image: "/certificates/aws-cloud-essentials.jpg",
    category: "AWS",
  },
  {
    title: "AWS Cloud Clubs",
    issuer: "Amazon Web Services",
    image: "/certificates/aws-cloud-clubs.png",
    category: "AWS",
  },
  {
    title: "AWS Builders Online Series",
    issuer: "Amazon Web Services",
    image: "/certificates/aws-builders-series.jpg",
    category: "AWS",
  },
  {
    title: "AWS Student Community Day",
    issuer: "Amazon Web Services",
    image: "/certificates/aws-community-day.jpg",
    category: "AWS",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    image: "/certificates/microsoft-student-ambassador.jpg",
    category: "Microsoft",
  },
  {
    title: "Google Cloud Study Jams",
    issuer: "Google Developer Groups",
    image: "/certificates/gcp-study-jams.jpg",
    category: "Google",
  },
  {
    title: "GDG DevFest",
    issuer: "Google Developer Groups",
    image: "/certificates/gdg-devfest.jpg",
    category: "Google",
  },
  {
    title: "GDG Study Jams Mentorship",
    issuer: "Google Developer Groups",
    image: "/certificates/gdg-mentorship.jpg",
    category: "Google",
  },
  {
    title: "Google Cloud Arcade — Legend",
    issuer: "Google Cloud",
    image: "/certificates/gcp-arcade-legend.jpg",
    category: "Google",
  },
  {
    title: "Google Cloud Skill Boost",
    issuer: "Google Cloud",
    image: "/certificates/gcp-skill-boost.jpg",
    category: "Google",
  },
  {
    title: "First Prize — BizVit Hackathon",
    issuer: "BizVit",
    image: "/certificates/bizvit-hackathon-winner.jpg",
    category: "Other",
  },
  {
    title: "Hack2Skill Certificate",
    issuer: "Hack2Skill",
    image: "/certificates/hack2skill.png",
    category: "Other",
  },
  {
    title: "LeetCode — 100 Day Streak",
    issuer: "LeetCode",
    image: "/certificates/leetcode-100-days.jpg",
    category: "Coding",
  },
  {
    title: "LeetCode 2025 Badge",
    issuer: "LeetCode",
    image: "/certificates/leetcode-2025.jpg",
    category: "Coding",
  },
  {
    title: "Open Source Contributor",
    issuer: "Open Source",
    image: "/certificates/open-source-contributor.jpg",
    category: "Coding",
  },
  {
    title: "TCS iON Career Edge — Young Professional",
    issuer: "TCS iON",
    image: "/certificates/tcs-ion-career-edge.jpg",
    category: "Other",
  },
  {
    title: "Oracle Certification",
    issuer: "Oracle",
    image: "/certificates/oracle-certificate.jpg",
    category: "Other",
  },
  {
    title: "Young Turks 2025 — Round 1",
    issuer: "Young Turks",
    image: "/certificates/young-turks-2025.png",
    category: "Other",
  },
];

export const CERT_CATEGORIES = ["All", "AWS", "Google", "Microsoft", "Coding", "Other"] as const;
