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
    "Praxivo is a venture studio that builds its own AI-powered SaaS products and ships web, mobile and AI software for ambitious teams across India, the US and the UK.",
  shortDescription: "A venture studio building AI products — our own, and yours.",
  // Contact — update to your real inbox before launch.
  email: "hello@praxivo.in",
  bookingUrl: "/contact",
  locations: ["India", "United States", "United Kingdom"],
  founded: "2024",
  // Socials — replace placeholders with your real profiles.
  socials: {
    github: "https://github.com/nitesh-raut26",
    linkedin: "https://www.linkedin.com/in/nitesh-raut",
    x: "https://x.com/praxivo",
    email: "mailto:hello@praxivo.in",
  },
  nav: [
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
