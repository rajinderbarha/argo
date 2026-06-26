import { testimonials } from "@/data/testimonials";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialsSection() {
  return (
    <section className="bg-mist/40 py-24">
      <div className="container-px">
        <Reveal className="mb-12 max-w-xl">
          <span className="section-eyebrow">From the field</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            What dealers and farm owners tell us.
          </h2>
        </Reveal>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
