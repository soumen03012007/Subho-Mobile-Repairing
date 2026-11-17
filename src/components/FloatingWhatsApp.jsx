import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-2.5 px-3 py-1.5 rounded-md bg-brand-navy text-white text-xs font-medium shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span>WhatsApp Subha Patar</span>
      </div>

      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-card hover:scale-105 transition-transform duration-200 focus:outline-none"
        aria-label="Chat on WhatsApp with Subho Mobile Repairing"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </aside>
  );
}
