"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RoleRotatorProps {
  roles: string[];
  className?: string;
  intervalMs?: number;
}

/**
 * Cycles through role strings with a professional vertical "roll":
 * the outgoing role rolls up and out while the incoming role rolls up into
 * place, framed by a brand accent bar. Falls back to a static first role
 * without JS or under reduced-motion.
 */
export function RoleRotator({ roles, className, intervalMs = 2800 }: RoleRotatorProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (roles.length <= 1) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      const old = indexRef.current;
      const next = (old + 1) % roles.length;
      indexRef.current = next;
      setPrev(old);
      setCurrent(next);
    }, intervalMs);
    return () => clearInterval(id);
  }, [roles.length, intervalMs]);

  // Drop the outgoing role once its exit animation has finished.
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 560);
    return () => clearTimeout(t);
  }, [prev, current]);

  const currentRole = roles[current] ?? roles[0] ?? "";

  return (
    <span className={cn("inline-flex items-center gap-2.5 align-middle", className)}>
      <span
        aria-hidden
        className="h-[1.05em] w-[3px] shrink-0 rounded-full bg-brand"
      />
      <span className="relative inline-block overflow-hidden py-0.5" aria-live="polite">
        {prev !== null && (
          <span
            key={`prev-${prev}`}
            aria-hidden
            className="animate-role-out absolute inset-x-0 top-0.5 whitespace-nowrap font-semibold text-brand"
          >
            {roles[prev]}
          </span>
        )}
        <span
          key={`cur-${current}`}
          className="animate-role-in inline-block whitespace-nowrap font-semibold text-brand"
        >
          {currentRole}
        </span>
      </span>
    </span>
  );
}
