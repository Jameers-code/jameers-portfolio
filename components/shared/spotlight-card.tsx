"use client";

import { type ReactNode, type MouseEvent, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card with a brand-tinted spotlight that follows the cursor.
 * The glow itself is drawn by the `.spotlight` utility in globals.css.
 */
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "spotlight group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm transition-colors duration-300 hover:border-brand/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
