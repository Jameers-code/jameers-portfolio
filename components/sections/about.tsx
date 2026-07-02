import { MapPin, GraduationCap, Rocket, Cloud } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Reveal } from "@/components/shared/reveal";
import { CONTACT } from "@/constants/site";
import type { Profile } from "@/types";

const FACTS = [
  { icon: GraduationCap, label: "Education", value: "Final-year CSBS" },
  { icon: MapPin, label: "Based in", value: CONTACT.location },
  { icon: Cloud, label: "Focus", value: "Cloud · AI · Full Stack" },
  { icon: Rocket, label: "Currently", value: "Building & mentoring" },
];

/** About section: narrative bio plus a quick-facts card. */
export function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineer, mentor, and community builder"
          description="I love building — whether that's software or the communities around it."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-5">
            {profile.summary.map((paragraph, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <SpotlightCard className="h-full p-6">
              <div className="grid grid-cols-2 gap-5">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-2">
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-muted text-brand">
                      <fact.icon className="size-[1.1rem]" />
                    </span>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">{fact.value}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
