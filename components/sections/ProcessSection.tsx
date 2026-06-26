const steps = [
  { title: "Raw Material", description: "Mild steel sheet and bar stock inspected on arrival against mill certificates." },
  { title: "Manufacturing", description: "CNC cutting, jig-welding and powder-coating across the cutter bar and chassis lines." },
  { title: "Quality Check", description: "Sickle drive and engine mounting tested under load before a unit clears the floor." },
  { title: "Packaging", description: "Foam-protected, header-down packing to prevent transit damage to guard fingers." },
  { title: "Delivery", description: "Dispatched to the regional dealer network or direct to bulk order destinations." },
];

export function ProcessSection() {
  return (
    <section className="bg-mist/40 py-24">
      <div className="container-px">
        <div className="mb-14 max-w-xl">
          <span className="section-eyebrow">From mill to field</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            Five stages, the same on every unit we ship.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-5">
          <div className="absolute left-0 top-5 hidden h-px w-full bg-charcoal/15 sm:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-forest bg-white font-mono text-sm font-semibold text-forest">
                {i + 1}
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal">{step.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
