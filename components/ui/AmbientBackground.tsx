"use client";

import { motion } from "framer-motion";
import { useIsReducedMotion } from "@/lib/useMotionVariants";

/**
 * Decorative, GPU-only ambient background: two soft glow blobs drifting via
 * CSS-driven transforms, plus a handful of lightweight floating particles.
 * Renders nothing (or static blobs) when prefers-reduced-motion is set.
 * Intended to sit inside a `relative` + `overflow-hidden` parent, absolutely
 * positioned, with `pointer-events-none`.
 */
export function AmbientBackground({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const reduce = useIsReducedMotion();
  const particleCount = reduce ? 0 : 10;

  const blobBase =
    variant === "dark"
      ? "bg-forest-400/20"
      : "bg-forest/10";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className={`absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full ${blobBase} blur-[90px]`}
        style={{ willChange: "transform" }}
        animate={
          reduce
            ? undefined
            : { x: [0, 40, -20, 0], y: [0, 30, -10, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full ${
          variant === "dark" ? "bg-hazard/10" : "bg-hazard/10"
        } blur-[100px]`}
        style={{ willChange: "transform" }}
        animate={
          reduce
            ? undefined
            : { x: [0, -30, 20, 0], y: [0, -20, 15, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {Array.from({ length: particleCount }).map((_, i) => {
        const left = (i * 9.7) % 100;
        const size = 2 + (i % 3);
        const duration = 8 + (i % 5) * 2;
        const delay = (i % 7) * 0.6;
        return (
          <motion.span
            key={i}
            className={`absolute rounded-full ${
              variant === "dark" ? "bg-white/25" : "bg-forest/25"
            }`}
            style={{
              left: `${left}%`,
              top: `${(i * 13) % 90}%`,
              width: size,
              height: size,
              willChange: "transform, opacity",
            }}
            animate={{
              y: [0, -22, 0],
              opacity: [0.15, 0.6, 0.15],
            }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
