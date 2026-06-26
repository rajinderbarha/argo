"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";
import { CountUp } from "@/components/ui/CountUp";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/animations";
import { useIsReducedMotion } from "@/lib/useMotionVariants";

export function StatsSection() {
  const reduce = useIsReducedMotion();

  return (
    <section className="bg-charcoal py-20">
      <RevealGroup className="container-px grid grid-cols-2 gap-8 sm:grid-cols-4" stagger={0.12}>
        {company.stats.map((s) => (
          <RevealItem key={s.label} variants={fadeUp} className="border-l-2 border-forest-400/50 pl-5">
            <motion.p
              animate={reduce ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="font-display text-4xl font-bold text-white drop-shadow-[0_0_18px_rgba(14,122,53,0.35)] sm:text-5xl"
              style={{ willChange: "transform" }}
            >
              <CountUp value={s.value} />
            </motion.p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
              {s.label}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
