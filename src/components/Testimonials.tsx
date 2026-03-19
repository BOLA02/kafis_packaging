"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Packaging quality is excellent and delivery is always on time. Highly recommended!",
    name: "Aisha",
    role: "Food Vendor"
  },
  {
    quote: "Very reliable for bulk orders. Makes my restaurant's daily operations so much easier.",
    name: "Tunde",
    role: "Restaurant Owner"
  },
  {
    quote: "Clean, durable packaging and incredibly fast responses on WhatsApp. Love working with them.",
    name: "Sarah",
    role: "Event Planner"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-8 bg-brand-green/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-text-primary mb-5"
          >
            What Our Customers Say
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Feedback from food vendors, event planners, and retail businesses who rely on our packaging.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((col, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-xl text-text-primary font-medium mb-8 leading-relaxed italic">
                "{col.quote}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-text-muted font-bold text-lg">
                  {col.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-lg leading-tight">{col.name}</h4>
                  <p className="text-text-muted font-medium text-sm">{col.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
