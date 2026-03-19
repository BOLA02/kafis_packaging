"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Package, Zap, Truck, Leaf, Smartphone } from "lucide-react";

const TRUST_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Food-safe Packaging",
    desc: "Suitable for food handling and storage.",
    color: "text-blue-500 bg-blue-50/80"
  },
  {
    icon: Package,
    title: "Bulk & Wholesale",
    desc: "Flexible quantities for small and large orders.",
    color: "text-brand-orange bg-orange-50/80"
  },
  {
    icon: Zap,
    title: "Fast Fulfilment",
    desc: "Quick processing to keep your business running.",
    color: "text-yellow-600 bg-yellow-50/80"
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    desc: "Consistent and dependable order delivery.",
    color: "text-purple-500 bg-purple-50/80"
  },
  {
    icon: Leaf,
    title: "Eco-friendly Options",
    desc: "Sustainable packaging choices available.",
    color: "text-brand-green bg-green-50/80"
  },
  {
    icon: Smartphone,
    title: "Easy Ordering",
    desc: "Simple ordering via WhatsApp or enquiry.",
    color: "text-pink-500 bg-pink-50/80"
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background-secondary border-y border-gray-100/60 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-leaf font-bold text-xs tracking-widest uppercase shadow-sm border border-brand-green/20">
              <ShieldCheck className="w-4 h-4" /> Trusted by food vendors and businesses
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-text-primary mb-6"
          >
            Why Businesses Trust Us
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Reliable packaging solutions designed for food vendors, events, and wholesale buyers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TRUST_FEATURES.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3 leading-tight">{feature.title}</h3>
              <p className="text-text-muted font-medium text-lg leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
