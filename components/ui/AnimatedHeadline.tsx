"use client";

import { motion } from "framer-motion";
import { textRevealContainer, textRevealChild } from "@/lib/animations";
import { useIsReducedMotion } from "@/lib/useMotionVariants";

/**
 * Splits text into words (kept whole, so wrapping stays natural) and animates
 * each word up into place with a tight stagger. Wrap part of a headline in
 * <span className="text-forest-400"> for an accent color — it still animates
 * as a unit. Falls back to a plain fade for prefers-reduced-motion.
 */
export function AnimatedHeadline({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const reduce = useIsReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    const MotionTag = motion[Tag];
    return (
      <MotionTag
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay }}
      >
        {text}
      </MotionTag>
    );
  }

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={textRevealContainer}
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={textRevealChild} className="inline-block">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
