import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('lang') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = { lang, setLang, toggle: () => setLang(lang === 'en' ? 'no' : 'en'), t: translations[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
