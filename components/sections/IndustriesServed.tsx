import { Tractor, Users, Building2, Warehouse } from "lucide-react";

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
        <div className="mb-12 max-w-xl">
          <span className="section-eyebrow">Who we serve</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            Built for every link in the harvest chain.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-xl border border-charcoal/10 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest-50 text-forest">
                <ind.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-charcoal">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
