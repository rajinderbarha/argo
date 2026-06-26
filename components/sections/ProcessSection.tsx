"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/animations";
import { useMotionVariants } from "@/lib/useMotionVariants";
import { VIEWPORT_ONCE } from "@/lib/animations";

const steps = [
  { title: "Raw Material", description: "Mild steel sheet and bar stock inspected on arrival against mill certificates." },
  { title: "Manufacturing", description: "CNC cutting, jig-welding and powder-coating across the cutter bar and chassis lines." },
  { title: "Quality Check", description: "Sickle drive and engine mounting tested under load before a unit clears the floor." },
  { title: "Packaging", description: "Foam-protected, header-down packing to prevent transit damage to guard fingers." },
  { title: "Delivery", description: "Dispatched to the regional dealer network or direct to bulk order destinations." },
];

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ProcessSection() {
  const line = useMotionVariants(lineVariants);

  return (
    <section className="bg-mist/40 py-24">
      <div className="container-px">
        <Reveal className="mb-14 max-w-xl">
          <span className="section-eyebrow">From mill to field</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            Five stages, the same on every unit we ship.
          </h2>
        </Reveal>

        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={line}
            className="absolute left-0 top-5 hidden h-px w-full origin-left bg-forest/40 sm:block"
            style={{ willChange: "transform" }}
          />
          <RevealGroup
            className="relative grid grid-cols-1 gap-8 sm:grid-cols-5"
            stagger={0.15}
            delayChildren={0.15}
          >
            {steps.map((step, i) => (
              <RevealItem key={step.title} variants={fadeUp} className="relative flex flex-col gap-4">
                <motion.div
                  variants={dotVariants}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-forest bg-white font-mono text-sm font-semibold text-forest"
                >
                  {i + 1}
                </motion.div>
                <h3 className="font-display text-base font-semibold text-charcoal">{step.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/60">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
