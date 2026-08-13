import { Product } from "@/types";

// Shared feature set for the Reaper Series / reaper head attachments (from the
// ARGO catalogue "Key Features" panel). Kept in one place so the near-identical
// models stay consistent without copy-pasting.
const REAPER_FEATURES = [
  "Heavy-duty frame built for long-lasting performance",
  "High productivity — delivers more in less time with better output",
  "Simple design for quick and easy maintenance",
  "User-friendly design for smooth operation",
  "Optimized balanced weight for stable, efficient working",
  "Double star for multicrop harvesting",
  "Fuel efficient — consumes less fuel for higher savings",
];

const GPS_FEATURES = [
  "Separation into three distinct classifications: paddy, brown rice & mixture",
  "Stainless steel tray to minimize wear & tear",
  "Sensor for automatic operation",
  "Higher output of material",
  "Stable, constant separating performance",
  "Minimized installation space for a large separating capacity",
  "Automatic stop device when the tank is nearly empty",
  "Easy sampling and easy inspection of the separating condition",
];

const GPS_USE_CASES = [
  "Rice shellers and commercial rice mills",
  "Cooperatives and rice traders",
  "High-throughput paddy-to-rice separation lines",
];

export const products: Product[] = [
  // ================= TYPE 1 — REAPER SERIES =================
  {
    slug: "argo-mini-reaper-3s2c-ds",
    name: "ARGO Mini Reaper 3S2C-DS",
    category: "Reaper Series",
    shortDescription:
      "3-row, 1016 mm PTO-driven mini reaper for fast, clean harvesting of wheat, paddy, soybean and similar crops.",
    description:
      "The ARGO Mini Reaper 3S2C-DS is part of the Argo Reaper Series — designed for fast, efficient and clean harvesting of crops like wheat, paddy, soybean, barley and more. This 3-row model has a 1016 mm working width, runs from a minimum of 5 HP and is PTO driven, built with precision engineering and a high-grade steel frame for higher productivity, low maintenance and long service life.",
    image: "/images/products/reaper-3s2c-ds-clean.webp",
    gallery: [
      "/images/products/reaper-3s2c-ds-clean.webp",
      "/images/products/reaper-3s2c-green-v2.webp",
     
    ],
    specs: [
      { label: "Model", value: "3S2C-DS" },
      { label: "Working Width", value: "1016 mm (3.5 ft)" },
      { label: "Cutting Rows", value: "3" },
      { label: "Weight", value: "65 kg (approx.)" },
      { label: "Power Required", value: "Minimum 5 HP" },
      { label: "Cutting Height", value: "40 mm – 200 mm" },
      { label: "Drive Type", value: "PTO Driven" },
      { label: "Material", value: "High Grade Steel" },
      { label: "Warranty", value: "1 Year" },
      { label: "Dimensions (L×W×H)", value: "1250 × 800 × 500 mm" },
    ],
    features: REAPER_FEATURES,
    useCases: ["Wheat", "Paddy", "Soybean & similar crops"],
    colors: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    slug: "argo-mini-reaper-2s2c-ds",
    name: "ARGO Mini Reaper 2S2C-DS",
    category: "Reaper Series",
    shortDescription:
      "2-row, 711 mm PTO-driven mini reaper — compact and lightweight for wheat, paddy, soybean and similar crops.",
    description:
      "The ARGO Mini Reaper 2S2C-DS is the compact 2-row model in the Argo Reaper Series. With a 711 mm working width, a light 55 kg build and a minimum 5 HP power requirement, it delivers fast, clean harvesting of wheat, paddy, soybean and similar crops. PTO driven with a high-grade steel frame for durability, low maintenance and long service life.",
    image: "/images/products/reaper-2s2c-yellow.webp",
    gallery: [
      "/images/products/reaper-2s2c-yellow.webp",
      "/images/gallery/banner-reaper-yellow.webp",
    ],
    specs: [
      { label: "Model", value: "2S2C-DS" },
      { label: "Working Width", value: "711 mm (2.5 ft)" },
      { label: "Cutting Rows", value: "2" },
      { label: "Weight", value: "55 kg (approx.)" },
      { label: "Power Required", value: "Minimum 5 HP" },
      { label: "Cutting Height", value: "40 mm – 200 mm" },
      { label: "Drive Type", value: "PTO Driven" },
      { label: "Material", value: "High Grade Steel" },
      { label: "Warranty", value: "1 Year" },
      { label: "Dimensions (L×W×H)", value: "900 × 800 × 500 mm" },
    ],
    features: REAPER_FEATURES,
    useCases: ["Wheat", "Paddy", "Soybean & similar crops"],
    colors: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    slug: "argo-mini-reaper-3s2c",
    name: "ARGO Mini Reaper 3S2C",
    category: "Reaper Series",
    shortDescription:
      "3-row, 1016 mm PTO-driven mini reaper with a compact 410 mm frame height for wheat, paddy, soybean and similar crops.",
    description:
      "The ARGO Mini Reaper 3S2C is a 3-row model in the Argo Reaper Series with a 1016 mm working width and a compact 410 mm frame height. Running from a minimum of 5 HP and PTO driven, it harvests wheat, paddy, soybean and similar crops fast and cleanly, with a high-grade steel frame built for long service life and low maintenance.",
    image: "/images/products/reaper-head-red.webp",
    gallery: [
      "/images/products/reaper-head-red.webp",
      "/images/products/reaper-head-red-side.webp",
      "/images/gallery/promo-red-head.webp",
      "/images/gallery/banner-reaper-red.webp",
    ],
    specs: [
      { label: "Model", value: "3S2C" },
      { label: "Working Width", value: "1016 mm (3.5 ft)" },
      { label: "Cutting Rows", value: "3" },
      { label: "Weight", value: "65 kg (approx.)" },
      { label: "Power Required", value: "Minimum 5 HP" },
      { label: "Cutting Height", value: "40 mm – 200 mm" },
      { label: "Drive Type", value: "PTO Driven" },
      { label: "Material", value: "High Grade Steel" },
      { label: "Warranty", value: "1 Year" },
      { label: "Dimensions (L×W×H)", value: "1250 × 800 × 410 mm" },
    ],
    features: REAPER_FEATURES,
    useCases: ["Wheat", "Paddy", "Soybean & similar crops"],
    colors: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    slug: "argo-mini-reaper-2s2c",
    name: "ARGO Mini Reaper 2S2C",
    category: "Reaper Series",
    shortDescription:
      "2-row, 711 mm PTO-driven mini reaper with a compact 410 mm frame height, ideal for wheat and paddy.",
    description:
      "The ARGO Mini Reaper 2S2C is the compact 2-row model with a 711 mm working width and a 410 mm frame height. Lightweight at 55 kg and running from a minimum of 5 HP, it is PTO driven and built with a high-grade steel frame for clean, efficient wheat and paddy harvesting with low maintenance and long service life.",
    image: "/images/products/reaper-2s2c-yellow.webp",
    gallery: [
      "/images/products/reaper-2s2c-yellow.webp",
      "/images/products/reaper-head-yellow.webp",
      "/images/gallery/banner-reaper-yellow.webp",
    ],
    specs: [
      { label: "Model", value: "2S2C" },
      { label: "Working Width", value: "711 mm (2.5 ft)" },
      { label: "Cutting Rows", value: "2" },
      { label: "Weight", value: "55 kg (approx.)" },
      { label: "Power Required", value: "Minimum 5 HP" },
      { label: "Cutting Height", value: "40 mm – 200 mm" },
      { label: "Drive Type", value: "PTO Driven" },
      { label: "Material", value: "High Grade Steel" },
      { label: "Warranty", value: "1 Year" },
      { label: "Dimensions (L×W×H)", value: "900 × 800 × 410 mm" },
    ],
    features: REAPER_FEATURES,
    useCases: ["Wheat", "Paddy"],
    colors: ["Red", "Blue", "Green", "Yellow"],
  },

  // ============= TYPE 2 — REAPER HEAD ATTACHMENTS =============
  {
    slug: "argo-tiller-reaper-head-4s2c-tr",
    name: "ARGO Tiller Reaper Head Attachment 4S2C-TR",
    category: "Reaper Head Attachments",
    shortDescription:
      "4-row, 1320 mm belt-driven reaper head attachment for power tillers — harvests wheat, paddy and similar crops.",
    description:
      "The ARGO Tiller Reaper Head Attachment (Model 4S2C-TR) is a 4-row cutting head with a 1320 mm working width, built to mount on power tillers. Belt driven and requiring a minimum of 12 HP, it is constructed from high-grade steel for tough Indian field conditions and delivers clean, efficient harvesting of wheat, paddy and similar crops.",
    image: "/images/products/tiller-reaper-4s2c-green.webp",
    gallery: [
      "/images/products/tiller-reaper-4s2c-green.webp",
      "/images/products/mini-reaper-green.webp",
      "/images/gallery/field-reaper-green.webp",
      "/images/gallery/home-tiller-reaper.webp",
    ],
    specs: [
      { label: "Model", value: "4S2C-TR" },
      { label: "Working Width", value: "1320 mm (4.5 ft)" },
      { label: "Cutting Rows", value: "4" },
      { label: "Weight", value: "100 kg (approx.)" },
      { label: "Power Required", value: "Minimum 12 HP" },
      { label: "Cutting Height", value: "40 mm – 254 mm" },
      { label: "Drive Type", value: "Belt Driven" },
      { label: "Material", value: "High Grade Steel" },
      { label: "Warranty", value: "1 Year" },
      { label: "Dimensions (L×W×H)", value: "1550 × 800 × 410 mm" },
    ],
    features: REAPER_FEATURES,
    useCases: ["Wheat", "Paddy & similar types of crops"],
    colors: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    slug: "argo-tractor-mounted-reaper-head-4s2c-swc",
    name: "ARGO Tractor Mounted Reaper Head Attachment 4S2C-SWC",
    category: "Reaper Head Attachments",
    shortDescription:
      "4-row, 1320 mm PTO-driven reaper head attachment for tractor mounting — harvests wheat, paddy and similar crops.",
    description:
      "The ARGO Tractor Mounted Reaper Head Attachment (Model 4S2C-SWC) is a 4-row cutting head with a 1320 mm working width, built to mount on tractors. PTO driven and requiring a minimum of 12 HP, it is constructed from high-grade steel for durable, higher-acreage harvesting of wheat, paddy and similar crops.",
    image: "/images/products/reaper-swc-4s2c-blue.webp",
    gallery: [
      "/images/products/reaper-swc-4s2c-blue.webp",
      "/images/products/mini-reaper-blue.webp",
      "/images/gallery/promo-blue-farmer.webp",
      "/images/products/mini-reaper-blue-2.webp",
    ],
    specs: [
      { label: "Model", value: "4S2C-SWC" },
      { label: "Working Width", value: "1320 mm (4.5 ft)" },
      { label: "Cutting Rows", value: "4" },
      { label: "Weight", value: "100 kg (approx.)" },
      { label: "Power Required", value: "Minimum 12 HP" },
      { label: "Cutting Height", value: "40 mm – 254 mm" },
      { label: "Drive Type", value: "PTO Driven" },
      { label: "Mounting", value: "Tractor mounted" },
      { label: "Material", value: "High Grade Steel" },
      { label: "Warranty", value: "1 Year" },
      { label: "Dimensions (L×W×H)", value: "1550 × 800 × 410 mm" },
    ],
    features: REAPER_FEATURES,
    useCases: ["Wheat", "Paddy & similar types of crops"],
    colors: ["Red", "Blue", "Green"],
  },

  // ====== TYPE 3 — RICE SHELLER / GRAVITY PADDY SEPARATOR ======
  {
    slug: "argo-gravity-paddy-separator-gps-8tph",
    name: "ARGO Gravity Paddy Separator GPS 8TPH",
    category: "Rice Sheller / Gravity Paddy Separator",
    shortDescription:
      "High-capacity gravity paddy separator — up to 8 TPH, separating paddy, brown rice and mixture for rice shellers and mills.",
    description:
      "The ARGO Gravity Paddy Separator GPS 8TPH separates paddy into three distinct classifications — paddy, brown rice and mixture — at a capacity of up to 8 TPH on paddy. Running on a 3 HP motor at 960 RPM, it features a stainless steel tray to minimize wear and tear and a sensor for automatic operation, delivering a higher output of material for rice shellers, mills, cooperatives and traders.",
    image: "/images/products/rice-mill-front.webp",
    gallery: [
      "/images/products/rice-mill-front.webp",
      "/images/gallery/banner-rice-mill.webp",
    ],
    specs: [
      { label: "Model", value: "GPS 8TPH" },
      { label: "Dimensions (L×W×H)", value: "2190 × 1660 × 2150 mm" },
      { label: "Capacity", value: "8 TPH on paddy" },
      { label: "Power Consumption", value: "3 HP motor / 960 RPM" },
    ],
    features: GPS_FEATURES,
    useCases: GPS_USE_CASES,
  },
  {
    slug: "argo-gravity-paddy-separator-gps-4tph",
    name: "ARGO Gravity Paddy Separator GPS 4TPH",
    category: "Rice Sheller / Gravity Paddy Separator",
    shortDescription:
      "Compact gravity paddy separator — up to 4 TPH, separating paddy, brown rice and mixture with a small footprint.",
    description:
      "The ARGO Gravity Paddy Separator GPS 4TPH is the compact model, separating paddy into three distinct classifications — paddy, brown rice and mixture — at a capacity of up to 4 TPH on paddy. Running on a 2 HP motor at 960 RPM, its minimized installation footprint, stainless steel tray and sensor for automatic operation make it ideal for smaller rice shellers, cooperatives and traders.",
    image: "/images/products/rice-mill-angle.webp",
    gallery: [
      "/images/products/rice-mill-angle.webp",
      "/images/gallery/rice-mill-brand.webp",
      "/images/gallery/rice-mill-solutions.webp",
    ],
    specs: [
      { label: "Model", value: "GPS 4TPH" },
      { label: "Dimensions (L×W×H)", value: "1770 × 1660 × 2150 mm" },
      { label: "Capacity", value: "4 TPH on paddy" },
      { label: "Power Consumption", value: "2 HP motor / 960 RPM" },
    ],
    features: GPS_FEATURES,
    useCases: GPS_USE_CASES,
  },

  // ================= TYPE 4 — CUTTER CUM RACK =================
  {
    slug: "argo-cutter-cum-rack",
    name: "ARGO Cutter Cum Rack",
    category: "Cutter Cum Rack",
    shortDescription:
      "Front & back mounted implement for efficient cutting and smooth racking of maize, sorghum and similar crops — higher productivity in a single pass.",
    description:
      "ARGO Cutter Cum Rack is specially designed to cut tall standing crops and neatly arrange them in racks for easy collection. Available front mounted and back mounted, it is strong, reliable and built for Indian field conditions — delivering efficient cutting and smooth racking in a single pass for maize, sorghum and similar crops, with clean cutting for minimal crop loss and better yield.",
    image: "/images/products/cutter-cum-rack.webp",
    gallery: [
      "/images/products/cutter-cum-rack.webp",
      "/images/products/cutter-cum-rack-spec.webp",
    ],
    specs: [
      { label: "Mounting", value: "Front Mounted & Back Mounted" },
      { label: "Working Width", value: "1905 mm (6.5 ft)" },
      { label: "Rack Width", value: "860 mm" },
      { label: "Crop Type", value: "Maize, sorghum & similar crops" },
      { label: "PTO Speed", value: "540 RPM" },
      { label: "Cutting Height", value: "Minimum 75 mm (adjustable)" },
      { label: "Number of Blades", value: "27 blades" },
      { label: "Suitable Tractor", value: "Minimum 35 HP" },
    ],
    features: [
      "Wide cutting width for higher field coverage",
      "Adjustable cutting height for different crop conditions",
      "Smooth and efficient rack formation",
      "Strong & rugged construction for tough field operations",
      "Easy to attach, operate & maintain",
      "Suitable for various crops",
      "Low maintenance with long service life",
    ],
    useCases: ["Maize", "Sorghum", "Similar crops"],
  },
];

export const productCategories = [
  {
    name: "Reaper Series",
    description:
      "Fast, clean multicrop harvesting — 2 and 3-row ARGO Mini Reaper models for wheat, paddy, soybean, barley and more.",
  },
  {
    name: "Reaper Head Attachments",
    description:
      "4-row reaper head attachments for power-tiller (belt-driven) and tractor (PTO-driven) mounting.",
  },
  {
    name: "Rice Sheller / Gravity Paddy Separator",
    description:
      "Gravity paddy separators (GPS 8TPH & 4TPH) that separate paddy, brown rice and mixture for rice shellers and mills.",
  },
  {
    name: "Cutter Cum Rack",
    description:
      "Front & back mounted cutter cum rack — cuts tall standing crops and racks them neatly for easy collection.",
  },
];
