import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-10 border-t border-accent/15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-body text-xs text-muted-foreground tracking-wider">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}