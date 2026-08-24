"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LangToggle() {
  const locale = useLocale();
  const router = useRouter();

  const toggle = () => {
    const next = locale === "en" ? "es" : "en";
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      title={locale === "en" ? "Cambiar a Español" : "Switch to English"}
      aria-label={locale === "en" ? "Cambiar a Español" : "Switch to English"}
      className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground"
    >
      {locale === "en" ? "es" : "en"}
    </Button>
  );
}
