# Praxivo — Tech Stack & SEO Strategy

> The marketing/brand website for **Praxivo**, the venture studio behind
> StockVision, LandAI, MantraAI and StockStump — and the services arm that
> builds web, mobile & AI products for clients across **India, the US and the
> UK**.
>
> This document explains **what we built it with and why**, and the
> **SEO-first** plan to rank. It reflects the code actually in this repo.

---

## 1. Recommendation in one line

**Use Next.js (App Router) deployed on Vercel.** For a content + marketing site
whose #1 job is to **rank on Google and feel premium**, Next.js gives you
server-rendered/statically-generated HTML (what crawlers love), a first-class
metadata + structured-data API, automatic image/font optimization, and the best
Core Web Vitals story — with zero-config deploys on the same platform your
product frontends already use.

### Why not the alternatives?

| Option | Verdict | Reasoning |
|---|---|---|
| **Next.js 16 (App Router)** ✅ | **Chosen** | SSG/ISR + Metadata API + RSC. SEO, speed and a path to grow into an app. You already use React + Vercel. |
| **Astro** | Great runner-up | Ships *less* JS for pure-content sites and is superb for blogs. But you'll want React interactivity, a shared component model with your products, and an easy path to gated/app features — Next wins on convergence. |
| **Plain React + Vite (CSR)** | ❌ Avoid | Client-rendered HTML hurts SEO and Core Web Vitals. This is what your *product* frontends use; the marketing site has different priorities. |
| **WordPress / Webflow** | ❌ Avoid | Slower, template-y, harder to make truly premium, and it fragments your stack. |

---

## 2. The stack (as implemented)

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Next.js 16 (App Router, React 19, RSC) | SSG by default → fast, crawlable HTML |
| **Language** | TypeScript (strict) | Safety + great DX, matches your other apps |
| **Styling** | Tailwind CSS v4 (CSS-first `@theme`) | Design tokens in CSS, tiny output, fast |
| **Animation** | `motion` (Framer Motion successor) + CSS | Premium micro-interactions, SEO-safe |
| **Icons** | `lucide-react` + custom brand SVGs | Crisp, consistent, tree-shaken |
| **Fonts** | `next/font` — Geist Sans + Instrument Serif | Self-hosted, zero layout shift, premium pairing |
| **Class utils** | `clsx` + `tailwind-merge` (`cn()`) | Conflict-free conditional classes |
| **Hosting** | Vercel | Edge CDN, automatic HTTPS, preview deploys |
| **Forms** | Native form → `mailto:` (swap to Resend/Formspree later) | Works today with no backend |

**Design language:** light & premium (white / soft-grey canvas, indigo→violet
brand gradient, soft shadows, generous whitespace) — the Stripe/Apple end of the
spectrum, chosen to read as *trustworthy SaaS*.

---

## 3. Why this ranks — the SEO-first architecture

SEO here is **built into the framework choices**, not bolted on.

### 3.1 Rendering & crawlability
- **Every page is statically generated** (`○ Static` / `● SSG` in the build
  output). Googlebot receives complete HTML on first byte — no JS execution
  required to read content.
- **Semantic HTML**: one `<h1>` per page, ordered headings, `<nav>`, `<main>`,
  `<article>`, `<footer>`, descriptive link text, alt/aria on icons.

### 3.2 Metadata (per-page, centralised)
- A single `buildMetadata()` helper (`src/lib/seo.ts`) sets **title, description,
  canonical URL, OpenGraph and Twitter cards** for every route.
- Root layout defines a **title template** (`%s · Praxivo`) and global defaults.
- Dynamic product pages generate metadata per product via `generateMetadata()`.

### 3.3 Structured data (JSON-LD)
Rich results come from schema.org markup (`src/lib/seo.ts` + `JsonLd`):
- **Organization** + **WebSite** (site-wide, in the root layout)
- **SoftwareApplication** on each product page (with `Offer` for StockVision)
- **Service** on the services page
- **BreadcrumbList** on every inner page

### 3.4 Discovery files (auto-generated)
- `app/sitemap.ts` → **`/sitemap.xml`** (all routes + product pages, priorities)
- `app/robots.ts` → **`/robots.txt`** (allows all, points to the sitemap)

### 3.5 Social / share cards
- `app/opengraph-image.tsx` renders a **branded 1200×630 PNG** via `next/og` for
  beautiful link previews on LinkedIn, X, WhatsApp, Slack, etc.
- `app/icon.svg` is the gradient "P" favicon.

### 3.6 Core Web Vitals (ranking factor)
- `next/font` self-hosts fonts → **no layout shift (CLS)**, no render-blocking.
- Static HTML + edge CDN → **fast LCP/TTFB**.
- Minimal client JS (most components are Server Components; only the header,
  scroll-reveal and contact form are client) → **low INP**.
- `prefers-reduced-motion` respected throughout.

### 3.7 Accessibility (correlates with SEO)
- Skip-to-content link, visible focus rings, semantic landmarks, `aria-label`s,
  AA-minded colour contrast.

---

## 4. International SEO (India · US · UK)

You target three English-speaking markets. Recommended approach:

1. **Single domain, English-first.** `praxivo.in` (apex) with `www`. Don't split
   into ccTLDs yet — one strong domain ranks better than three weak ones.
2. **`hreflang` when you localise.** If/when you add `/en-gb` or `/en-us`
   variants, emit `alternates.languages` in metadata. Until then, `en` +
   `en_US` OG locale is correct.
3. **Geo-relevant content & schema.** `areaServed: [India, US, UK]` is already in
   the Organization JSON-LD; reinforce with location-aware copy and case studies.
4. **Google Search Console**: verify the domain, submit `/sitemap.xml`, and set
   no single-country target (you serve all three).

> Note on TLD: `.in` is fine and can rank globally, but Google may read it as
> India-leaning. If US/UK becomes the priority, consider migrating the apex to
> `praxivo.com` (301 the `.in`), per the ecosystem architecture doc.

---

## 5. Content & keyword strategy (the growth engine)

Technical SEO gets you *eligible* to rank; **content** is what actually ranks.

### 5.1 Target query clusters
- **Brand / products:** "Praxivo", "StockVision", "LandAI", "MantraAI",
  "StockStump" — own these completely.
- **Services (commercial intent):** "AI product development agency",
  "SaaS development company India", "hire React/Next.js developers",
  "mobile app developers for startups", "RAG / LLM app development".
- **Informational (top-of-funnel blog):** "how to build an MVP", "RAG vs
  fine-tuning", "Next.js vs Astro for marketing sites", "fantasy trading app
  architecture", "land price prediction with ML".

### 5.2 Recommended next build: a `/blog` (or `/resources`)
- Add **MDX** (`@next/mdx`) for content. Each post = static page with
  `Article` JSON-LD, author, dates, and OG image.
- 1–2 quality posts/month beats 10 thin ones. Write from real experience
  building your products (huge credibility + keyword surface).
- Internally link posts → relevant product/service pages.

### 5.3 Off-page
- Get the four product domains to **link back** to `praxivo.in` ("a Praxivo
  product"), and link Praxivo → each product. This builds a tight, trusted
  internal/brand graph.
- LinkedIn + GitHub profile links (already in the footer) for entity trust.

---

## 6. Information architecture

```
/                     Home — hero, products, "two ways to work", services, process, stats
/products             All products grid
/products/[slug]      StockVision · LandAI · MantraAI · StockStump (SSG)
/services             Capabilities, process, Diyam · Rangreza Thread case studies
/about                Studio story, values, timeline
/contact              Project enquiry form (mailto)
/privacy  /terms      Legal (templates — review before relying on them)
/sitemap.xml  /robots.txt  /opengraph-image  /icon.svg   (generated)
```

## 7. Repo structure

```
src/
├─ app/                 # routes (App Router) + sitemap/robots/og/icon
├─ components/
│  ├─ ui/               # primitives: button, badge, container, section, icon
│  ├─ sections/         # hero, cta-band, tech-marquee, page-header
│  ├─ product-card · site-header · site-footer · logo · reveal · json-ld
├─ lib/
│  ├─ site.ts           # brand, nav, contact, socials (edit here)
│  ├─ products.ts       # product catalogue → cards + detail pages
│  ├─ services.ts       # services, process, case studies
│  ├─ seo.ts            # metadata builder + JSON-LD generators
│  └─ cn.ts             # className helper
└─ app/globals.css      # Tailwind v4 design tokens + utilities
```

> **One place to edit content:** `src/lib/*`. Add a product to `products.ts` and
> it appears on the home grid, the `/products` page, gets its own SSG detail page,
> a sitemap entry and structured data — automatically.

---

## 8. Deployment & domains

1. **Push to GitHub**, import into **Vercel** → it auto-detects Next.js.
2. Add the custom domain **`praxivo.in`** (and `www`) in Vercel; set DNS
   (A/ALIAS to Vercel, or use Vercel nameservers). HTTPS is automatic.
3. Set the production URL in `src/lib/site.ts` (`url`) — drives canonical,
   sitemap and OG absolute URLs.
4. Add **Google Search Console** + submit the sitemap. Add **Plausible** or
   **Vercel Analytics** (privacy-friendly, no cookie banner needed).
5. Per the ecosystem plan, the products move to subdomains
   (`stockvision.praxivo.in`, etc.) and 301 the old Vercel URLs.

---

## 9. Suggested roadmap

| Phase | Work |
|---|---|
| **0 — Now** | ✅ Premium site, products, services, SEO infra, OG, sitemap |
| **1 — Launch** | Real contact backend (Resend/Formspree), GSC + analytics, custom domain, replace placeholder socials |
| **2 — Content** | `/blog` with MDX, 4–6 cornerstone posts, `Article` schema |
| **3 — Proof** | Real testimonials, more case studies, metrics/logos as they come |
| **4 — Convert** | Booking (Cal.com) embed, A/B test hero, lead analytics |
| **5 — Scale** | hreflang locales if US/UK demands it; shared `@praxivo/ui` package with the product apps |

---

## 10. Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verifies SSG + types)
npm start        # serve the production build
```

**Edit content** in `src/lib/site.ts`, `products.ts`, `services.ts`.
**Edit the look** in `src/app/globals.css` (`@theme` tokens).
