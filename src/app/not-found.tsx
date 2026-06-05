import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
        404
      </span>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        This page wandered off.
      </h1>
      <p className="mt-4 max-w-md text-pretty text-lg text-muted">
        The link may be broken or the page may have moved. Let&apos;s get you
        back to something that ships.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg" withArrow>
          Back to home
        </Button>
        <Button href="/products" variant="secondary" size="lg">
          Explore products
        </Button>
      </div>
    </Container>
  );
}
