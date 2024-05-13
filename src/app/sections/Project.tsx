"use client";
import Box from "../components/Box";
import { H2, H5 } from "../components/Headings";
import Button from "../components/Button";
import { useState } from "react";
import Modal from "../components/Modal";
import TextItem from "../components/TextItem";
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";

function LinkWithIcon({
  link,
  linkIcon,
  alt,
}: {
  link: string;
  linkIcon: any;
  alt: string;
}) {
  return (
    <a
      className="flex flex-row space-x-2 rounded-lg px-1 pt-0 hover:bg-gray-200 dark:hover:bg-slate-600"
      href={link}
      target="_blank"
    >
      <Image src={linkIcon} alt={alt} width={15} height={15} />
      <H5>{link}</H5>
    </a>
  );
}

type LinkProps = {
  link: string;
  linkIcon: any;
  alt: string;
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
          alt={link.alt}
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
    <div className="skills-container">
      <H2>{"Projects"}</H2>
      <Project
        title={"Resume Website"}
        date={"February 2024 - March 2024"}
        description={[
          "Developed personal website from scratch using Next.js and React",
          "Designed and implemented custom components with Tailwind CSS",
          "Implemented dark mode (soon to be visible) and mobile responsiveness",
          "Deployed website to Vercel",
        ]}
        skills={["Next.js", "React", "Tailwind CSS"]}
        links={[
          {
            link: "https://github.com/diegovaldiviac/my-porfolio",
            linkIcon: faGithub,
            alt: "GitHub Logo",
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
            alt: "GitHub Logo",
          },
        ]}
      />
            <Project
        title={"Machine Learning Tiny Island"}
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
            alt: "GitHub Logo",
          },
        ]}
      />
            <Project
        title={"Drag and Drop react project"}
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
            alt: "GitHub Logo",
          },
        ]}
      />
            <Project
        title={"EECE Capstone Software"}
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
            alt: "GitHub Logo",
          },
        ]}
      />
    </div>
  );
}