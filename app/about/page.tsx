import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Certifications } from "@/components/sections/Certifications";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/data/company";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp, slideLeft, slideRight, scaleIn } from "@/lib/animations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Punjab Agriculture & Rice Sheller Manufacturer",
  description:
    "ARGO Engineering Industries is a Punjab-based manufacturer and exporter of high-class agriculture and rice sheller implements, based in Rajpura and serving farmers across Punjab and India since 2019.",
  path: "/about",
});

const factoryImages = [
  { src: "/images/products/reaper-3s2c-ds-clean.webp", alt: "ARGO Mini Reaper 3S2C-DS reaper head, built and tested at our Rajpura, Punjab works" },
  { src: "/images/products/rice-mill-front.webp", alt: "ARGO Gravity Paddy Separator assembled and tested in-house" },
  { src: "/images/products/mini-reaper-blue.webp", alt: "ARGO self-propelled tiller reaper ready for dispatch" },
  { src: "/images/products/cutter-cum-rack.webp", alt: "ARGO Cutter Cum Rack, front & back mounted, built for Indian field conditions" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-charcoal py-16 text-white">
        <div className="container-px">
          <Breadcrumbs items={[{ label: "About" }]} />
          <Reveal>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
              Engineering machines that earn their place on a working farm.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-px grid gap-14 lg:grid-cols-2">
          <Reveal variants={slideRight}>
            <span className="section-eyebrow">Our story</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal">
              Founded {company.founded}, built on one product line
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-charcoal/65">
              ARGO Engineering Industries began with a single multicrop reaper
              head, designed for the smallholder paddy and wheat fields of
              Punjab where a full combine doesn't make economic sense. Over the
              following years, the same engineering discipline that went into
              that first cutter bar expanded into a full range — 2, 3 and
              4-divider reaper head attachments, tractor-mounted reapers, and the
              ARGO Gravity Paddy Separator that rice shellers and millers across
              India actually ask for.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/65">
              We're a manufacturer first. Every product decision starts on
              the shop floor with the people who weld, fit, and test the
              machines, not in a design brief disconnected from how the
              equipment actually performs in standing water or lodged crop.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-4" stagger={0.12}>
            <RevealItem variants={fadeUp} className="card-glow rounded-xl border border-charcoal/10 bg-mist/50 p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-display text-base font-semibold text-charcoal">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                Build dependable, serviceable harvest equipment that performs
                at the same standard whether it's unit one or unit twelve
                thousand off the line.
              </p>
            </RevealItem>
            <RevealItem variants={fadeUp} className="card-glow rounded-xl border border-charcoal/10 bg-mist/50 p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-display text-base font-semibold text-charcoal">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                Become the platform manufacturer regional dealers default to
                when they need a reaper header that interchanges across their
                existing fleet.
              </p>
            </RevealItem>
            <RevealItem variants={fadeUp} className="card-glow col-span-2 rounded-xl border border-charcoal/10 bg-mist/50 p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-display text-base font-semibold text-charcoal">Sustainability</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                Our welding and finishing lines are organised to cut material
                waste, and our powder-coat process avoids the solvent-based
                finishes older paint lines depended on — fewer emissions on
                the shop floor and a more durable finish in the field.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="bg-mist/40 py-20">
        <div className="container-px">
          <Reveal className="mb-10 max-w-xl">
            <span className="section-eyebrow">Our machines</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal">
              The ARGO range, built and tested in-house.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/65">
              From reaper head attachments to the Gravity Paddy Separator, every
              ARGO machine is fabricated, assembled and field-tested at our
              Rajpura works before it ships.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {factoryImages.map((img) => (
              <RevealItem key={img.src} variants={scaleIn} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-charcoal/10 bg-gradient-to-br from-mist/60 to-white">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-contain p-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <StatsSection />

      <section className="py-20">
        <div className="container-px">
          <Reveal variants={slideLeft} className="mb-10 max-w-xl">
            <span className="section-eyebrow">Our team</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal">
              A factory floor, not a sales office.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/65">
              Our welding leads, sickle-fitting technicians and quality
              inspectors have an average tenure of over six years on the
              floor — the same team that built our first batch of reapers
              still signs off on quality checks today.
            </p>
          </Reveal>
        </div>
      </section>

      <Certifications />
      <CTASection />
    </div>
  );
}
