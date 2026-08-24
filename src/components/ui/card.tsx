import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Replaces Box. Flat surface with a hairline border — no drop shadows, which
 * are what made the old cards read as 2019 Material.
 */
export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground",
        interactive &&
          "transition-colors duration-200 hover:border-accent/40 hover:bg-muted/60",
        className
      )}
    >
      {children}
    </div>
  );
}
