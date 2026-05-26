"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} {t("portfolio")}</p>
        <div className="social_icons">
          <a
            href="https://github.com/diegovaldiviac"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "60px" }} />
          </a>
          <a
            href="https://www.instagram.com/diegovaldiviac/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "60px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/diegovaldiviac/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "60px" }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
