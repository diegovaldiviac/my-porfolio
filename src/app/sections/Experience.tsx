import { H2, H3, H4, H5 } from "../components/Headings";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import "../globals.css";

function WorkExperience({
  title,
  company,
  date,
  children,
}: {
  title: string;
  company: string;
  date: string;
  children: ReactNode;
}) {
  return (
    <div className="py-3 px-5">
      <div className="flex flex-row items-start justify-between text-pretty">
        <H3>{title}</H3>
        <div className="hidden text-nowrap lg:block">
          <H5>{date}</H5>
        </div>
      </div>
      <div className="font-semibold">
        <H4>{company}</H4>
      </div>
      <div className="text-nowrap lg:hidden">
        <H5>{date}</H5>
      </div>
      {children}
    </div>
  );
}

function ExperienceBullets({ children }: { children: ReactNode }) {
  return (
    <ul className="mx-10 my-1 list-outside list-disc space-y-1.5 text-white">
      {children}
    </ul>
  );
}

export default async function ExperienceSection() {
  const t = await getTranslations("experience");

  const bukBullets = t.raw("buk.bullets") as string[];
  const linevisionBullets = t.raw("linevision.bullets") as string[];
  const raysecurBullets = t.raw("raysecur.bullets") as string[];

  return (
    <div className="section-container">
      <div className="divide-y">
        <H2>{t("title")}</H2>
        <WorkExperience
          title={t("buk.title")}
          company={t("buk.company")}
          date={t("buk.date")}
        >
          <ExperienceBullets>
            {bukBullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ExperienceBullets>
        </WorkExperience>
        <WorkExperience
          title={t("linevision.title")}
          company={t("linevision.company")}
          date={t("linevision.date")}
        >
          <ExperienceBullets>
            {linevisionBullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ExperienceBullets>
        </WorkExperience>
        <WorkExperience
          title={t("raysecur.title")}
          company={t("raysecur.company")}
          date={t("raysecur.date")}
        >
          <ExperienceBullets>
            {raysecurBullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ExperienceBullets>
        </WorkExperience>
      </div>
    </div>
  );
}
