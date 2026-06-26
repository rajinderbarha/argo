import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductFilter } from "@/components/ui/ProductFilter";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Product Catalog",
  description:
    "Browse the full ARGO Engineering Industries product catalog — walk-behind reapers, multicrop reaper headers, and tractor-mounted reaper units.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="py-16">
      <div className="container-px">
        <Breadcrumbs items={[{ label: "Products" }]} />
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
          The full ARGO reaper catalog
        </h1>
        <p className="mt-4 max-w-xl text-[15px] text-charcoal/60">
          Filter by category or search by name to find the right configuration for your acreage and crop.
        </p>
        <div className="mt-12">
          <ProductFilter products={products} />
        </div>
      </div>
    </div>
  );
}
