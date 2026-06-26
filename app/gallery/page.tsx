import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "See ARGO Engineering Industries' product line, factory floor, and finished reaper units across our full colour range.",
  path: "/gallery",
});

const items = [
  { src: "/images/products/reaper-red-02.jpg", alt: "Red walk-behind reaper, front view", tag: "Walk-Behind" },
  { src: "/images/products/reaper-blue-tractor-02.jpg", alt: "Blue tractor-mounted reaper", tag: "Tractor-Mounted" },
  { src: "/images/products/reaper-yellow-01.jpg", alt: "Yellow reaper header on foam pad", tag: "Header" },
  { src: "/images/products/reaper-green-01.jpg", alt: "Green reaper header on pavers", tag: "Header" },
  { src: "/images/products/reaper-red-03.jpg", alt: "Red walk-behind reaper, side angle", tag: "Walk-Behind" },
  { src: "/images/products/reaper-blue-01.jpg", alt: "Blue reaper header, front view", tag: "Header" },
  { src: "/images/products/reaper-blue-tractor-03.jpg", alt: "Blue tractor-mounted reaper, side view", tag: "Tractor-Mounted" },
  { src: "/images/products/reaper-green-04.jpg", alt: "Green reaper header, isometric", tag: "Header" },
  { src: "/images/products/reaper-yellow-02.jpg", alt: "Yellow reaper header, isometric", tag: "Header" },
  { src: "/images/products/reaper-blue-02.jpg", alt: "Blue reaper header, second angle", tag: "Header" },
  { src: "/images/products/reaper-blue-tractor-01.jpg", alt: "Blue tractor-mounted reaper at dealer facility", tag: "Dealer Network" },
  { src: "/images/products/reaper-green-02.jpg", alt: "Green reaper header, angled view", tag: "Header" },
  { src: "/images/products/reaper-green-03.jpg", alt: "Green reaper header on foam pad", tag: "Header" },
];

export default function GalleryPage() {
  return (
    <div className="py-16">
      <div className="container-px">
        <Breadcrumbs items={[{ label: "Gallery" }]} />
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
          Factory floor, finished units, and the colour range
        </h1>
        <p className="mt-4 max-w-xl text-[15px] text-charcoal/60">
          A look at the ARGO product line as it actually leaves our facility — tap any image to view it in full.
        </p>
        <div className="mt-12">
          <GalleryGrid items={items} />
        </div>
      </div>
    </div>
  );
}
