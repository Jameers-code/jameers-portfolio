import Image from "next/image";
import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Marquee } from "@/components/shared/marquee";
import { LETTERS } from "@/constants/letters";
import type { Letter } from "@/types";

function LetterCard({ letter }: { letter: Letter }) {
  return (
    <figure className="group/card relative w-[230px] shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-card/50 sm:w-[270px]">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted/40">
        <Image
          src={letter.image}
          alt={`${letter.title} — ${letter.source}`}
          fill
          loading="lazy"
          sizes="270px"
          className="object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
        />
        <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-background/85 px-2 py-0.5 text-[10px] font-medium text-brand backdrop-blur-sm">
          <Mail className="size-3" />
          {letter.kind}
        </span>
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 pt-8">
        <p className="text-sm font-semibold leading-snug tracking-tight text-white">
          {letter.title}
        </p>
        <p className="text-xs text-white/70">{letter.source}</p>
      </figcaption>
    </figure>
  );
}

/**
 * Letters & official mails: an infinite right-to-left marquee of appointment,
 * offer, and recognition letters.
 */
export function Letters() {
  return (
    <section id="letters" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Letters & Official Mails"
          title="Recognized, on record"
          description="Appointment letters, offers, and official mails from AWS, Google, Microsoft & more — the receipts behind the roles."
        />
      </div>

      <div className="mt-12">
        <Marquee durationSec={46}>
          {LETTERS.map((letter) => (
            <LetterCard key={letter.image} letter={letter} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
