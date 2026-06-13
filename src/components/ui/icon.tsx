import {
  Boxes,
  CandlestickChart,
  Flame,
  GraduationCap,
  Layout,
  Lightbulb,
  Map,
  Server,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";

/** Explicit map keeps the bundle small (only icons we actually use). */
const registry: Record<string, LucideIcon> = {
  Boxes,
  CandlestickChart,
  Flame,
  GraduationCap,
  Layout,
  Lightbulb,
  Map,
  Server,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Trophy,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
