import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Packaging Company in Nigeria | Cups, Boxes & Food Packaging",
  description:
    "We supply plastic cups, cake boxes, food packaging and more. Fast delivery and bulk orders available.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-DYZX2W75XN" />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
