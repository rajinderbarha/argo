"use client";

import { useReducedMotion as useFramerReducedMotion, type Variants } from "framer-motion";
import { reducedFade } from "@/lib/animations";

/**
 * Returns the given variants unless the user prefers reduced motion,
 * in which case it returns a simple opacity-only fade. Use everywhere
 * a `variants` prop is set on a motion component driven by viewport/animate.
 */
export function useMotionVariants(variants: Variants): Variants {
  const reduce = useFramerReducedMotion();
  return reduce ? reducedFade : variants;
}

export function useIsReducedMotion() {
  return useFramerReducedMotion();
}
