import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * The page's measure. Layout used to live on <body>, which made full-bleed
 * backgrounds impossible; it lives here now so sections can go edge-to-edge
 * and opt into the measure only for their content.
 *
 * "wide" is the default — grids, galleries and the contribution graph all want
 * the room. "measure" is for anything that is mostly prose, where long lines
 * hurt readability.
 */
export function Container({
  children,
  className,
  size = "wide",
}: {
  children: ReactNode;
  className?: string;
  size?: "wide" | "measure";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "measure" ? "max-w-3xl" : "max-w-5xl",
        className
      )}
    >
      {children}
    </div>
  );
}
