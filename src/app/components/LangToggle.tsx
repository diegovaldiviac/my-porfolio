"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LangToggle() {
  const locale = useLocale();
  const router = useRouter();

  const toggle = () => {
    const next = locale === "en" ? "es" : "en";
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <button
      onClick={toggle}
      title={locale === "en" ? "Cambiar a Español" : "Switch to English"}
      className="flex items-center justify-center rounded-lg p-1.5 text-2xl transition-transform hover:scale-110 active:scale-95"
    >
      {locale === "en" ? "🇨🇱" : "🇺🇸"}
    </button>
  );
}
