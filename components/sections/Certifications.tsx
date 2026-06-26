import { BadgeCheck } from "lucide-react";
import { company } from "@/data/company";

export function Certifications() {
  return (
    <section className="py-24">
      <div className="container-px">
        <div className="mb-12 max-w-xl">
          <span className="section-eyebrow">Certifications</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            Quality benchmarks we hold ourselves to.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {company.certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6"
            >
              <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-forest" />
              <div>
                <h3 className="font-display text-base font-semibold text-charcoal">{cert.name}</h3>
                <p className="mt-1.5 text-sm text-charcoal/60">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
