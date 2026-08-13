import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { fadeUp, slideRight } from "@/lib/animations";

export function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="container-px">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal variants={slideRight}>
            <span className="section-eyebrow">Featured equipment</span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
              The complete ARGO product range.
            </h2>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.15}>
            <Link
              href="/products"
              className="group flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-600"
            >
              Browse full catalog
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
