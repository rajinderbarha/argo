import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "See ARGO Engineering Industries' product line, factory floor, and finished reaper units across our full colour range.",
  path: "/gallery",
});

const items = [
  { src: "/images/hero/hero-reaper-family.webp", alt: "ARGO Mini Reaper range in yellow, green and blue mounted on a power tiller in Punjab", tag: "Reaper Range" },
  { src: "/images/products/mini-reaper-blue.webp", alt: "Blue ARGO self-propelled tiller reaper, front view", tag: "Tiller Reaper" },
  { src: "/images/products/mini-reaper-red.webp", alt: "Red ARGO Mini Reaper machine with engine, front view", tag: "Tiller Reaper" },
  { src: "/images/products/mini-reaper-green.webp", alt: "Green ARGO Mini Reaper self-propelled machine", tag: "Tiller Reaper" },
  { src: "/images/products/reaper-head-red.webp", alt: "Red ARGO Mini Reaper 3-divider cutting head", tag: "Reaper Head" },
  { src: "/images/products/reaper-head-yellow.webp", alt: "Yellow ARGO Mini Reaper cutting head", tag: "Reaper Head" },
  { src: "/images/products/reaper-3s2c-green.webp", alt: "Green ARGO Mini Reaper 3-divider head studio shot", tag: "Reaper Head" },
  { src: "/images/products/reaper-2s2c-yellow.webp", alt: "Yellow ARGO Mini Reaper 2-divider compact head", tag: "Reaper Head" },
  { src: "/images/gallery/promo-red-head.webp", alt: "Red ARGO Mini Reaper cutting head, close-up promo", tag: "Reaper Head" },
  { src: "/images/products/rice-mill-front.webp", alt: "ARGO Rice Mill machine (rice sheller), front view", tag: "Rice Mill" },
  { src: "/images/products/rice-mill-angle.webp", alt: "ARGO Rice Mill machine, angled view with control panel", tag: "Rice Mill" },
  { src: "/images/gallery/promo-red-farmer.webp", alt: "Punjab farmer with a red ARGO Mini Reaper in a paddy field", tag: "In the Field" },
  { src: "/images/gallery/promo-blue-farmer.webp", alt: "Punjab farmer with a blue ARGO Mini Reaper machine", tag: "In the Field" },
  { src: "/images/gallery/promo-red-tractor.webp", alt: "Red ARGO Mini Reaper mounted on a mini tractor in a field", tag: "In the Field" },
  { src: "/images/gallery/rice-mill-lifestyle.webp", alt: "ARGO Rice Mill with a sack of freshly milled rice", tag: "Rice Mill" },
];

export default function GalleryPage() {
  return (
    <div className="py-16">
      <div className="container-px">
        <Breadcrumbs items={[{ label: "Gallery" }]} />
        <Reveal>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            Factory floor, finished units, and the colour range
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-charcoal/60">
            A look at the ARGO product line as it actually leaves our facility — tap any image to view it in full.
          </p>
        </Reveal>
        <div className="mt-12">
          <GalleryGrid items={items} />
        </div>
      </div>
    </div>
  );
}
