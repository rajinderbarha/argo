"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";
import { useMotionVariants } from "@/lib/useMotionVariants";

/**
 * Drop-in viewport reveal. Wrap any block of markup; defaults to fadeUp.
 * Pass `variants` for a different entrance, or `stagger` to also stagger
 * any direct children that themselves have `variants={fadeUp}` etc.
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  as = "div",
  delay = 0,
  id,
  onClick,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "section" | "li" | "span";
  delay?: number;
  id?: string;
  onClick?: React.MouseEventHandler;
}) {
  const v = useMotionVariants(variants);
  const MotionTag = motion[as as "div"];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={v}
      transition={delay ? { delay } : undefined}
      className={className}
      id={id}
      onClick={onClick}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger group — wrap a grid/list, give each direct child a `<Reveal>` or motion item with variants. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger item — use inside RevealGroup instead of Reveal (no own viewport trigger). */
export function RevealItem({
  children,
  variants = fadeUp,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "li";
}) {
  const v = useMotionVariants(variants);
  const MotionTag = motion[as as "div"];
  return (
    <MotionTag variants={v} className={className} style={{ willChange: "transform, opacity" }}>
      {children}
    </MotionTag>
  );
}
