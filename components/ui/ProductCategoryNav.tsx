"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Scissors, Tractor, Factory, type LucideIcon } from "lucide-react";
import { Product } from "@/types";
import { productCategories } from "@/data/products";
import { cn } from "@/lib/utils";

/**
 * Simple, farmer-friendly product navigation. Instead of filters, we show a row
 * of large category buttons; tapping one reveals only that category's products.
 * No dropdowns, no search — one tap to browse.
 */
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Weeder & Tiller Reaper Head Attachments": Scissors,
  "Tractor Mounted Reaper Head Attachment": Tractor,
  "Rice Sheller Machines": Factory,
};

function ProductCard({ product }: { product: Product }) {
  return (
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
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-charcoal">{product.name}</h3>
        <p className="text-[15px] leading-relaxed text-charcoal/65">{product.shortDescription}</p>
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
  );
}

export function ProductCategoryNav({ products }: { products: Product[] }) {
  const categories = useMemo(
    () =>
      productCategories
        .map((cat) => ({ ...cat, items: products.filter((p) => p.category === cat.name) }))
        .filter((c) => c.items.length > 0),
    [products]
  );

  const [active, setActive] = useState(categories[0]?.name ?? "");
  const current = categories.find((c) => c.name === active) ?? categories[0];

  return (
    <div>
      {/* Category menu — large, tappable buttons */}
      <div
        role="tablist"
        aria-label="Product categories"
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {categories.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.name] ?? Factory;
          const isActive = cat.name === active;
          return (
            <button
              key={cat.name}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat.name)}
              className={cn(
                "group flex items-center gap-4 rounded-2xl border p-5 text-left transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:flex-col sm:items-start sm:gap-4 sm:p-6",
                isActive
                  ? "border-forest bg-forest text-white shadow-[0_20px_44px_-24px_rgba(14,122,53,0.7)]"
                  : "border-charcoal/10 bg-white text-charcoal hover:-translate-y-1 hover:border-forest/40"
              )}
            >
              <span
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
                  isActive ? "bg-white/15 text-white" : "bg-forest-50 text-forest"
                )}
              >
                <Icon className="h-6 w-6" />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-lg font-bold leading-snug">{cat.name}</span>
                <span className={cn("text-sm", isActive ? "text-white/80" : "text-charcoal/55")}>
                  {cat.items.length} {cat.items.length === 1 ? "machine" : "machines"}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Products for the selected category */}
      {current && (
        <div className="mt-12">
          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">{current.name}</h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-charcoal/60">
              {current.description}
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {current.items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
