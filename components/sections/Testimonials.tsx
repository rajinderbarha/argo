import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="bg-mist/40 py-24">
      <div className="container-px">
        <div className="mb-12 max-w-xl">
          <span className="section-eyebrow">From the field</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
            What dealers and farm owners tell us.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
