import type { Metadata } from "next";
import { company } from "@/data/company";

const SITE_URL = "https://www.argo-india.com";

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/brand/argo-logo.png",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(company.shortName)
    ? title
    : `${title} | ${company.shortName}`;

  return {
    title: fullTitle,
    description,
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
