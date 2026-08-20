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

  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-10 bg-gradient-to-b from-white via-[#fafafa] to-white border-b border-gray-100 relative overflow-hidden">
      
      {/* Background Soft Glow Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#f0fdf4]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Trust Header & Ratings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5 max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-1.5 rounded-full text-xs font-extrabold text-[#166534] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#00a859]" />
            <span>GLOBAL INDUSTRY LEADER</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-[#1d1d1d] tracking-tight leading-tight">
            Loved and trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d1d1d] via-gray-700 to-[#00a859]">
              16,000+ businesses
            </span> across the globe
          </h2>
          
          <p className="text-gray-600 text-lg font-normal max-w-xl mx-auto">
            Empowering high-growth marketing, sales, and customer support teams with unmatched conversational automation.
          </p>

          {/* Premium Floating Badge Row */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-2.5 bg-white border border-gray-200/80 px-5 py-2.5 rounded-full shadow-sm hover:border-[#00a859] transition-all">
              <div className="flex text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-[#1d1d1d] font-bold">4.6/5 on G2</span>
            </div>

            <div className="flex items-center gap-2.5 bg-white border border-gray-200/80 px-5 py-2.5 rounded-full shadow-sm hover:border-[#00a859] transition-all">
              <ShieldCheck className="w-4 h-4 text-[#00a859]" />
              <span className="text-[#1d1d1d] font-bold">Official Meta Tech Partner</span>
            </div>

            <div className="flex items-center gap-2.5 bg-white border border-gray-200/80 px-5 py-2.5 rounded-full shadow-sm hover:border-[#00a859] transition-all">
              <TrendingUp className="w-4 h-4 text-[#00a859]" />
              <span className="text-[#1d1d1d] font-bold">10X ROI Growth</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Infinite Smooth Marquee Brand Showcase with Image Logos */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right Gradient Fade Masks for Clean Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {marqueeBrands.map((brand, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200/80 w-52 h-24 rounded-2xl flex flex-col items-center justify-center p-4 hover:border-[#00a859] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex-shrink-0"
            >
              <div className="relative w-28 h-8 flex items-center justify-center opacity-75 group-hover:opacity-100 transition-opacity">
                <Image 
                  src={brand.logo} 
                  alt={brand.name}
                  fill
                  sizes="112px"
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