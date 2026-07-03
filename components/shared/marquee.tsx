import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  /** Reverse the scroll direction (moves right instead of left). */
  reverse?: boolean;
  /** Seconds for one full loop. Lower = faster. */
  durationSec?: number;
  /** Gap between cards, in rem. */
  gapRem?: number;
  /** Pause the animation while hovered. Defaults to true. */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Infinite, seamless horizontal marquee (pure CSS).
 *
 * Renders its children twice; each identical group shifts its full width plus
 * one gap, so the second group lands exactly where the first began — no seam.
 * Respects `prefers-reduced-motion` (animation is disabled in globals.css).
 */
export function Marquee({
  children,
  reverse = false,
  durationSec = 40,
  gapRem = 1,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const wrapperStyle = {
    "--marquee-duration": `${durationSec}s`,
    "--marquee-gap": `${gapRem}rem`,
    gap: `${gapRem}rem`,
    maskImage:
      "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
  } as CSSProperties;

  const groupStyle = reverse
    ? ({ animationDirection: "reverse" } as CSSProperties)
    : undefined;

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden",
        pauseOnHover && "group/marquee",
        className,
      )}
      style={wrapperStyle}
    >
      <div
        className="flex shrink-0 items-stretch [gap:var(--marquee-gap)] animate-marquee"
        style={groupStyle}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-stretch [gap:var(--marquee-gap)] animate-marquee"
        style={groupStyle}
      >
        {children}
      </div>
    </div>
  );
}
