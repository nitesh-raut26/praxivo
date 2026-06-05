import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
  path: "/privacy",
});

const sections = [
  {
    h: "Information we collect",
    p: "When you contact us or use our products, we may collect your name, email address and any details you choose to share. Our products may collect account and usage data as described in their own in-app notices.",
  },
  {
    h: "How we use your information",
    p: "We use your information to respond to enquiries, deliver and improve our products and services, and communicate with you about your project. We do not sell your personal data.",
  },
  {
    h: "Cookies & analytics",
    p: "We may use privacy-respecting analytics to understand how the site is used and to improve it. You can control cookies through your browser settings.",
  },
  {
    h: "Sharing",
    p: "We share data only with service providers who help us operate (for example, hosting and email), under appropriate confidentiality obligations, or where required by law.",
  },
  {
    h: "Your rights",
    p: "Depending on your location, you may have the right to access, correct or delete your personal data. To exercise these rights, email us at the address below.",
  },
  {
    h: "Data retention",
    p: "We keep personal data only as long as necessary for the purposes described here, or as required by law.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
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
                Questions about this policy? Email{" "}
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
