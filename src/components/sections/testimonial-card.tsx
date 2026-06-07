import { ArrowUpRight, BadgeCheck, Quote, Star } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/lib/services";

/** A row of solid stars — the universal "this is a review" signal. */
export function Stars({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
      className={cn("flex items-center gap-0.5", className)}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-line text-line",
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}

/**
 * A single client-review card — brand-tinted to the project it refers to,
 * with a "Verified client" mark and a working link back to the live site.
 * Shared by the desktop grid and the mobile carousel so both stay in sync.
 */
export function TestimonialCard({
  t,
  className,
}: {
  t: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift",
        className,
      )}
    >
      {/* Brand-tinted quote watermark. */}
      <Quote
        className="pointer-events-none absolute -right-3 -top-3 size-24 opacity-[0.08]"
        style={{ color: t.accent }}
        strokeWidth={1.5}
        aria-hidden
      />

      <div className="relative flex items-center justify-between gap-3">
        <Stars rating={t.rating} />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
          <BadgeCheck className="size-3.5" aria-hidden />
          Verified client
        </span>
      </div>

      <blockquote className="relative mt-5 flex-1 text-pretty text-lg leading-relaxed text-ink-soft">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <figcaption className="relative mt-7 border-t border-line pt-6">
        <div className="flex items-center gap-3.5">
          <span
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl text-base font-semibold text-white shadow-soft"
            style={{ background: t.accent }}
            aria-hidden
          >
            {t.initials}
          </span>
          <div className="min-w-0">
            <div className="font-semibold text-ink">{t.author}</div>
            <div className="text-pretty text-sm leading-snug text-subtle">
              {t.role}
            </div>
          </div>
        </div>
        <a
          href={t.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: t.accent }}
        >
          Visit site
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </figcaption>
    </figure>
  );
}
