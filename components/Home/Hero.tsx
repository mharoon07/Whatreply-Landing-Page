"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Star, 
  Play, 
  Pause,
  Zap, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

// In-Place Floating Wavy Underline Component
function WavyUnderline() {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10 bg-[#00e785] bg-clip-text text-transparent">
        Conversational AI
      </span>
      {/* Wave SVG: Draws once, then gently floats & ripples in place */}
      <span className="absolute -bottom-2.5 sm:-bottom-3 left-0 right-0 w-full h-3 sm:h-4 overflow-visible pointer-events-none">
        <motion.svg
          viewBox="0 0 240 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#00e785]"
          preserveAspectRatio="none"
          animate={{
            y: [0, -2, 1.5, 0],
            scaleY: [1, 1.12, 0.92, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.path
            d="M 2 9 Q 20 1, 40 9 T 80 9 T 120 9 T 160 9 T 200 9 T 238 9"
            stroke="url(#wavyUnderlineGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="filter drop-shadow-[0_2px_6px_rgba(0,231,133,0.5)]"
          />
          <defs>
            <linearGradient id="wavyUnderlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e785" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#00e785" />
            </linearGradient>
          </defs>
        </motion.svg>
      </span>
    </span>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.warn("Video playback error:", err);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <section 
      aria-label="Hero Section" 
      className="relative overflow-hidden bg-white pt-20 pb-12 lg:pt-24 lg:pb-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Top Announcement Tag with High-Energy Micro-Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex justify-center mb-4 sm:mb-5"
        >
          <Link
            href="https://app.whatreply.tech/en/login"
            className="group relative inline-flex items-center gap-2 sm:gap-3 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-emerald-400 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-800 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e785] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a859]"></span>
            </span>
            <span className="bg-[#00e785] text-slate-900 text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider shadow-xs">
              NEW AI 2.0
            </span>
            <span className="text-slate-600 group-hover:text-slate-900 font-medium">
              Transform WhatsApp Chats into 24/7 Revenue Engines
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>

        {/* Main SEO & Conversion Power Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="space-y-4 sm:space-y-5 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.12]">
            Turn Every Message Into Instant Revenue With{" "}
            <WavyUnderline />
          </h1>
          
          {/* Subtext: Clear, Persuasive, Captivating */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal pt-1">
            Automate <strong className="font-semibold text-slate-900">85% of customer queries</strong>, broadcast targeted campaigns with <strong className="font-semibold text-emerald-700">98% open rates</strong>, and close WhatsApp sales 3x faster.
          </p>

          {/* Centered Action-Packed CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-3">
            {/* Primary CTA: Get Started with 3D Dual-Layer Liquid Wave & Moving Border Line */}
            <Link 
              href="https://app.whatreply.tech/en/login" 
              className="group relative w-full sm:w-auto p-[1.5px] rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-slate-900/10 hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Slow Moving Green Light Beam Tracing the Border Line */}
              <span className="absolute -inset-[100%] rounded-full bg-[conic-gradient(from_0deg,transparent_0_270deg,#00e785_320deg,#10b981_350deg,transparent_360deg)] opacity-0 group-hover:opacity-100 animate-[spin_6s_linear_infinite] transition-opacity duration-500 pointer-events-none z-0" />
              
              {/* Inner Button Surface */}
              <span className="relative w-full h-full bg-[#1d1d1d] text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 overflow-hidden z-10">
                {/* Secondary Translucent Fluid Wave */}
                <span className="absolute -inset-x-6 -bottom-6 h-[200%] bg-[#00e785]/40 rounded-[100%_100%_0_0] translate-y-full group-hover:translate-y-[-2%] transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] delay-100 -z-10 pointer-events-none" />

                {/* Primary Solid Liquid Wave */}
                <span className="absolute -inset-x-6 -bottom-6 h-[200%] bg-[#00e785] rounded-[100%_100%_0_0] translate-y-full group-hover:translate-y-0 transition-transform duration-900 ease-[cubic-bezier(0.19,1,0.22,1)] -z-10 overflow-hidden pointer-events-none">
                  {/* Glossy Liquid Surface Meniscus Highlight */}
                  <span className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/60 via-white/20 to-transparent" />
                </span>
                
                <Zap className="w-5 h-5 text-[#00e785] group-hover:text-slate-950 transition-colors duration-500 relative z-10" />
                <span className="relative z-10 group-hover:text-slate-950 transition-colors duration-500">Get Started Now</span>
                <ArrowRight className="w-4 h-4 text-[#00e785] group-hover:text-slate-950 group-hover:translate-x-1 transition-all duration-500 relative z-10" />
              </span>
            </Link>

            {/* Secondary CTA: Watch Demo with 3D Dual-Layer Liquid Wave & Moving Border Line */}
            <Link 
              href="https://app.whatreply.tech/en/login" 
              className="group relative w-full sm:w-auto p-[1.5px] rounded-full overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              {/* Slow Moving Green Light Beam Tracing the Border Line */}
              <span className="absolute -inset-[100%] rounded-full bg-[conic-gradient(from_0deg,transparent_0_270deg,#00e785_320deg,#10b981_350deg,transparent_360deg)] opacity-0 group-hover:opacity-100 animate-[spin_6s_linear_infinite] transition-opacity duration-500 pointer-events-none z-0" />

              {/* Inner Button Surface */}
              <span className="relative w-full h-full bg-white text-slate-800 border border-slate-200 group-hover:border-transparent px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2.5 overflow-hidden z-10">
                {/* Secondary Translucent Fluid Wave */}
                <span className="absolute -inset-x-6 -bottom-6 h-[200%] bg-slate-700/40 rounded-[100%_100%_0_0] translate-y-full group-hover:translate-y-[-2%] transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] delay-100 -z-10 pointer-events-none" />

                {/* Primary Solid Liquid Wave */}
                <span className="absolute -inset-x-6 -bottom-6 h-[200%] bg-[#1d1d1d] rounded-[100%_100%_0_0] translate-y-full group-hover:translate-y-0 transition-transform duration-900 ease-[cubic-bezier(0.19,1,0.22,1)] -z-10 overflow-hidden pointer-events-none">
                  {/* Glossy Liquid Surface Meniscus Highlight */}
                  <span className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                </span>

                <Play className="w-4 h-4 text-emerald-600 fill-emerald-600 group-hover:text-[#00e785] group-hover:fill-[#00e785] transition-colors duration-500 relative z-10" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Watch 2-Min Demo</span>
              </span>
            </Link>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-1.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a859]" /> Free Setup Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a859]" /> Official WhatsApp Business API
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a859]" /> 3-Minute 1-Click Setup
            </span>
          </div>

          {/* Star Rating & Global Customer Trust */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full text-amber-600 shadow-2xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-slate-900 ml-1">4.9/5</span>
              <span className="text-xs text-slate-500">(30+ reviews)</span>
            </div>
            <span className="text-slate-500">Trusted by <strong className="text-slate-900 font-semibold">20+ businesses</strong> in 5+ countries</span>
          </div>
        </motion.div>

        {/* Centered Video Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-8 sm:mt-9 w-full relative max-w-4xl mx-auto px-2 sm:px-0"
        >
          <div 
            onClick={togglePlay}
            className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200/90 bg-slate-900 group cursor-pointer"
          >
            {hasError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-slate-300">
                <AlertCircle className="w-12 h-12 text-slate-400 mb-3" />
                <p className="font-bold text-base text-white">Video preview unavailable</p>
                <p className="text-xs text-slate-400 mt-1">Please ensure <code className="bg-slate-800 text-emerald-300 px-1.5 py-0.5 rounded">hero-intro.mp4</code> is placed in your <code className="bg-slate-800 text-emerald-300 px-1.5 py-0.5 rounded">/public</code> directory.</p>
              </div>
            ) : (
              <video 
                ref={videoRef}
                src="/hero-intro2.mp4"
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setHasError(true)}
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            )}

            {/* Ultra Liquid Glass Center Button (Play when paused, Pause on hover when playing) */}
            {!hasError && (
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  !isPlaying 
                    ? "opacity-100 bg-black/40 backdrop-blur-[3px]" 
                    : "opacity-0 group-hover:opacity-100 bg-black/30 backdrop-blur-[2px]"
                }`}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="relative group/glass flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-white/35 via-white/15 to-white/5 hover:from-white/45 hover:to-white/15 backdrop-blur-2xl border border-white/50 shadow-[0_12px_30px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.7)] transform hover:scale-110 active:scale-95 transition-all duration-300 ring-1 ring-white/30 cursor-pointer overflow-hidden"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {/* Curved Top Glossy Reflection Arc */}
                  <span className="absolute -top-1/2 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-full" />
                  
                  {/* Subtle Inner Glow Highlight */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/glass:opacity-100 transition-opacity pointer-events-none" />

                  {/* Dynamic Icon */}
                  {isPlaying ? (
                    <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] relative z-10" />
                  ) : (
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white ml-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] relative z-10" />
                  )}
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Feature Badges Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-4 text-left"
        >
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-sm transition-shadow">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">98%</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">Campaign Open Rates</p>
          </div>
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-sm transition-shadow">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">3.8x</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">Faster Sales Conversions</p>
          </div>
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-sm transition-shadow">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">85%</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">Auto Query Resolution</p>
          </div>
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-sm transition-shadow">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">24/7</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">AI Customer Support</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}