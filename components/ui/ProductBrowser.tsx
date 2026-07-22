import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { productCategories } from "@/data/products";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/animations";

/**
 * Farmer-friendly product browser: no filters, no dropdowns. Products are
 * grouped under clear category headings and shown as large cards with the full
 * machine image (object-contain, never cropped) and a big, readable name — so a
 * first-time visitor can scan and tap through with minimal interaction.
 */
function BigProductCard({ product }: { product: Product }) {
  return (
    <RevealItem variants={fadeUp}>
      <Link
        href={`/products/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_28px_56px_-28px_rgba(17,24,39,0.3)]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-mist/70 to-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {product.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-display text-xl font-bold leading-snug text-charcoal">
            {product.name}
          </h3>
          <p className="text-[15px] leading-relaxed text-charcoal/65">
            {product.shortDescription}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            {product.specs.slice(0, 2).map((s) => (
              <span
                key={s.label}
                className="rounded-full border border-charcoal/10 bg-mist/50 px-3 py-1 text-xs font-medium text-charcoal/70"
              >
                {s.value}
              </span>
            ))}
          </div>
          <span className="mt-3 inline-flex items-center gap-2 self-start rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-forest-600">
            View details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </RevealItem>
  );
}

export function ProductBrowser({ products }: { products: Product[] }) {
  // Keep only categories that actually have products, preserving catalog order.
  const groups = productCategories
    .map((cat) => ({
      ...cat,
      items: products.filter((p) => p.category === cat.name),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="flex flex-col gap-16">
      {groups.map((group) => (
        <section key={group.name} aria-labelledby={`cat-${group.name}`}>
          <Reveal className="mb-7 max-w-2xl">
            <h2
              id={`cat-${group.name}`}
              className="font-display text-2xl font-bold text-charcoal sm:text-3xl"
            >
              {group.name}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-charcoal/60">
              {group.description}
            </p>
          </Reveal>
          <RevealGroup
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            stagger={0.1}
          >
            {group.items.map((p) => (
              <BigProductCard key={p.slug} product={p} />
            ))}
          </RevealGroup>
        </section>
      ))}
    </div>
  );
}
