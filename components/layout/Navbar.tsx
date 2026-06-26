"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-charcoal/10 bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-px flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/brand/argo-logo.png"
            alt="ARGO Engineering Industries"
            width={40}
            height={48}
            className="h-11 w-auto"
            priority
          />
          <span className="font-display text-lg font-bold leading-none text-charcoal">
            ARGO
            <span className="block font-mono text-[9px] font-normal uppercase tracking-[0.2em] text-forest-600">
              Engineering Industries
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-charcoal/70 transition-colors hover:text-forest",
                pathname === link.href && "text-forest"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-charcoal/70 hover:text-forest"
          >
            <Phone className="h-4 w-4" />
            {company.contact.phone}
          </a>
          <Button asChild size="md">
            <Link href="/inquiry">Get a quote</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-charcoal/10 bg-white lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium text-charcoal/75 hover:bg-mist",
                    pathname === link.href && "text-forest"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="md" className="mt-2">
                <Link href="/inquiry">Get a quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
