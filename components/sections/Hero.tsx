"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src="/images/products/reaper-blue-tractor-02.jpg"
          alt="ARGO tractor-mounted multicrop reaper in the field"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="absolute inset-0 bg-forest-radial" />
      </div>

      <div className="container-px relative flex min-h-[88vh] flex-col justify-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-forest-400"
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          ISO 9001:2015 Certified Manufacturer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[4.2rem]"
        >
          Built to cut clean through{" "}
          <span className="text-forest-400">every harvest.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/65"
        >
          {company.shortName} Engineering Industries manufactures multicrop reaper
          machines and harvest equipment engineered for the field conditions of
          Indian agriculture — from smallholder paddy plots to tractor-mounted
          fleets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/products">
              Explore products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:border-forest-400 hover:text-forest-400">
            <Link href="/contact">Contact us</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-4"
        >
          {company.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-white">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="hazard-divider" />
    </section>
  );
}
