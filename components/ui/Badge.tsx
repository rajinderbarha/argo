import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-forest/20 bg-forest-50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-forest-600",
        className
      )}
    >
      {children}
    </span>
  );
}
