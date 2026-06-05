import type { Metadata } from "next";
import { site } from "./site";
import type { Product } from "./products";

export const metaBase = new URL(site.url);

type BuildMeta = {
  title: string;
  description: string;
  /** Path beginning with "/" — used for the canonical URL. */
  path?: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  /** Override the social-card title if it should differ from <title>. */
  ogTitle?: string;
};

/** Single source of truth for per-page metadata (canonical, OG, Twitter). */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  ogTitle,
}: BuildMeta): Metadata {
  const url = new URL(path, metaBase).toString();
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: ogTitle ?? title,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
    },
  };
}

/* ── JSON-LD structured data ──────────────────────────────── */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    foundingDate: site.founded,
    email: site.email,
    areaServed: site.locations,
    sameAs: [site.socials.github, site.socials.linkedin, site.socials.x],
    knowsAbout: [
      "Software development",
      "Artificial intelligence",
      "SaaS",
      "Web development",
      "Mobile app development",
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function productLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: product.category,
    operatingSystem: "Web",
    url: product.url,
    description: product.summary,
    creator: { "@type": "Organization", name: site.name },
    offers:
      product.slug === "stockvision"
        ? {
            "@type": "Offer",
            price: "299",
            priceCurrency: "INR",
            description: "Starting plan",
          }
        : undefined,
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, metaBase).toString(),
    })),
  };
}

export function serviceLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "Organization", name: site.name },
    areaServed: site.locations,
  };
}
