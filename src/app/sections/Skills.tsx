import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/reveal";
import { Pane } from "@/components/ui/section";

/**
 * Plain wordmarks rather than icons: the old grid mapped tech to whatever
 * FontAwesome brand icon was closest (a fish for SQL, Stack Overflow for C#),
 * which read as noise. Monospace names are honest and scan faster.
 */
const LANGUAGES = [
  "Ruby",
  "Python",
  "C#",
  "PHP",
  "JavaScript",
  "TypeScript",
  "SQL",
  "HTML",
  "CSS",
];

const TOOLS = [
  "Rails",
  "React",
  "Next.js",
  "Node.js",
  "Symfony",
  "Docker",
  "Terraform",
  "AWS",
  "PostgreSQL",
  "Redis",
  "Grafana",
  "Linux",
  "Git",
  "Jira",
  "Postman",
];

function SkillGroup({
  title,
  items,
  delay,
}: {
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:bg-muted hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default async function SkillsSection() {
  const t = await getTranslations("skills");

  return (
    <Pane id="skills" label={t("title")}>
      <div className="space-y-6">
        <SkillGroup title={t("languages")} items={LANGUAGES} delay={0} />
        <SkillGroup title={t("tools")} items={TOOLS} delay={0.06} />
      </div>
    </Pane>
  );
}
