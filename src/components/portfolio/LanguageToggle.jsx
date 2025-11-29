import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const btn = (code) =>
    `transition-colors duration-300 ${lang === code ? 'text-accent' : 'text-foreground/40 hover:text-foreground/70'}`;
  return (
    <div className="flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.15em]">
      <button onClick={() => setLang('en')} className={btn('en')} aria-label="English">EN</button>
      <span className="text-foreground/20">|</span>
      <button onClick={() => setLang('no')} className={btn('no')} aria-label="Norsk">NO</button>
    </div>
  );
}