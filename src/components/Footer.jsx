import React from 'react';
import { Phone, MapPin, Wrench, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About the Shop', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Work Gallery', href: '#gallery' },
    { name: 'Video Showcase', href: '#videos' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <footer className="bg-[#142B45] text-slate-300 pt-12 pb-8 border-t border-[#1B385A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#1B385A]/60">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-[#1B385A] flex items-center justify-center text-[#E69A43]">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Subho Mobile Repairing
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              {BUSINESS_INFO.supportingText}
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-slate-300">
              <div>
                <span className="text-slate-400">Owner:</span>{' '}
                <span className="text-white font-medium">{BUSINESS_INFO.owner}</span>
              </div>
              <div>
                <span className="text-slate-400">Phone:</span>{' '}
                <a href={BUSINESS_INFO.telLink} className="text-[#E69A43] hover:underline font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Reach out directly for repair inquiries, display replacements, or directions to the shop.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href={BUSINESS_INFO.telLink}
                className="inline-flex items-center gap-2 text-white hover:text-[#E69A43] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E69A43]" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#E69A43] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E69A43]" />
                <span>View Google Maps Pin</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. Owner: {BUSINESS_INFO.owner}.
          </p>

          <p>
            Authentic Mobile Phone Repairing in Asansol
          </p>
        </div>
      </div>
    </footer>
  );
}
