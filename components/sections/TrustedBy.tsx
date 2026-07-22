import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp, fadeIn } from "@/lib/animations";

const badges = [
  "Made in Punjab",
  "GST Registered Manufacturer",
  "150+ Dealers",
  "12,000+ Machines Delivered",
  "Pan-India Service Network",
  "Multicrop Field-Proven",
];

export function TrustedBy() {
  return (
    <section className="border-y border-charcoal/10 bg-mist/40 py-8">
      <div className="container-px">
        <Reveal variants={fadeIn}>
          <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal/40">
            Trusted across the agri-mechanisation supply chain
          </p>
        </Reveal>
        <RevealGroup className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3" stagger={0.06}>
          {badges.map((b) => (
            <RevealItem key={b} variants={fadeUp} className="font-display text-sm font-semibold text-charcoal/55">
              {b}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
