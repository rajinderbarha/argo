import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-px flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-forest">404</span>
      <h1 className="mt-4 font-display text-3xl font-bold text-charcoal sm:text-4xl">
        This field hasn't been planted yet.
      </h1>
      <p className="mt-3 max-w-md text-sm text-charcoal/60">
        The page you're looking for doesn't exist or may have moved. Try the catalog or head back home.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/products">View products</Link>
        </Button>
      </div>
    </div>
  );
}
