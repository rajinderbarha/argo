import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="container-px">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-eyebrow">Featured equipment</span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
              The current ARGO reaper line-up.
            </h2>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-600"
          >
            Browse full catalog
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
