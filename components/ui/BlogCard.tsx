import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BlogPost } from "@/types";
import { Badge } from "./Badge";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Badge>{post.category}</Badge>
        <h3 className="font-display text-base font-semibold leading-snug text-charcoal">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-charcoal/60">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between border-t border-charcoal/10 pt-3 text-xs text-charcoal/50">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1 font-semibold text-forest">
            Read
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
