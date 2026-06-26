import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimonials",
  description:
    "Read what dealers, custom hiring centres, and farm owners say about ARGO Engineering Industries reaper machines.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <div className="py-16">
      <div className="container-px">
        <Breadcrumbs items={[{ label: "Testimonials" }]} />
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
          Reviews from the field
        </h1>
        <p className="mt-4 max-w-xl text-[15px] text-charcoal/60">
          Real feedback from the dealers and farm owners running ARGO equipment season after season.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
