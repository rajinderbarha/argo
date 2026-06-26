import { company } from "@/data/company";

export function StatsSection() {
  return (
    <section className="bg-charcoal py-20">
      <div className="container-px grid grid-cols-2 gap-8 sm:grid-cols-4">
        {company.stats.map((s) => (
          <div key={s.label} className="border-l-2 border-forest-400/50 pl-5">
            <p className="font-display text-4xl font-bold text-white sm:text-5xl">{s.value}</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
