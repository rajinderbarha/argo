"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal-800">
        <Image
          src={active}
          alt={name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img) => (
            <button
              key={img}
              onClick={() => setActive(img)}
              aria-label={`Show image ${img}`}
              className={cn(
                "relative h-20 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors",
                active === img ? "border-forest" : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <Image src={img} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
