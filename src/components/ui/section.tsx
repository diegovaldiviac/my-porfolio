import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./container";
import { Reveal } from "./reveal";

/**
 * A titled band. The label is small, uppercase and monospace — metadata, not a
 * billboard — so the content inside carries the visual weight.
 */
export function Section({
  id,
  label,
  children,
  className,
}: {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-9 sm:py-12", className)}>
      <Container>
        {label && (
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
