/**
 * Global site configuration — brand, contact, navigation, socials.
 * Edit these once and they propagate across the whole site + SEO metadata.
 */
export const site = {
  name: "Praxivo",
  legalName: "Praxivo Studio",
  domain: "praxivo.in",
  // Production URL (the apex the whole ecosystem will live under).
  url: "https://www.praxivo.in",
  tagline: "We build, ship & scale AI products.",
  description:
    "Praxivo is a venture studio that builds its own AI-powered SaaS products and ships web, mobile and AI software for ambitious teams around the world.",
  shortDescription: "A venture studio building AI products — our own, and yours.",
  // Contact
  email: "Investors.praxivo@gmail.com",
  phone: "+919315476985",
  phoneDisplay: "+91 93154 76985",
  whatsapp: "919315476985", // digits only, for wa.me links
  bookingUrl: "/contact",
  // Geo signal for SEO only (Organization areaServed + keywords).
  // Deliberately NOT shown in any visible copy, so we don't appear to
  // exclude other countries. We rank for these; we serve the world.
  seoRegions: ["India", "United States", "United Kingdom"],
  founded: "2024",
  // Socials — replace placeholders with your real profiles.
  socials: {
    github: "https://github.com/nitesh-raut26",
    linkedin: "https://www.linkedin.com/in/nitesh-raut",
    x: "https://x.com/praxivo",
    whatsapp: "https://wa.me/919315476985",
    email: "mailto:Investors.praxivo@gmail.com",
  },
  nav: [
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
