import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/ui/BlogCard";
import { Badge } from "@/components/ui/Badge";
import { blogs } from "@/data/blogs";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return buildMetadata({ title: "Post not found", description: "Post not found." });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    description: post.excerpt,
  };

  return (
    <article className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-px max-w-3xl">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

        <Badge className="mt-6">{post.category}</Badge>
        <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-charcoal/55">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {post.readTime}
          </span>
        </div>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="mt-10 flex flex-col gap-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-[16px] leading-relaxed text-charcoal/75">
              {para}
            </p>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="container-px mt-20 max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-charcoal">Related reading</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
