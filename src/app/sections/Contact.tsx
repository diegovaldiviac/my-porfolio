import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function ContactItem({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon: any;
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="mx-1 flex space-x-2 text-nowrap rounded-lg px-1.5 py-0.5 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-slate-600">
        <FontAwesomeIcon
          icon={icon}
          className="text-orange-400"
          width={15}
          height={15}
        />
        <p className="flex-1 text-gray-600 dark:text-slate-400">{title}</p>
      </div>
    </a>
  );
}

function ContactSection() {
  return (
    <div className="flex flex-row flex-wrap justify-around">
      <ContactItem
        title={"diegovaldivia98@gmail.com"}
        link={"mailto:diegovaldivia98@gmail.com"}
        icon={faEnvelope}
      />
      <ContactItem
        title={"linkedin.com/in/diegovaldiviac"}
        link={"https://www.linkedin.com/in/diegovaldiviac/"}
        icon={faLinkedin}
      />
    <ContactItem
        title={"+1 617 685 8340"}
        link={"tel:1-617-685-8340"}
        icon={faPhone}
      />
    </div>
  );
}

export default ContactSection;
