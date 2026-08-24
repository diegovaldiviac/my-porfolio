"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";
import VisitCounter from "./VisitCounter";

const LINKS = [
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "skills", key: "skills" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="text-accent">~/</span>diego
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(`links.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <VisitCounter />
          <ThemeToggle />
          <LangToggle />
          <a
            href={t("resumeUrl")}
            target="_blank"
            rel="noreferrer"
            className={`${buttonVariants({ variant: "primary", size: "sm" })} ml-1`}
          >
            {t("resume")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </header>
  );
}
