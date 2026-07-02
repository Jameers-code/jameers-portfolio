import Link from "next/link";
import { NAV_ITEMS, SITE, SOCIAL_LINKS, CONTACT } from "@/constants/site";
import type { Profile } from "@/types";

/** Site footer: identity, quick navigation, and social links. */
export function Footer({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-lg font-semibold tracking-tight">
              {profile.name}
              <span className="text-brand">.</span>
            </Link>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
            <p className="text-xs text-muted-foreground">{CONTACT.availability}</p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </span>
            {NAV_ITEMS.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </span>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="size-4" />
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with <span className="text-foreground">Next.js</span> &{" "}
            <span className="text-foreground">Tailwind</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
