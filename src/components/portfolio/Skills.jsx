import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import { techIcons } from '@/data/techIcons';

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionTitle number={t.skills.number} title={t.skills.title} />
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-accent/10">
          {t.skills.categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <div className="bg-white p-8 h-full">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-6">{cat.title}</p>
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-5 flex items-center justify-center flex-shrink-0">
                        {techIcons[skill] ? (
                          <img src={techIcons[skill]} alt={skill} className="w-5 h-5 object-contain" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        )}
                      </span>
                      <span className="font-body text-sm text-foreground/80">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}