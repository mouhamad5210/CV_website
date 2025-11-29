import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, id: 'about' },
    { label: t.nav.skills, id: 'skills' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.education, id: 'education' },
    { label: t.nav.contact, id: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navClass = scrolled ? 'bg-background/95 backdrop-blur-md border-b border-accent/15' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-print ${navClass}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
           className="font-heading text-3xl text-accent tracking-wider font-medium">
          MR
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => handleClick(e, link.id)}
               className="font-body text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-accent transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <LanguageToggle />
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-accent/15">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => handleClick(e, link.id)}
                 className="font-body text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-accent">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}