"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CERTIFICATIONS, CERT_CATEGORIES } from "@/constants/certifications";
import { cn } from "@/lib/utils";

/** Certifications gallery with category filtering and zoom-on-hover previews. */
export function Certifications() {
  const [active, setActive] = useState<(typeof CERT_CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? CERTIFICATIONS
        : CERTIFICATIONS.filter((c) => c.category === active),
    [active],
  );

  return (
    <section
      id="certifications"
      className="section-anchor scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified & earned"
          description="Credentials and badges across AWS, Google Cloud, Microsoft, and competitive coding."
        />

        {/* Category filter */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter certifications">
            {CERT_CATEGORIES.map((category) => {
              const selected = active === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(category)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    selected
                      ? "border-brand/40 bg-brand-muted text-brand"
                      : "border-border/70 bg-card/60 text-muted-foreground hover:border-brand/40 hover:text-foreground",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 4) * 60}>
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 transition-colors hover:border-brand/40">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted/40">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-brand backdrop-blur-sm">
                    <BadgeCheck className="size-3" />
                    {cert.category}
                  </span>
                </div>
                <figcaption className="flex flex-1 flex-col gap-1 p-3">
                  <p className="text-sm font-semibold leading-snug tracking-tight">
                    {cert.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
