"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Download, MapPin, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CopyButton } from "@/components/shared/copy-button";
import { CONTACT, RESUME_URL, SOCIAL_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

const FIELD_CLASS =
  "w-full rounded-xl border border-border/70 bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand/50 focus:ring-3 focus:ring-brand/15";

/** Contact section: mailto-composing form + direct links and resume download. */
export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    // No backend: hand off to the visitor's mail client.
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…", {
      description: "Your message is ready to send.",
    });
    setTimeout(() => setSending(false), 1200);
  };

  return (
    <section id="contact" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Recruiters and builders welcome. Reach out about roles, collaborations, or community work."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: details */}
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3 py-1 text-xs font-medium text-brand">
                <Sparkles className="size-3.5" />
                {CONTACT.availability}
              </span>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-brand" />
                {CONTACT.location}
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Email
                </p>
                <CopyButton value={CONTACT.email} className="w-fit" />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={RESUME_URL}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="size-4" />
                  Download résumé
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border/70 bg-card/50 px-4 py-3 text-sm font-medium transition-colors hover:border-brand/40"
                >
                  <span className="inline-flex items-center gap-2">
                    <social.icon className="size-4 text-brand" />
                    {social.label}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    className={FIELD_CLASS}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={FIELD_CLASS}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about the role or idea…"
                  className={cn(FIELD_CLASS, "min-h-32 flex-1 resize-y")}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {sending ? "Opening…" : "Send message"}
                <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                This opens your email client — no data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
