import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductCategoryNav } from "@/components/ui/ProductCategoryNav";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Product Catalog — Reaper Head Attachments & Rice Sheller | Punjab",
  description:
    "Browse ARGO Engineering Industries' catalog — weeder & tiller reaper head attachments (2S2C-DS, 3S2C-DS), tractor mounted reaper (4S2C-SWC) and the ARGO Gravity Paddy Separator (GPS-8TPH) rice sheller. Manufactured in Rajpura, Punjab.",
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
            Choose a category below to see our machines. Tap any machine for
            photos, full details and to ask for a price.
          </p>
        </Reveal>
        <div className="mt-12">
          <ProductCategoryNav products={products} />
        </div>
      </div>
    </div>
  );
}
