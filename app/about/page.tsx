import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Certifications } from "@/components/sections/Certifications";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about ARGO Engineering Industries — our manufacturing process, mission, and the decade we've spent building multicrop reaper machines for Indian agriculture.",
  path: "/about",
});

const factoryImages = [
  "/images/products/reaper-green-04.jpg",
  "/images/products/reaper-yellow-01.jpg",
  "/images/products/reaper-blue-01.jpg",
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-charcoal py-16 text-white">
        <div className="container-px">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Engineering machines that earn their place on a working farm.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-px grid gap-14 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Our story</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal">
              Founded {company.founded}, built on one product line
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-charcoal/65">
              ARGO Engineering Industries began with a single walk-behind
              multicrop reaper, designed for the kind of smallholder paddy
              field where a full combine doesn't make economic sense. Over
              the following decade, the same engineering discipline that went
              into that first cutter bar expanded into a full reaper platform
              — standalone headers, tractor-mounted units, and the
              accompanying post-harvest equipment that custom hiring centres
              actually ask for.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/65">
              We're a manufacturer first. Every product decision starts on
              the shop floor with the people who weld, fit, and test the
              machines, not in a design brief disconnected from how the
              equipment actually performs in standing water or lodged crop.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-charcoal/10 bg-mist/50 p-6">
              <h3 className="font-display text-base font-semibold text-charcoal">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                Build dependable, serviceable harvest equipment that performs
                at the same standard whether it's unit one or unit twelve
                thousand off the line.
              </p>
            </div>
            <div className="rounded-xl border border-charcoal/10 bg-mist/50 p-6">
              <h3 className="font-display text-base font-semibold text-charcoal">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                Become the platform manufacturer regional dealers default to
                when they need a reaper header that interchanges across their
                existing fleet.
              </p>
            </div>
            <div className="col-span-2 rounded-xl border border-charcoal/10 bg-mist/50 p-6">
              <h3 className="font-display text-base font-semibold text-charcoal">Sustainability</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                Our welding and finishing lines are organised to cut material
                waste, and our powder-coat process avoids the solvent-based
                finishes older paint lines depended on — fewer emissions on
                the shop floor and a more durable finish in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist/40 py-20">
        <div className="container-px">
          <div className="mb-10 max-w-xl">
            <span className="section-eyebrow">Manufacturing process</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal">
              The shop floor, in three frames
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {factoryImages.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={src} alt={`ARGO factory image ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-20">
        <div className="container-px">
          <div className="mb-10 max-w-xl">
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
          </div>
        </div>
      </section>

      <Certifications />
      <CTASection />
    </div>
  );
}
