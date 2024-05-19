import Layout from "./components/Layout"
import ProjectsSection from './sections/Project';
import SkillSection from "./sections/Skills"
import EducationSection from "./sections/Education"
import ExperienceSection from './sections/Experience';
import AboutMeSection from './sections/AboutMe'



export default function Home() {  
  return (
    <Layout>
      <div className="flex flex-col items-center py-6 pt-0">
        
        <AboutMeSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillSection />
      </div>
    </Layout>
  );
}