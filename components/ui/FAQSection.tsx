"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which crops can the ARGO Mini Reaper handle?",
    a: "The full range covers paddy, wheat, soybean and most multicrop row harvests. The cutter bar and guard finger spacing are tuned for the stalk densities typical of Punjab paddy and wheat fields.",
  },
  {
    q: "Do you sell the cutter-bar header separately from a complete machine?",
    a: "Yes. The ARGO Multicrop Reaper Header ships as a standalone unit for dealers, assemblers, and existing owners who need a replacement header without buying a full machine.",
  },
  {
    q: "What tractor horsepower does the tractor-mounted reaper need?",
    a: "The tractor-mounted multicrop reaper is built for 16–35 HP mini and compact tractors, front-mounted via a height-adjustable 3-point linkage.",
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
      {faqs.map((item, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="overflow-hidden rounded-xl border border-charcoal/10 bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
              <span className="font-display text-[15px] font-medium text-charcoal">
                {item.q}
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 text-forest transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden px-6 text-sm leading-relaxed text-charcoal/65 data-[state=open]:pb-5 data-[state=open]:animate-fade-up">
            {item.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
