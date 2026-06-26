"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";
import { useMotionVariants } from "@/lib/useMotionVariants";

type GalleryItem = { src: string; alt: string; tag: string };

function GalleryTile({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: () => void;
}) {
  const variants = useMotionVariants(fadeUp);
  return (
    <motion.button
      onClick={onOpen}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={variants}
      transition={{ delay: (index % 6) * 0.06 }}
      whileHover={{ scale: 1.015 }}
      className="group relative mb-5 block w-full overflow-hidden rounded-xl border border-charcoal/10 focus-visible:outline-none"
      style={{ willChange: "transform, opacity" }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={640}
        height={480}
        className="w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
      <span className="absolute bottom-3 left-3 rounded-full bg-charcoal/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white transition-transform duration-300 group-hover:-translate-y-0.5">
        {item.tag}
      </span>
    </motion.button>
  );
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? items[activeIndex] : null;

  function close() {
    setActiveIndex(null);
  }

  function step(delta: number) {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + delta + items.length) % items.length);
  }

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <GalleryTile key={item.src + i} item={item} index={i} onOpen={() => setActiveIndex(i)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-6"
            onClick={close}
          >
            <button
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={close}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
            >
              ›
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.src}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-h-[85vh] w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={1200}
                  height={900}
                  className="h-full w-full rounded-xl object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
