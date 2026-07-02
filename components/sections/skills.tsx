import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Reveal } from "@/components/shared/reveal";
import { SKILL_CATEGORIES } from "@/constants/skills";

/** Skills section: grouped capabilities rendered as tag clusters. */
export function Skills() {
  return (
    <section id="skills" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The toolbox I build with"
          description="Grounded in C++, DSA, and cloud — expanding into full stack and AI."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.title} delay={i * 70}>
              <SpotlightCard className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                    <category.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {category.title}
                    </h3>
                    {category.note && (
                      <p className="text-xs text-muted-foreground">{category.note}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border/70 bg-background/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
