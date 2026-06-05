import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { Icon } from "@/components/ui/icon";
import { StatusBadge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

/** A themed, screenshot-free preview "window" tinted by the product accent. */
function ProductPreview({ product }: { product: Product }) {
  return (
    <div
      className="relative h-40 overflow-hidden rounded-xl ring-1 ring-line"
      style={{
        background: `linear-gradient(160deg, ${product.accent}1f, ${product.accent}05 60%, #ffffff)`,
      }}
    >
      <div className="absolute inset-x-0 top-0 flex h-7 items-center gap-1.5 border-b border-black/5 px-3">
        <span className="size-2 rounded-full bg-black/15" />
        <span className="size-2 rounded-full bg-black/10" />
        <span className="size-2 rounded-full bg-black/10" />
      </div>

      <div className="absolute inset-0 top-7 bg-grid opacity-40" />

      <div className="absolute left-4 top-12 flex items-center gap-3">
        <span
          className="inline-flex size-11 items-center justify-center rounded-xl text-white shadow-soft"
          style={{ background: product.accent }}
        >
          <Icon name={product.icon} className="size-5" strokeWidth={2} />
        </span>
        <div>
          <div className="text-sm font-semibold text-ink">{product.name}</div>
          <div className="text-[11px] text-subtle">{product.category}</div>
        </div>
      </div>

      {/* faux sparkline */}
      <svg
        className="absolute inset-x-0 bottom-0 h-16 w-full"
        viewBox="0 0 320 64"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 48 L40 40 L80 46 L120 28 L160 34 L200 18 L240 26 L280 10 L320 16"
          fill="none"
          stroke={product.accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M0 48 L40 40 L80 46 L120 28 L160 34 L200 18 L240 26 L280 10 L320 16 L320 64 L0 64 Z"
          fill={product.accent}
          opacity="0.08"
        />
      </svg>
    </div>
  );
}

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-2xl border border-line bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      <ProductPreview product={product} />

      <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
            {product.category}
          </span>
          <StatusBadge status={product.status} />
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
          {product.summary}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-brand-600"
          >
            Learn more
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium"
            style={{ color: product.accent }}
          >
            Visit live
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
