import React, { useState } from 'react';
import { Camera, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/businessData';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Repair Process', 'Completed Work', 'Shop & Workshop'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNavigate = (newIndex) => {
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-16 md:py-20 bg-[#FAFAF8] border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Repair Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mt-1 tracking-tight">
            Work & Shop Gallery
          </h2>
          <p className="text-brand-muted text-base sm:text-lg mt-3 leading-relaxed">
            Actual photographs taken at our workbench and shop counter — showing display replacements, diagnostic checks, and completed repairs.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-navy text-white shadow-subtle'
                  : 'bg-white border border-brand-border text-brand-muted hover:text-brand-navy hover:border-brand-navy/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-xl border border-brand-border overflow-hidden hover:border-brand-blue/50 hover:shadow-card transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] bg-brand-surface overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                />

                {/* Subtle Hover Indicator */}
                <div className="absolute inset-0 bg-brand-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2 rounded-full bg-white/90 text-brand-navy shadow-subtle">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Category Tag Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white/90 text-brand-navy border border-brand-border">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-muted mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <Lightbox
            item={selectedItem}
            items={filteredItems}
            onClose={() => setSelectedItem(null)}
            onNavigate={handleNavigate}
          />
        )}

      </div>
    </section>
  );
}
