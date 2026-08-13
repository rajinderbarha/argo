"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useIsReducedMotion } from "@/lib/useMotionVariants";

/**
 * Animates a number counting up when it enters the viewport.
 * Accepts the raw display value (e.g. "500+", "12,000+", "100%") and
 * extracts the numeric portion to animate, re-attaching prefix/suffix.
 *
 * State-driven rAF (not an imperative motion-value listener): this guarantees
 * the value always lands exactly on target and survives parent re-renders
 * (e.g. the hero carousel changing slides), which previously left the counter
 * stuck at "0" on some mobile browsers.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useIsReducedMotion();

  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const target = parseInt(numStr.replace(/,/g, ""), 10) || 0;

  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    if (reduce || target === 0) {
      setDisplay(target);
      done.current = true;
      return;
    }
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(Math.round(eased * target));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
        done.current = true;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
