"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type ProjectLink = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type ProjectMeta = {
  key: string;
  skills: string[];
  links?: ProjectLink[];
};

/** Content lives in messages/*.json; only the non-translatable metadata is here. */
const PROJECTS: ProjectMeta[] = [
  {
    key: "easycancha",
    skills: [
      "Python",
      "Playwright",
      "BeautifulSoup",
      "Docker",
      "Azure Container Apps",
    ],
    links: [
      { href: "https://github.com/diegovaldiviac/easycancha-scraper", icon: GithubIcon },
    ],
  },
  {
    key: "portalinmobiliario",
    skills: [
      "Python",
      "Playwright",
      "BeautifulSoup",
      "Telegram Bot API",
      "Docker",
      "Azure Container Apps",
    ],
    links: [
      {
        href: "https://github.com/diegovaldiviac/portalinmobiliario-scraper",
        icon: GithubIcon,
      },
    ],
  },
  {
    key: "fintech_newsletter",
    skills: ["Python", "GitHub Actions", "GPT-4o", "Claude", "Resend", "NewsAPI"],
    links: [
      { href: "https://github.com/diegovaldiviac/fintech-newsletter", icon: GithubIcon },
    ],
  },
  {
    key: "portfolio",
    skills: ["Next.js", "React", "Tailwind CSS"],
    links: [
      { href: "https://github.com/diegovaldiviac/my-porfolio", icon: GithubIcon },
      { href: "https://diegovaldivacox.com", icon: ExternalLink },
    ],
  },
  {
    key: "drone",
    skills: ["Flask", "React", "PostgreSQL", "Circuit Design", "C#", "SQLAlchemy"],
    links: [
      {
        href: "https://github.com/orgs/Capstone-EECE/repositories?type=public",
        icon: GithubIcon,
      },
      {
        href: "https://drive.google.com/file/d/1R6QcWeeEvPKC4uVtcfPRTW7IHbvR1rxS/view?usp=sharing",
        icon: ExternalLink,
      },
    ],
  },
  {
    key: "kv_store",
    skills: ["C", "Multithreading", "POSIX Threads", "Mutexes"],
  },
  {
    key: "collision",
    skills: ["C++", "FPGA", "VGA Display", "Multithreading", "OOP"],
    links: [
      {
        href: "https://github.com/diegovaldiviac/CollisionAlgorithm",
        icon: GithubIcon,
      },
      {
        href: "https://drive.google.com/file/d/14RMDUnwVr3pGQM87gscvo5LvNAkEoCmg/view",
        icon: ExternalLink,
      },
    ],
  },
  {
    key: "labyrinth",
    skills: ["Java", "Multithreading", "OOP", "JSON", "JUnit"],
    links: [
      { href: "https://github.com/nolanpollack/labyrinth-game", icon: GithubIcon },
    ],
  },
  {
    key: "ml_island",
    skills: ["Python", "TensorFlow", "PyUnit", "Algorithms"],
    links: [{ href: "https://github.com/xuhongkang/tiny-islands", icon: GithubIcon }],
  },
  {
    key: "drag_drop",
    skills: ["React", "AWS Lambda", "S3", "Redux"],
    links: [
      { href: "https://github.com/diegovaldiviac/Drag-and-Drop", icon: GithubIcon },
    ],
  },
  {
    key: "radio",
    skills: ["Circuit Design", "Soldering", "Signal Generator", "Voltmeter"],
    links: [
      {
        href: "https://drive.google.com/file/d/1yOCNfGf29w8xzfT5s27r2JPz5p2WOx2H/view?usp=sharing",
        icon: ExternalLink,
      },
    ],
  },
];

function shortenUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const active = PROJECTS.find((p) => p.key === openKey) ?? null;

  return (
    <Section id="projects" label={t("title")}>
      <div className="grid gap-3 sm:grid-cols-2">
        {PROJECTS.map((project, i) => {
          const description = t.raw(`${project.key}.description`) as string[];

          return (
            <Reveal key={project.key} delay={Math.min(i, 5) * 0.04}>
              <Card
                interactive
                className="group h-full cursor-pointer p-4"
                // The whole card is the affordance; a button would fight the layout.
              >
                <button
                  type="button"
                  onClick={() => setOpenKey(project.key)}
                  className="flex h-full w-full flex-col text-left focus-visible:outline-none"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-medium leading-snug tracking-tight text-foreground">
                      {t(`${project.key}.title`)}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>

                  <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {description[0]}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {project.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="font-mono text-[11px] text-muted-foreground">
                        +{project.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t(`${project.key}.date`)}
                  </span>
                </button>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Dialog open={openKey !== null} onOpenChange={(o) => !o && setOpenKey(null)}>
        <DialogContent>
          {active && (
            <>
              <DialogTitle>{t(`${active.key}.title`)}</DialogTitle>
              <DialogDescription className="mt-1 uppercase tracking-wider">
                {t(`${active.key}.date`)}
              </DialogDescription>

              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {(t.raw(`${active.key}.description`) as string[]).map((line, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-border"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-5 border-t border-border pt-5">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t("skills_label")}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {active.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>

              {active.links && (
                <div className="mt-5 flex flex-col gap-1 border-t border-border pt-5">
                  {active.links.map(({ href, icon: Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{shortenUrl(href)}</span>
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
