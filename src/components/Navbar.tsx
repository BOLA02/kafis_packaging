"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 overflow-hidden bg-white rounded-full shadow-md mr-3 border border-gray-100 flex-shrink-0">
            <Image 
              src="/sequence/logo.png" 
              alt="Kafis" 
              fill
              className="object-cover scale-[1.3] md:scale-[1.5]"
              priority
            />
          </div>
          <span className={cn(
            "text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 drop-shadow-sm",
            isScrolled ? "text-text-primary" : "text-white"
          )}>
            Kafis<span className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-brand-green" : "text-brand-leaf"
            )}>Packaging</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={cn(
          "hidden lg:flex items-center space-x-8 text-sm transition-colors",
          isScrolled 
            ? "font-medium text-text-muted [&>a:hover]:text-text-primary"
            : "font-semibold text-white/90 drop-shadow-md [&>a:hover]:text-white"
        )}>
          <Link href="#products" className="transition-colors">Products</Link>
          <Link href="#categories" className="transition-colors">Categories</Link>
          <Link href="#bulk-orders" className="transition-colors">Bulk Orders</Link>
          <Link href="#custom-branding" className="transition-colors">Custom Branding</Link>
          <Link href="#contact" className="transition-colors">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <a
            href="https://wa.me/1234567890" // Placeholder for actual WA link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium bg-brand-green hover:bg-brand-leaf text-white px-5 py-2.5 rounded-full transition-all shadow-md transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </motion.header>
  );
}
