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
import { PairedBand } from '@/components/ui/section';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubActivitySection />

      {/* Four short blocks that used to be four full bands, now two rows. */}
      <PairedBand>
        <SkillSection />
        <EducationSection />
      </PairedBand>

      <AboutMeSection />

      <PairedBand>
        <NewsletterSection />
        <ContactSection />
      </PairedBand>
    </Layout>
  );
}
