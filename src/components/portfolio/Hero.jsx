import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from './Reveal';

export default function Hero() {
  const { t, lang } = useLanguage();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCVFile = () => {
    return `${import.meta.env.BASE_URL}cv-${lang}.pdf`;
  };

  return (
    <section className="relative min-h-screen flex items-center hero-pattern pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-6">{t.hero.role}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.05] mb-8">
                Mohamad
                <br />
                Redwan
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-lg md:text-xl leading-[1.8] text-foreground/70 max-w-2xl mb-12 text-balance">
                {t.hero.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  onClick={(e) => scrollTo(e, 'projects')}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-background font-body text-sm uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300"
                >
                  {t.hero.viewProjects}
                </a>
                <a
                  href={getCVFile()}
                  download
                  className="inline-flex items-center gap-3 px-7 py-3.5 border border-accent/40 text-foreground font-body text-sm uppercase tracking-[0.15em] hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {t.hero.downloadCV}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="flex justify-center mt-8 lg:mt-0">
            <div className="arch-frame w-48 h-60 lg:w-72 lg:h-96 bg-secondary border border-accent/20 flex items-center justify-center overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Mohamad Redwan"
                className="w-full h-full object-cover"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.5}>
          <a
            href="#about"
            onClick={(e) => scrollTo(e, 'about')}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-accent animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
