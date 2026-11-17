import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ item, items, onClose, onNavigate }) {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const total = items.length;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % total);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + total) % total);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, total, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 animate-fade-in">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Controls Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto max-w-5xl mx-auto">
        <div className="px-3 py-1.5 rounded bg-black/60 text-white text-xs font-medium">
          <span>{currentIndex + 1} of {total}</span> &bull; <span className="text-slate-300">{item.category}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons (Desktop) */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + total) % total)}
        className="absolute left-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % total)}
        className="absolute right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image & Caption */}
      <div className="relative z-10 max-w-4xl max-h-[90vh] flex flex-col items-center pointer-events-auto">
        <div className="overflow-hidden rounded-lg bg-black flex items-center justify-center max-h-[70vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-auto h-auto max-w-full max-h-[70vh] object-contain select-none"
          />
        </div>

        {/* Caption */}
        <div className="mt-3 p-4 rounded-lg bg-white border border-brand-border max-w-xl w-full text-left">
          <div className="flex items-center justify-between text-xs text-brand-muted mb-1">
            <span className="font-semibold text-brand-blue">{item.tag}</span>
            <span>Subho Mobile Repairing</span>
          </div>
          <h4 className="text-sm font-bold text-brand-navy">{item.title}</h4>
          <p className="text-xs text-brand-muted mt-1 leading-relaxed">{item.description}</p>

          {/* Mobile Prev / Next */}
          <div className="flex sm:hidden gap-3 mt-3 pt-2 border-t border-brand-border">
            <button
              onClick={() => onNavigate((currentIndex - 1 + total) % total)}
              className="flex-1 py-1.5 px-3 rounded bg-brand-surface text-brand-navy text-xs font-semibold"
            >
              Previous
            </button>
            <button
              onClick={() => onNavigate((currentIndex + 1) % total)}
              className="flex-1 py-1.5 px-3 rounded bg-brand-surface text-brand-navy text-xs font-semibold"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
