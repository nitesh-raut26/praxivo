/**
 * Praxivo services — the "build with us" offer (the Infosys/TCS-style
 * product+services angle), the delivery process, and selected client work.
 */
export type Service = {
  slug: string;
  title: string;
  blurb: string;
  icon: string;
  deliverables: string[];
  /** Which in-house product proves we can do this. */
  proof: string;
};

export const services: Service[] = [
  {
    slug: "web-platforms",
    title: "Web Platforms",
    blurb:
      "Marketing sites, web apps and dashboards that are fast, accessible and rank — built on Next.js and React.",
    icon: "Layout",
    deliverables: [
      "SEO-first marketing sites",
      "Authenticated dashboards & portals",
      "Design systems & component libraries",
      "Core Web Vitals tuned for speed",
    ],
    proof: "stockvision",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    blurb:
      "Cross-platform iOS & Android apps from a single codebase, shipped to the App Store and Play Store.",
    icon: "Smartphone",
    deliverables: [
      "React Native / Expo apps",
      "Offline-first & push notifications",
      "Store submission & release pipelines",
      "Shared web + mobile experiences",
    ],
    proof: "mantraai",
  },
  {
    slug: "ai-data",
    title: "AI & Data Products",
    blurb:
      "LLM copilots, RAG assistants, forecasting and ML models — explainable, grounded and production-ready.",
    icon: "Sparkles",
    deliverables: [
      "RAG assistants grounded in your data",
      "Forecasting & predictive ML models",
      "Explainability (SHAP) & evaluation",
      "Data pipelines & vector search",
    ],
    proof: "landai",
  },
  {
    slug: "saas-engineering",
    title: "SaaS Engineering",
    blurb:
      "The hard parts of SaaS done right — auth & SSO, billing, multi-tenancy, public APIs and real-time.",
    icon: "Boxes",
    deliverables: [
      "Auth, SSO & RBAC",
      "Subscriptions & metered billing",
      "Public APIs, keys & quotas",
      "Real-time via WebSockets",
    ],
    proof: "stockstump",
  },
  {
    slug: "ecommerce-growth",
    title: "E-commerce & Growth",
    blurb:
      "Storefronts that convert — catalogue, payments, WhatsApp commerce and the SEO to be found.",
    icon: "ShoppingBag",
    deliverables: [
      "Conversion-focused storefronts",
      "Payments (Razorpay / Stripe)",
      "WhatsApp & lead-capture commerce",
      "Technical SEO & analytics",
    ],
    proof: "diyam",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    blurb:
      "Ship continuously and sleep well — containers, CI/CD and a clean path from one VPS to the cloud.",
    icon: "Server",
    deliverables: [
      "Dockerised deployments",
      "CI/CD pipelines",
      "VPS → Kubernetes scale-out",
      "Monitoring & observability",
    ],
    proof: "stockvision",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We pin down the real problem, the user, and the one metric that matters — then scope an MVP that can actually ship.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "A premium, accessible design system and clickable prototype, so you see the product before we build it.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Typed, tested, reviewable code in weekly increments — you watch it come together in a live staging URL.",
  },
  {
    step: "04",
    title: "Ship & Scale",
    description:
      "We launch on production infrastructure, instrument it, and stay on to iterate as you grow.",
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  url: string;
  accent: string;
  icon: string;
  role: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "diyam",
    name: "Diyam",
    category: "E-commerce · Lighting",
    blurb:
      "A premium storefront for India's trusted LED-lighting brand — full catalogue, project showcase and WhatsApp commerce.",
    url: "https://diyam.co.in/",
    accent: "#d97706",
    icon: "Lightbulb",
    role: "Design, build & launch",
    results: [
      "Conversion-focused product catalogue",
      "WhatsApp-first lead capture",
      "Technical SEO for pan-India reach",
    ],
  },
];
