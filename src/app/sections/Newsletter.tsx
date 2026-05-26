"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { H2 } from "../components/Headings";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSection() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="section-container">
      <div className="divide-y">
        <H2>{t("title")}</H2>
        <div className="w-full rounded-2xl bg-gray-100 px-8 py-14 dark:bg-[#252628] sm:px-14 sm:py-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
              {t("description")}
            </p>

            {status === "success" ? (
              <p className="text-base font-semibold text-green-600 dark:text-green-400">
                {t("success")}
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("placeholder")}
                  className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-orange-400 dark:focus:ring-orange-900"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="cta-btn whitespace-nowrap px-8 py-3 disabled:opacity-50"
                >
                  {status === "loading" ? t("loading") : t("submit")}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="text-sm text-red-500">{errorMsg}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
