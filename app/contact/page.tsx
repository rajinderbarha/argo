import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp, slideRight, slideLeft } from "@/lib/animations";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | ARGO Engineering Industries, Rajpura, Punjab",
  description:
    "Contact ARGO Engineering Industries in Rajpura, Punjab — factory address near NH-1, phone numbers, email and working hours. Punjab manufacturer of Mini Reaper and rice mill machines.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container-px">
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <Reveal>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            Let's talk about your harvest season
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <RevealGroup className="flex flex-col gap-6" stagger={0.1}>
            <RevealItem variants={slideRight} className="card-glow flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="text-sm font-semibold text-charcoal">Factory address</p>
                <p className="mt-1 text-sm text-charcoal/60">{company.contact.address}</p>
              </div>
            </RevealItem>
            <RevealItem variants={slideRight} className="card-glow flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="text-sm font-semibold text-charcoal">Phone</p>
                <p className="mt-1 flex flex-col text-sm text-charcoal/60">
                  {company.contact.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/[^0-9+]/g, "")}`} className="transition-colors hover:text-forest">
                      {p}
                    </a>
                  ))}
                </p>
              </div>
            </RevealItem>
            <RevealItem variants={slideRight} className="card-glow flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="text-sm font-semibold text-charcoal">Email</p>
                <p className="mt-1 text-sm text-charcoal/60">{company.contact.email}</p>
              </div>
            </RevealItem>
            <RevealItem variants={slideRight} className="card-glow flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="text-sm font-semibold text-charcoal">Working hours</p>
                <p className="mt-1 text-sm text-charcoal/60">{company.contact.hours}</p>
              </div>
            </RevealItem>

            <RevealItem variants={slideRight} className="card-glow flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="text-sm font-semibold text-charcoal">GSTIN</p>
                <p className="mt-1 font-mono text-sm text-charcoal/60">{company.gstin}</p>
              </div>
            </RevealItem>

            <RevealItem variants={fadeUp} className="overflow-hidden rounded-xl border border-charcoal/10">
              <iframe
                src={company.contact.mapEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                title="ARGO Engineering Industries location map"
              />
            </RevealItem>
          </RevealGroup>

          <Reveal variants={slideLeft} delay={0.1} className="rounded-2xl border border-charcoal/10 bg-white p-8 lg:p-10">
            <h2 className="font-display text-xl font-bold text-charcoal">Send us a message</h2>
            <p className="mt-2 text-sm text-charcoal/60">
              For bulk dealer orders, use our{" "}
              <a href="/inquiry" className="font-semibold text-forest hover:underline">
                dedicated inquiry form
              </a>{" "}
              instead — it routes straight to our B2B sales team.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
