import React from 'react';
import { 
  Smartphone, 
  BatteryCharging, 
  Zap, 
  Volume2, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Search, 
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/businessData';

const iconMap = {
  Smartphone,
  BatteryCharging,
  Zap,
  Volume2,
  Cpu,
  Wrench,
  ShieldCheck,
  Search
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-[#FAFAF8] border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Repair Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mt-1 tracking-tight">
            Common Smartphone Repairs We Handle
          </h2>
          <p className="text-brand-muted text-base sm:text-lg mt-3 leading-relaxed">
            From cracked screens to battery replacements, we repair major smartphone brands with care and proper testing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            const serviceWhatsappLink = `https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20Subha%20Patar%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}%20at%20Subho%20Mobile%20Repairing.`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-brand-border p-5 flex flex-col justify-between hover:border-brand-blue/50 hover:shadow-card transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-navy mb-4">
                    <IconComponent className="w-5 h-5 text-brand-blue" strokeWidth={2} />
                  </div>

                  <h3 className="text-base font-bold text-brand-navy mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/60">
                  <a
                    href={serviceWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blueHover transition-colors"
                  >
                    <span>Inquire for your model</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Bottom Helper Callout */}
        <div className="mt-10 p-6 rounded-xl bg-white border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-brand-navy">
              Not sure what is wrong with your phone?
            </h4>
            <p className="text-sm text-brand-muted mt-0.5">
              Call Subha Patar directly or bring your phone to the shop counter for an initial inspection.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-navy hover:bg-brand-navyDark text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
