import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Resume from '@/components/Resume';
import Writing from '@/components/Writing';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function SectionDivider() {
  return (
    <div
      style={{
        width: '100%',
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, var(--border2) 15%, var(--border2) 85%, transparent 100%)',
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Resume />
        <SectionDivider />
        <Writing />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
