"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Gift, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SWAGS, SWAG_TAGS } from "@/constants/swags";
import { cn } from "@/lib/utils";

/**
 * Swag & milestones: a bento-style photo gallery of real community swag and
 * leadership kits, filterable by source. The featured tile leads the grid.
 */
export function Swags() {
  const [active, setActive] = useState<(typeof SWAG_TAGS)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? SWAGS : SWAGS.filter((s) => s.tag === active)),
    [active],
  );

  return (
    <section id="swag" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Swag & Milestones"
          title="Proof of the work, in the wild"
          description="Leader kits, event swag, and moments from building communities with AWS, Google, and GDG."
        />

        {/* Filter chips */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter swag">
            {SWAG_TAGS.map((tag) => {
              const selected = active === tag;
              return (
                <button
                  key={tag}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(tag)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    selected
                      ? "border-brand/40 bg-brand-muted text-brand"
                      : "border-border/70 bg-card/60 text-muted-foreground hover:border-brand/40 hover:text-foreground",
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Bento gallery */}
        <div className="mt-10 grid auto-rows-[170px] grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 lg:auto-rows-[220px]">
          {filtered.map((swag, i) => (
            <Reveal
              key={swag.image}
              delay={(i % 4) * 60}
              className={cn(
                swag.featured && "col-span-2 row-span-2",
              )}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-2xl border border-border/70 bg-muted/40">
                <Image
                  src={swag.image}
                  alt={`${swag.title} — ${swag.source}`}
                  fill
                  loading="lazy"
                  sizes={
                    swag.featured
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Tag chip */}
                <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-brand backdrop-blur-sm">
                  <Gift className="size-3" />
                  {swag.tag}
                </span>

                {/* Caption overlay */}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-3 pt-8">
                  <p
                    className={cn(
                      "font-semibold leading-snug tracking-tight text-white",
                      swag.featured ? "text-base sm:text-lg" : "text-sm",
                    )}
                  >
                    {swag.title}
                  </p>
                  <p className="text-xs text-white/70">{swag.source}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-brand" />
            Earned through hands-on community leadership — not bought.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
