import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { scaleIn, slideLeft } from "@/lib/animations";

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        <Reveal variants={scaleIn} className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-forest/15" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/products/reaper-green-04.jpg"
              alt="ARGO mini reaper header on the production floor"
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal variants={slideLeft} delay={0.1}>
          <span className="section-eyebrow">Who we are</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            A decade of building machines that survive the field, not just the showroom.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-charcoal/65">
            ARGO Engineering Industries started with a single product line — a
            walk-behind multicrop reaper — and grew into a manufacturer trusted
            by custom hiring centres, dealers and individual farm owners across
            Punjab and beyond. Every header that leaves our facility is built
            on the same tolerances, whether it ships as a standalone unit or
            assembled onto a complete machine.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/65">
            We design for the realities of Indian fields: standing water,
            uneven bunds, mixed crop densities, and the need for a machine
            that a single operator can service themselves mid-season.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-7">
            <Link href="/about">
              Our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
