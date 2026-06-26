"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { productCategories } from "@/data/products";
import { Input } from "./Input";

export function ProductFilter({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<"name" | "category">("name");

  const categories = ["All", ...productCategories.map((c) => c.name)];

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    if (category !== "All") list = list.filter((p) => p.category === category);
    list = [...list].sort((a, b) =>
      sort === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
    );
    return list;
  }, [products, query, category, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 rounded-xl border border-charcoal/10 bg-white p-5 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="pl-11"
            aria-label="Search products"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
          className="h-12 rounded-lg border border-charcoal/15 bg-white px-4 text-sm text-charcoal focus:border-forest focus:outline-none sm:w-64"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "name" | "category")}
          aria-label="Sort products"
          className="h-12 rounded-lg border border-charcoal/15 bg-white px-4 text-sm text-charcoal focus:border-forest focus:outline-none sm:w-48"
        >
          <option value="name">Sort: Name</option>
          <option value="category">Sort: Category</option>
        </select>
      </div>

      <p className="mb-5 text-sm text-charcoal/50">
        Showing {filtered.length} of {products.length} products
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-charcoal/20 p-12 text-center text-charcoal/50">
          No products match your search. Try a different keyword or category.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
