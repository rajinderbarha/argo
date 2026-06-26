"use client";

import { motion } from "framer-motion";
import { useIsReducedMotion } from "@/lib/useMotionVariants";

const variants = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const reducedVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

/**
 * Enter-only page transition, designed to be used from app/template.tsx.
 *
 * IMPORTANT: this intentionally does NOT use AnimatePresence keyed on
 * pathname inside the root layout. That pattern wraps the App Router's
 * streamed `{children}` in a client-side exit/enter animation, which can
 * race with Suspense boundaries (e.g. route-level loading.tsx) — the result
 * is an intermittent blank render on soft navigation that only resolves on
 * a hard reload. template.tsx already remounts per navigation on its own,
 * so a simple enter animation here is both safer and sufficient.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduce = useIsReducedMotion();
  const v = reduce ? reducedVariants : variants;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={v}
      transition={{ duration: reduce ? 0.2 : 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
