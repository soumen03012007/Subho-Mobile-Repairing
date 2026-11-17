import React from 'react';
import { Phone, MessageCircle, MapPin, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Hero() {
  return (
    <section id="hero" className="py-12 sm:py-16 md:py-20 bg-[#FAFAF8] border-b border-brand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Business Intro & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Business Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-surface border border-brand-border text-xs font-semibold text-brand-navy tracking-wide">
              <span>Subho Mobile Repairing &bull; Owner: Subha Patar</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.2]">
              Mobile Repairing You Can Trust.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl">
              Looking for help with your mobile phone? Visit Subho Mobile Repairing for personal assistance with mobile repair and maintenance.
            </p>

            {/* Contact Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={BUSINESS_INFO.telLink}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-base transition-colors shadow-subtle"
              >
                <Phone className="w-5 h-5 text-brand-accent" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-[#25D366] text-[#128C7E] bg-[#25D366]/10 hover:bg-[#25D366]/20 font-semibold text-base transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Practical Notes */}
            <div className="pt-4 border-t border-brand-border/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-brand-muted">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Direct technician advice</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Multi-brand device support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>In-person diagnosis</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Photograph of the Shop Counter */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-brand-border shadow-card p-3">
              <div className="overflow-hidden rounded-lg aspect-[4/3] bg-brand-surface relative">
                <img
                  src="./assets/shop/owner-with-customers.jpeg"
                  alt="Subha Patar assisting customers at the service counter of Subho Mobile Repairing"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="p-3 text-left">
                <p className="text-xs font-semibold text-brand-navy">
                  Subha Patar at Subho Mobile Repairing Service Counter
                </p>
                <p className="text-xs text-brand-muted mt-0.5">
                  Real in-shop assistance with smartphone display, battery, and hardware repair.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
