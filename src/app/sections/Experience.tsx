import { getTranslations } from "next-intl/server";
import ExpandableImage from "../components/ExpandableImage";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

/** Intrinsic sizes travel with the asset so the enlarged view never upscales. */
const ROLES = [
  {
    key: "larrainvial",
    image: "/images/larrainvial.png",
    width: 225,
    height: 225,
  },
  { key: "buk", image: "/images/buk.png", width: 444, height: 387 },
  {
    key: "linevision",
    image: "/images/linevision.png",
    width: 459,
    height: 455,
  },
  { key: "raysecur", image: "/images/raysecur.png", width: 861, height: 854 },
] as const;

export default async function ExperienceSection() {
  const t = await getTranslations("experience");

  return (
    <Section id="experience" label={t("title")}>
      {/* Continuous rail; the company logo IS the node sitting on it. */}
      <ol className="relative ml-7 border-l border-border">
        {ROLES.map((role, i) => {
          const bullets = t.raw(`${role.key}.bullets`) as string[];

          return (
            <li key={role.key} className="group relative pb-14 pl-10 last:pb-0">
              {/* Rule sitting midway through the gap, meeting the vertical
                    rail in a T so consecutive roles read as separate blocks. */}
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute inset-x-0 -top-7 h-px bg-border"
                />
              )}

              {/* Straddles the rail and masks it, so the mark reads as the node. */}
              <ExpandableImage
                src={role.image}
                alt={t(`${role.key}.company`)}
                width={role.width}
                height={role.height}
                sizes="56px"
                triggerClassName="absolute -left-7 top-0 flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background p-2 transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group-hover:border-accent/40"
                imageClassName="h-full w-full object-contain"
              />

              {/* Meta parks in a fixed left column on wide screens so the
                    bullets start at a consistent x and the block runs shorter. */}
              <Reveal delay={i * 0.05}>
                <div className="grid gap-x-8 gap-y-3 lg:grid-cols-[13rem_1fr]">
                  <div className="min-h-[3.5rem]">
                    <h3 className="font-medium tracking-tight text-foreground">
                      {t(`${role.key}.title`)}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {t(`${role.key}.company`)}
                    </p>
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {t(`${role.key}.date`)}
                    </span>
                  </div>

                  <ul className="space-y-2 lg:pt-0.5">
                    {bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-border"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
