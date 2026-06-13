import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductCard } from "@/components/product-card";
import { JsonLd } from "@/components/json-ld";
import { products } from "@/lib/products";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products — AI software we built and run",
  description:
    "Explore Praxivo's live products: StockVision (AI stock research), LandAI (land-growth intelligence), MantraAI (Hindu spiritual app), StockStump (IPL fantasy trading) and PrepDeck (FAANG interview-prep learning path).",
  path: "/products",
  keywords: [
    "Praxivo products",
    "StockVision",
    "LandAI",
    "MantraAI",
    "StockStump",
    "PrepDeck",
    "AI SaaS products",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <PageHeader
        eyebrow="Products"
        title="Five live products. One studio."
        description="Each of these started as an idea and shipped to real users — proof that we can design, build and run software end to end."
      />

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 2) * 90}>
                <ProductCard product={product} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Want one of these for your market?"
        description="We build products like these for clients too — adapted to your industry, brand and region."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
