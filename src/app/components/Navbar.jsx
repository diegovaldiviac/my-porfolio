"use client";
import ContactSection from "../sections/Contact";
import { H1 } from "./Headings";
import { useTranslations } from "next-intl";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";
import VisitCounter from "./VisitCounter";

const Navbar = () => {
  const t = useTranslations("nav");
  return (
    <div className="nav-container">
      <div>
        <H1>{t("name")}</H1>
        <ContactSection />
      </div>
      <div className="flex items-center gap-3">
        <VisitCounter />
        <ThemeToggle />
        <LangToggle />
        <a
          href={t("resumeUrl")}
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          {t("resume")}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
