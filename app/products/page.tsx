import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductBrowser } from "@/components/ui/ProductBrowser";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Product Catalog — Mini Reapers & Rice Mill Machines | Punjab",
  description:
    "Browse ARGO Engineering Industries' catalog — ARGO Mini Reaper heads (2, 3 & 4 divider), self-propelled tiller reapers and rice mill (rice sheller) machines. Manufactured in Rajpura, Punjab.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="py-16">
      <div className="container-px">
        <Breadcrumbs items={[{ label: "Products" }]} />
        <Reveal>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            Our machines
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-charcoal/60">
            ARGO Mini Reapers and rice mill machines, grouped by type. Tap any
            machine to see photos, full details and to ask for a price.
          </p>
        </Reveal>
        <div className="mt-12">
          <ProductBrowser products={products} />
        </div>
      </div>
    </div>
  );
}
