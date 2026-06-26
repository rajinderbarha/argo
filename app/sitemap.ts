import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { blogs } from "@/data/blogs";

const BASE_URL = "https://www.argo-india.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/gallery",
    "/testimonials",
    "/blog",
    "/contact",
    "/inquiry",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogs.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
