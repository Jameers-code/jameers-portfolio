import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Marquee } from "@/components/shared/marquee";
import { CERTIFICATIONS } from "@/constants/certifications";
import type { Certification } from "@/types";

function CertCard({ cert }: { cert: Certification }) {
  return (
    <figure className="group/card relative w-[240px] shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-card/50 sm:w-[280px]">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/40">
        <Image
          src={cert.image}
          alt={`${cert.title} — ${cert.issuer}`}
          fill
          loading="lazy"
          sizes="280px"
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
        <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-background/85 px-2 py-0.5 text-[10px] font-medium text-brand backdrop-blur-sm">
          <BadgeCheck className="size-3" />
          {cert.category}
        </span>
      </div>
      <figcaption className="flex flex-col gap-1 p-3">
        <p className="line-clamp-1 text-sm font-semibold leading-snug tracking-tight">
          {cert.title}
        </p>
        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
      </figcaption>
    </figure>
  );
}

/** Certifications: two counter-scrolling marquee rows of earned credentials. */
export function Certifications() {
  const mid = Math.ceil(CERTIFICATIONS.length / 2);
  const rowOne = CERTIFICATIONS.slice(0, mid);
  const rowTwo = CERTIFICATIONS.slice(mid);

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
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <Marquee durationSec={50}>
          {rowOne.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </Marquee>
        <Marquee durationSec={50} reverse>
          {rowTwo.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
