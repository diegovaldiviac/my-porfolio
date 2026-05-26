import { H2, H3, H5 } from "../components/Headings";
import { getTranslations } from "next-intl/server";

function EducationItem({
  school,
  degree,
  date,
}: {
  school: string;
  degree: string;
  date: string;
}) {
  return (
    <div className="py-3 px-4 w-full">
      <div className="flex flex-row items-start justify-between">
        <H3>{school}</H3>
        <div className="hidden text-nowrap lg:block">
          <H5>{date}</H5>
        </div>
      </div>
      <H5>{degree}</H5>
      <div className="text-nowrap lg:hidden">
        <H5>{date}</H5>
      </div>
    </div>
  );
}

export default async function EducationSection() {
  const t = await getTranslations("education");

  return (
    <div className="section-container">
      <div className="divide-y">
        <H2>{t("title")}</H2>
        <EducationItem
          school={t("northeastern.school")}
          degree={t("northeastern.degree")}
          date={t("northeastern.date")}
        />
        <EducationItem
          school={t("uc.school")}
          degree={t("uc.degree")}
          date={t("uc.date")}
        />
        <EducationItem
          school={t("grange.school")}
          degree={t("grange.degree")}
          date={t("grange.date")}
        />
      </div>
    </div>
  );
}
