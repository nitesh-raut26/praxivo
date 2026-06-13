import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { products } from "@/lib/products";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
        <div className="animate-aurora absolute -top-24 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand-300/30 blur-3xl" />
        <div className="animate-float absolute -right-20 top-10 size-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -left-16 top-32 size-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <Container className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="brand" dot className="mb-6">
            Venture studio — building worldwide
          </Badge>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            We build, ship &amp; scale{" "}
            <span className="font-serif italic text-gradient">intelligent</span>{" "}
            products.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            Praxivo is a venture studio. We&apos;ve launched five live products
            across markets, land, devotion, play and learning — and we build web, mobile
            &amp; AI software for ambitious teams around the world.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/products" size="lg" withArrow>
              Explore our products
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Work with us
            </Button>
          </div>

          <p className="mt-6 text-sm text-subtle">
            Five products in production. Real users. One studio.
          </p>
        </div>

        {/* live product strip */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-line bg-white/70 p-3 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: p.accent }}
              >
                <Icon name={p.icon} className="size-5" strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-ink">
                  {p.name}
                </span>
                <span className="block truncate text-xs text-subtle">
                  {p.category.split(" · ")[0]}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
