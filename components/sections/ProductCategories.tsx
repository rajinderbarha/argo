import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp, slideRight } from "@/lib/animations";

export function ProductCategoriesSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24">
      <div className="container-px">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal variants={slideRight}>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-forest-400">
              Product range
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-white">
              Four categories. One build standard.
            </h2>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.15}>
            <Link
              href="/products"
              className="group flex items-center gap-1.5 text-sm font-semibold text-forest-400 hover:text-forest-400/80"
            >
              View full catalog
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {productCategories.map((cat, i) => (
            <RevealItem key={cat.name} variants={fadeUp}>
              <Link
                href="/products"
                className="card-glow group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-[transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-forest-400/40"
              >
                <span className="font-mono text-xs text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-8">
                  <h3 className="font-display text-lg font-semibold text-white">{cat.name}</h3>
                  <p className="mt-2 text-sm text-white/50">{cat.description}</p>
                </div>
                <ArrowUpRight className="mt-6 h-5 w-5 text-forest-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
