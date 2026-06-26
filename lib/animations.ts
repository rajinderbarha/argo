import type { Variants } from "framer-motion";

/**
 * Shared animation primitives for the ARGO site.
 *
 * Conventions:
 * - All variants animate transform/opacity only (GPU-accelerated, no layout shift).
 * - Pair these with `whileInView` + `viewport={{ once: true, margin: "-80px" }}`
 *   so reveals fire once, slightly before the element is fully on screen.
 * - Respect prefers-reduced-motion globally via `useReducedMotionVariants` /
 *   the `reduced` export below — consumers should branch on `useReducedMotion()`.
 */

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const; // expo-out, "Apple" feel
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_ONCE = { once: true, margin: "-80px" } as const;
export const VIEWPORT_ONCE_EARLY = { once: true, margin: "-40px" } as const;

/** Fade up + slight rise. The workhorse reveal for sections, cards, copy blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_SOFT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -4, scale: 0.96 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

/** Wrap a list of children in this, give each child `variants={fadeUp}` (or similar). */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Parent variant for letter-by-letter / word-by-word headline reveals. */
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.1 },
  },
};

export const textRevealChild: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_PREMIUM },
  },
};

/** Gentle ambient float for background blobs / particles — loops, ok to run always. */
export const floating = (distance = 16, duration = 6): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [0, -distance, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

/** Card hover lift — used alongside whileHover, not a scroll variant. */
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.015,
    transition: { duration: 0.35, ease: EASE_PREMIUM },
  },
};

export const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};
