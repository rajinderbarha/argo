import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

// Self-hosted fonts (next/font/local) — the woff2 files live in app/fonts.
// This avoids next/font/google fetching from Google's CDN at dev/build time,
// which was failing under Turbopack (404s on font files -> module-not-found).
const display = localFont({
  src: [
    { path: "./fonts/space-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/space-grotesk-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});
const mono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});
// Gurmukhi (Punjabi) uses a system font stack via --font-gurmukhi in globals.css.

const SITE_URL = "https://www.argoengg.in";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${company.name} — Reaper Head & Rice Sheller Manufacturer in Punjab`,
    description: company.metaDescription,
  }),
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true, email: true },
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
};

export const viewport: Viewport = {
  themeColor: "#0E7A35",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Manufacturer"],
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    alternateName: "ARGO",
    slogan: company.tagline,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/argo-logo.png`,
    image: `${SITE_URL}/images/brand/og-image.jpg`,
    description: company.metaDescription,
    foundingDate: String(company.founded),
    taxID: company.gstin,
    vatID: company.gstin,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near NH-1, Backside Naugajja Peer, Uksi Jattan Road, Vill. Pilkhani",
      addressLocality: company.contact.addressLocality,
      addressRegion: company.contact.addressRegion,
      postalCode: company.contact.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.contact.geo.lat,
      longitude: company.contact.geo.lng,
    },
    areaServed: [
      { "@type": "State", name: "Punjab" },
      ...["Rajpura", "Patiala", "Ludhiana", "Amritsar", "Jalandhar", "Mohali", "Bathinda", "Moga", "Sangrur", "Hoshiarpur", "Pathankot"].map(
        (c) => ({ "@type": "City", name: c })
      ),
    ],
    openingHours: "Mo-Sa 09:00-18:30",
    contactPoint: company.contact.phones.map((telephone) => ({
      "@type": "ContactPoint",
      telephone,
      email: company.contact.email,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "pa"],
    })),
    makesOffer: company.productLines.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: p.name, description: p.description },
    })),
    sameAs: [company.social.youtube, company.social.instagram, company.social.facebook],
  };

  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="noise-overlay" />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
