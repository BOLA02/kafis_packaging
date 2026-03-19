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
  verification: {
    google: "R7aqVAlVlFJWzrw_TMRvy4VpTRP9KseqJl_4yGR9XyE",
  },
  title: "Packaging in Abuja | Plastic Cups, Cake Boxes & Food Packaging - Kafis Packaging",
  description:
    "Kafis Packaging supplies plastic cups, cake boxes, food containers and disposable packaging in Abuja. Bulk orders, fast delivery and affordable prices.",
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
