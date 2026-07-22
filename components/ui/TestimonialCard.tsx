import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";
import { cn, getInitials, avatarGradient } from "@/lib/utils";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const isPa = testimonial.lang === "pa";
  return (
    <div className="card-glow flex h-full flex-col gap-4 rounded-2xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1.5">
      <div className="flex items-center justify-between">
        <Quote className="h-6 w-6 text-forest/30" aria-hidden="true" />
        <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < testimonial.rating ? "fill-hazard text-hazard" : "fill-mist text-mist"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <p
        lang={isPa ? "pa" : "en"}
        className={cn(
          "flex-1 text-[15px] leading-relaxed text-charcoal/80",
          isPa && "font-gurmukhi leading-[1.9]"
        )}
      >
        {isPa ? "" : "“"}
        {testimonial.quote}
        {isPa ? "" : "”"}
      </p>

      <div className="flex items-center gap-3 border-t border-charcoal/10 pt-4">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-display text-sm font-bold text-white shadow-sm",
            avatarGradient(testimonial.id),
            isPa && "font-gurmukhi"
          )}
          aria-hidden="true"
        >
          {getInitials(testimonial.name)}
        </span>
        <div className="min-w-0">
          <p
            lang={isPa ? "pa" : "en"}
            className={cn(
              "truncate font-display text-sm font-semibold text-charcoal",
              isPa && "font-gurmukhi"
            )}
          >
            {testimonial.name}
          </p>
          <p
            lang={isPa ? "pa" : "en"}
            className={cn("truncate text-xs text-charcoal/50", isPa && "font-gurmukhi")}
          >
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
