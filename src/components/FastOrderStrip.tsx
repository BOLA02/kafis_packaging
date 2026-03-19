"use client";

import { MessageCircle, FileText, Search } from "lucide-react";
import { motion } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";

export default function FastOrderStrip() {
  const trackWhatsAppClick = (location: string, ctaLabel: string) => {
    sendGAEvent("event", "whatsapp_click", {
      button_location: location,
      page_section: "fast_order",
      cta_label: ctaLabel,
      destination: "whatsapp",
    });
  };

  const trackQuoteClick = () => {
    sendGAEvent("event", "quote_request_click", {
      button_location: "fast_order_quote",
      page_section: "fast_order",
      cta_label: "Request a Quote",
      destination: "quote_form",
    });
  };

  const trackCatalogueClick = () => {
    sendGAEvent("event", "catalogue_view_click", {
      button_location: "fast_order_catalogue",
      page_section: "fast_order",
      cta_label: "View Catalogue",
      destination: "categories_section",
    });
  };

  return (
    <>
      {/* Mobile Sticky WhatsApp CTA - Always visible at bottom on small screens */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 pointer-events-none flex flex-col items-center">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("fast_order_mobile_sticky", "Chat on WhatsApp")}
          className="pointer-events-auto w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-2xl shadow-[0_15px_30px_rgba(37,211,102,0.3)] transition-transform active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-lg">Chat on WhatsApp</span>
            <span className="text-xs font-medium text-white/90 mt-0.5">Instant response</span>
          </div>
        </a>
      </div>

      {/* Main Section */}
      <section className="relative z-30 bg-brand-green/5 py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-text-primary mb-6">
              Order Fast. Get It Delivered.
            </h2>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
              Get instant responses, bulk pricing, and fast fulfilment for all your packaging needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Primary Action: WhatsApp */}
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("fast_order_primary", "Chat on WhatsApp")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col items-center justify-center text-center p-8 md:p-10 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-[2.5rem] shadow-xl hover:shadow-2xl shadow-[#25D366]/20 transition-all duration-300 transform hover:-translate-y-2 border border-transparent"
            >
              <div className="w-20 h-20 bg-white/20 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3">Chat on WhatsApp</h3>
              <p className="text-white/90 font-medium text-lg tracking-wide">Instant response</p>
            </motion.a>

            {/* Secondary Action: Get a Quote */}
            <motion.button
              type="button"
              onClick={trackQuoteClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group flex flex-col items-center justify-center text-center p-8 md:p-10 bg-white hover:bg-gray-50 text-text-primary rounded-[2.5rem] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-20 h-20 bg-brand-green/10 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10 text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Request a Quote</h3>
              <p className="text-text-muted font-medium text-lg tracking-wide">Bulk pricing available</p>
            </motion.button>

            {/* Tertiary Action: Browse Catalogue */}
            <motion.a
              href="#categories"
              onClick={trackCatalogueClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group flex flex-col items-center justify-center text-center p-8 md:p-10 bg-white hover:bg-gray-50 text-text-primary rounded-[2.5rem] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-20 h-20 bg-brand-orange/10 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-3">View Catalogue</h3>
              <p className="text-text-muted font-medium text-lg tracking-wide">Explore all products</p>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}