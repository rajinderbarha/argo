import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock, Youtube, Instagram, Facebook } from "lucide-react";
import { company } from "@/data/company";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/animations";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About ARGO" },
      { href: "/gallery", label: "Factory & Gallery" },
      { href: "/products", label: "Our Machines" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/products/argo-mini-reaper-3-divider", label: "Mini Reaper (3 Divider)" },
      { href: "/products/argo-self-propelled-tiller-reaper", label: "Tiller Reaper" },
      { href: "/products/argo-rice-mill-machine", label: "Rice Mill Machine" },
      { href: "/products", label: "Full Catalog" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/inquiry", label: "Bulk Order Inquiry" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white">
      <div className="hazard-divider" />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 animate-bg-drift rounded-full bg-forest-400/10 blur-[100px]"
        aria-hidden="true"
      />
      <RevealGroup
        className="container-px relative grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]"
        stagger={0.1}
      >
        <RevealItem variants={fadeUp}>
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/images/brand/argo-logo.png"
              alt="ARGO"
              width={40}
              height={48}
              className="h-11 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            />
            <span className="font-display text-lg font-bold text-white">ARGO</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            {company.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Youtube, href: company.social.youtube },
              { Icon: Instagram, href: company.social.instagram },
              { Icon: Facebook, href: company.social.facebook },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:text-forest-400 hover:shadow-[0_8px_20px_-6px_rgba(14,122,53,0.5)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </RevealItem>

        {columns.map((col) => (
          <RevealItem key={col.title} variants={fadeUp}>
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
              {col.title}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}

        <RevealItem variants={fadeUp}>
          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">Contact</h4>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/65">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
              {company.contact.address}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
              <span className="flex flex-col gap-0.5">
                {company.contact.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/[^0-9+]/g, "")}`} className="transition-colors hover:text-white">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-forest-400" />
              {company.contact.email}
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-forest-400" />
              {company.contact.hours}
            </li>
          </ul>
        </RevealItem>
      </RevealGroup>

      <div className="relative border-t border-white/10 py-6">
        <div className="container-px flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.14em]">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
