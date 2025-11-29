import React from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import BackToTop from '@/components/portfolio/BackToTop';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}