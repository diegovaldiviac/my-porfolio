"use client";
import { H2, H5 } from "../components/Headings";
import Button from "../components/Button";
import { useState } from "react";
import Modal from "../components/Modal";
import TextItem from "../components/TextItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPager } from '@fortawesome/free-solid-svg-icons';

function LinkWithIcon({
  link,
  linkIcon
}: {
  link: string;
  linkIcon: any
}) {
  return (
    <a
      className="flex flex-row space-x-2 rounded-lg px-1 pt-0 hover:bg-gray-200 dark:hover:bg-slate-600"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={linkIcon} width={15} height={15} />
      <h5>{link}</h5>
    </a>
  );
}

type LinkProps = {
  link: string;
  linkIcon: any;
};

function Project({
  title,
  date,
  description,
  skills,
  links,
}: {
  title: string;
  date: string;
  description: string[];
  skills?: string[];
  links?: LinkProps[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const bullets = description.map((bullet) => (
    <li key={bullet}>
      <H5>{bullet}</H5>
    </li>
  ));
  const skillItems = skills
    ? skills.map((skill, index) => <TextItem key={index} title={skill} />)
    : null;

  const linksWithIcons = links
    ? links.map((link) => (
        <LinkWithIcon
          key={link.link}
          link={link.link}
          linkIcon={link.linkIcon}
        />
      ))
    : null;

  return (
    <div className="project-container">
      <Button title={title} onClick={() => setIsOpen(true)} />
      <Modal title={title} date={date} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="divide-y">
          <ul className="text-pretty text-white">{bullets}</ul>
          {skills && (
            <div className="mt-2 pt-3">
              <p className="mr-1 inline-flex text-white">
                Skills:{" "}
              </p>
              {skillItems}
            </div>
          )}
          {links && (
            <div className="mt-3 pt-3">
              <div className="inline-flex flex-col">{linksWithIcons}</div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <div className="section-container">
      <H2>{"Projects"}</H2>
      <Project
        title={"EECE Capstone Software"}
        date={"February 2024 - March 2024"}
        description={[
          "Engineered a lightweight 3d printed module containing GPR sensor, modem and a microcontroller.",
          "Contributed to a RTOS firmware capable of executing threads and broadcast sensor data.",
          "Designed a full stack effort to store records in the database, security and networking backend, and a UI capable of displaying live drone location and sensor readings with a gradient of ice thickness on a google map api instance."
        ]}
        skills={["Flask", "React", "PostgresDB", "Circuit Design", "C#", "GoogleMaps API"]}
        links={[
          {
            link: "https://github.com/Capstone-EECE",
            linkIcon: faGithub,
          },
        ]}
      />
      <Project
        title={"Portofio Website"}
        date={"April 2024 - June 2024"}
        description={[
          "Developed personal website from scratch using Next.js and React",
          "Designed and implemented custom components with Tailwind CSS",
          "Implemented dark mode (soon to be visible) and mobile responsiveness",
          "Deployed website to Vercel",
        ]}
        skills={[
          "Next JS",
          "React",
          "Tailwind CSS",
        ]}
        links={[
          {
            link: "https://github.com/diegovaldiviac/my-portofolio",
            linkIcon: faGithub,
          },
        ]}
      />
      <Project
        title={"Collision Algorithm for Free-Flowing Objects"}
        date={"September 2022 - December 2022"}
        description={[
          "Implemented Collision Detection algorithm (SAT) for rotating free-flowing shapes programming a FPGA.",
          "Published an IEEE paper on improvement of runtime when dealing with N objects.",

        ]}
        skills={[
          "C++",
          "FPGA board",
          "VGA Display"
        ]}
        links={[
          {
            link: "https://drive.google.com/file/d/14RMDUnwVr3pGQM87gscvo5LvNAkEoCmg/view",
            linkIcon: faPager,
          },
        ]}
      />
      <Project
        title={"MFJ-Cub Radio"}
        date={"September 2022 - December 2022"}
        description={[
          "Implemented Collision Detection algorithm (SAT) for rotating free-flowing shapes programming a FPGA.",
          "Published an IEEE paper on improvement of runtime when dealing with N objects.",

        ]}
        skills={[
          "Circuit Design and Analysis",
          "Soldering",
          "Signal Generator",
          "Voltmeter"
        ]}
        links={[
          {
            link: "https://docs.google.com/document/d/1IQiRq-wxjB44qmqNFX0BGmjL-_UHzdwGLeS5vFqM8L8/edit?usp=sharing",
            linkIcon: faPager,
          },
        ]}
      />
      <Project
        title={"Multi-Threaded KV Store"}
        date={"February 2024"}
        description={[
          "Extremely fast multi-threaded key-value store written in C",
          "Designed and implemented thread-safe hash table using djb2 hashing algorithm",
          "Ensured thread safety with POSIX mutexes and condition variables",
          "Ranked fastest key-value store out of class of 100+ students",
        ]}
        skills={[
          "C",
          "Multithreading",
          "POSIX Threads",
          "Mutexes",
          "Condition Variables",
        ]}
      />
      <Project
        title={"Labyrinth Game"}
        date={"September 2022 - December 2022"}
        description={[
          "Designed an interactive maze-based game utilizing Java with a Maven build configuration",
          "Implemented a server component using the proxy-client pattern, communicating with JSON messages over TCP",
          "Developed clients that implement the communication-layer aspects of the server-client communication",
          "Wrote over 50 classes and thousands of lines of code ensuring test-driven development to manufacture a cohesive, complete application, with unit and integration tests for the entire platform",
        ]}
        skills={[
          "Java",
          "Multithreading",
          "Object-Oriented Design",
          "JSON",
          "JUnit",
        ]}
        links={[
          {
            link: "https://github.com/nolanpollack/labyrinth-game",
            linkIcon: faGithub,
          },
        ]}
      />
      <Project
        title={"Machine Learning Tiny Island"}
        date={"September 2022 - December 2022"}
        description={[]}
        skills={[
          "Python",
          "TensorFlow",
        ]}
        links={[
          {
            link: "https://github.com/xuhongkang/tiny-islands",
            linkIcon: faGithub,
          },
        ]}
      />
      <Project
        title={"Drag and Drop data Aquisition"}
        date={"September 2022 - December 2022"}
        description={[]}
        skills={[
          "React",
        ]}
        links={[
          {
            link: "https://github.com/diegovaldiviac/Drag-and-Drop",
            linkIcon: faGithub,
          },
        ]}
      />

    </div>
  );
}