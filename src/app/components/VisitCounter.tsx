"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue, useTransform, motion } from "motion/react";
import { useTranslations } from "next-intl";

const BASELINE = 150;

export default function VisitCounter() {
  const t = useTranslations("visits");
  const [count, setCount] = useState<number | null>(null);
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    fetch("/api/visits", { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (data.count !== null && data.count !== undefined) {
          setCount(data.count + BASELINE);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (count === null) return;
    const controls = animate(value, count, { duration: 1.1, ease: "easeOut" });
    return () => controls.stop();
  }, [count, value]);

  // Reserve the slot so the navbar doesn't shift when the count lands.
  if (count === null) return <div className="hidden h-9 w-20 sm:block" />;

  return (
    <div
      title={t("tooltip")}
      className="hidden items-center gap-1.5 px-2 font-mono text-[11px] text-muted-foreground sm:flex"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <motion.span className="tabular-nums">{display}</motion.span>
      <span>{t("label")}</span>
    </div>
  );
}
