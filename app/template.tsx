import { PageTransition } from "@/components/ui/PageTransition";

/**
 * template.tsx remounts on every navigation (unlike layout.tsx, which persists),
 * which is exactly the lifecycle a page-enter animation needs — and it's handled
 * by Next.js itself, so it doesn't fight with Suspense/streaming the way a
 * manual AnimatePresence-in-layout approach can.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
