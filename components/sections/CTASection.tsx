import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest py-20">
      <div
        className="absolute inset-0 animate-bg-drift opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0 18px, transparent 18px 36px)",
          backgroundSize: "200% 200%",
        }}
      />
      <Reveal variants={scaleIn} className="container-px relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Ready to bring an ARGO reaper into your fleet?
        </h2>
        <p className="max-w-xl text-white/80">
          Talk to our B2B team about bulk dealer pricing, custom colour runs, and lead times for the upcoming harvest season.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="light">
            <Link href="/inquiry">
              Request bulk pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:border-white hover:text-white">
            <Link href="/contact">Talk to sales</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
