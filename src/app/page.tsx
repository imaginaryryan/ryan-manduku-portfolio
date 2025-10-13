// app/(main)/page.tsx


import Hero from '@/app/components/sections/Hero';
// import About from '@/app/components/sections/About';
import Services from '@/app/components/sections/Services';
import Skills from '@/app/components/sections/Skills';                     
import ProjectsSection from '@/app/components/sections/ProjectsSection'; 
import EducationExperience from '@/app/components/sections/EducationExperience';
import Contact from '@/app/components/sections/Contact';
import  Header from '@/app/components/navigation/header';
import  Footer from '@/app/components/navigation/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Manduku-Software Engineer',
  description: 'Driven Computer Science student seeking internship opportunities. Passionate about algorithms, web development, and innovative technological solutions.',
};


export default function Home() {
  return (
    <>
      <main>
      <Header />
        <Hero />
        {/* <About /> */}
        <Services />
        <Skills />
        <ProjectsSection/>
        <EducationExperience />
        <Contact /> 
       <Footer />
      </main>
    </>
  );
}