"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FileText, Mail, Code2, Moon, Sun, Compass } from "lucide-react";
import { Github, Linkedin, Youtube } from "@/components/shared/brand-icons";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { NAV_ITEMS, SOCIALS, RESUME_URL, CONTACT } from "@/constants/site";

/** Custom event other components dispatch to open the palette (e.g. the navbar button). */
export const OPEN_COMMAND_MENU = "open-command-menu";

const SOCIAL_ACTIONS = [
  { label: "GitHub", href: SOCIALS.github, icon: Github },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin },
  { label: "LeetCode", href: SOCIALS.leetcode, icon: Code2 },
  { label: "YouTube", href: SOCIALS.youtube, icon: Youtube },
];

/** ⌘K command palette: jump to a section, open socials, toggle theme, or grab the résumé. */
export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    document.addEventListener("keydown", onKey);
    document.addEventListener(OPEN_COMMAND_MENU, onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener(OPEN_COMMAND_MENU, onOpen);
    };
  }, []);

  const run = useCallback((action: () => void) => {
    setOpen(false);
    // Defer so the dialog can close before we scroll/navigate.
    requestAnimationFrame(action);
  }, []);

  const goTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", href);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command Menu"
      description="Jump to a section, open a profile, or toggle the theme."
    >
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {NAV_ITEMS.map((item) => (
            <CommandItem
              key={item.href}
              value={`go ${item.label}`}
              onSelect={() => run(() => goTo(item.href))}
            >
              <Compass className="text-muted-foreground" />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          {SOCIAL_ACTIONS.map((s) => (
            <CommandItem
              key={s.label}
              value={`open ${s.label}`}
              onSelect={() => run(() => window.open(s.href, "_blank", "noopener,noreferrer"))}
            >
              <s.icon className="text-muted-foreground" />
              {s.label}
            </CommandItem>
          ))}
          <CommandItem
            value="email contact"
            onSelect={() => run(() => (window.location.href = `mailto:${CONTACT.email}`))}
          >
            <Mail className="text-muted-foreground" />
            Email me
          </CommandItem>
          <CommandItem
            value="download resume cv"
            onSelect={() => run(() => window.open(RESUME_URL, "_blank", "noopener,noreferrer"))}
          >
            <FileText className="text-muted-foreground" />
            Résumé
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem
            value="theme dark"
            onSelect={() => run(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="text-muted-foreground" />
            ) : (
              <Moon className="text-muted-foreground" />
            )}
            Toggle {resolvedTheme === "dark" ? "light" : "dark"} mode
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
