import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const SCHOOLS = [
  { key: "northeastern", image: "/images/northeastern.png" },
  { key: "uc", image: "/images/uc.png" },
  { key: "grange", image: "/images/grange.png" },
] as const;

export default async function EducationSection() {
  const t = await getTranslations("education");

  return (
    <Section id="education" label={t("title")}>
      <div className="grid gap-3 sm:grid-cols-3">
        {SCHOOLS.map((school, i) => (
          <Reveal key={school.key} delay={i * 0.05}>
            <Card interactive className="flex h-full flex-col gap-3 p-4">
              <Image
                src={school.image}
                alt={t(`${school.key}.school`)}
                width={40}
                height={40}
                className="rounded-md object-contain"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-snug tracking-tight text-foreground">
                  {t(`${school.key}.school`)}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t(`${school.key}.degree`)}
                </p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {t(`${school.key}.date`)}
              </span>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
