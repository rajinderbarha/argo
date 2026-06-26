import { ShieldCheck, Truck, Leaf, Factory, Boxes } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/animations";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Premium Build Quality",
    description: "Powder-coated steel chassis and hardened sickle assemblies tested before dispatch.",
  },
  {
    icon: Truck,
    title: "Fast Dealer Delivery",
    description: "Standard configurations ship within 2–3 weeks through our regional dealer network.",
  },
  {
    icon: Leaf,
    title: "Sustainable Production",
    description: "Lean manufacturing floor with reduced material waste across the welding and finishing lines.",
  },
  {
    icon: Factory,
    title: "Modern Manufacturing",
    description: "CNC-cut guard fingers and jig-assembled cutter bars for consistent tolerances unit to unit.",
  },
  {
    icon: Boxes,
    title: "Large-Scale Supply",
    description: "Bulk dealer orders and custom colour runs handled without disrupting standard lead times.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container-px">
        <Reveal className="mb-12 max-w-xl">
          <span className="section-eyebrow">Why ARGO</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            Five reasons dealers reorder from us season after season.
          </h2>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
          {reasons.map((r) => (
            <RevealItem
              key={r.title}
              variants={fadeUp}
              className="card-glow group flex flex-col gap-4 rounded-xl border border-charcoal/10 bg-white p-6 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-32px_rgba(17,24,39,0.3)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest-50 text-forest transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal">{r.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal/60">{r.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
