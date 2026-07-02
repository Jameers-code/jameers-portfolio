"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RoleRotatorProps {
  roles: string[];
  className?: string;
  intervalMs?: number;
}

/** Cycles through role strings with a soft fade. Falls back to the first role without JS. */
export function RoleRotator({ roles, className, intervalMs = 2600 }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [roles.length, intervalMs]);

  const current = roles[index] ?? roles[0] ?? "";

  return (
    <span className={cn("relative inline-block", className)}>
      <span key={current} className="reveal inline-block text-brand" data-visible="true">
        {current}
      </span>
    </span>
  );
}
