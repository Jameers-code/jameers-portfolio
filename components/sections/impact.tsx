import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { STATS } from "@/constants/impact";

/** Impact section: headline metrics from community & technical work. */
export function Impact() {
  return (
    <section id="impact" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Impact"
          title="Numbers behind the journey"
          description="Community leadership and consistent building, measured."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <SpotlightCard className="flex h-full flex-col gap-3 p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                  <stat.icon className="size-5" />
                </span>
                <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.value !== undefined ? (
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  ) : (
                    stat.display
                  )}
                </div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
                {stat.approximate && (
                  <span className="mt-auto text-[11px] uppercase tracking-wide text-muted-foreground/70">
                    Approximate
                  </span>
                )}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
