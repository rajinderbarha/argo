import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono, Noto_Sans_Gurmukhi } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});
const gurmukhi = Noto_Sans_Gurmukhi({
  subsets: ["gurmukhi"],
  variable: "--font-gurmukhi",
  weight: ["400", "500", "600"],
});

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
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable} ${gurmukhi.variable}`}>
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
