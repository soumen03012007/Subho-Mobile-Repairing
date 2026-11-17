import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 left-5 z-40 p-2.5 rounded-full bg-white border border-brand-border text-brand-navy hover:bg-brand-surface hover:text-brand-blue transition-colors shadow-subtle focus:outline-none animate-fade-in"
      aria-label="Scroll to top of page"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
