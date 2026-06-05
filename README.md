# Praxivo — venture studio website

The premium marketing site for **Praxivo**, the studio behind **StockVision**,
**LandAI**, **MantraAI** and **StockStump** — and the services arm that builds
web, mobile & AI products for clients across **India, the US and the UK**.

Built **SEO-first** and **premium-by-default**.

## Stack

Next.js 16 (App Router, React 19, RSC) · TypeScript · Tailwind CSS v4 ·
`motion` · `lucide-react` · `next/font` (Geist + Instrument Serif) · Vercel.

See **[docs/TECH_STACK_AND_SEO.md](docs/TECH_STACK_AND_SEO.md)** for the full
rationale, the SEO strategy and the roadmap.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verifies SSG + types)
npm start
```

## Edit content (no component changes needed)

| Want to change… | Edit |
|---|---|
| Brand, nav, contact, socials | `src/lib/site.ts` |
| Products (cards + detail pages) | `src/lib/products.ts` |
| Services, process, case studies | `src/lib/services.ts` |
| Colours, fonts, shadows | `src/app/globals.css` (`@theme`) |

Add an entry to `products.ts` and it automatically gets a card, a statically
generated detail page, a sitemap entry and JSON-LD structured data.

## SEO built in

Per-page metadata + canonicals · Organization / WebSite / SoftwareApplication /
Service / Breadcrumb JSON-LD · `sitemap.xml` · `robots.txt` · branded OpenGraph
image · self-hosted fonts (no CLS) · static HTML on a CDN.

## Before launch

- Set the production URL in `src/lib/site.ts`.
- Replace placeholder socials (GitHub / LinkedIn / X) with real profiles.
- Wire the contact form to a real backend (Resend / Formspree) — it uses
  `mailto:` today.
- Review `privacy` / `terms` (they're starting templates).
