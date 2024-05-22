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

  const truncateUrl = (url: string, length: number) => {
    return url.length > length ? `${url.substring(0, length)}...` : url;
  };

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
  image,
}: {
  title: string;
  date: string;
  description: string[];
  skills?: string[];
  links?: LinkProps[];
  image?: string;
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
    <div>
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
  return (
    <div className="section-container">
      <H2>{"Projects"}</H2>
      <Project
        title={"Drone Attachment to Measure Ice Thickness"}
        date={"July 2023 - December 2023"}
        description={[
          "Designed a radar module attachment beneath a drone coupled with a mobile application to map the thickness of ice on frozen bodies of water.",
          "Engineered a lightweight 3D printed circuit board containing GPR sensor, modem and a microcontroller.",
          "Contributed to a RTOS firmware capable of executing threads, control sensors and broadcast sensor data with the modem.",
          "Implemented a full stack effort to store records in the database, security and networking backend, and a UI capable of displaying live drone location and sensor readings with a gradient of ice thickness on a google map api instance."
        ]}
        skills={[
          "Flask", 
          "React", 
          "PostgresDB", 
          "Circuit Design", 
          "C#", 
          "SQL-Alchemy"]}
        links={[
          {
            link: "https://github.com/orgs/Capstone-EECE/repositories?type=public",
            linkIcon: faGithub,
          },
          {
            link: "https://drive.google.com/file/d/1R6QcWeeEvPKC4uVtcfPRTW7IHbvR1rxS/view?usp=sharing",
            linkIcon: faPager
          }
        ]}
      />
      <Project
        title={"Portofio Website"}
        date={"April 2024 - June 2024"}
        description={[
          "Developed personal website from scratch using Next.js and React.",
          "Designed and implemented custom and mobile responsiveness components with Tailwind CSS.",
          "Coming soon: Dark and Light, English and Spanish option.",
          "Deployed website to Vercel.",
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
          {
            link: "https://diegovaldivacox.com",
            linkIcon: faPager,
          }
        ]}
      />
      <Project
        title={"Collision Algorithm for Free-Flowing Objects"}
        date={"March 2021 - May 2021"}
        description={[
          "Implemented Collision Detection algorithm using Separated Axis Theorem (SAT) for rotating free-flowing shapes.",
          "Improve on a the algorithm for multiple shapes using multi-threading and published a IEEE paper on improvements of runtime when dealing with N objects.",
          "Displayed project on Monitor by programming on a DE1SoC FPGA board and VGA to VGA cable."
        ]}
        skills={[
          "C++",
          "FPGA board",
          "VGA Display",
          "Multi-threads",
          "OOP"
        ]}
        links={[
          {
            link: "https://drive.google.com/file/d/14RMDUnwVr3pGQM87gscvo5LvNAkEoCmg/view",
            linkIcon: faPager,
          },
          {
            link: "https://github.com/diegovaldiviac/CollisionAlgorithm",
            linkIcon: faGithub
          }
        ]}
      />
      <Project
        title={"MFJK-Cub Radio"}
        date={"November 2023 - December 2023"}
        description={[
          "Soldered and tuned the radio for transmission and receiving of ASK morse code signals of up to 40 meters.",
          "Designed and implemented MJ9340K digital transreceiver radio capable of transmitting around 2.2W of power at a 7MHz signal frequency bandwith.",
          "Strengthen key principles such as signal processing, frequency conversion, and modulation/demodulation techniques by probing the circuit and leveraging the oscilloscope to view waveforms.",

        ]}
        skills={[
          "Circuit Design and Analysis",
          "Soldering",
          "Signal Generator",
          "Voltmeter"
        ]}
        links={[
          {
            link: "https://drive.google.com/file/d/1yOCNfGf29w8xzfT5s27r2JPz5p2WOx2H/view?usp=sharing",
            linkIcon: faPager,
          },
        ]}
      />
      <Project
        title={"Multi-Threaded KV Store"}
        date={"February 2024"}
        description={[
          "Extremely fast multi-threaded key-value store written in C.",
          "Designed and implemented thread-safe hash table using djb2 hashing algorithm.",
          "Ensured thread safety with POSIX mutexes and condition variables.",
          "Ranked fastest key-value store out of class of 100+ students.",
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
          "Designed an interactive maze-based game utilizing Java with a Maven build configuration.",
          "Implemented a server component using the proxy-client pattern, communicating with JSON messages over TCP.",
          "Developed clients that implement the communication-layer aspects of the server-client communication.",
          "Wrote over 50 classes and thousands of lines of code ensuring test-driven development to manufacture a cohesive, complete application, with unit and integration tests for the entire platform.",
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
        description={[
          "Developed a Model and Gamestate of Tiny Island, turn-based grid-based strategy game that involves placing different terrain tiles and drawing islands to earn points.",
          "Implemented an A* state search algorithm to determine the best high score given a known seed.",
          "Improved to a trained reinforcement learning model that can exceed at obtaining an effective high score without prior knowledge of the seed’s configurations."
        ]}
        skills={[
          "Python",
          "TensorFlow",
          "PyUnit",
          "Algorithms"
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
        description={[
          "Implemented a proof of concepts prototype for a data acquisition View capabale of uploading binaries with corresponding meta data for a reinforment learning model.",
          "Hooked the protoype UI to test AWS lambda functions for full cycle integration test of uploading records to the target buckets."
        ]}
        skills={[
          "React",
          "AWS Lambda Functions",
          "AWS Buckets",
          "Redux"
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