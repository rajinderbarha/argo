"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-white shadow-[0_8px_24px_-8px_rgba(14,122,53,0.55)] hover:shadow-[0_12px_32px_-6px_rgba(14,122,53,0.7)] hover:bg-forest-600",
        hazard: "bg-hazard text-charcoal hover:bg-hazard-600",
        outline:
          "border border-charcoal/15 bg-transparent text-charcoal hover:border-forest hover:text-forest",
        ghost: "bg-transparent text-charcoal hover:bg-charcoal/5",
        light: "bg-white text-charcoal hover:bg-mist",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Disable the magnetic cursor-follow + ripple micro-interactions (kept on by default). */
  noFx?: boolean;
}

type Ripple = { id: number; x: number; y: number; size: number };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      noFx = false,
      onMouseMove,
      onMouseLeave,
      onClick,
      style,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const Comp = asChild ? Slot : "button";
    const innerRef = React.useRef<HTMLButtonElement | null>(null);
    const [transform, setTransform] = React.useState("translate(0px, 0px)");
    const [ripples, setRipples] = React.useState<Ripple[]>([]);
    const rippleId = React.useRef(0);

    const setRefs = React.useCallback(
      (node: HTMLButtonElement | null) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef)
          (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      },
      [forwardedRef]
    );

    function prefersReduced() {
      return (
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
      );
    }

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
      onMouseMove?.(e);
      if (noFx || prefersReduced() || !innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      setTransform(`translate(${relX * 0.18}px, ${relY * 0.32}px)`);
    }

    function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
      onMouseLeave?.(e);
      setTransform("translate(0px, 0px)");
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      onClick?.(e);
      if (noFx || prefersReduced() || !innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.6;
      const id = rippleId.current++;
      setRipples((r) => [
        ...r,
        { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size },
      ]);
      window.setTimeout(() => {
        setRipples((r) => r.filter((ripple) => ripple.id !== id));
      }, 650);
    }

    // Slot (asChild) requires exactly one element child, so the ripple overlay
    // — which would add sibling nodes — only renders for plain <button> usage.
    const showRipples = !noFx && !asChild;

    return (
      <Comp
        ref={setRefs}
        className={cn(buttonVariants({ variant, size, className }), showRipples && "relative overflow-hidden")}
        style={{ ...style, transform: noFx ? style?.transform : transform }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {children}
            {showRipples &&
              ripples.map((r) => (
                <span
                  key={r.id}
                  aria-hidden="true"
                  className="pointer-events-none absolute rounded-full bg-white/35"
                  style={{
                    left: r.x,
                    top: r.y,
                    width: r.size,
                    height: r.size,
                    animation: "argo-ripple 650ms ease-out forwards",
                  }}
                />
              ))}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
