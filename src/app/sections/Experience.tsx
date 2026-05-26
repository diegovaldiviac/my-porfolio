import { H2, H3, H4, H5 } from "../components/Headings";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import "../globals.css";

function WorkExperience({
  title,
  company,
  date,
  image,
  children,
}: {
  title: string;
  company: string;
  date: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <div className="py-3 px-5">
      <div className="flex flex-row items-start gap-4">
        <div className="shrink-0 pt-1">
          <Image
            src={image}
            alt={company}
            width={200}
            height={200}
            className="rounded-md object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
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
      </div>
    </div>
  );
}

function ExperienceBullets({ children }: { children: ReactNode }) {
  return (
    <ul className="mx-10 my-2 list-outside list-disc space-y-3 text-gray-900 dark:text-white">
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
          image="/images/buk.png"
        >
          <ExperienceBullets>
            {bukBullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ExperienceBullets>
        </WorkExperience>
        <WorkExperience
          title={t("linevision.title")}
          company={t("linevision.company")}
          date={t("linevision.date")}
          image="/images/linevision.png"
        >
          <ExperienceBullets>
            {linevisionBullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ExperienceBullets>
        </WorkExperience>
        <WorkExperience
          title={t("raysecur.title")}
          company={t("raysecur.company")}
          date={t("raysecur.date")}
          image="/images/raysecur.png"
        >
          <ExperienceBullets>
            {raysecurBullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ExperienceBullets>
        </WorkExperience>
      </div>
    </div>
  );
}
