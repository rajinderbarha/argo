"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(images[0]);
  const [direction, setDirection] = useState(0);

  function selectImage(img: string) {
    const newIndex = images.indexOf(img);
    const oldIndex = images.indexOf(active);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActive(img);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal-800">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src={active}
              alt={name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-4"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img) => (
            <motion.button
              key={img}
              onClick={() => selectImage(img)}
              aria-label={`Show image ${img}`}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative h-20 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors duration-300",
                active === img
                  ? "border-forest"
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
              style={{ willChange: "transform" }}
            >
              <Image src={img} alt="" fill sizes="96px" className="object-cover" />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
