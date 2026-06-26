const badges = [
  "BIS Compliant",
  "ISO 9001:2015",
  "150+ Dealers",
  "12,000+ Units Delivered",
  "Pan-India Service Network",
  "CE-Rated Components",
];

export function TrustedBy() {
  return (
    <section className="border-y border-charcoal/10 bg-mist/40 py-8">
      <div className="container-px">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal/40">
          Trusted across the agri-mechanisation supply chain
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {badges.map((b) => (
            <span key={b} className="font-display text-sm font-semibold text-charcoal/55">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
