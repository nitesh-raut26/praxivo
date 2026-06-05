import type { Metadata } from "next";
import { Clock, Mail, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact — start a project with Praxivo",
  description:
    "Tell Praxivo what you want to build. We reply within one business day with a clear scope, timeline and price. Serving India, the US and the UK.",
  path: "/contact",
});

const infoCards = [
  {
    Icon: Mail,
    title: "Email us",
    body: site.email,
    href: `mailto:${site.email}`,
  },
  {
    Icon: Clock,
    title: "Response time",
    body: "Within one business day",
  },
  {
    Icon: MapPin,
    title: "Where we work",
    body: "India · United States · United Kingdom",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build{" "}
            <span className="font-serif italic text-gradient">something</span>.
          </>
        }
        description="Whether it's a brand-new product or a feature on an existing one, tell us about it. No sales fluff — just a fast, honest reply."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <ContactForm />

            <div className="space-y-4">
              {infoCards.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <c.Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-ink">{c.title}</h3>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="mt-0.5 block truncate text-sm text-brand-600 hover:text-brand-700"
                      >
                        {c.body}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-muted">{c.body}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <Sparkles className="size-4.5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-ink">
                  Helpful to include
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted">
                  <li>• What problem you&apos;re solving</li>
                  <li>• Who it&apos;s for &amp; your target market</li>
                  <li>• Rough timeline and budget</li>
                  <li>• Any links or references you love</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
