import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-accent rotate-45 flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors duration-300 no-print">
      <ChevronUp size={18} className="-rotate-45 text-background" />
    </button>
  );
}