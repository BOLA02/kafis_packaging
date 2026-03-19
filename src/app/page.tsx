"use client";

import Navbar from "@/components/Navbar";
import CategoryGrid from "@/components/CategoryGrid";
import BestSellers from "@/components/BestSellers";
import FastOrderStrip from "@/components/FastOrderStrip";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import { BadgeDollarSign, Award, PackageSearch, Truck, MessageCircle, Instagram } from "lucide-react";

export default function Home() {

  return (
    <main className="relative w-full overflow-x-hidden text-text-primary bg-background-primary">
      <Navbar />
      
      {/* NEW VIDEO HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black/10">
        <video 
          src="/video/Kafis_Packaging_product_202603181226.mp4"
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for better text legibility */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-lg">
            Packaging that powers <br className="hidden md:block"/> your <span className="text-brand-orange">food business.</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-200 mx-auto font-medium mb-10 leading-relaxed drop-shadow-md">
            Disposable cups, takeaway boxes, trays, and food containers trusted by restaurants, bakers, and food vendors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#categories" className="px-8 py-4 bg-brand-green hover:bg-brand-leaf text-white font-semibold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-green/20">
              Browse Products
            </a>
            <a href="https://instagram.com/KafisPackaging" target="_blank" className="px-8 py-4 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] hover:opacity-90 text-white font-semibold rounded-full transition-all backdrop-blur-md transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-[#d6249f]/30">
              <Instagram className="w-5 h-5"/> DM on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        NEW POST-HERO CONVERSION SECTIONS
        ========================================================
      */}
      <div className="relative z-20 bg-background-primary shadow-[0_-20px_50px_rgba(0,0,0,0.05)] pb-20">
        
        {/* The new interactive grid, best sellers, and order strip */}
        <CategoryGrid />
        <BestSellers />
        <FastOrderStrip />
        <TrustSection />
        <Testimonials />

        {/* WHO WE SERVE */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-text-primary">Packaging solutions for every food business</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Restaurants", "Bakeries", "Small chops vendors", "Catering services", "Food delivery brands", "Juice & smoothie vendors"].map((client, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl text-center shadow-sm border border-gray-100 font-bold text-lg text-text-primary hover:shadow-md transition-shadow">
                {client}
              </div>
            ))}
          </div>
        </section>



        {/* TWO-TRAY INFO (Custom & Bulk) */}
        <section id="custom-branding" className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-text-primary text-white p-12 rounded-[3rem] flex flex-col items-start justify-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-green/30 rounded-full blur-3xl"></div>
            <h3 className="text-4xl font-bold mb-4 relative z-10">Custom packaging for your brand.</h3>
            <p className="text-lg text-gray-300 mb-8 relative z-10">Turn every takeaway order into a branding opportunity with custom printed cups, boxes, and bags.</p>
            <button className="px-8 py-4 bg-brand-green hover:bg-brand-leaf text-white font-semibold rounded-full relative z-10 transition-colors shadow-lg shadow-brand-green/20">
              Request Custom Packaging
            </button>
          </div>
          <div id="bulk-orders" className="bg-brand-orange text-white p-12 rounded-[3rem] flex flex-col items-start justify-center relative overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <h3 className="text-4xl font-bold mb-4 relative z-10">Need packaging in bulk?</h3>
            <p className="text-lg text-white/90 mb-8 relative z-10">Bulk supply available alongside dedicated account management for restaurants, caterers, bakeries, and food vendors.</p>
            <button className="px-8 py-4 bg-white text-brand-orange font-bold rounded-full relative z-10 hover:bg-gray-50 transition-colors shadow-lg shadow-black/10">
              Request Bulk Order
            </button>
          </div>
        </section>

        {/* INSTAGRAM & FINAL CTA */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-text-primary">Join our community of food vendors</h2>
          
          {/* IG Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">@KafisPackaging</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-text-primary font-bold rounded-full mb-24 transition-colors">
            Follow us on Instagram
          </button>

          <div className="bg-white border border-gray-100 p-12 rounded-[3rem] shadow-xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-text-primary">Upgrade your packaging today</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#categories" className="px-10 py-5 bg-text-primary hover:bg-black text-white font-semibold rounded-full transition-all text-lg border border-transparent">
                Browse Products
              </a>
              <a href="https://instagram.com/KafisPackaging" target="_blank" className="px-10 py-5 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] hover:opacity-90 text-white font-semibold rounded-full transition-all text-lg flex items-center gap-2 shadow-lg shadow-[#d6249f]/40">
                <Instagram className="w-6 h-6"/> DM on Instagram
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
