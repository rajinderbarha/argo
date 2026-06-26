import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-charcoal/55">
      <Link href="/" className="flex items-center gap-1 hover:text-forest">
        <Home className="h-3.5 w-3.5" />
      </Link>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-charcoal/30" />
          {item.href ? (
            <Link href={item.href} className="hover:text-forest">
              {item.label}
            </Link>
          ) : (
            <span className="text-charcoal" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
