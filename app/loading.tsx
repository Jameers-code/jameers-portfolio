import { SITE } from "@/constants/site";

/** Route-level loading screen shown while the page streams in. */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background">
      <div className="relative flex size-16 items-center justify-center">
        <span className="absolute inline-flex size-16 animate-ping rounded-full bg-brand/30" />
        <span className="absolute size-16 animate-spin rounded-full border-2 border-transparent border-t-brand" />
        <span className="text-lg font-semibold text-brand">
          {SITE.shortName.charAt(0)}
        </span>
      </div>
      <p className="text-sm tracking-wide text-muted-foreground">
        Loading experience…
      </p>
    </div>
  );
}
