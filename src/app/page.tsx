"use client";

import Navbar from "@/components/Navbar";
import CategoryGrid from "@/components/CategoryGrid";
import BestSellers from "@/components/BestSellers";
import FastOrderStrip from "@/components/FastOrderStrip";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
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
          aria-label="Plastic cups for cold drinks in Kaduna packaging supply"
        />
        {/* Dark overlay for better text legibility */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-lg">
            Packaging that powers <br className="hidden md:block" /> your <span className="text-brand-orange">food business.</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-200 mx-auto font-medium mb-10 leading-relaxed drop-shadow-md">
            “Supplying plastic cups, cake boxes, food containers and disposable packaging for vendors, events and businesses in Kaduna."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#categories" className="px-8 py-4 bg-brand-green hover:bg-brand-leaf text-white font-semibold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-green/20">
              Browse Products
            </a>
            <a href="https://instagram.com/KafisPackaging" target="_blank" className="px-8 py-4 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] hover:opacity-90 text-white font-semibold rounded-full transition-all backdrop-blur-md transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-[#d6249f]/30">
              <Instagram className="w-5 h-5" /> DM on Instagram
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



        <FinalCTA />

      </div>
    </main>
  );
}
