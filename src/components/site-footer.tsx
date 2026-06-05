import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { services } from "@/lib/services";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Products",
    links: [
      ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
      { label: "All products", href: "/products" },
    ],
  },
  {
    title: "Services",
    links: [
      ...services
        .slice(0, 5)
        .map((s) => ({ label: s.title, href: `/services#${s.slug}` })),
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "X", href: site.socials.x, Icon: Twitter },
  { label: "Email", href: site.socials.email, Icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-canvas-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full bg-white text-muted ring-1 ring-line-strong transition-colors hover:text-brand-600 hover:ring-brand-300"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-subtle sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Building from India</span>
            <span aria-hidden>·</span>
            <span>for India, the US &amp; the UK</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
