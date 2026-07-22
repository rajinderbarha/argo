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
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className="group relative py-2 text-sm font-medium text-charcoal/70 transition-colors hover:text-forest">
      <span className={active ? "text-forest" : undefined}>{label}</span>
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-forest transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100",
          active && "scale-x-100"
        )}
        aria-hidden="true"
      />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    // Hysteresis: enter "scrolled" past 40px, only leave it below 16px.
    // A single shared threshold flickers the state (and the header height
    // animation) when scroll position hovers right around that pixel,
    // which is common with trackpads/momentum scrolling.
    const ENTER = 40;
    const EXIT = 16;

    function update() {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > EXIT : y > ENTER));
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-400",
        scrolled
          ? "border-b border-charcoal/10 bg-white/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "container-px flex items-center justify-between transition-[height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "h-[68px]" : "h-20"
        )}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <motion.div whileHover={{ rotate: -6, scale: 1.08 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <Image
              src="/images/brand/argo-logo.png"
              alt="ARGO Engineering Industries"
              width={40}
              height={48}
              className="h-11 w-auto"
              priority
            />
          </motion.div>
          <span className="font-display text-lg font-bold leading-none text-charcoal">
            ARGO
            <span className="block font-mono text-[9px] font-normal uppercase tracking-[0.2em] text-forest-600">
              Engineering Industries
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} active={pathname === link.href} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-charcoal/70 transition-colors hover:text-forest"
          >
            <Phone className="h-4 w-4" />
            {company.contact.phone}
          </a>
          <Button asChild size="md">
            <Link href="/inquiry">Get a quote</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 transition-transform active:scale-90 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-charcoal/10 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              className="container-px flex flex-col gap-1 py-4"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-sm font-medium text-charcoal/75 transition-colors hover:bg-mist",
                      pathname === link.href && "text-forest"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}>
                <Button asChild size="md" className="mt-2 w-full">
                  <Link href="/inquiry">Get a quote</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
