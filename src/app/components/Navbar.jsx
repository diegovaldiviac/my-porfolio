"use client";
import ContactSection from "../sections/Contact";
import { H1 } from "./Headings";
import { useTranslations } from "next-intl";
import LangToggle from "./LangToggle";

const Navbar = () => {
  const t = useTranslations("nav");
  return (
    <div className="nav-container">
      <div>
        <H1>{t("name")}</H1>
        <ContactSection />
      </div>
      <div className="flex items-center gap-2">
        <LangToggle />
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vS2lPVNRl-q-DlRJ8R3b1kgyPqOTeGbMIPaNP0XhJCtpml0fdkK2koMe3XZ88aSHw/pub"
          className="cta-btn"
        >
          {t("resume")}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
