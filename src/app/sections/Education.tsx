import { H2, H3, H5 } from "../components/Headings";
import Northeastern from '../assets/Northeastern.png';
import Catolica from '../assets/Catolica.png'
import Grange from '../assets/Grange.png'

function EducationItem({
  school,
  degree,
  date,
  img,
}: {
  school: string;
  degree: string;
  date: string;
  img: any
}) {
  return (
    <div className="py-3">
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
  );
}

function EducationSection() {
  return (
    <div className="skills-container">
      <div className="divide-y">
        <H2>{"Education"}</H2>
        <EducationItem
          school={"Northeastern University"}
          degree={"Combined Bachelor of Science in Computer Science and Computer Engineering with a Minor in Math"}
          date={"May 2024"}
          img={Northeastern}
        />
        <EducationItem
          school={"Pontificia Universidad Católica de Chile"}
          degree={
            "Major in Computing and Information Systems"
          }
          date={"July 2021"}
          img={Catolica}
        />
        <EducationItem
          school={"The Grange School"}
          degree={
            "High School Diploma"
          }
          date={"December 2018"}
          img={Grange}
        />
      </div>
    </div>

  );
}

export default EducationSection;