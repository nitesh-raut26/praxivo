import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductCard } from "@/components/product-card";
import { JsonLd } from "@/components/json-ld";
import { products, getProduct } from "@/lib/products";
import { buildMetadata, breadcrumbLd, productLd } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} — ${product.tagline}`,
    description: product.summary,
    path: `/products/${product.slug}`,
    keywords: [product.name, product.category, ...product.tech],
  });
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <JsonLd
        data={[
          productLd(product),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(60% 70% at 80% -10%, ${product.accent}22, transparent 60%)`,
          }}
        />
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex size-12 items-center justify-center rounded-2xl text-white shadow-soft"
                  style={{ background: product.accent }}
                >
                  <Icon name={product.icon} className="size-6" strokeWidth={1.9} />
                </span>
                <StatusBadge status={product.status} />
              </div>

              <p
                className="mt-6 text-sm font-semibold uppercase tracking-wider"
                style={{ color: product.accent }}
              >
                {product.category}
              </p>
              <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-xl leading-relaxed text-ink-soft">
                {product.tagline}
              </p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted">
                {product.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  style={{ background: product.accent }}
                >
                  Visit {product.name}
                  <ArrowUpRight className="size-4" />
                </a>
                <Button href="/contact" variant="secondary" size="lg">
                  Build something similar
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-subtle">
                <span>Available in:</span>
                {product.markets.map((m, i) => (
                  <span key={m} className="font-medium text-muted">
                    {m}
                    {i < product.markets.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual / stat panel */}
            <div className="relative">
              <div
                className="rounded-3xl border border-line p-1.5 shadow-lift"
                style={{
                  background: `linear-gradient(160deg, ${product.accent}1f, #ffffff 60%)`,
                }}
              >
                <div className="rounded-[1.35rem] bg-white p-6">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-black/15" />
                    <span className="size-2.5 rounded-full bg-black/10" />
                    <span className="size-2.5 rounded-full bg-black/10" />
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {product.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-line bg-canvas-soft p-3 text-center"
                      >
                        <div className="text-lg font-semibold text-ink">
                          {s.value}
                        </div>
                        <div className="mt-1 text-[11px] leading-tight text-subtle">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <svg
                    className="mt-6 h-24 w-full"
                    viewBox="0 0 320 96"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M0 76 L40 64 L80 70 L120 44 L160 52 L200 28 L240 38 L280 14 L320 22"
                      fill="none"
                      stroke={product.accent}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0 76 L40 64 L80 70 L120 44 L160 52 L200 28 L240 38 L280 14 L320 22 L320 96 L0 96 Z"
                      fill={product.accent}
                      opacity="0.08"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Inside the product"
              title={`What makes ${product.name} different`}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {product.highlights.map((h, i) => (
              <Reveal key={h} delay={(i % 2) * 80}>
                <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft">
                  <span
                    className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: product.accent }}
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-pretty leading-relaxed text-ink-soft">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-ink">Built with</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tech.map((t) => (
                <Badge key={t} tone="neutral">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Other products */}
      <Section className="bg-canvas-soft">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              More from Praxivo
            </h2>
            <Link
              href="/products"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              All products →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} className="h-full" />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
