import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";

const SOCIALS = [
  { href: "mailto:diegovaldivia98@gmail.com", Icon: Mail, label: "Email" },
  { href: "https://github.com/diegovaldiviac", Icon: GithubIcon, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/diegovaldiviac/",
    Icon: LinkedinIcon,
    label: "LinkedIn",
  },
];

export default async function Hero() {
  const t = await getTranslations("hero");
  const nav = await getTranslations("nav");

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Full-bleed dot field, masked so it dissolves toward the content. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_100%)]"
      />

      <Container className="relative py-12 sm:py-16">
        <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr] md:gap-10">
          {/* Portrait sits first on mobile so the page opens on a face. */}
          <Reveal className="order-first md:order-last">
            <div className="mx-auto w-40 sm:w-48 md:mx-0 md:w-full md:max-w-[260px]">
              <Image
                src="/images/image0.jpg"
                alt={nav("name")}
                width={921}
                height={1795}
                priority
                sizes="(min-width: 768px) 260px, 192px"
                className="aspect-[4/5] w-full rounded-lg border border-border object-cover object-top"
              />
            </div>
          </Reveal>

          <div className="order-last md:order-first">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {t("status")}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="text-balance text-4xl font-semibold tracking-tighter sm:text-5xl">
                {nav("name")}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted-foreground">
                <span className="text-foreground">{t("role")}</span>
                <span className="text-border">/</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {t("location")}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground">
                {t("tagline")}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className={buttonVariants({ variant: "primary", size: "md" })}
                >
                  {t("cta_work")}
                  <ArrowDown className="h-4 w-4" />
                </a>

                <div className="flex items-center gap-1">
                  {SOCIALS.map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({ variant: "ghost", size: "icon" })}
                    >
                      <Icon className="h-4 w-4 text-muted-foreground transition-colors hover:text-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
