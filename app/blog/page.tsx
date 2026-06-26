import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogs } from "@/data/blogs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Buying guides, maintenance checklists, and industry insights from the ARGO Engineering Industries product and service teams.",
  path: "/blog",
});

export default function BlogPage() {
  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

  return (
    <div className="py-16">
      <div className="container-px">
        <Breadcrumbs items={[{ label: "Blog" }]} />
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
          Field notes from ARGO
        </h1>
        <p className="mt-4 max-w-xl text-[15px] text-charcoal/60">
          Practical guidance on choosing, maintaining, and getting the most out of your reaper equipment.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-charcoal/15 px-4 py-1.5 text-xs font-medium text-charcoal/60"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
