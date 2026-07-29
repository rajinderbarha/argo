import type { Metadata } from "next";
import { company } from "@/data/company";

const SITE_URL = "https://www.argoengg.in";
const DEFAULT_OG = "/images/brand/og-image.jpg";

// Punjab-focused keyword base reused across pages. Kept natural and relevant —
// the ARGO catalogue (reapers + rice mill) plus the Punjab geography the
// business actually sells into.
export const PUNJAB_KEYWORDS = [
  "ARGO Engineering Industries",
  "ARGO Mini Reaper",
  "mini reaper Punjab",
  "reaper machine Punjab",
  "multicrop reaper",
  "paddy reaper",
  "wheat reaper machine",
  "power weeder reaper",
  "rice mill machine Punjab",
  "rice sheller Punjab",
  "agriculture machinery Punjab",
  "farm equipment manufacturer Punjab",
  "Punjab manufacturer",
  "Punjab supplier",
  "Punjab exporter",
  "agriculture implements Rajpura",
  "reaper machine Ludhiana",
  "reaper machine Patiala",
  "reaper machine Amritsar",
  "reaper machine Jalandhar",
  "reaper machine Bathinda",
  "farm machinery Mohali Moga Sangrur",
];

export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(company.shortName)
    ? title
    : `${title} | ${company.shortName} Engineering Industries`;

  return {
    title: fullTitle,
    description,
    keywords: [...PUNJAB_KEYWORDS, ...(keywords ?? [])],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const SITE_URL_EXPORT = SITE_URL;
