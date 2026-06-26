import { Tractor, Users, Building2, Warehouse } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/animations";

const industries = [
  { icon: Tractor, name: "Individual Farm Owners", description: "Smallholder and mid-acreage farmers harvesting their own land." },
  { icon: Users, name: "Custom Hiring Centres", description: "Operators running fleets of reapers across multiple village clients." },
  { icon: Building2, name: "Regional Dealers", description: "Distributors stocking complete units and spare headers." },
  { icon: Warehouse, name: "Post-Harvest Processors", description: "Operations pairing reaping with paddy separation and storage." },
];

export function IndustriesServed() {
  return (
    <section className="bg-mist/40 py-24">
      <div className="container-px">
        <Reveal className="mb-12 max-w-xl">
          <span className="section-eyebrow">Who we serve</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            Built for every link in the harvest chain.
          </h2>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {industries.map((ind) => (
            <RevealItem
              key={ind.name}
              variants={fadeUp}
              className="group rounded-xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest-50 text-forest transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <ind.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-charcoal">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{ind.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
