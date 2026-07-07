import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const UIO_LOGO = 'https://commons.wikimedia.org/wiki/Special:FilePath/UiO_logo.png';
const OSLOMET_LOGO = 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Oslo_Metropolitan_University.svg';

export default function Education() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 65%'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const getLogo = (institution) => {
    if (institution.includes('OsloMet')) return OSLOMET_LOGO;
    if (institution.includes('UiO')) return UIO_LOGO;
    return null;
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <SectionTitle number={t.education.number} title={t.education.title} />
        </Reveal>
        <div ref={ref} className="relative pl-12 md:pl-16">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/15" />
          {!reduce && (
            <motion.div className="absolute left-0 top-0 w-px bg-accent origin-top" style={{ height: lineHeight }} />
          )}
          <ul className="space-y-16">
            {t.education.items.map((edu, i) => {
              const logo = getLogo(edu.institution);
              return (
                <Reveal key={edu.institution} delay={i * 0.1}>
                  <li className="relative">
                    <div className="absolute -left-[52px] md:-left-[68px] top-1 w-3 h-3 bg-accent rotate-45" />
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      {edu.period} · {edu.location}
                    </p>
                    <div className="flex items-center gap-4 mb-1 flex-wrap">
                      {logo && (
                        <img src={logo} alt="" className="h-8 max-w-[110px] w-auto object-contain flex-shrink-0 opacity-90" />
                      )}
                      <h3 className="font-heading text-2xl text-foreground">{edu.institution}</h3>
                    </div>
                    <p className="font-heading text-lg italic text-accent mb-3">{edu.degree}</p>
                    <p className="font-body text-sm text-foreground/70 leading-relaxed max-w-xl">{edu.description}</p>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-16 pt-8 border-t border-accent/15 flex flex-wrap items-center gap-4">
            <div className="w-2 h-2 bg-accent rotate-45" />
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.education.certification}</p>
            <p className="font-body text-sm text-foreground/80">{t.education.certText}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}