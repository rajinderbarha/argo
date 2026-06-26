import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${company.name} — ${company.tagline}`,
    description: company.metaDescription,
  }),
  metadataBase: new URL("https://www.argo-india.com"),
  icons: { icon: "/images/brand/argo-logo.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: "https://www.argo-india.com",
    logo: "https://www.argo-india.com/images/brand/argo-logo.png",
    description: company.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.contact.address,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.contact.phone,
      email: company.contact.email,
      contactType: "sales",
    },
    sameAs: [company.social.youtube, company.social.instagram, company.social.facebook],
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
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
