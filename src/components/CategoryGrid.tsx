"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Placeholder data matching premium packaging requirements
const CATEGORIES = [
  {
    id: "cups",
    title: "Paper Cups",
    video: "/product/kafis_packaging_1681303368_highlight18079115452248497.mp4",
    items: [
      { name: "Double Wall Hot Cups", size: "250ml / 500ml", desc: "Heat-resistant & insulated" },
      { name: "Clear Cold Cups", size: "300ml / 500ml", desc: "PET plastic, crack-resistant" },
      { name: "Ripple Wrap Cups", size: "200ml / 400ml", desc: "Premium grip, no sleeve needed" },
    ]
  },
  {
    id: "pouches",
    title: "Stand-Up Pouches",
    video: "/product/kafis_packaging_1701416466_highlight18079115452248497.mp4",
    items: [
      { name: "Kraft Foil Pouches", size: "100g - 1kg", desc: "Zipper lock, strong barrier" },
      { name: "Clear Window Pouches", size: "250g / 500g", desc: "Display product visibility" },
      { name: "Matte Black Pouches", size: "250g / 500g", desc: "Premium retail finish" },
    ]
  },
  {
    id: "trays",
    title: "Food Trays",
    video: "/product/kafis_packaging_1704311475_3272323095559606986_45913413296.mp4",
    items: [
      { name: "Kraft Boat Trays", size: "Small / Large", desc: "Grease-resistant lining" },
      { name: "Burger Clamshells", size: "Standard", desc: "Sturdy burger/fries combo tray" },
      { name: "Compartment Trays", size: "3-Compartment", desc: "Perfect for corporate meals" }
    ]
  },
  {
    id: "cake-boxes",
    title: "Cake Boxes",
    video: "/product/kafis_packaging_1725957846_highlight18079115452248497.mp4",
    items: [
      { name: "Window Cake Boxes", size: "8x8\" / 10x10\"", desc: "Tall design for stacked cakes" },
      { name: "Cupcake Inserts", size: "4 / 6 / 12 Holes", desc: "Secure transport for cupcakes" },
      { name: "Slice Boxes", size: "Single Slice", desc: "Wedge design for individual cuts" },
    ]
  },
  {
    id: "kraft",
    title: "Kraft Mailer Boxes",
    video: "/product/kafis_packaging_1740397877_3575032509725978385_45913413296.mp4",
    items: [
      { name: "E-Commerce Boxes", size: "Various", desc: "Crush-proof corrugated cardboard" },
      { name: "Gift Boxes", size: "Custom", desc: "Rigid setup with branded options" },
    ]
  },
  {
    id: "tamper",
    title: "Tamper-Proof Configs",
    video: "/product/kafis_packaging_1747678258_highlight18079115452248497.mp4",
    items: [
      { name: "Deli Containers", size: "8oz - 32oz", desc: "Microwave safe, tight seal" },
      { name: "Salad Bowls", size: "500ml / 750ml", desc: "Clear lid, break-away tab" },
    ]
  },
  {
    id: "funnels",
    title: "Delivery Bags",
    video: "/product/kafis_packaging_1747772991_highlight18079115452248497.mp4",
    items: [
      { name: "Flat Handle Kraft Bags", size: "SOS Bags", desc: "Block bottom, self-opening" },
      { name: "Twisted Handle Bags", size: "Medium / Jumbo", desc: "Thick premium paper" },
    ]
  }
];

export default function CategoryGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="categories" className="pt-24 pb-8 px-4 md:px-8 max-w-[90rem] mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-text-primary">Browse Food Packaging Categories in Kaduna</h2>
        <p className="text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
          Premium packaging crafted for food businesses that care about quality and reliability.
        </p>
      </div>

      {/* Grid container handles the expanded span gracefully via layout transitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
        {CATEGORIES.map((cat) => {
          const isActive = activeId === cat.id;

          return (
            <motion.div
              layout
              key={cat.id}
              onClick={() => setActiveId(isActive ? null : cat.id)}
              className={`group relative overflow-hidden bg-white cursor-pointer transition-shadow duration-500 will-change-transform ${isActive
                ? "col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(45,106,79,0.15)] ring-1 ring-brand-green/20 z-20"
                : "col-span-1 rounded-3xl shadow-sm hover:shadow-2xl hover:ring-1 hover:ring-brand-green/30 ring-1 ring-gray-100"
                }`}
            >
              {/* Card Contents */}
              <div className={`flex flex-col ${isActive ? "md:flex-row" : ""} h-full w-full`}>

                {/* Visual / Image Block */}
                <motion.div
                  layout
                  className={`relative overflow-hidden ${isActive ? "h-72 md:h-full md:w-[450px] shrink-0" : "aspect-[3/4] md:aspect-square w-full"}`}
                >
                  <motion.video
                    layout="position"
                    src={cat.video}
                    autoPlay loop muted playsInline
                    aria-label="Plastic cups for cold drinks in Kaduna packaging supply"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />

                  {/* Subtle Grain/Texture & Gradient Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/95 via-[#2d6a4f]/50 to-transparent mix-blend-multiply" />

                  {/* Title & Interaction Hint */}
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <motion.h3 layout="position" className="text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                      {cat.title}
                    </motion.h3>
                    <motion.div layout="position" className="flex items-center gap-2 text-white/90 font-bold text-xs tracking-widest uppercase">
                      <span>{isActive ? "Close Items" : "Explore Items"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isActive ? "rotate-180" : "-rotate-90"}`} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Animated Drawer Details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="p-6 md:p-12 flex-grow bg-white md:border-l border-gray-100/50 relative"
                    >
                      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                        <h4 className="text-2xl font-black text-text-primary uppercase tracking-tight">Best Selling Items</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cat.items.map((item, i) => (
                          <div key={i} className="bg-background-primary p-6 rounded-[1.5rem] flex flex-col h-full border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300">
                            <div className="mb-3">
                              <span className="inline-block px-3 py-1 bg-white text-brand-leaf text-[10px] font-black tracking-widest uppercase rounded-full border border-gray-100 shadow-sm">
                                {item.size}
                              </span>
                            </div>
                            <h5 className="font-bold text-lg text-text-primary mb-2 line-clamp-1">{item.name}</h5>
                            <p className="text-sm text-text-muted font-medium mb-6 flex-grow">{item.desc}</p>

                            <button className="w-full py-3.5 bg-white text-brand-green border-2 border-brand-green/10 rounded-xl font-bold hover:bg-brand-green hover:text-white hover:border-transparent hover:shadow-md transition-all">
                              Request Price
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
