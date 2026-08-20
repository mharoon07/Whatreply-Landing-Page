"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Bot, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";

// Tab content data structure for cleaner separation and maintainability
const TAB_CONTENT = {
  support: {
    badge: "⚡ Support Agent Preview",
    title: "Train your AI support agent in minutes",
    description: (
      <>
        Let your automated chatbot deflect up to{" "}
        <span className="font-bold text-[#1d1d1d]">60% of customer queries</span>{" "}
        instantly on WhatsApp, reducing ticket resolution time to absolute zero.
      </>
    ),
    features: [
      "Instant 24/7 automated query handling",
      "Human-like contextual conversational flow",
      "Seamless data sync with CRM & Knowledge base",
    ],
    image: "/ai-support.png",
    logText: "Query resolved automatically. Deflection: +60%",
  },
  sales: {
    badge: "🚀 Sales Pipeline Preview",
    title: "Qualify & convert leads 24/7 on chat",
    description: (
      <>
        Build smart intelligent agents that uncover buyer intent, score
        prospects, and book high-ticket meetings automatically in real-time.
      </>
    ),
    features: [
      "Automated lead scoring & instant qualification",
      "Intelligent routing to human sales executives",
      "Automated calendar appointment booking",
    ],
    image: "/inbound.png",
    logText: "Lead tagged as 'High Intent Enterprise'. Assigned to rep.",
  },
} as const;

export default function AiShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"support" | "sales">("support");
  const content = TAB_CONTENT[activeTab];

  return (
    <section className="py-28 bg-gradient-to-b from-white via-[#fcfcfc] to-white relative overflow-hidden border-t border-gray-100">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#f0fdf4] rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-5"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-1.5 rounded-full text-xs font-black text-[#166534] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#00a859]" />
            <span>AI @ WATI INTELLIGENCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-[#1d1d1d] tracking-tight leading-tight">
            10X your performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a859] via-emerald-600 to-[#166534]">
              with Wati AI
            </span>
          </h2>

          <p className="text-gray-600 text-lg font-normal">
            Let Wati AI handle heavy lifting, enabling your teams to drive meaningful conversations that build relationships and revenue.
          </p>

          {/* Premium Animated Switcher Tabs */}
          <div className="flex justify-center pt-6">
            <div className="bg-gray-100/80 backdrop-blur-md p-2 rounded-full inline-flex gap-2 border border-gray-200/80 shadow-inner">
              {(["support", "sales"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-7 py-3 rounded-full text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                    activeTab === tab ? "text-[#1d1d1d]" : "text-gray-500 hover:text-[#1d1d1d]"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-white rounded-full shadow-md border border-gray-200/60 -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  {tab === "support" ? "AI Support Agent" : "Inbound Intelligence Agent"}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Interactive Showcase Card Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-gray-200/80 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl shadow-gray-200/50 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative"
        >
          
          {/* Left Content Area with Smooth Animation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#00a859] shadow-sm">
              <Bot className="w-7 h-7" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#1d1d1d] tracking-tight leading-tight">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed font-normal">
                    {content.description}
                  </p>
                </div>

                <div className="space-y-3.5 pt-2">
                  {content.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 text-sm font-semibold text-gray-800">
                      <div className="w-6 h-6 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00a859]">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-4">
              <button className="bg-[#1d1d1d] text-white px-8 py-4 rounded-full font-extrabold hover:bg-[#00e785] hover:text-[#1d1d1d] transition-all duration-300 shadow-lg shadow-black/10 flex items-center gap-3 group cursor-pointer">
                <span>Build Your AI Agent</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Interactive Image Showcase Area */}
          <div className="lg:col-span-7 bg-[#fafafa] p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-inner space-y-6 relative overflow-hidden">
            
            {/* Window Header Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                {content.badge}
              </span>
            </div>

            {/* Image Preview Container */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200/80">
                  <Image 
                    src={content.image}
                    alt={content.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* System Action Log */}
                <div className="bg-white/80 p-3.5 rounded-xl border border-gray-200/60 flex items-center justify-between text-xs text-gray-500 shadow-sm">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00a859]" />
                    <span className="font-mono font-semibold">
                      {content.logText}
                    </span>
                  </div>
                  <span className="text-emerald-600 font-bold font-mono">0.4s response</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer Status Bar */}
            <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Wati Conversational Core Active
              </span>
              <span className="text-[#00a859] font-bold">Official Meta Partner API</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}