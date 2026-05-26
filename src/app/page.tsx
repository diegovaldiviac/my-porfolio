import Layout from './components/Layout';
import ProjectsSection from './sections/Project';
import SkillSection from './sections/Skills';
import EducationSection from './sections/Education';
import ExperienceSection from './sections/Experience';
import AboutMeSection from './sections/AboutMe';
import GitHubActivitySection from './sections/GitHubActivity';
import NewsletterSection from './sections/Newsletter';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center py-6 pt-0">
        <AboutMeSection />
        <GitHubActivitySection />
        <EducationSection />
        <ExperienceSection />
        <NewsletterSection />
        <ProjectsSection />
        <SkillSection />
      </div>
    </Layout>
  );
}
