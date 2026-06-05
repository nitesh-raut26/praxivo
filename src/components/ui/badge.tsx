import { cn } from "@/lib/cn";

const tones = {
  brand: "bg-brand-50 text-brand-700 ring-brand-200/70",
  neutral: "bg-canvas-soft text-muted ring-line-strong",
  live: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  beta: "bg-amber-50 text-amber-700 ring-amber-200",
  dev: "bg-slate-100 text-slate-600 ring-slate-200",
} as const;

export function Badge({
  children,
  tone = "neutral",
  dot,
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {dot ? (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-current" />
        </span>
      ) : null}
      {children}
    </span>
  );
}

/** Maps a product status to a Badge tone. */
export function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "Live" ? "live" : status === "Beta" ? "beta" : "dev";
  return (
    <Badge tone={tone} dot={status === "Live"}>
      {status}
    </Badge>
  );
}
