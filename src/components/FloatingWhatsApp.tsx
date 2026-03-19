"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/1234567890" // Placeholder for actual WA link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transform hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
