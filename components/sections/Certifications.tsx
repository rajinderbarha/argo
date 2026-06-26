import { BadgeCheck } from "lucide-react";
import { company } from "@/data/company";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/animations";

export function Certifications() {
  return (
    <section className="py-24">
      <div className="container-px">
        <Reveal className="mb-12 max-w-xl">
          <span className="section-eyebrow">Certifications</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            Quality benchmarks we hold ourselves to.
          </h2>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3" stagger={0.12}>
          {company.certifications.map((cert) => (
            <RevealItem
              key={cert.name}
              variants={fadeUp}
              className="card-glow flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-forest" />
              <div>
                <h3 className="font-display text-base font-semibold text-charcoal">{cert.name}</h3>
                <p className="mt-1.5 text-sm text-charcoal/60">{cert.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
