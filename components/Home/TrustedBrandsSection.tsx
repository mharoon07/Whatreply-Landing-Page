"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export default function TrustedBrandsSection() {
  const brands = [
    { name: "Brand 1", logo: "/logo1.png", tag: "FINTECH" },
    { name: "Brand 2", logo: "/logo2.png", tag: "E-COMMERCE" },
    { name: "Brand 3", logo: "/logo3.png", tag: "SUPPORT" },
    { name: "Brand 4", logo: "/logo4.png", tag: "LOGISTICS" },
    { name: "Brand 5", logo: "/logo5.png", tag: "MARKETING" },
  ];

  // Repeat for continuous smooth marquee loop
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <section 
      aria-label="Trusted Brands Section"
      className="py-14 sm:py-20 bg-white border-y border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Header */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center space-y-5 max-w-4xl mx-auto mb-10 sm:mb-14"
        >
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/90 px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="tracking-wider uppercase text-[11px] sm:text-xs">
              Trusted by 1,000+ Fast-Growing Companies
            </span>
          </div>
          
          {/* Big, Bold & Spacious Heading with Green Highlight Span */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.25]">
            Powering{" "}
            <span className="inline-block bg-[#00a859] text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl shadow-sm mx-1 align-middle">
              Next-Gen Conversations
            </span>{" "}
            for 1,000+ Global Brands
          </h2>
          
          {/* Spacious, High-Impact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl sm:max-w-2xl mx-auto leading-relaxed pt-1">
            Scaling brands and global enterprises rely on Replyly to automate sales, streamline support, and 3x revenue.
          </p>

          {/* Spacious & Clean Trust Indicators */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2.5 bg-slate-50/90 border border-slate-200/80 px-4 py-2 rounded-full shadow-2xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-slate-900 font-bold">4.9/5 Rating</span>
              <span className="text-slate-500 hidden sm:inline">(G2 & Capterra)</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-50/90 border border-slate-200/80 px-4 py-2 rounded-full shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-900 font-bold">Official Meta Tech Partner</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-50/90 border border-slate-200/80 px-4 py-2 rounded-full shadow-2xs">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-900 font-bold">3.8x Conversion Boost</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Infinite Smooth Marquee Brand Showcase */}
      <div className="relative w-full overflow-hidden py-3">
        
        {/* Clean Edge Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 sm:gap-7 items-center w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {marqueeBrands.map((brand, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200/80 hover:border-slate-300 w-48 sm:w-56 h-24 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 shadow-2xs group flex-shrink-0"
            >
              <div className="relative w-32 sm:w-36 h-9 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <Image 
                  src={brand.logo} 
                  alt={brand.name}
                  fill
                  sizes="(max-width: 640px) 128px, 144px"
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}