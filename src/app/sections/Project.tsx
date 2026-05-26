"use client";
import { H2, H5 } from "../components/Headings";
import Button from "../components/Button";
import { useState } from "react";
import Modal from "../components/Modal";
import TextItem from "../components/TextItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

function LinkWithIcon({ link, linkIcon }: { link: string; linkIcon: any }) {
  const truncateUrl = (url: string, length: number) =>
    url.length > length ? `${url.substring(0, length)}...` : url;

  return (
    <a
      className="flex flex-row space-x-2 rounded-lg px-1 pt-0 hover:bg-gray-200 dark:hover:bg-slate-600"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={linkIcon} width={15} height={15} />
      <h5 className="truncate-url">{truncateUrl(link, 30)}</h5>
    </a>
  );
}

type LinkProps = { link: string; linkIcon: any };

function Project({
  title,
  date,
  description,
  skills,
  links,
  image,
  skillsLabel,
}: {
  title: string;
  date: string;
  description: string[];
  skills?: string[];
  links?: LinkProps[];
  image?: string;
  skillsLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const bullets = description.map((bullet) => (
    <li key={bullet}>
      <H5>{bullet}</H5>
    </li>
  ));
  const skillItems = skills?.map((skill, i) => <TextItem key={i} title={skill} />);
  const linksWithIcons = links?.map((l) => (
    <LinkWithIcon key={l.link} link={l.link} linkIcon={l.linkIcon} />
  ));

  return (
    <div>
      <Button title={title} onClick={() => setIsOpen(true)} />
      <Modal title={title} date={date} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="divide-y">
          <ul className="text-pretty text-white">{bullets}</ul>
          {skills && (
            <div className="mt-2 pt-3">
              <p className="mr-1 inline-flex text-white">{skillsLabel}{" "}</p>
              {skillItems}
            </div>
          )}
          {links && (
            <div className="mt-3 pt-3">
              <div className="inline-flex flex-col">{linksWithIcons}</div>
            </div>
          )}
          {image && (
            <div className="mt-3 pt-3">
              <img src={image} alt="Project related" className="w-full" />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const sl = t("skills_label");

  return (
    <div className="section-container">
      <H2>{t("title")}</H2>
      <Project
        title={t("drone.title")}
        date={t("drone.date")}
        description={t.raw("drone.description") as string[]}
        skillsLabel={sl}
        skills={["Flask", "React", "PostgresDB", "Circuit Design", "C#", "SQL-Alchemy"]}
        links={[
          { link: "https://github.com/orgs/Capstone-EECE/repositories?type=public", linkIcon: faGithub },
          { link: "https://drive.google.com/file/d/1R6QcWeeEvPKC4uVtcfPRTW7IHbvR1rxS/view?usp=sharing", linkIcon: faPager },
        ]}
      />
      <Project
        title={t("portfolio.title")}
        date={t("portfolio.date")}
        description={t.raw("portfolio.description") as string[]}
        skillsLabel={sl}
        skills={["Next JS", "React", "Tailwind CSS"]}
        links={[
          { link: "https://github.com/diegovaldiviac/my-portofolio", linkIcon: faGithub },
          { link: "https://diegovaldivacox.com", linkIcon: faPager },
        ]}
      />
      <Project
        title={t("collision.title")}
        date={t("collision.date")}
        description={t.raw("collision.description") as string[]}
        skillsLabel={sl}
        skills={["C++", "FPGA board", "VGA Display", "Multi-threads", "OOP"]}
        links={[
          { link: "https://drive.google.com/file/d/14RMDUnwVr3pGQM87gscvo5LvNAkEoCmg/view", linkIcon: faPager },
          { link: "https://github.com/diegovaldiviac/CollisionAlgorithm", linkIcon: faGithub },
        ]}
      />
      <Project
        title={t("radio.title")}
        date={t("radio.date")}
        description={t.raw("radio.description") as string[]}
        skillsLabel={sl}
        skills={["Circuit Design and Analysis", "Soldering", "Signal Generator", "Voltmeter"]}
        links={[
          { link: "https://drive.google.com/file/d/1yOCNfGf29w8xzfT5s27r2JPz5p2WOx2H/view?usp=sharing", linkIcon: faPager },
        ]}
      />
      <Project
        title={t("kv_store.title")}
        date={t("kv_store.date")}
        description={t.raw("kv_store.description") as string[]}
        skillsLabel={sl}
        skills={["C", "Multithreading", "POSIX Threads", "Mutexes", "Condition Variables"]}
      />
      <Project
        title={t("labyrinth.title")}
        date={t("labyrinth.date")}
        description={t.raw("labyrinth.description") as string[]}
        skillsLabel={sl}
        skills={["Java", "Multithreading", "Object-Oriented Design", "JSON", "JUnit"]}
        links={[
          { link: "https://github.com/nolanpollack/labyrinth-game", linkIcon: faGithub },
        ]}
      />
      <Project
        title={t("ml_island.title")}
        date={t("ml_island.date")}
        description={t.raw("ml_island.description") as string[]}
        skillsLabel={sl}
        skills={["Python", "TensorFlow", "PyUnit", "Algorithms"]}
        links={[
          { link: "https://github.com/xuhongkang/tiny-islands", linkIcon: faGithub },
        ]}
      />
      <Project
        title={t("drag_drop.title")}
        date={t("drag_drop.date")}
        description={t.raw("drag_drop.description") as string[]}
        skillsLabel={sl}
        skills={["React", "AWS Lambda Functions", "AWS Buckets", "Redux"]}
        links={[
          { link: "https://github.com/diegovaldiviac/Drag-and-Drop", linkIcon: faGithub },
        ]}
      />
    </div>
  );
}
