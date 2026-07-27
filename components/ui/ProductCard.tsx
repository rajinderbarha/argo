"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "./Badge";
import { fadeUp } from "@/lib/animations";
import { useMotionVariants, useIsReducedMotion } from "@/lib/useMotionVariants";

/**
 * Product card with a subtle 3D tilt that follows the cursor, a lift on
 * hover, image zoom, and a soft border glow (the glow + lift are plain CSS
 * via .card-glow / Tailwind so they stay cheap; only the tilt uses JS).
 * Pass `index` to drive entrance stagger when used inside a RevealGroup.
 */
export function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useIsReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const variants = useMotionVariants(fadeUp);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -6, ry: px * 8 });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <motion.div variants={variants} style={{ willChange: "transform, opacity" }}>
      <Link
        ref={ref}
        href={`/products/${product.slug}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-glow group relative flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-forest/30 hover:shadow-[0_28px_56px_-28px_rgba(17,24,39,0.3)]"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-mist/60 to-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
