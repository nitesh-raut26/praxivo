import Link from "next/link";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      role="img"
      aria-label="Praxivo logo"
    >
      <defs>
        <linearGradient id="praxivo-mark" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#4f46e5" />
          <stop offset="0.55" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#c026d3" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#praxivo-mark)" />
      <rect x="10.2" y="8" width="3.3" height="16" rx="1.65" fill="white" />
      <path
        d="M12 9.7 H16.8 a4.6 4.6 0 0 1 0 9.2 H12.4"
        fill="none"
        stroke="white"
        strokeWidth="3.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg font-semibold tracking-tight text-ink",
        className,
      )}
      aria-label="Praxivo — home"
    >
      <LogoMark />
      <span className="text-[19px]">Praxivo</span>
    </Link>
  );
}
