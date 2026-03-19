"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 md:px-8 bg-brand-green/5 relative z-20 overflow-hidden border-t border-gray-100/60">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-leaf/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-text-primary mb-6"
        >
          Ready to Order Your Packaging?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-text-muted font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Kafis Packaging is a trusted supplier of disposable food packaging in Kaduna, Nigeria.
          We provide plastic cups, cake boxes, kraft boxes, food containers and packaging materials
          for restaurants, food vendors, events and retail businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full font-bold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-xl hover:shadow-2xl shadow-[#25D366]/20"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-lg">Chat on WhatsApp</span>
          </a>

          <button
            className="group w-full sm:w-auto px-10 py-5 bg-white text-text-primary hover:bg-gray-50 border border-gray-100 rounded-full font-bold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
          >
            <FileText className="w-6 h-6 text-brand-leaf group-hover:scale-110 transition-transform" />
            <span className="text-lg">Request a Quote</span>
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-[11px] font-bold tracking-widest uppercase text-brand-leaf flex flex-col md:flex-row items-center justify-center gap-2"
        >
          <span>Fast response</span>
          <span className="hidden md:inline text-brand-green/30 px-1">•</span>
          <span>Bulk orders available</span>
        </motion.p>
      </div>
    </section>
  );
}
