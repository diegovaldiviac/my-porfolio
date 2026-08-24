import { getTranslations } from "next-intl/server";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/brand";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Pane } from "@/components/ui/section";

const ITEMS = [
  {
    key: "email",
    value: "diegovaldivia98@gmail.com",
    href: "mailto:diegovaldivia98@gmail.com",
    Icon: Mail,
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/diegovaldiviac",
    href: "https://www.linkedin.com/in/diegovaldiviac/",
    Icon: LinkedinIcon,
  },
  {
    key: "phone",
    value: "+1 617 685 8340",
    href: "tel:+16176858340",
    Icon: Phone,
  },
] as const;

export default async function ContactSection() {
  const t = await getTranslations("contact");

  return (
    <Pane id="contact" label={t("title")}>
      <div className="space-y-2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.key} delay={i * 0.05}>
            <a href={item.href} target="_blank" rel="noreferrer" className="block">
              <Card interactive className="group flex items-center gap-3 p-3">
                <item.Icon className="h-4 w-4 shrink-0 text-accent" />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t(item.key)}
                  </p>
                  <p className="truncate text-sm text-foreground">{item.value}</p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Pane>
  );
}
