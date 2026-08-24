import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Pane } from "@/components/ui/section";

const SCHOOLS = [
  { key: "northeastern", image: "/images/northeastern.png" },
  { key: "uc", image: "/images/uc.png" },
  { key: "grange", image: "/images/grange.png" },
] as const;

export default async function EducationSection() {
  const t = await getTranslations("education");

  return (
    <Pane id="education" label={t("title")}>
      {/* Stacked rows rather than a card grid — at half width three columns
          would squeeze each school into an unreadable sliver. */}
      <div className="space-y-2">
        {SCHOOLS.map((school, i) => (
          <Reveal key={school.key} delay={i * 0.05}>
            <Card interactive className="flex items-start gap-3 p-3">
              <Image
                src={school.image}
                alt={t(`${school.key}.school`)}
                width={40}
                height={40}
                className="shrink-0 rounded-md object-contain"
              />
              <div className="min-w-0 flex-1">
                {/* No truncation and no right-aligned date: at half width
                    "Pontificia Universidad Catolica de Chile" needs to wrap. */}
                <h3 className="text-sm font-medium leading-snug tracking-tight text-foreground">
                  {t(`${school.key}.school`)}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {t(`${school.key}.degree`)}
                </p>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t(`${school.key}.date`)}
                </span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Pane>
  );
}
