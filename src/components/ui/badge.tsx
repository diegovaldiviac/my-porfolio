import { cn } from "@/lib/utils";

/** Replaces TextItem. Monospace to read as a tag, not prose. */
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
        "inline-flex items-center rounded-md border border-border bg-muted px-2 py-0.5",
        "font-mono text-[11px] text-muted-foreground transition-colors",
        "hover:border-accent/40 hover:text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
