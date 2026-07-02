import { SITE, SOCIALS, CONTACT } from "@/constants/site";
import type { Profile } from "@/types";

/** JSON-LD Person schema for rich results / SEO. */
export function personJsonLd(profile: Profile) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE.url,
    jobTitle: "Product Engineer · Full Stack · AI · Cloud",
    description: SITE.description,
    email: CONTACT.email.startsWith("TODO") ? undefined : `mailto:${CONTACT.email}`,
    image: `${SITE.url}/images/jameer.jpg`,
    sameAs: [SOCIALS.github, SOCIALS.linkedin, SOCIALS.leetcode].filter(
      (url) => !url.includes("TODO"),
    ),
    knowsAbout: [
      "C++",
      "Data Structures and Algorithms",
      "Amazon Web Services",
      "Cloud Computing",
      "Full Stack Development",
      "Artificial Intelligence",
    ],
  };
}
