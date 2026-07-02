"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { OPEN_COMMAND_MENU } from "@/components/layout/command-menu";
import { NAV_ITEMS, SITE, RESUME_URL } from "@/constants/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => NAV_ITEMS.map((item) => item.href.replace("#", "")), []);
  const active = useActiveSection(ids);

  const openCommand = () => document.dispatchEvent(new Event(OPEN_COMMAND_MENU));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex w-full max-w-5xl items-center gap-3 rounded-full border border-border/60 bg-background/70 px-3 py-2 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <Link
          href="#"
          className="ml-1 shrink-0 text-sm font-semibold tracking-tight"
          aria-label={`${SITE.name} — home`}
        >
          {SITE.shortName}
          <span className="text-brand">.</span>
        </Link>

        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground",
                  )}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-brand-muted"
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button
            type="button"
            onClick={openCommand}
            aria-label="Open command menu"
            className="hidden items-center gap-2 rounded-full border border-border/70 bg-card/60 py-1.5 pl-3 pr-2 text-sm text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground sm:inline-flex"
          >
            <Search className="size-4" />
            <span className="hidden md:inline">Search</span>
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </button>

          <ThemeToggle />

          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Résumé
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  {SITE.name}
                  <span className="text-brand">.</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col px-4 pb-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-lg bg-brand px-3 py-2.5 text-center text-sm font-medium text-brand-foreground"
                >
                  Résumé
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
