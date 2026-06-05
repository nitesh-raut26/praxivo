import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "bg-white text-ink ring-1 ring-line-strong shadow-soft hover:-translate-y-0.5 hover:ring-brand-300",
  ghost: "text-ink-soft hover:bg-canvas-soft",
  dark: "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-soft",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  ({ href: string; external?: boolean } | { href?: undefined; external?: never }) &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | "href">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  withArrow,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      {children}
      {withArrow ? (
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as {
      href: string;
      external?: boolean;
    };
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  const { href: _href, external: _external, ...buttonProps } = props as Record<
    string,
    unknown
  >;
  void _href;
  void _external;
  return (
    <button className={classes} {...buttonProps}>
      {inner}
    </button>
  );
}
