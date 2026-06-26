import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export function ContactPreview() {
  return (
    <section className="py-24">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-charcoal/10 bg-white p-8 sm:grid-cols-3 lg:p-12">
          <div>
            <span className="section-eyebrow">Get in touch</span>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-charcoal">
              Have a question before you order?
            </h2>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-600"
            >
              Visit contact page
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
            <div>
              <p className="text-sm font-semibold text-charcoal">Factory address</p>
              <p className="mt-1 text-sm text-charcoal/60">{company.contact.address}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-forest" />
              <span className="text-sm text-charcoal/70">{company.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-forest" />
              <span className="text-sm text-charcoal/70">{company.contact.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
