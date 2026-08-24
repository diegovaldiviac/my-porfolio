import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./container";
import { Reveal } from "./reveal";

/**
 * Small uppercase mono rule that titles a block. Exported on its own so paired
 * half-width panes can carry the same heading treatment as a full band.
 */
export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-5 flex items-center gap-3", className)}>
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

/** A full-width titled band. */
export function Section({
  id,
  label,
  children,
  className,
  size,
}: {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  size?: "wide" | "measure";
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-9 sm:py-12", className)}>
      <Container size={size}>
        {label && (
          <Reveal>
            <SectionLabel>{label}</SectionLabel>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}

/**
 * Two independent blocks sharing one band, side by side on large screens.
 * Pairing the short sections is what stops the page reading as an endless
 * single column.
 */
export function PairedBand({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-9 sm:py-12", className)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">{children}</div>
      </Container>
    </section>
  );
}

/** A titled half-width block for use inside PairedBand. */
export function Pane({
  id,
  label,
  children,
}: {
  id?: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-20">
      <Reveal>
        <SectionLabel>{label}</SectionLabel>
      </Reveal>
      {children}
    </div>
  );
}
