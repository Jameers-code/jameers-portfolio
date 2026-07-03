import type { Letter } from "@/types";

/**
 * Official mails, offer & appointment letters — real recognition from the
 * programs Jameer has led. Images live in /public/letters. Rendered in an
 * infinite horizontal marquee.
 */
export const LETTERS: Letter[] = [
  {
    title: "Campus Leader Appointment",
    source: "AWS",
    kind: "Appointment Letter",
    image: "/letters/aws-campus-leader.jpg",
  },
  {
    title: "AWS Captain",
    source: "AWS",
    kind: "Appointment Letter",
    image: "/letters/aws-captain.jpg",
  },
  {
    title: "Affiliation Letter",
    source: "AWS",
    kind: "Official Letter",
    image: "/letters/aws-affiliation-letter.jpg",
  },
  {
    title: "Offer Letter",
    source: "Google Developer Groups",
    kind: "Offer Letter",
    image: "/letters/gdg-offer-letter.jpg",
  },
  {
    title: "Top Mentors Recognition",
    source: "Google Developer Groups",
    kind: "Recognition",
    image: "/letters/gdg-top-mentors.jpg",
  },
  {
    title: "Official Mail",
    source: "Microsoft",
    kind: "Official Mail",
    image: "/letters/microsoft-mail.jpg",
  },
  {
    title: "Student Ambassador",
    source: "LetsUpgrade",
    kind: "Ambassadorship",
    image: "/letters/letsupgrade-ambassador.png",
  },
];
