"use client";

import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/brand";
import { Container } from "@/components/ui/container";

const SOCIALS = [
  { href: "https://github.com/diegovaldiviac", Icon: GithubIcon, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/diegovaldiviac/",
    Icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/diegovaldiviac/",
    Icon: InstagramIcon,
    label: "Instagram",
  },
  { href: "mailto:diegovaldivia98@gmail.com", Icon: Mail, label: "Email" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} {t("portfolio")}
        </p>
        <div className="flex items-center gap-1">
          {SOCIALS.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
