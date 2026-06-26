"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-px flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-hazard-600">Error</span>
      <h1 className="mt-4 font-display text-3xl font-bold text-charcoal">
        Something stalled on our end.
      </h1>
      <p className="mt-3 max-w-md text-sm text-charcoal/60">
        Try again, or get in touch if the problem keeps happening.
      </p>
      <Button onClick={() => reset()} className="mt-8">
        Try again
      </Button>
    </div>
  );
}
