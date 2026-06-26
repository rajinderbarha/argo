import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bulk Order Inquiry",
  description:
    "Submit a B2B bulk order inquiry to ARGO Engineering Industries for dealer pricing, lead times, and custom colour runs.",
  path: "/inquiry",
});

export default function InquiryPage() {
  return (
    <div className="py-16">
      <div className="container-px max-w-2xl">
        <Breadcrumbs items={[{ label: "Inquiry" }]} />
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
          Bulk order inquiry
        </h1>
        <p className="mt-4 text-[15px] text-charcoal/60">
          For dealers and custom hiring centres ordering multiple units. Tell us the product,
          quantity, and region, and our B2B sales team will respond with pricing and lead time
          within one business day.
        </p>
        <div className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-8 lg:p-10">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
