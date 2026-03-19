"use client";

import { Instagram, Search, FileText, CheckCircle2 } from "lucide-react";

export default function FastOrderStrip() {
  return (
    <>
      {/* Mobile Sticky CTA - Always visible at bottom on small screens */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 pointer-events-none flex flex-col items-center">
        <a
          href="https://instagram.com/KafisPackaging"
          target="_blank"
          className="pointer-events-auto w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] text-white font-bold rounded-2xl shadow-[0_15px_30px_rgba(214,36,159,0.3)] transition-transform active:scale-95 hover:opacity-90"
        >
          <Instagram className="w-6 h-6" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-lg">Order on Instagram</span>
            <span className="text-xs font-medium text-white/90 mt-0.5">Fast response & support</span>
          </div>
        </a>
      </div>

      {/* Main Strip Area */}
      <div className="relative z-30 bg-background-primary border-y border-gray-100/60 shadow-[0_10px_40px_rgba(0,0,0,0.02)] py-8 px-4 md:px-8 mt-12 mb-24">
        <div className="max-w-[90rem] mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
          
          {/* Action Buttons */}
          <div className="flex w-full xl:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Desktop Instagram CTA */}
            <a
              href="https://instagram.com/KafisPackaging"
              target="_blank"
              className="hidden md:flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] hover:opacity-90 text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(214,36,159,0.3)] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Instagram className="w-6 h-6" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-lg">Order on Instagram</span>
                <span className="text-xs font-medium text-white/90 mt-1">Fast response & support</span>
              </div>
            </a>

            {/* Secondary Actions */}
            <div className="flex flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#categories"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-gray-50 hover:bg-gray-100 text-text-primary font-bold rounded-2xl transition-colors border border-gray-200 shadow-sm whitespace-nowrap"
              >
                <Search className="w-5 h-5 text-brand-green" /> Browse Catalogue
              </a>

              <button 
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-text-primary hover:bg-black text-white font-bold rounded-2xl transition-transform active:scale-95 shadow-lg whitespace-nowrap"
              >
                <FileText className="w-5 h-5 text-gray-300" /> Get a Quote
              </button>
            </div>
          </div>

          {/* Trust Micro-badges */}
          <div className="flex flex-wrap items-center justify-center xl:justify-end gap-3 w-full xl:w-auto">
            {[
              "Food-service packaging",
              "Bulk / wholesale available",
              "Fast fulfilment"
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5 px-4 py-2 bg-brand-green/5 border border-brand-green/10 text-brand-leaf text-sm font-bold rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {badge}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}
