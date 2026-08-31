"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function GrowBetterSection() {
  return (
    <section className="py-24 sm:py-15 bg-[#FDFDFD] text-[#1d1d1d] relative overflow-hidden border-t border-gray-100">
      
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] bg-[#d1fae5]/40 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#FDFDFD] border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-black text-[#047857] tracking-wider uppercase shadow-sm mb-8 cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
          <span>Stop Losing Leads on WhatsApp</span>
        </motion.div>

        {/* Main Heading with Eye-Catching Highlight & Wavy Underline */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 mb-8"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-[#1d1d1d]">
            Turn casual chats into <br className="hidden sm:block" />
            <span className="relative inline-block pb-3 px-2 mx-1 mt-2 sm:mt-0 bg-[#00a859] text-white rounded-xl shadow-lg transform -rotate-1">
              guaranteed sales
            </span>
            <span className="relative inline-block pb-3 px-1">
              {" "}automatically.
              
              {/* Smooth & Rounded Wavy SVG Underline */}
              <svg 
                className="absolute left-0 -bottom-1.5 w-full h-4 text-[#00a859]" 
                viewBox="0 0 200 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                  d="M1 8C32 2 64 14 100 8C136 2 168 14 199 8" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed pt-2">
            Never Miss a Customer. Never Miss a Sale.
          </p>
        </motion.div>

        {/* Feature Checkpoints */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12 text-xs sm:text-sm font-bold text-gray-700"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a859]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a859]" />
            <span>7-day full access trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a859]" />
            <span>Setup in under 5 minutes</span>
          </div>
        </motion.div>

        {/* Premium CTA Button & Subtext */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Link href="https://app.whatreply.tech/en/login" className="relative group overflow-hidden rounded-full p-[2px] cursor-pointer shadow-2xl active:scale-95 transition-transform duration-200 w-full sm:w-auto">
            {/* Animated Gradient Border Layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#00a859] via-emerald-400 to-[#166534] rounded-full animate-pulse" />
            
            {/* Button Inner Content */}
            <span className="relative px-8 sm:px-10 py-4 sm:py-4.5 bg-[#1d1d1d] rounded-full flex items-center justify-center gap-3 text-white font-extrabold text-base transition-all duration-300 group-hover:bg-opacity-90">
              <span>Start Scaling For Free</span>
              <ArrowRight className="w-5 h-5 text-[#00e785] group-hover:translate-x-1.5 transition-transform" />
            </span>
          </Link>

          <span className="text-xs text-gray-500 font-medium">
            Join 1,000+ ambitious businesses automating their growth today.
          </span>
        </motion.div>

      </div>
    </section>
  );
}