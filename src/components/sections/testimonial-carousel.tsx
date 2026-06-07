"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/lib/services";
import { TestimonialCard } from "./testimonial-card";

/** How long each review stays on screen before the carousel advances. */
const AUTO_ADVANCE_MS = 4500;

/**
 * Phone & portrait-tablet review carousel — one card at a time, swipeable,
 * and auto-advancing like the review carousels on most modern apps. It pauses
 * the moment a visitor drags it, gives them a fresh, full interval once they
 * let go, and stops entirely once it scrolls off screen or the visitor's
 * system asks for reduced motion.
 */
export function TestimonialCarousel({
  items,
  className,
}: {
  items: Testimonial[];
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);
  const inViewRef = useRef(true);
  const reducedMotionRef = useRef(false);
  // Bumped on every visitor interaction so the autoplay effect tears down its
  // timer and starts a fresh one — the carousel never fights a swipe in
  // progress or jumps forward the moment someone lets go.
  const [playToken, setPlayToken] = useState(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Centre a card horizontally within the track — computed and applied to the
  // track's own `scrollLeft` only (not `scrollIntoView`, which can also nudge
  // an ancestor's *vertical* scroll position into view and jolt the page).
  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const targetLeft =
      track.scrollLeft +
      (cardRect.left - trackRect.left) -
      (trackRect.width - cardRect.width) / 2;
    track.scrollTo({
      left: targetLeft,
      behavior: reducedMotionRef.current ? "auto" : "smooth",
    });
  };

  // Keep the dots in sync with the card the visitor has actually swiped to.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = cardRefs.current.filter((c): c is HTMLDivElement => !!c);
    if (cards.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        let best: { idx: number; ratio: number } | null = null;
        for (const entry of entries) {
          const idx = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx === -1) continue;
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { idx, ratio: entry.intersectionRatio };
          }
        }
        if (best && best.ratio > 0.5) setActive(best.idx);
      },
      { root: track, threshold: [0.5, 0.75, 1] },
    );
    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, [items.length]);

  // Only run the autoplay timer while the carousel is actually on screen.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 },
    );
    io.observe(track);
    return () => io.disconnect();
  }, []);

  // A visitor who has asked for less motion shouldn't get an auto-playing carousel.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onChange = () => {
      reducedMotionRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // The headline behaviour: cards advance one after another, on their own.
  // Re-runs (and so restarts its countdown) whenever `playToken` changes.
  useEffect(() => {
    if (items.length <= 1 || reducedMotionRef.current) return;
    const id = setInterval(() => {
      if (pausedRef.current || !inViewRef.current || reducedMotionRef.current) {
        return;
      }
      scrollToIndex((activeRef.current + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [items.length, playToken]);

  const restartAutoplay = () => setPlayToken((token) => token + 1);
  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
    restartAutoplay();
  };
  const goTo = (index: number) => {
    setActive(index);
    scrollToIndex(index);
    restartAutoplay();
  };

  return (
    <div className={className}>
      <div
        ref={trackRef}
        onPointerDown={pause}
        onPointerUp={resume}
        onPointerCancel={resume}
        onPointerLeave={resume}
        role="region"
        aria-label="Client reviews — swipe to browse"
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto pb-1"
      >
        {items.map((t, i) => (
          <div
            key={t.slug}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="w-full shrink-0 snap-center"
          >
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      {items.length > 1 ? (
        <div className="mt-7 flex items-center justify-center gap-2">
          {items.map((t, i) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show the review from ${t.author}`}
              aria-current={active === i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                active === i
                  ? "w-6 bg-brand-600"
                  : "w-1.5 bg-line-strong hover:bg-subtle",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
