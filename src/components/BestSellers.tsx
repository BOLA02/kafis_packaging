"use client";

import { motion } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";
import { MessageCircle, ArrowRight, Package } from "lucide-react";

const BEST_SELLERS = [
  {
    id: "clear-cups",
    name: "Branded Clear Cold Cups",
    desc: "Premium PET plastic, highly crack-resistant and crystal clear.",
    size: "300ml / 500ml",
    pack: "1000 per carton",
    video: "/product/kafis_packaging_1747855947_highlight18079115452248497.mp4"
  },
  {
    id: "hot-cups",
    name: "Double Wall Hot Cups",
    desc: "Insulated ripple or smooth wrap. No sleeve needed. Keep drinks hot.",
    size: "250ml / 400ml",
    pack: "500 per carton",
    video: "/product/kafis_packaging_1764174095_3774483648100496872_45913413296.mp4"
  },
  {
    id: "cake-boxes",
    name: "Window Cake Boxes",
    desc: "Sturdy structured boxes with a clear top window for premium display.",
    size: '8x8" / 10x10"',
    pack: "100 per bundle",
    video: "/product/kafis_packaging_1766406492_3793212976229280764_45913413296.mp4"
  },
  {
    id: "kraft-boxes",
    name: "Kraft Mailer Boxes",
    desc: "Rigid corrugated cardboard. Unbranded or custom printed options.",
    size: "Various sizes",
    pack: "MOQ 100",
    video: "/product/kafis_packaging_1773674639_3854180366466988942_45913413296.mp4"
  },
  {
    id: "food-trays",
    name: "Kraft Boat Trays",
    desc: "Grease-resistant lining. Perfect for fries, loaded nachos, and sides.",
    size: "Small / Large",
    pack: "500 per carton",
    video: "/product/kafis_packaging_1681303368_highlight18079115452248497.mp4"
  },
  {
    id: "standup-pouches",
    name: "Stand-Up Pouches",
    desc: "Resealable zipper lock pouches with high-barrier foil or clear window.",
    size: "100g - 1kg",
    pack: "1000 per batch",
    video: "/product/kafis_packaging_1701416466_highlight18079115452248497.mp4"
  },
  {
    id: "tamper",
    name: "Tamper-Proof Containers",
    desc: "Ensure food safety with clear containers featuring a break-away tab.",
    size: "8oz - 32oz",
    pack: "250 per carton",
    video: "/product/kafis_packaging_1704311475_3272323095559606986_45913413296.mp4"
  },
  {
    id: "deli-bags",
    name: "Twisted Handle Carrier Bags",
    desc: "Durable, thick premium paper bags for takeout and retail.",
    size: "Medium / Jumbo",
    pack: "250 per bundle",
    video: "/product/kafis_packaging_1725957846_highlight18079115452248497.mp4"
  }
];

export default function BestSellers() {
  const handleWhatsAppClick = (product: (typeof BEST_SELLERS)[number]) => {
    sendGAEvent("event", "whatsapp_click", {
      button_location: "best_sellers",
      page_section: "best_sellers",
      cta_label: "Request Price",
      destination: "whatsapp",
      product_id: product.id,
      product_name: product.name,
      product_size: product.size,
      product_pack: product.pack,
    });
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-[90rem] mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-text-primary">
            Best Sellers
          </h2>
          <p className="text-xl text-text-muted font-medium leading-relaxed max-w-2xl">
            Popular packaging options trusted by food vendors, event planners, and retail businesses.
          </p>
        </div>

        <a
          href="#categories"
          className="inline-flex items-center gap-2 font-bold text-brand-green hover:text-brand-leaf transition-colors self-start md:self-auto py-3 px-6 bg-brand-green/10 rounded-full"
        >
          View Full Catalogue <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {BEST_SELLERS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group block relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 shrink-0">
              <video
                src={product.video}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm z-10 transition-transform duration-300 group-hover:-translate-y-12">
                <span className="text-[10px] uppercase tracking-widest font-bold text-text-primary flex items-center gap-1.5">
                  <Package className="w-3 h-3 text-brand-orange" /> Fast Moving
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 pt-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end pointer-events-none">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <div className="flex justify-between items-center text-sm font-medium opacity-90 mb-1 border-b border-white/20 pb-1">
                    <span>Available Sizes:</span>
                    <span className="font-bold">{product.size}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium opacity-90 mb-2">
                    <span>Bulk Supply:</span>
                    <span className="font-bold">{product.pack}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-brand-leaf mt-3 flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> Connect for bulk pricing
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white z-20">
              <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm text-text-muted font-medium mb-8 line-clamp-2 md:line-clamp-3">
                {product.desc}
              </p>

              <div className="mt-auto flex-grow flex flex-col justify-end">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleWhatsAppClick(product)}
                  className="w-full py-4 bg-gray-50 hover:bg-brand-green group-hover:bg-brand-green group-hover:text-white text-text-primary border border-gray-100 group-hover:border-transparent rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ring-4 ring-transparent group-hover:ring-brand-green/10"
                >
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  Request Price
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}