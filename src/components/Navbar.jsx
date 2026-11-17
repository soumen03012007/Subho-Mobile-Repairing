import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-brand-border shadow-subtle py-3' 
          : 'bg-[#FAFAF8] border-b border-brand-border/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Business Name / Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center text-white flex-shrink-0">
              <Wrench className="w-5 h-5 text-brand-accent" strokeWidth={2.2} />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-brand-navy block leading-tight">
                Subho Mobile Repairing
              </span>
              <span className="text-xs text-brand-muted tracking-normal block font-normal">
                Subha Patar &bull; Mobile Phone Service
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-text/80 hover:text-brand-navy transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Single Clear Call Now Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-colors shadow-subtle"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu & Direct Call */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-navy text-white text-xs font-semibold"
              aria-label="Call Now"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-brand-border text-brand-text hover:bg-brand-surface focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-brand-border px-4 pt-3 pb-5 shadow-card animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-medium text-brand-text hover:bg-brand-surface rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-brand-border flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.telLink}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-navy text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-emerald-600 text-emerald-700 bg-emerald-50 text-sm font-semibold"
              >
                <span>WhatsApp Subha Patar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
