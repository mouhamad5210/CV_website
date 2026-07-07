// @ts-nocheck
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <SectionTitle number={t.about.number} title={t.about.title} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-body text-lg leading-[1.85] text-foreground/80 mb-6">{t.about.p1}</p>
          <p className="font-body text-lg leading-[1.85] text-foreground/80 mb-12">{t.about.p2}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-accent/15">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-4">{t.about.keyQualities}</p>
              <ul className="space-y-2">
                {t.about.qualities.map((q) => (
                  <li key={q} className="font-body text-sm text-foreground/70">{q}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-4">{t.about.languages}</p>
              <ul className="space-y-2">
                {t.about.languagesList.map((l) => (
                  <li key={l} className="font-body text-sm text-foreground/70">{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}