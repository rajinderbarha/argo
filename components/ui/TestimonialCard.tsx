import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card-glow flex h-full flex-col gap-4 rounded-xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1.5">
      <Quote className="h-6 w-6 text-forest/30" />
      <p className="flex-1 text-[15px] leading-relaxed text-charcoal/80">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${
              i < testimonial.rating ? "fill-hazard text-hazard" : "fill-mist text-mist"
            }`}
          />
        ))}
      </div>
      <div className="border-t border-charcoal/10 pt-4">
        <p className="font-display text-sm font-semibold text-charcoal">{testimonial.name}</p>
        <p className="text-xs text-charcoal/50">
          {testimonial.role} · {testimonial.location}
        </p>
      </div>
    </div>
  );
}
