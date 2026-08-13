"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { company } from "@/data/company";
import { useIsReducedMotion } from "@/lib/useMotionVariants";

type Slide = {
  image: string;
  alt: string;
  /** object-position for the background image, tuned per photo to avoid awkward crops. */
  position: string;
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  cta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image: "/images/hero/hero-blue-field-v2.webp",
    alt: "ARGO Mini Reaper harvesting a golden paddy field at sunrise in Punjab",
    position: "70% center",
    eyebrow: "Your Partner in Farming",
    title: "Built to cut clean through",
    highlight: "every multicrop harvest.",
    text: "The ARGO Mini Reaper harvests paddy, wheat, soybean and more — one multicrop reaper head engineered in Rajpura for real Indian field conditions.",
    cta: { label: "Explore products", href: "/products" },
  },
  {
    image: "/images/gallery/rice-mill-lifestyle.webp",
    alt: "ARGO Gravity Paddy Separator machine beside a sack of freshly milled rice",
    position: "62% center",
    eyebrow: "Rice Sheller Machines",
    title: "ARGO Gravity Paddy Separator,",
    highlight: "clean grain, every batch.",
    text: "Model GPS-8TPH separates unhulled paddy from brown rice by gravity — high-capacity, low-maintenance separation for rice shellers, mills and cooperatives.",
    cta: { label: "Explore rice sheller", href: "/products/argo-gravity-paddy-separator-gps-8tph" },
  },
  {
    image: "/images/hero/hero-reaper-family-v2.webp",
    alt: "ARGO reaper head range in yellow, green and blue mounted on a power tiller",
    position: "center 62%",
    eyebrow: "One Machine, Every Crop",
    title: "The ARGO reaper range,",
    highlight: "compact yet powerful.",
    text: "Fits power weeders and mini tillers from a minimum of 5 HP. Strong performance, durable build, fuel efficient and low maintenance.",
    cta: { label: "See the reaper range", href: "/products" },
  },
  {
    image: "/images/hero/hero-red-reaper-v2.webp",
    alt: "Red self-propelled ARGO Mini Reaper with power tiller in a paddy field at sunset",
    position: "right center",
    eyebrow: "Self-Propelled Mini Reaper",
    title: "Compact in size,",
    highlight: "powerful in performance.",
    text: "The ARGO Mini Reaper brings engine, drive and a 3-row cutter head together in one machine — built for Indian farms and ideal for paddy, wheat, soybean and more.",
    cta: { label: "Explore products", href: "/products" },
  },
];

const AUTOPLAY_MS = 6000;

export function Hero() {
  const reduce = useIsReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((prev) => (next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    timer.current = setInterval(() => setIndex((p) => (p + 1) % slides.length), AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduce]);

  const active = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="ARGO products"
      className="relative overflow-hidden bg-charcoal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Slides (crossfade + slow zoom) */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: reduce ? 1 : 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.9 }, scale: { duration: AUTOPLAY_MS / 1000 + 1, ease: "linear" } }}
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src={active.image}
              alt={active.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: active.position }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlays for text readability: stronger on the left where text sits,
            and a fuller wash on mobile where the image fills the whole screen. */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-charcoal/25 sm:from-charcoal/90 sm:via-charcoal/55 sm:to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10 sm:via-charcoal/25 sm:to-transparent" />
      </div>

      {/* Content */}
      <div className="container-px relative flex min-h-[86vh] flex-col justify-center py-28 sm:min-h-[88vh]">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-forest-400 backdrop-blur">
                <MapPin className="h-3.5 w-3.5" />
                {active.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-[3.8rem]">
                {active.title}{" "}
                <span className="text-forest-400">{active.highlight}</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                {active.text}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="glow-pulse">
                  <Link href={active.cta.href}>
                    {active.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 text-white hover:border-forest-400 hover:text-forest-400"
                >
                  <Link href="/contact">Get a quote</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {company.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 sm:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-colors hover:border-forest-400 hover:text-forest-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-colors hover:border-forest-400 hover:text-forest-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-400 ${
                  i === index ? "w-8 bg-forest-400" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hazard-divider" />
    </section>
  );
}
