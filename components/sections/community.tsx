import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Reveal } from "@/components/shared/reveal";
import { COMMUNITY_ROLES } from "@/constants/community";

/** Community section: leadership roles across AWS, Microsoft, GDG, and DevLoom. */
export function Community() {
  return (
    <section id="community" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Community"
          title="Building people, not just products"
          description="Leadership, mentoring, and speaking across the world's leading developer communities."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {COMMUNITY_ROLES.map((role, i) => (
            <Reveal key={role.organization} delay={i * 80}>
              <SpotlightCard className="flex h-full flex-col gap-4 p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-black/[0.06] shadow-sm dark:ring-white/10">
                    <role.icon className="size-full" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {role.organization}
                    </h3>
                    <p className="text-sm font-medium text-brand">{role.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
                <ul className="mt-auto flex flex-col gap-2 pt-1">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-foreground/90"
                    >
                      <Check className="size-4 shrink-0 text-brand" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
