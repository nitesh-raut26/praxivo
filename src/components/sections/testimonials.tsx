import { ArrowUpRight, BadgeCheck, Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";
import { testimonials } from "@/lib/services";

/** A row of solid stars — the universal "this is a review" signal. */
function Stars({ rating, className }: { rating: number; className?: string }) {
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

const avgRating = (
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
).toFixed(1);

export function Testimonials({
  eyebrow = "Client stories",
  title = "Don't just take our word for it.",
  description = "The founders we've designed, built and shipped for — in their own words.",
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
} = {}) {
  return (
    <Section id="testimonials" className={cn("bg-canvas-soft", className)}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>

        {/* Aggregate rating — reads like a real review-platform badge. */}
        <Reveal delay={80}>
          <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-line bg-white px-5 py-2.5 shadow-soft">
            <Stars rating={5} />
            <span className="text-sm font-semibold text-ink">{avgRating}</span>
            <span className="h-4 w-px bg-line-strong" aria-hidden />
            <span className="text-sm text-muted">
              Five stars on every project we&apos;ve shipped
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.slug} delay={i * 100}>
              <figure className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift">
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

                <figcaption className="relative mt-7 flex items-center gap-4 border-t border-line pt-6">
                  <span
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl text-base font-semibold text-white shadow-soft"
                    style={{ background: t.accent }}
                    aria-hidden
                  >
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-ink">{t.author}</div>
                    <div className="truncate text-sm text-subtle">{t.role}</div>
                  </div>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex shrink-0 items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80"
                    style={{ color: t.accent }}
                  >
                    Visit site
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
