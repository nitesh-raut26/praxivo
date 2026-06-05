import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Have an idea worth shipping?",
  description = "Whether you want to use our products or build your own with us, let's talk. We reply within one business day.",
  primary = { label: "Start a project", href: "/contact" },
  secondary = { label: "Explore products", href: "/products" },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="pb-24 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* glow + grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(60% 80% at 50% -10%, rgba(124,58,237,0.55), transparent 60%), radial-gradient(50% 60% at 85% 110%, rgba(192,38,211,0.35), transparent 60%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primary.href} size="lg" withArrow className="w-full sm:w-auto">
                {primary.label}
              </Button>
              <Button
                href={secondary.href}
                variant="secondary"
                size="lg"
                className="w-full bg-white/10 text-white ring-white/20 hover:bg-white/15 sm:w-auto"
              >
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
