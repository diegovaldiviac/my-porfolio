import { Html, Head, Main, NextScript } from 'next/document';
import Layout from "./components/Layout"
import ProjectsSection from './sections/Project';
import SkillSection from "./sections/Skills"
import EducationSection from "./sections/Education"


export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center py-6 pt-0">
        <EducationSection />
        <ProjectsSection />
        <SkillSection />
      </div>
    </Layout>
  );
}