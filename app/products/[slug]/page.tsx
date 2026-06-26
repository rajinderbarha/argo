import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductGallery } from "@/components/ui/ProductGallery";
import { ProductCard } from "@/components/ui/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fadeUp, slideLeft, slideRight, scaleIn } from "@/lib/animations";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return buildMetadata({ title: "Product not found", description: "Product not found." });
  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    category: product.category,
    brand: { "@type": "Brand", name: "ARGO Engineering Industries" },
  };

  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-px">
        <Breadcrumbs
          items={[{ label: "Products", href: "/products" }, { label: product.name }]}
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <Reveal variants={slideRight}>
            <ProductGallery images={product.gallery} name={product.name} />
          </Reveal>

          <Reveal variants={slideLeft} delay={0.1}>
            <Badge>{product.category}</Badge>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/65">
              {product.description}
            </p>

            {product.colors && (
              <div className="mt-6">
                <p className="spec-label mb-2">Available colours</p>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-charcoal/15 px-3 py-1 text-xs font-medium text-charcoal/70 transition-colors hover:border-forest hover:text-forest"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <RevealGroup
              className="mt-8 grid grid-cols-1 gap-3 rounded-xl border border-charcoal/10 bg-mist/40 p-5 sm:grid-cols-2"
              stagger={0.06}
            >
              {product.specs.map((spec) => (
                <RevealItem key={spec.label} variants={fadeUp} className="flex flex-col gap-0.5">
                  <span className="spec-label">{spec.label}</span>
                  <span className="text-sm font-medium text-charcoal">{spec.value}</span>
                </RevealItem>
              ))}
            </RevealGroup>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#inquire">Enquire about this product</a>
              </Button>
              <Button variant="outline" size="lg">
                Download brochure
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal variants={fadeUp}>
            <h2 className="font-display text-2xl font-bold text-charcoal">Key features</h2>
            <RevealGroup className="mt-5 flex flex-col gap-3" stagger={0.08}>
              {product.features.map((f) => (
                <RevealItem
                  key={f}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-charcoal/70"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                  {f}
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1}>
            <h2 className="font-display text-2xl font-bold text-charcoal">Use cases</h2>
            <RevealGroup className="mt-5 flex flex-col gap-3" stagger={0.08}>
              {product.useCases.map((u) => (
                <RevealItem
                  key={u}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-charcoal/70"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                  {u}
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        </div>

        <Reveal variants={scaleIn} id="inquire" className="mt-20 rounded-2xl border border-charcoal/10 bg-mist/30 p-8 lg:p-12">
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Inquire about the {product.name}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-charcoal/60">
            Tell us your quantity and region — our B2B team will follow up with pricing and lead time.
          </p>
          <div className="mt-8 max-w-2xl">
            <InquiryForm defaultProduct={product.name} />
          </div>
        </Reveal>

        {related.length > 0 && (
          <div className="mt-20">
            <Reveal variants={fadeUp}>
              <h2 className="font-display text-2xl font-bold text-charcoal">Related products</h2>
            </Reveal>
            <RevealGroup className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.15}>
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </RevealGroup>
          </div>
        )}
      </div>
    </div>
  );
}
