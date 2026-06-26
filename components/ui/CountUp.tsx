"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useIsReducedMotion } from "@/lib/useMotionVariants";

/**
 * Animates a number counting up when it enters the viewport.
 * Accepts the raw display value (e.g. "500+", "12,000+", "100%") and
 * extracts the numeric portion to animate, re-attaching prefix/suffix.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useIsReducedMotion();

  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const target = parseInt(numStr.replace(/,/g, ""), 10) || 0;

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1.6, bounce: 0 });

  useEffect(() => {
    if (inView && !reduce) {
      motionVal.set(target);
    } else if (inView && reduce) {
      motionVal.set(target);
    }
  }, [inView, reduce, target, motionVal]);

  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(latest).toLocaleString("en-IN");
      }
    });
    return unsub;
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span ref={displayRef}>0</span>
      {suffix}
    </span>
  );
}
