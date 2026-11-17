import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink, User, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-[#FAFAF8] border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mt-1 tracking-tight">
            Contact & Location Details
          </h2>
          <p className="text-brand-muted text-base sm:text-lg mt-3 leading-relaxed">
            Call or message Subha Patar directly, or visit our shop counter using the Google Maps directions below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Contact Actions */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-white rounded-xl border border-brand-border p-6 shadow-subtle space-y-6">
              <div>
                <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                  Direct Contact
                </span>
                <h3 className="text-xl font-bold text-brand-navy mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-sm text-brand-muted mt-0.5">
                  {BUSINESS_INFO.businessType}
                </p>
              </div>

              {/* Owner Info Item */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-brand-surface border border-brand-border">
                <div className="w-10 h-10 rounded-md bg-white border border-brand-border flex items-center justify-center text-brand-navy flex-shrink-0">
                  <User className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted">Shop Owner</div>
                  <div className="text-sm font-bold text-brand-navy">{BUSINESS_INFO.owner}</div>
                </div>
              </div>

              {/* Phone Info Item */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-brand-surface border border-brand-border">
                <div className="w-10 h-10 rounded-md bg-white border border-brand-border flex items-center justify-center text-brand-navy flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted">Direct Phone</div>
                  <div className="text-sm font-bold text-brand-navy tracking-wide">{BUSINESS_INFO.phone}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                {/* 1. Call Now */}
                <a
                  href={BUSINESS_INFO.telLink}
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg bg-brand-navy hover:bg-brand-navyDark text-white font-semibold text-sm transition-colors shadow-subtle"
                >
                  <Phone className="w-4 h-4 text-brand-accent" />
                  <span>Call Now: {BUSINESS_INFO.phone}</span>
                </a>

                {/* 2. WhatsApp */}
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg border border-[#25D366] text-[#128C7E] bg-[#25D366]/10 hover:bg-[#25D366]/20 font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* 3. Google Maps */}
                <a
                  href={BUSINESS_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-brand-border bg-brand-surface hover:bg-brand-border/40 text-brand-navy font-semibold text-sm transition-colors"
                >
                  <Navigation className="w-4 h-4 text-brand-blue" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="p-4 rounded-lg bg-white border border-brand-border text-xs text-brand-muted leading-relaxed">
              <p>
                <strong>Tip:</strong> If you are looking for specific replacement parts such as curved AMOLED displays or original battery replacements, feel free to call or WhatsApp Subha Patar beforehand to check part availability.
              </p>
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-brand-border overflow-hidden shadow-subtle p-3 sm:p-4">
              
              {/* Map Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-brand-border mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-brand-surface border border-brand-border flex items-center justify-center text-brand-blue">
                    <MapPin className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Google Maps Location</h4>
                    <p className="text-xs text-brand-muted">Subho Mobile Repairing</p>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Map Frame */}
              <div className="relative w-full h-[360px] sm:h-[400px] rounded-lg overflow-hidden bg-brand-surface border border-brand-border">
                <iframe
                  title="Subho Mobile Repairing Location"
                  src="https://maps.google.com/maps?q=Subho+Mobile+Repairing+Jyoti+Super+Market+Asansol&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map Footer Note */}
              <div className="pt-3 flex items-center justify-between text-xs text-brand-muted">
                <span>Direct navigation available through Google Maps link</span>
                <a
                  href={BUSINESS_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue font-medium hover:underline"
                >
                  View Route &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
