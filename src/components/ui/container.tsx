import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * The page's measure. Layout used to live on <body>, which made full-bleed
 * backgrounds impossible; it lives here now so sections can go edge-to-edge
 * and opt into the measure only for their content.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
