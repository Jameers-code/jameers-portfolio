"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
}

/** Copies `value` to the clipboard with a toast + inline check confirmation. */
export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success("Copied to clipboard", { description: value });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label ?? value}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2 text-sm font-medium transition-colors hover:border-brand/40 hover:text-foreground",
        className,
      )}
    >
      {copied ? (
        <Check className="size-4 text-brand" />
      ) : (
        <Copy className="size-4 text-muted-foreground" />
      )}
      <span>{label ?? value}</span>
    </button>
  );
}
