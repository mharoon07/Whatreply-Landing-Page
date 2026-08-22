"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Image from "next/image";

export default function IntegrationsHubSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-11 bg-white text-[#1d1d1d] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4 lg:space-y-5"
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

          {/* Main Heading - Premium Responsive */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.2] sm:leading-[1.15]"
          >
            Supercharge your current  <br className="hidden sm:block" />
            <span className="relative inline-block pb-3 px-2 mx-1 mt-2 sm:mt-0 bg-[#00a859] text-white rounded-xl shadow-lg transform -rotate-1">
                stack in just one click
            </span>
          </motion.h2>

        
        </motion.div>

        {/* Fully Responsive Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center items-center px-2 sm:px-4 mt-6 sm:mt-10"
        >
          <div>
            <Image
              src="/stack3.png"
              alt="Integration Stack Showcase"
              width={1200}
              height={700}
              className="w-[1000px] h-auto object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}