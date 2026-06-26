"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type GalleryItem = { src: string; alt: string; tag: string };

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <button
            key={item.src + i}
            onClick={() => setActive(item)}
            className="group relative mb-5 block w-full overflow-hidden rounded-xl border border-charcoal/10 focus-visible:outline-none"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={640}
              height={480}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-charcoal/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
              {item.tag}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-3xl">
            <Image
              src={active.src}
              alt={active.alt}
              width={1200}
              height={900}
              className="h-full w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
