import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TIMELINE } from "@/constants/timeline";
import type { TimelineEntry } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORY_STYLES: Record<TimelineEntry["category"], string> = {
  Leadership: "bg-brand-muted text-brand",
  Achievement: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  Community: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  Education: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
  Contribution: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
};

/** Journey section: a vertical timeline of roles, achievements, and education. */
export function Journey() {
  return (
    <section id="journey" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title="A path built on leadership & learning"
          description="From founding a cloud community to mentoring a college to a national ranking."
        />

        <ol className="mt-12 space-y-6 border-l border-border/70 pl-6 sm:pl-8">
          {TIMELINE.map((entry, i) => (
            <li key={`${entry.title}-${entry.period}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[calc(1.5rem+1px)] top-1.5 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-brand sm:-left-[calc(2rem+1px)]"
              />
              <Reveal delay={i * 60}>
                <div className="rounded-2xl border border-border/70 bg-card/50 p-5 transition-colors hover:border-brand/40">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium text-muted-foreground">
                      {entry.period}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                        CATEGORY_STYLES[entry.category],
                      )}
                    >
                      {entry.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {entry.title}
                  </h3>
                  <p className="text-sm font-medium text-brand">{entry.organization}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
