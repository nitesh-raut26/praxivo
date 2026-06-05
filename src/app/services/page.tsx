import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/json-ld";
import { services, processSteps, caseStudies } from "@/lib/services";
import { getProduct } from "@/lib/products";
import { buildMetadata, breadcrumbLd, serviceLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services — web, mobile & AI product development",
  description:
    "Praxivo builds web platforms, mobile apps, AI & data products and full SaaS for teams in India, the US and the UK — the same craft behind our own products.",
  path: "/services",
  keywords: [
    "software development services",
    "AI development agency",
    "SaaS development",
    "web development India US UK",
    "mobile app development",
    "hire a product studio",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...services.map((s) => serviceLd(s.title, s.blurb)),
        ]}
      />

      <PageHeader
        eyebrow="Services"
        title="Build with the team behind our own products."
        description="We don't just consult — we ship. Every capability below is something we use daily to run live products with real users."
      >
        <Button href="/contact" size="lg" withArrow>
          Start a project
        </Button>
      </PageHeader>

      {/* Capabilities */}
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, i) => {
              const proof = getProduct(service.proof);
              return (
                <Reveal key={service.slug} delay={(i % 2) * 80}>
                  <div
                    id={service.slug}
                    className="flex h-full scroll-mt-24 flex-col rounded-3xl border border-line bg-white p-7 shadow-soft"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                        <Icon name={service.icon} className="size-6" strokeWidth={1.8} />
                      </span>
                      <h2 className="text-xl font-semibold tracking-tight text-ink">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-pretty leading-relaxed text-muted">
                      {service.blurb}
                    </p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-sm text-ink-soft"
                        >
                          <Check className="size-4 shrink-0 text-brand-600" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    {proof ? (
                      <div className="mt-6 border-t border-line pt-4">
                        <Link
                          href={`/products/${proof.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-brand-600"
                        >
                          <span className="text-subtle">Proof:</span>
                          {proof.name}
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-canvas-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A clear path from idea to launch."
              description="Weekly increments, a live staging URL from day one, and code you fully own at the end."
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

      {/* Selected work */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Client products we've shipped."
            />
          </Reveal>
          <div className="mt-12 grid gap-6">
            {caseStudies.map((cs) => (
              <Reveal key={cs.slug}>
                <div
                  className="grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-soft lg:grid-cols-[1fr_1.1fr]"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex size-12 items-center justify-center rounded-2xl text-white shadow-soft"
                        style={{ background: cs.accent }}
                      >
                        <Icon name={cs.icon} className="size-6" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-ink">
                          {cs.name}
                        </h3>
                        <p className="text-sm text-subtle">{cs.category}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-pretty leading-relaxed text-muted">
                      {cs.blurb}
                    </p>
                    <p className="mt-4 text-sm font-medium text-ink">
                      Our role: <span className="text-muted">{cs.role}</span>
                    </p>
                    <div className="mt-6">
                      <a
                        href={cs.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: cs.accent }}
                      >
                        Visit {cs.name}
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                  <ul className="grid gap-3">
                    {cs.results.map((r) => (
                      <li
                        key={r}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-canvas-soft p-4 text-sm font-medium text-ink-soft"
                      >
                        <Check className="size-4 shrink-0" style={{ color: cs.accent }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Tell us what you want to build."
        description="Share your idea and we'll come back with a clear scope, timeline and price — within one business day."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See our products", href: "/products" }}
      />
    </>
  );
}
