"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

/** Toggles between light and dark themes. Renders a stable placeholder until mounted. */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground",
        className,
      )}
    >
      {mounted ? (
        isDark ? <Sun className="size-[1.15rem]" /> : <Moon className="size-[1.15rem]" />
      ) : (
        <Sun className="size-[1.15rem] opacity-0" />
      )}
    </button>
  );
}
