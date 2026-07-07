import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from './Reveal';

export default function Contact() {
  const { t } = useLanguage();
  const contacts = [
    { label: t.contact.email, value: 'mhd010591@gmail.com', href: 'mailto:mhd010591@gmail.com', icon: Mail },
    { label: t.contact.phone, value: '+47 454 77 828', href: 'tel:+4745477828', icon: Phone },
    { label: t.contact.linkedin, value: 'Mohamad Redwan', href: 'https://linkedin.com/in/mohamad-redwan', icon: Linkedin },
    { label: t.contact.github, value: 'mouhamad5210', href: 'https://github.com/mouhamad5210', icon: Github },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-16">
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-3">{t.contact.number} · {t.nav.contact}</p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground leading-tight">
              {t.contact.title}
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-md mt-4">
              {t.contact.subtitle}
            </p>
          </div>
        </Reveal>
        <div className="space-y-px">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                 className="group flex items-center justify-between py-6 border-b border-accent/15 hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center gap-6">
                  <c.icon size={20} className="text-accent" />
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</span>
                </div>
                <span className="font-heading text-xl md:text-3xl text-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-400">
                  {c.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}