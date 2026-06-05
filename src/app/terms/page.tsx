import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms that govern your use of the ${site.name} website.`,
  path: "/terms",
});

const sections = [
  {
    h: "Use of this site",
    p: "By accessing this website you agree to these terms. If you do not agree, please do not use the site.",
  },
  {
    h: "Products & services",
    p: "Our products and services are provided under separate agreements or in-app terms. Marketing descriptions on this site are for information and may change as products evolve.",
  },
  {
    h: "Intellectual property",
    p: `The ${site.name} name, logo, content and designs on this site are owned by us and protected by applicable laws. You may not reuse them without permission.`,
  },
  {
    h: "Acceptable use",
    p: "You agree not to misuse the site — including attempting to disrupt it, access it without authorisation, or use it for unlawful purposes.",
  },
  {
    h: "Disclaimers",
    p: 'The site is provided "as is" without warranties of any kind. We do not guarantee that it will be uninterrupted, error-free or that information is always current.',
  },
  {
    h: "Limitation of liability",
    p: "To the maximum extent permitted by law, we are not liable for indirect or consequential losses arising from your use of this site.",
  },
  {
    h: "Changes",
    p: "We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: June 2026. This is a starting template — please review it with a professional before relying on it."
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl font-semibold tracking-tight text-ink">
                  {s.h}
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted">
                  {s.p}
                </p>
              </div>
            ))}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                Contact
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Questions about these terms? Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-brand-600 hover:text-brand-700"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
