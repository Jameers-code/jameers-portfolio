"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

/** Thin brand-gradient bar pinned to the top edge, tracking page scroll. */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left"
      style={{
        transform: `scaleX(${progress})`,
        background:
          "linear-gradient(90deg, var(--brand), color-mix(in oklch, var(--brand) 60%, var(--accent-blue)))",
      }}
    />
  );
}
