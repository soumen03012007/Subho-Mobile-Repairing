import React from 'react';
import { User, Phone, MapPin, CheckCircle, Smartphone, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            About the Shop
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mt-1 tracking-tight">
            Subhojit Patar &bull; Owner, Subho Mobile Repairing
          </h2>
          <p className="text-brand-muted text-base sm:text-lg mt-3 leading-relaxed">
            A local mobile repairing shop focused on honest diagnosis, careful device handling, and practical repairs for everyday smartphones.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Text / Info (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-brand-text leading-relaxed text-base">
              <p>
                <strong className="text-brand-navy font-semibold">{BUSINESS_INFO.name}</strong> is owned and operated by <strong className="text-brand-navy font-semibold">{BUSINESS_INFO.owner}</strong>. The shop handles all routine and complex smartphone issues, from cracked glass and unresponsive touchscreens to battery degradation and charging faults.
              </p>
              <p className="text-brand-muted">
                Instead of dealing with third-party customer service representatives or automated systems, customers visit the shop counter and speak directly with Subhojit Patar. Every smartphone is evaluated carefully so you know exactly what is wrong and what the repair entails.
              </p>
            </div>

            {/* Practical Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-border">
                <div className="flex items-center gap-2.5 text-brand-navy font-bold text-sm mb-1">
                  <User className="w-4 h-4 text-brand-blue" />
                  <span>Direct Owner Interaction</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Subhojit Patar personally inspects your phone, explains the repair, and answers your questions directly.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-brand-surface border border-brand-border">
                <div className="flex items-center gap-2.5 text-brand-navy font-bold text-sm mb-1">
                  <Wrench className="w-4 h-4 text-brand-blue" />
                  <span>Workshop Tools & Care</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Repairs are carried out using proper heating equipment, precision screwdrivers, and anti-static mats.
                </p>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.telLink}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>Call Subhojit Patar: {BUSINESS_INFO.phone}</span>
              </a>

              <span className="text-brand-border hidden sm:inline">&bull;</span>

              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
              >
                <MapPin className="w-4 h-4" />
                <span>View Shop on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Visuals (5 cols): Authentic Shop Documentation */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Real Shopfront Photo */}
            <div className="rounded-xl border border-brand-border overflow-hidden bg-brand-surface shadow-card">
              <img
                src="./assets/shop/shop-front.jpeg"
                alt="Subho Mobile Repairing exterior shopfront and counter"
                className="w-full h-56 sm:h-64 object-cover object-center"
                loading="lazy"
              />
              <div className="p-3 bg-white border-t border-brand-border">
                <p className="text-xs font-semibold text-brand-navy">Shopfront & Service Counter</p>
                <p className="text-xs text-brand-muted">Subho Mobile Repairing in Asansol</p>
              </div>
            </div>

            {/* Real Signboard Photo */}
            <div className="rounded-xl border border-brand-border overflow-hidden bg-brand-surface shadow-card">
              <img
                src="./assets/branding/shop-banner.jpeg"
                alt="Official signboard of Subho Mobile Repairing"
                className="w-full h-32 object-cover object-center"
                loading="lazy"
              />
              <div className="p-2.5 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                <span className="font-medium text-brand-navy">Official Business Signboard</span>
                <span className="text-brand-muted">Phone: {BUSINESS_INFO.phone}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
