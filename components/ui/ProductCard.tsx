import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "./Badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge>{product.category}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-charcoal">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-charcoal/60">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between border-t border-charcoal/10 pt-3">
          <span className="spec-label">{product.specs[0]?.value}</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-forest">
            View specs
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
