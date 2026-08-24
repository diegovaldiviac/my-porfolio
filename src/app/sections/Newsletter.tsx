"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Pane } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

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
    <Pane id="newsletter" label={t("title")}>
      <Reveal>
        <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000,transparent)]"
          />

          <div className="relative max-w-lg">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("description")}
            </p>

            {status === "success" ? (
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent">
                <Check className="h-4 w-4" />
                {t("success")}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("placeholder")}
                    className="h-9 flex-1 rounded-md border border-input bg-background px-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/60 focus:ring-1 focus:ring-ring"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "loading"}
                    className="shrink-0"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t("loading")}
                      </>
                    ) : (
                      <>
                        {t("submit")}
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>

                {status === "error" && (
                  <p className="mt-2 font-mono text-xs text-red-500">{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </Pane>
  );
}
