"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-32">
      
      {/* Background Subtle Light Green Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#f0fdf4] rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Top Announcement Tag with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-2 rounded-full text-sm font-semibold text-[#166534] shadow-sm hover:bg-[#dcfce7] transition cursor-pointer">
            <span className="bg-[#00e785] text-[#1d1d1d] text-xs px-2.5 py-0.5 rounded-full font-extrabold">New</span>
            <span>Get TikTok DMs and Ads in Wati Team Inbox</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Main Heading & Subtext with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1d1d1d] leading-[1.08] ">
            The <span className=" underline decoration-[#00e785] decoration-wavy decoration-6 underline-offset-8">#1 business</span> messaging platform
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal ">
            From the first marketing touchpoint through the sales cycle to ongoing customer success, Wati drives faster ROI with an easy-to-use, scalable AI-powered customer engagement platform.
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/demo" 
              className="w-full sm:w-auto bg-[#1d1d1d] text-white px-8 py-4 rounded-full font-bold hover:bg-[#00e785] hover:text-[#1d1d1d] transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/free-trial" 
              className="w-full sm:w-auto border-2 border-gray-200 text-[#1d1d1d] px-8 py-4 rounded-full font-bold hover:border-[#1d1d1d] hover:bg-[#f0fdf4]/50 transition-all flex items-center justify-center cursor-pointer"
            >
              Try for Free
            </Link>
          </div>

          {/* Trust Proof / Rating */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span>Trusted by 16,000+ customers worldwide</span>
          </div>
        </motion.div>

        {/* Centered Wide Mockup Showcase with Smooth Reveal Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 w-full"
        >
          <div className="relative bg-black/5 rounded-3xl p-4 sm:p-8 text-[#1d1d1d] shadow-2xl shadow-gray-200/60 border border-gray-200 text-left">
            
            {/* Top Bar inside mockup */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#00a859]" />
                <span>WATI Unified Team Inbox Preview</span>
              </div>
            </div>

            {/* Clean Hero Image Replacement */}
            <div className="py-6 sm:py-8 relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-inner bg-white border border-gray-200/60">
              <Image 
                src="/hero2.png" 
                alt="Wati Platform Preview Dashboard"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Footer Badge */}
            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-2">
              <span className="font-medium">🟢 Connected to WhatsApp Business API</span>
              <span className="text-[#166534] font-bold">10X Your Performance with Wati AI</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}