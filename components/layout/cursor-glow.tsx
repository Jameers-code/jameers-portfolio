"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A soft brand-tinted glow that trails the cursor on pointer-capable devices.
 * Disabled for touch input and reduced-motion users. Purely decorative.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    // One-time capability gate: only mount the glow on fine-pointer devices.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500 [mix-blend-mode:plus-lighter]"
      style={{
        background:
          "radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--brand) 14%, transparent), transparent 70%)",
      }}
    />
  );
}
