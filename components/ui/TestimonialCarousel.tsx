"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/types";
import { useIsReducedMotion } from "@/lib/useMotionVariants";
import { cn, getInitials, avatarGradient } from "@/lib/utils";

/**
 * Auto-advancing, center-stage testimonial carousel. Pauses on hover/focus,
 * always reachable via dots/arrows. Active card gets a scale-in + idle float;
 * a fixed min-height on the track avoids layout shift between slides.
 */
export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useIsReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || reduce) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4800);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduce, testimonials.length]);

  const active = testimonials[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative mx-auto min-h-[340px] max-w-2xl sm:min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-full flex-col items-center gap-5 rounded-2xl border border-charcoal/10 bg-white p-8 text-center shadow-[0_24px_64px_-32px_rgba(17,24,39,0.25)] sm:p-10"
              style={{ willChange: "transform" }}
            >
              <Quote className="h-7 w-7 shrink-0 text-forest/30" aria-hidden="true" />
              <p
                lang={active.lang === "pa" ? "pa" : "en"}
                className={cn(
                  "max-w-xl text-[17px] leading-relaxed text-charcoal/80",
                  active.lang === "pa" && "font-gurmukhi leading-[1.95]"
                )}
              >
                {active.lang === "pa" ? "" : "“"}
                {active.quote}
                {active.lang === "pa" ? "" : "”"}
              </p>
              <div className="flex items-center gap-0.5" aria-label={`${active.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < active.rating ? "fill-hazard text-hazard" : "fill-mist text-mist"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-display text-base font-bold text-white shadow-sm",
                    avatarGradient(active.id),
                    active.lang === "pa" && "font-gurmukhi"
                  )}
                  aria-hidden="true"
                >
                  {getInitials(active.name)}
                </span>
                <div className="text-left">
                  <p
                    lang={active.lang === "pa" ? "pa" : "en"}
                    className={cn(
                      "font-display text-sm font-semibold text-charcoal",
                      active.lang === "pa" && "font-gurmukhi"
                    )}
                  >
                    {active.name}
                  </p>
                  <p
                    lang={active.lang === "pa" ? "pa" : "en"}
                    className={cn("text-xs text-charcoal/50", active.lang === "pa" && "font-gurmukhi")}
                  >
                    {active.role} · {active.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/60 transition-colors hover:border-forest hover:text-forest"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="relative h-2 w-2 rounded-full bg-charcoal/15 transition-colors"
            >
              {i === index && (
                <motion.span
                  layoutId="testimonial-dot"
                  className="absolute inset-0 rounded-full bg-forest"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/60 transition-colors hover:border-forest hover:text-forest"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
