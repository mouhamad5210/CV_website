import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/portfolio/Navbar';
import Footer from '@/components/portfolio/Footer';
import Reveal from '@/components/portfolio/Reveal';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const project = t.projects.items.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center pt-20">
          <p className="font-body text-muted-foreground">Project not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <Link to="/" className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-accent mb-12 hover:gap-3 transition-all duration-300">
              <ArrowLeft size={14} /> {t.projectDetail.back}
            </Link>
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-3">{project.category}</p>
              <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-4">{project.title}</h1>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-12">{project.type}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="w-16 h-px bg-accent mb-8" />
              <div className="mb-16">
                <h2 className="font-heading text-2xl text-foreground mb-4">{t.projectDetail.overview}</h2>
                <p className="font-body text-lg leading-[1.8] text-foreground/80">{project.description}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mb-16">
                <h2 className="font-heading text-2xl text-foreground mb-6">{t.projectDetail.highlights}</h2>
                <ul className="space-y-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-4 font-body text-base text-foreground/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mb-16">
                <h2 className="font-heading text-2xl text-foreground mb-6">{t.projectDetail.technologies}</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="font-body text-sm px-4 py-2 border border-accent/30 text-foreground/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            {project.link && (
              <Reveal delay={0.4}>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-background font-body text-sm uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300">
                  <Github size={16} /> {t.projectDetail.viewSource} <ArrowUpRight size={16} />
                </a>
              </Reveal>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}