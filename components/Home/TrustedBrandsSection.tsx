"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Activity, 
  Zap, 
  Boxes, 
  Layers, 
  Hexagon, 
  Orbit, 
  Cpu, 
  Compass 
} from "lucide-react";

export default function TrustedBrandsSection() {
  const brands = [
    { name: "PulseFlow", tag: "AI Workflows", icon: Activity },
    { name: "NovaPay", tag: "Fintech", icon: Zap },
    { name: "OmniSync", tag: "E-Commerce", icon: Boxes },
    { name: "CloudScale", tag: "Cloud Infra", icon: Layers },
    { name: "ApexLogix", tag: "Logistics", icon: Hexagon },
    { name: "Zenith AI", tag: "Enterprise AI", icon: Orbit },
    { name: "Veloce Labs", tag: "Automation", icon: Cpu },
    { name: "KiteGrowth", tag: "Marketing", icon: Compass },
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
              Trusted by 20+ Fast-Growing Companies
            </span>
          </div>
          
          {/* Big, Bold & Spacious Heading with Green Highlight Span */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.25]">
            Powering{" "}
            <span className="inline-block bg-[#00a859] text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl shadow-sm mx-1 align-middle">
              Next-Gen Conversations
            </span>{" "}
            for 20+ Growing Brands
          </h2>
          
          {/* Spacious, High-Impact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl sm:max-w-2xl mx-auto leading-relaxed pt-1">
            Scaling brands and global enterprises rely on Whatreply to automate sales, streamline support, and 3x revenue.
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
          className="flex gap-4 sm:gap-6 items-center w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {marqueeBrands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200/90 hover:border-[#00a859]/60 hover:shadow-lg hover:shadow-emerald-500/5 px-5 sm:px-6 py-3.5 h-16 sm:h-18 rounded-2xl flex items-center gap-3.5 transition-all duration-300 shadow-2xs group flex-shrink-0 cursor-default"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 group-hover:bg-[#f0fdf4] border border-slate-200/70 group-hover:border-[#bbf7d0] flex items-center justify-center text-slate-600 group-hover:text-[#00a859] transition-all duration-300 shrink-0 shadow-2xs">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-slate-800 group-hover:text-[#1d1d1d] text-sm sm:text-base tracking-tight transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#00a859] transition-colors">
                    {brand.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}