import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ProductCategoriesSection } from "@/components/sections/ProductCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { StatsSection } from "@/components/sections/StatsSection";
import { Certifications } from "@/components/sections/Certifications";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { FAQSection } from "@/components/ui/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactPreview } from "@/components/sections/ContactPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutPreview />
      <ProductCategoriesSection />
      <WhyChooseUs />
      <ProcessSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <StatsSection />
      <Certifications />
      <IndustriesServed />
      <section className="py-24">
        <div className="container-px max-w-3xl">
          <div className="mb-12 text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-charcoal">
              Common questions before you order.
            </h2>
          </div>
          <FAQSection />
        </div>
      </section>
      <CTASection />
      <ContactPreview />
    </>
  );
}
