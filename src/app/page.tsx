import Layout from './components/Layout';
import Hero from './sections/Hero';
import ExperienceSection from './sections/Experience';
import ProjectsSection from './sections/Project';
import GitHubActivitySection from './sections/GitHubActivity';
import SkillSection from './sections/Skills';
import EducationSection from './sections/Education';
import AboutMeSection from './sections/AboutMe';
import NewsletterSection from './sections/Newsletter';
import ContactSection from './sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubActivitySection />
      <SkillSection />
      <EducationSection />
      <AboutMeSection />
      <NewsletterSection />
      <ContactSection />
    </Layout>
  );
}
