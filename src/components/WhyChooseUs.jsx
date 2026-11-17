import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone,
  Phone,
  MessageCircle
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/businessData';

const iconMap = {
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Smartphone
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2463A6]">
            Our Approach
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] mt-1 tracking-tight">
            Why Visit Subho Mobile Repairing
          </h2>
          <p className="text-[#5A6572] text-base sm:text-lg mt-3 leading-relaxed">
            We focus on genuine craftsmanship, transparent advice, and testing your phone properly before you take it home.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-[#F1F3F5] border border-[#E2E8F0] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#142B45] mb-4">
                    <IconComp className="w-5 h-5 text-[#2463A6]" />
                  </div>

                  <h3 className="text-base font-bold text-[#142B45] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5A6572] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-black block">
              Personal Assistance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              Need immediate advice on a damaged phone?
            </h3>
            <p className="text-sm text-black">
              Subha Patar answers customer inquiries directly during shop hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#142B45] hover:bg-[#0E1E31] text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#E69A43]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 font-bold text-sm transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="text-[#25D366]">WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
