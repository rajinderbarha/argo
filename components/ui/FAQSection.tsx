"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { RevealGroup, RevealItem } from "./Reveal";
import { fadeUp } from "@/lib/animations";

const faqs = [
  {
    q: "Which crops can the ARGO Mini Reaper handle?",
    a: "The full range covers paddy, wheat, soybean and most multicrop row harvests. The cutter bar and guard finger spacing are tuned for the stalk densities typical of Punjab paddy and wheat fields.",
  },
  {
    q: "Which mini tillers and power weeders does the ARGO Mini Reaper fit?",
    a: "The reaper heads are a universal fit for most 15–25 HP mini tillers and power weeders. Tell us the make and model you run and our team will confirm compatibility before you order.",
  },
  {
    q: "Do you sell the reaper head separately from a complete machine?",
    a: "Yes. Our 2, 3 and 4-divider reaper heads ship as standalone units for dealers, assemblers, and existing owners who need a head without buying a full self-propelled machine.",
  },
  {
    q: "Do you also make rice milling machines?",
    a: "Yes — alongside the ARGO Mini Reaper range we manufacture the ARGO Rice Mill (rice sheller) machine for clean, efficient paddy-to-rice milling for villages, cooperatives and small commercial millers.",
  },
  {
    q: "What's the typical lead time on a bulk dealer order?",
    a: "Standard colour configurations ship within 2–3 weeks of confirmed order. Custom colour runs or large bulk orders typically need 4–6 weeks — our team will confirm an exact date on your inquiry.",
  },
  {
    q: "Do you provide on-site servicing or only dealer support?",
    a: "We operate through a regional dealer network for first-line servicing and stock spare headers, sickles and guard fingers regionally. Our factory team handles escalations the dealer network can't resolve directly.",
  },
  {
    q: "Can I get a custom colour for a bulk dealer order?",
    a: "Yes — frame colour is a build-to-order option across our reaper range. Mention your preferred colour and order quantity on the inquiry form and our team will confirm feasibility and lead time.",
  },
];

export function FAQSection() {
  return (
    <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
      <RevealGroup stagger={0.07}>
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <RevealItem key={i} variants={fadeUp} as="div">
              <Accordion.Item
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-charcoal/10 bg-white transition-colors duration-300 hover:border-forest/25"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-display text-[15px] font-medium text-charcoal">
                      {item.q}
                    </span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-forest transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden px-6 text-sm leading-relaxed text-charcoal/65 data-[state=open]:pb-5">
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.a}
                  </motion.div>
                </Accordion.Content>
              </Accordion.Item>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </Accordion.Root>
  );
}
