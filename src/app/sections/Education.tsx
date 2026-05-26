import { H2, H3, H5 } from "../components/Headings";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

function EducationItem({
  school,
  degree,
  date,
  image,
}: {
  school: string;
  degree: string;
  date: string;
  image: string;
}) {
  return (
    <div className="flex flex-row items-center gap-4 px-4 py-3 w-full">
      <div className="shrink-0">
        <Image
          src={image}
          alt={school}
          width={72}
          height={72}
          className="rounded-md object-contain"
        />
      </div>
      <div className="flex-1 min-w-0">
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
          image="/images/northeastern.png"
        />
        <EducationItem
          school={t("uc.school")}
          degree={t("uc.degree")}
          date={t("uc.date")}
          image="/images/uc.png"
        />
        <EducationItem
          school={t("grange.school")}
          degree={t("grange.degree")}
          date={t("grange.date")}
          image="/images/grange.png"
        />
      </div>
    </div>
  );
}
