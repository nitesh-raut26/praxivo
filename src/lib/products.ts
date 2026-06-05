/**
 * Praxivo product catalogue.
 * Each entry drives the product cards, the /products grid, and the
 * dynamic /products/[slug] detail pages + their SEO metadata.
 */
export type Product = {
  slug: string;
  name: string;
  /** One-line positioning. */
  tagline: string;
  /** 1–2 sentence summary used on cards + meta description. */
  summary: string;
  /** Richer paragraph for the detail page hero. */
  description: string;
  category: string;
  status: "Live" | "Beta" | "In development";
  /** Current live URL (Vercel for now, custom domain later). */
  url: string;
  /** The praxivo.in subdomain it will move to. */
  futureDomain: string;
  /** Hex accent + a lucide icon name. */
  accent: string;
  icon: string;
  year: string;
  markets: string[];
  highlights: string[];
  /** Headline metrics shown on the detail page. */
  stats: { label: string; value: string }[];
  tech: string[];
};

export const products: Product[] = [
  {
    slug: "stockvision",
    name: "StockVision",
    tagline: "A Bloomberg Terminal for India's retail investor.",
    summary:
      "AI-powered, multi-broker stock research — portfolio analytics, a DCF builder and a powerful screener, from ₹299/month.",
    description:
      "StockVision gives Indian retail investors institutional-grade tooling: connect multiple brokers, get AI-driven research and conviction scoring, build DCF valuations, and screen the market with saved queries — all in one fast, modern terminal.",
    category: "FinTech · Markets",
    status: "Beta",
    url: "https://stockvision-beta.vercel.app/",
    futureDomain: "stockvision.praxivo.in",
    accent: "#059669",
    icon: "CandlestickChart",
    year: "2025",
    markets: ["India"],
    highlights: [
      "Multi-broker portfolio analytics in one place",
      "AI research copilot with explainable conviction scoring",
      "Discounted-cash-flow valuation builder",
      "Powerful equity screener with saved queries",
      "RAG-based AI assistant grounded in filings & data",
    ],
    stats: [
      { label: "Starting price", value: "₹299/mo" },
      { label: "Brokers", value: "Multi" },
      { label: "Built for", value: "India" },
    ],
    tech: ["FastAPI", "React", "PostgreSQL", "Redis", "WebSockets", "LLM / RAG"],
  },
  {
    slug: "landai",
    name: "LandAI",
    tagline: "Predict where India's land value will rise.",
    summary:
      "Urban-growth intelligence across 116 cities and 25 states — forecast which zones develop next, before prices move.",
    description:
      "LandAI compares emerging Tier-3 cities with historically similar Tier-2 cities and forecasts which zones will develop over the next 5–10 years. It ships transparency-first: every datapoint is classified and carries provenance.",
    category: "PropTech · Real-Estate Intelligence",
    status: "Beta",
    url: "https://landai-two.vercel.app/",
    futureDomain: "landai.praxivo.in",
    accent: "#e07a5f",
    icon: "Map",
    year: "2025",
    markets: ["India"],
    highlights: [
      "116 cities across 25 states & union territories",
      "XGBoost land-price model with SHAP explainability",
      "Historical 'twin-city' similarity matching",
      "NLP parser turning infrastructure news into signals",
      "Interactive map with investment scoring & forecasts",
    ],
    stats: [
      { label: "Cities modelled", value: "116" },
      { label: "States & UTs", value: "25" },
      { label: "Forecast horizon", value: "5–10 yr" },
    ],
    tech: ["FastAPI", "XGBoost", "PostGIS", "FAISS", "React", "scikit-learn"],
  },
  {
    slug: "mantraai",
    name: "MantraAI",
    tagline: "India's best free Hindu spiritual companion.",
    summary:
      "Chalisa, mantras, daily aarti, Bhagavad Gita, Panchang, horoscope and a japa counter — in Hindi & English, on web and mobile.",
    description:
      "MantraAI brings daily devotion into one calm, beautiful app: listen to and read the Hanuman Chalisa and core mantras, follow daily aarti, the Hindu Panchang and rashifal, and keep count on a digital japa mala — across web and native mobile.",
    category: "Consumer · Devotion",
    status: "Live",
    url: "https://www.mantraai.in/",
    futureDomain: "mantraai.in",
    accent: "#ea580c",
    icon: "Flame",
    year: "2024",
    markets: ["India", "Global diaspora"],
    highlights: [
      "Hanuman Chalisa, Gayatri & Mahamrityunjaya mantras",
      "Daily aarti audio and the full Bhagavad Gita",
      "Hindu Panchang calendar & daily rashifal",
      "Digital japa-mala counter",
      "Hindi & English — web + native mobile apps",
    ],
    stats: [
      { label: "Status", value: "Live" },
      { label: "Languages", value: "Hindi + English" },
      { label: "Platforms", value: "Web + Mobile" },
    ],
    tech: ["Node.js", "React", "MongoDB Atlas", "React Native", "Expo"],
  },
  {
    slug: "stockstump",
    name: "StockStump",
    tagline: "Trade your favourite cricketers like stocks.",
    summary:
      "An IPL fantasy trading game — player 'share' prices move in real time with on-field performance. Build a portfolio and climb live leaderboards.",
    description:
      "StockStump turns cricket fandom into a market: every player has a live share price that rises and falls with runs, wickets and strike rate. Start with a virtual balance, build a portfolio, ride the gainers and top the leaderboard.",
    category: "Gaming · Fantasy Sports",
    status: "Beta",
    url: "https://stockstump.vercel.app/",
    futureDomain: "stockstump.praxivo.in",
    accent: "#2563eb",
    icon: "Trophy",
    year: "2026",
    markets: ["India"],
    highlights: [
      "Live player pricing driven by real match statistics",
      "₹10,000 virtual portfolio to start trading",
      "Top gainers, losers and a global leaderboard",
      "Referral rewards to grow your squad",
      "Real-time engine on Spring Boot + Redis",
    ],
    stats: [
      { label: "Virtual balance", value: "₹10,000" },
      { label: "Pricing", value: "Real-time" },
      { label: "Mode", value: "Fantasy" },
    ],
    tech: ["Spring Boot", "Java 17", "PostgreSQL", "Redis", "React"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
