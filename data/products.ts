import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "argo-mini-reaper-walk-behind",
    name: "ARGO Mini Reaper — Walk-Behind",
    category: "Self-Propelled Reapers",
    shortDescription:
      "Engine-driven, handlebar-operated multicrop reaper built for small and medium paddy and wheat holdings.",
    description:
      "The ARGO Mini Reaper is a self-propelled, walk-behind harvesting unit designed for farms where a full combine isn't practical. A single operator guides the unit through standing crop while the multicrop cutter bar lays stalks in a clean, uniform swath ready for manual or mechanical collection. The drivetrain is built around a proven single-cylinder engine, twin lugged drive wheels for traction in wet paddy fields, and a reinforced steel chassis that holds its set-up through a full harvest season.",
    image: "/images/products/reaper-red-02.jpg",
    gallery: [
      "/images/products/reaper-red-02.jpg",
      "/images/products/reaper-red-03.jpg",
      "/images/products/reaper-green-01.jpg",
    ],
    specs: [
      { label: "Cutting Width", value: "1.0 m (3-tine bar)" },
      { label: "Power Source", value: "Single-cylinder petrol engine" },
      { label: "Drive Type", value: "Self-propelled, lugged wheels" },
      { label: "Suitable Crops", value: "Paddy, wheat, soybean, multicrop" },
      { label: "Operator Requirement", value: "1 person, walk-behind" },
      { label: "Chassis", value: "Powder-coated mild steel" },
      { label: "Frame Colour", value: "Red, Blue, Green, Yellow (build-to-order)" },
    ],
    features: [
      "Single-operator walk-behind control with low vibration handlebar",
      "Lugged drive wheels rated for wet, standing-water paddy fields",
      "Reinforced 3-tine cutter bar for clean, jam-resistant cutting",
      "Reflective hazard striping on the header for low-light visibility",
      "Quick-access engine mounting for routine service",
    ],
    useCases: [
      "Small and marginal paddy holdings under 5 acres",
      "Wheat harvesting on uneven or bunded fields",
      "Custom hiring operators serving multiple smallholders in a season",
    ],
    colors: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    slug: "argo-multicrop-reaper-header",
    name: "ARGO Multicrop Reaper Header",
    category: "Reaper Headers & Attachments",
    shortDescription:
      "Standalone 3-tine cutter-bar header for assembly onto walk-behind or tractor-mounted reaper frames.",
    description:
      "The ARGO Multicrop Reaper Header is the cutting heart of our reaper range, sold as a standalone unit for dealers and assemblers who build complete machines to local specification. Each header ships with the sickle drive, guard fingers, and tine assembly pre-fitted and tested, finished in your choice of frame colour. Built to the same tolerances across every unit, headers interchange cleanly across ARGO walk-behind and tractor-mounted platforms.",
    image: "/images/products/reaper-yellow-01.jpg",
    gallery: [
      "/images/products/reaper-yellow-01.jpg",
      "/images/products/reaper-yellow-02.jpg",
      "/images/products/reaper-blue-01.jpg",
      "/images/products/reaper-blue-02.jpg",
      "/images/products/reaper-green-02.jpg",
      "/images/products/reaper-green-03.jpg",
      "/images/products/reaper-green-04.jpg",
    ],
    specs: [
      { label: "Tine Count", value: "3-tine standard, 5-tine on request" },
      { label: "Compatibility", value: "ARGO walk-behind & tractor-mounted frames" },
      { label: "Construction", value: "Welded steel guard fingers, hardened sickle" },
      { label: "Finish", value: "Powder-coated, reflective safety striping included" },
      { label: "Mounting", value: "Bolt-on universal mounting plate" },
      { label: "Available Colours", value: "Red, Blue, Green, Yellow" },
    ],
    features: [
      "Pre-tested sickle drive assembly fitted before dispatch",
      "Universal mounting plate fits across the ARGO reaper platform range",
      "Reflective edge striping for field visibility in early morning harvests",
      "Replaceable guard fingers reduce downtime from stone or stalk jams",
    ],
    useCases: [
      "OEM and dealer assembly of complete reaper units",
      "Header replacement for existing ARGO machines in the field",
      "Custom colour runs for regional distributor branding",
    ],
    colors: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    slug: "argo-tractor-mounted-multicrop-reaper",
    name: "ARGO Tractor-Mounted Multicrop Reaper",
    category: "Tractor-Mounted Reapers",
    shortDescription:
      "Front-mounted, PTO-driven 5-tine reaper for higher-acreage harvesting behind a mini or compact tractor.",
    description:
      "For operations that have outgrown a walk-behind unit, the ARGO Tractor-Mounted Multicrop Reaper front-mounts to a mini or compact tractor and draws power directly from the PTO. The wider 5-tine header covers more ground per pass, and the mounting frame is engineered to clear uneven field surfaces without dragging the cutter bar. It pairs naturally with our Gravity Paddy Separator and Cutter Cum Rack for operators building out a full harvest-to-storage line.",
    image: "/images/products/reaper-blue-tractor-02.jpg",
    gallery: [
      "/images/products/reaper-blue-tractor-02.jpg",
      "/images/products/reaper-blue-tractor-01.jpg",
      "/images/products/reaper-blue-tractor-03.jpg",
    ],
    specs: [
      { label: "Cutting Width", value: "1.6 m (5-tine bar)" },
      { label: "Power Source", value: "Tractor PTO, front-mounted" },
      { label: "Tractor Class", value: "16–35 HP mini/compact tractors" },
      { label: "Mounting", value: "Front 3-point hitch frame, height-adjustable" },
      { label: "Suitable Crops", value: "Paddy, wheat, multicrop" },
      { label: "Drive Linkage", value: "Chain-and-sprocket PTO transfer" },
    ],
    features: [
      "Height-adjustable mounting frame for uneven field contours",
      "5-tine header for wider per-pass coverage than walk-behind units",
      "Reinforced front linkage tested for continuous PTO load",
      "Compatible with ARGO's wider equipment line for full harvest workflows",
    ],
    useCases: [
      "Medium and large landholdings (8+ acres) harvesting in a single season window",
      "Custom hiring centres covering multiple villages per tractor",
      "Operations pairing reaping with downstream paddy separation",
    ],
    colors: ["Blue", "Red"],
  },
];

export const productCategories = [
  {
    name: "Self-Propelled Reapers",
    description: "Walk-behind, single-operator harvesting units for small and medium holdings.",
  },
  {
    name: "Reaper Headers & Attachments",
    description: "Standalone cutter-bar headers and assembly components.",
  },
  {
    name: "Tractor-Mounted Reapers",
    description: "PTO-driven front-mounted units for higher-acreage harvesting.",
  },
  {
    name: "Post-Harvest Equipment",
    description: "Gravity paddy separators and cleaning lines for the harvest-to-storage chain.",
  },
];
