import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import { techIcons } from '@/data/techIcons';

function ProjectCard({ project, index, t }) {
  const reduce = useReducedMotion();
  const navigate = useNavigate();
  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        onClick={() => navigate(`/project/${project.slug}`)}
        className="group bg-white border-t-2 border-accent p-8 h-full cursor-pointer transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgba(184,146,58,0.18)]"
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-2">{project.category}</p>
            <h3 className="font-heading text-2xl text-foreground">{project.title}</h3>
          </div>
          <span className="font-body text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right max-w-[90px] flex-shrink-0">{project.type}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 font-body text-sm text-foreground/70 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="inline-flex items-center gap-1.5 font-body text-xs px-3 py-1 border border-accent/25 text-foreground/60">
              {techIcons[tech] && <img src={techIcons[tech]} alt="" className="w-3.5 h-3.5 object-contain" />}
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6 pt-4 border-t border-accent/10">
          <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-accent group-hover:gap-3 transition-all duration-300">
            {t.projects.viewDetails} <ArrowUpRight size={14} />
          </span>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
               className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-accent transition-colors">
              <Github size={14} /> {t.projects.viewSource}
            </a>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionTitle number={t.projects.number} title={t.projects.title} />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.items.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}