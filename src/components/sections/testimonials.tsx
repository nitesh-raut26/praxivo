import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";
import { testimonials } from "@/lib/services";
import { Stars, TestimonialCard } from "./testimonial-card";
import { TestimonialCarousel } from "./testimonial-carousel";

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

        {/* Desktop & landscape tablets — both reviews side by side. */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.slug} delay={i * 100}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        {/* Phones & portrait tablets — a swipeable carousel that advances
            one review after another on its own, like the review carousels
            on most apps. */}
        <Reveal delay={120} className="mt-14 lg:hidden">
          <TestimonialCarousel items={testimonials} />
        </Reveal>
      </Container>
    </Section>
  );
}
