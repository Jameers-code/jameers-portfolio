import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Code2, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { Reveal } from "@/components/shared/reveal";
import { RoleRotator } from "@/components/shared/role-rotator";
import { SITE, SOCIALS, CONTACT } from "@/constants/site";
import type { Profile } from "@/types";

const SOCIAL_ICONS = [
  { label: "GitHub", href: SOCIALS.github, icon: Github },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin },
  { label: "LeetCode", href: SOCIALS.leetcode, icon: Code2 },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail },
];

/** Landing hero: identity, rotating roles, primary CTAs, and portrait. */
export function Hero({ profile }: { profile: Profile }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-dot-grid pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* Ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklch, var(--brand) 16%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.35fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/70" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              {CONTACT.availability}
            </span>
          </Reveal>

          <div className="flex flex-col gap-3">
            <Reveal delay={80}>
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                <span className="text-gradient-brand">{profile.name}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
                <RoleRotator roles={profile.roles} />
              </p>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {SITE.description}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
              >
                View my work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand/40"
              >
                <Sparkles className="size-4 text-brand" />
                Get in touch
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_ICONS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                >
                  <s.icon className="size-[1.1rem]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center md:justify-self-end">
          <div className="relative animate-float-slow">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/30 via-transparent to-accent-blue/20 blur-2xl"
            />
            <div className="relative aspect-[4/5] w-60 overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 shadow-xl sm:w-72">
              <Image
                src="/images/jameer.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 240px, 288px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
