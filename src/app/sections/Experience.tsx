import Box from "../components/Box";
import { H2, H3, H4, H5 } from "../components/Headings";
import { ReactNode } from "react";
import "../globals.css"

function WorkExperience({
  title,
  company,
  date,
  children,
}: {
  title: string;
  company: string;
  date: string;
  children: ReactNode;
}) {
  return (
    <div className="py-3 px-4">
      <div className="flex flex-row items-start justify-between text-pretty">
        <H3>{title}</H3>
        <div className="hidden text-nowrap lg:block">
          <H5>{date}</H5>
        </div>
      </div>
      <div className="font-semibold">
        <H4>{company}</H4>
      </div>
      <div className="text-nowrap lg:hidden">
        <H5>{date}</H5>
      </div>
      {children}
    </div>
  );
}

function ExperienceBullets({ children }: { children: ReactNode }) {
  return (
    <ul className="experience-bullets mx-10 my-1 list-outside list-disc space-y-1.5 text-white">
      {children}
    </ul>
  );
}

export default function ExperienceSection() {
  return (
    <div className="section-container">
      <div className="divide-y">
        <H2>{"Experience"}</H2>
        <WorkExperience
          title={"Software Engineer"}
          company={"Buk"}
          date={"May 2024 - Currently"}
        > </WorkExperience>
        <WorkExperience
          title={"FullStack Engineer Co-op"}
          company={"LineVision"}
          date={"December 2022 - August 2023"}
        >
          <ExperienceBullets>
          <li>
                Refactored the database layer of the web backend from raw sql literals to Sequelize JS model type queries.
            </li>
            <li>
                Leveraged github actions and terraform to build a continuous development pipeline for bundling, 
                testing and deploying to AWS changes made to the main branch of the firmware repo as binaries.
            </li>
            <li>
                Developed a continuous integration React UI internal tool for provisioning latest binaries to hardware across the globe by scripting the process of 
                querying the database for serial numbers, connectivity through soracom API, and executing shell commands to update and reboot devices.
            </li>
            <li>
                Maintained an Amazon Web services event driven data pipeline architecture of SNS SQS and lambda functions.
            </li>
          </ExperienceBullets>
        </WorkExperience>
        <WorkExperience
          title={"Software Engineer Co-op"}
          company={"RaySecur"}
          date={"December 2021 - July 2022"}
        >
          <ExperienceBullets>
            <li>
                Designed a React-Redux data acquisition UI view capable of creating and uploading samples to Amazon web service for machine learning model development.
            </li>
            <li>
                Developed socket communication functionality for Node.js API software layer.
            </li>
            <li>
                Abstracted Hardware OS behavior to contribute to a system linux migration.
            </li>
          </ExperienceBullets>
        </WorkExperience>
      </div>
    </div>
  );
}