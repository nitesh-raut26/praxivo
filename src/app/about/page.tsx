import type { Metadata } from "next";
import { Gauge, Layers, Rocket, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/json-ld";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About — the venture studio behind the products",
  description:
    "Praxivo is a venture studio that builds and ships its own AI products, and partners with teams across India, the US and the UK to build theirs.",
  path: "/about",
});

const values = [
  {
    Icon: Rocket,
    title: "Ship, don't pitch",
    body: "We'd rather show a live URL than a slide. Everything we make is meant to reach real users — fast.",
  },
  {
    Icon: ShieldCheck,
    title: "Transparency-first",
    body: "We label what's real vs. modelled, cite our sources, and never dress up a heuristic as magic. Trust is the product.",
  },
  {
    Icon: Gauge,
    title: "Craft meets velocity",
    body: "Premium design and clean, typed, tested engineering — delivered in weekly increments, not quarterly reveals.",
  },
  {
    Icon: Layers,
    title: "Built to scale",
    body: "Architected to grow from a single box to millions of users, with SSO, billing and APIs designed in from day one.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "MantraAI goes live",
    body: "Our first product — a calm, beautiful Hindu spiritual app — ships to web and mobile.",
  },
  {
    year: "2025",
    title: "StockVision & LandAI",
    body: "Two AI products launch back-to-back: institutional-grade stock research, and land-growth intelligence across 116 cities.",
  },
  {
    year: "2026",
    title: "StockStump & Praxivo",
    body: "A real-time fantasy trading game joins the lineup, and the portfolio unifies under one studio brand: Praxivo.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHeader
        eyebrow="About"
        title={
          <>
            A studio that{" "}
            <span className="font-serif italic text-gradient">ships</span>.
          </>
        }
        description={`${site.name} is a venture studio. We build and run our own AI-powered products, and bring the same craft to clients who want to build theirs — for founders anywhere in the world.`}
      />

      {/* Story */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Most software dies in a deck. Praxivo started from a simple
                  conviction: the fastest way to prove you can build great
                  products is to{" "}
                  <span className="font-medium text-ink">
                    build great products
                  </span>{" "}
                  — and put them in front of real people.
                </p>
                <p>
                  So we did. From a spiritual companion used across India, to an
                  AI stock terminal for retail investors, to a model that
                  forecasts where land value will rise — each product taught us
                  how to take an idea from a blank repo to production.
                </p>
                <p>
                  Today, that hard-won muscle is something we share. Praxivo
                  builds web, mobile and AI software for ambitious teams — with
                  the design polish, engineering discipline and shipping speed of
                  a company that lives and dies by its own products.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-line bg-canvas-soft p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-subtle">
                  At a glance
                </h3>
                <dl className="mt-5 space-y-4">
                  {[
                    { k: "Founded", v: site.founded },
                    { k: "Products shipped", v: `${products.length} live` },
                    { k: "Reach", v: "Worldwide" },
                    { k: "Model", v: "Products + services" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between border-b border-line pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-muted">{row.k}</dt>
                      <dd className="text-sm font-semibold text-ink">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-canvas-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we believe"
              title="The principles behind everything we build."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 80}>
                <div className="flex h-full gap-5 rounded-2xl border border-line bg-white p-7 shadow-soft">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <v.Icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The journey"
              title="From one product to a portfolio."
            />
          </Reveal>
          <div className="mx-auto mt-14 max-w-3xl">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {i < timeline.length - 1 ? (
                    <span className="absolute left-[1.45rem] top-12 h-full w-px bg-line" />
                  ) : null}
                  <span className="z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-600 font-mono text-xs font-semibold text-white shadow-soft">
                    {t.year}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-lg font-semibold text-ink">{t.title}</h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted">
                      {t.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
