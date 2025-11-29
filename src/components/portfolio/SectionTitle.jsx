import React from 'react';

export default function SectionTitle({ number, title, light = false }) {
  const text = light ? 'text-background' : 'text-foreground';
  const meta = light ? 'text-background/40' : 'text-accent';
  return (
    <div className="mb-16">
      <div className={`w-16 h-px ${light ? 'bg-background/30' : 'bg-accent'} mb-8`} />
      <p className={`font-body text-xs uppercase tracking-[0.3em] ${meta} mb-3`}>{number}</p>
      <h2 className={`font-heading text-4xl md:text-5xl font-normal ${text}`}>{title}</h2>
    </div>
  );
}