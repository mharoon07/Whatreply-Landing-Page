"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, RefreshCw } from "lucide-react";

export default function IntegrationsHubSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Detects when section scrolls into viewport
  const isInView = useInView(containerRef, { amount: 0.2 });
  const [hasError, setHasError] = useState(false);

  // Play video automatically when in view, pause when out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (err.name !== "AbortError") {
            console.warn("Autoplay was prevented:", err);
          }
        });
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section className="py-12 sm:py-20 lg:py-16 bg-white text-[#1d1d1d] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-14 space-y-3 sm:space-y-4 lg:space-y-5"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#f0fdf4] border border-[#bbf7d0] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-[#166534] tracking-wider uppercase shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00a859]" />
            <span>Seamless Ecosystem</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.2] sm:leading-[1.15]"
          >
            Supercharge your current <br className="hidden sm:block" />
            <span className="relative inline-block pb-3 px-2 mx-1 mt-2 sm:mt-0 bg-[#00a859] text-white rounded-xl shadow-lg transform -rotate-1">
              stack in just one click
            </span>
          </motion.h2>
        </motion.div>

        {/* Fully Responsive Video Container with Auto-play on Scroll */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="w-full flex justify-center items-center px-2 sm:px-4 md:px-6 mt-4 sm:mt-8 max-w-4xl md:max-w-5xl lg:max-w-5xl mx-auto"
        >
          <div className="relative w-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200/90 bg-slate-950 ring-1 ring-black/5">
            {/* Ambient Background Glow Effect behind Video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00a859]/20 via-emerald-500/10 to-teal-500/20 blur-xl opacity-60 transition-opacity duration-700 pointer-events-none" />

            {hasError ? (
              <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-slate-900 text-slate-300 min-h-[250px] sm:min-h-[320px]">
                <RefreshCw className="w-9 h-9 text-slate-400 mb-3 animate-spin" />
                <p className="font-bold text-base text-white">Video preview unavailable</p>
                <p className="text-xs text-slate-400 mt-1">Please check <code className="bg-slate-800 text-emerald-300 px-1.5 py-0.5 rounded">stack.mp4</code> in the public folder.</p>
              </div>
            ) : (
              <video
                ref={videoRef}
                src="/stack.mp4"
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
                onError={() => setHasError(true)}
                className="w-full h-auto max-h-[800px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl shadow-inner block"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}