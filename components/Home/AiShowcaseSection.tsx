"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Bot, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const TAB_CONTENT = {
  support: {
    badge: "⚡ 24/7 Support Agent",
    title: "Train Human-Like AI Support in Minutes",
    description: "Automate 85% of repetitive customer inquiries instantly with deep knowledge-base context and zero human intervention.",
    features: [
      "Instant 0.8s response time on WhatsApp & Web",
      "Multilingual AI with human-like empathy & context",
      "Direct 1-click sync with Zendesk, HubSpot & Shopify",
    ],
    image: "/ai-support2.png",
    cta: "Build Your AI Agent",
  },
  sales: {
    badge: "🚀 Sales Pipeline Intelligence",
    title: "Qualify & Convert Leads 24/7 on Chat",
    description: "Score buyer intent in real-time, handle objections smoothly, and book high-ticket meetings straight into your sales calendar.",
    features: [
      "Instant AI lead scoring & buyer qualification",
      "Automated calendar booking & meeting reminders",
      "Smart live routing to top sales executives",
    ],
    image: "/inbound2.png",
    cta: "Build Your AI Agent",
  },
} as const;

export default function AiShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"support" | "sales">("support");
  const content = TAB_CONTENT[activeTab];

  return (
    <section 
      aria-label="AI Agents Showcase Section"
      className="py-14 sm:py-20 lg:py-16 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Animated Tab Switcher */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="bg-gray-100/90 backdrop-blur-md p-1.5 rounded-full inline-flex gap-2 border border-gray-200/80 shadow-inner">
            {(["support", "sales"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  activeTab === tab ? "text-[#1d1d1d]" : "text-gray-500 hover:text-[#1d1d1d]"
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-white rounded-full shadow-md border border-gray-200/60 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {tab === "support" ? "AI Support Agent" : "Inbound Intelligence Agent"}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Alternating Showcase Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            
            {/* Text Card Column */}
            <div className={`${
              activeTab === "support" 
                ? "lg:col-span-5 lg:order-1" 
                : "lg:col-span-5 lg:order-2"
            }`}>
              <div className="bg-slate-50/90 border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#00a859] shadow-2xs">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#166534] bg-[#f0fdf4] border border-[#bbf7d0] px-3 py-1 rounded-full">
                    {content.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1d1d1d] tracking-tight leading-snug">
                    {content.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {content.description}
                  </p>
                </div>

                <div className="space-y-3.5 pt-1 border-t border-slate-200/70">
                  {content.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00a859] shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link 
                    href="/free-trial"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1d1d1d] text-white px-8 py-4 rounded-full font-extrabold hover:bg-[#00e785] hover:text-[#1d1d1d] transition-all duration-300 shadow-lg shadow-black/10 group cursor-pointer"
                  >
                    <span>{content.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Responsive Image Showcase Column */}
            <div className={`${
              activeTab === "support" 
                ? "lg:col-span-7 lg:order-2" 
                : "lg:col-span-7 lg:order-1"
            }`}>
              <div className="relative w-full aspect-[16/10] ">
                <Image 
                  src={content.image}
                  alt={content.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}