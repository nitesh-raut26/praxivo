import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/reveal";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { services, processSteps } from "@/lib/services";

const stats = [
  { value: "4", label: "Live products in production" },
  { value: "116", label: "Cities modelled by our AI" },
  { value: "25", label: "States & UTs covered" },
  { value: "3", label: "Markets we build for" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />

      {/* ── Products ─────────────────────────────── */}
      <Section id="products">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our products"
              title="Software we built, launched and run."
              description="Four live products across fintech, proptech, devotion and gaming — our proof that we can take an idea from zero to real users."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 80}>
                <ProductCard product={product} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Two ways to work ─────────────────────── */}
      <Section className="bg-canvas-soft py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The model"
              title="Two ways to work with Praxivo."
              description="Use the products we've already built, or hire the studio behind them to build yours."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-soft">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name="Boxes" className="size-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                  Use our products
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted">
                  Live, self-serve SaaS you can sign up for today — from AI stock
                  research to land-growth intelligence and daily devotion.
                </p>
                <ul className="mt-6 grid gap-2.5 text-sm text-ink-soft">
                  {products.map((p) => (
                    <li key={p.slug} className="flex items-center gap-2.5">
                      <Check className="size-4 text-brand-600" />
                      <span className="font-medium">{p.name}</span>
                      <span className="text-subtle">— {p.tagline}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/products" variant="secondary" withArrow>
                    Explore products
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-lift">
                <div
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{
                    background:
                      "radial-gradient(70% 60% at 80% 0%, rgba(124,58,237,0.45), transparent 60%)",
                  }}
                />
                <div className="relative flex flex-1 flex-col">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                    <Icon name="Sparkles" className="size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    Build with us
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-white/70">
                    Your product, designed and shipped by the same team behind
                    ours — web, mobile, AI and the SaaS plumbing in between.
                  </p>
                  <ul className="mt-6 grid grid-cols-2 gap-2.5 text-sm">
                    {services.slice(0, 6).map((s) => (
                      <li key={s.slug} className="flex items-center gap-2">
                        <Check className="size-4 text-brand-300" />
                        <span className="text-white/85">{s.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="/contact"
                      withArrow
                      className="bg-white text-ink hover:bg-white/90"
                    >
                      Start a project
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── Services ─────────────────────────────── */}
      <Section id="services">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Full-stack capability, one accountable team."
              description="From the first pixel to production scale — the same disciplines we use on our own products, applied to yours."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={service.icon} className="size-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 flex items-center gap-1.5 text-lg font-semibold text-ink">
                    {service.title}
                    <ArrowUpRight className="size-4 text-subtle opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.blurb}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="ghost" withArrow>
              View all services &amp; process
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Process ──────────────────────────────── */}
      <Section className="bg-canvas-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A clear path from idea to launch."
              description="Tight feedback loops, a live staging URL from week one, and code you actually own."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="font-mono text-sm font-semibold text-brand-500">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Stats ────────────────────────────────── */}
      <Section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white px-6 py-10 text-center">
                  <div className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                    <span className="text-gradient">{stat.value}</span>
                  </div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
