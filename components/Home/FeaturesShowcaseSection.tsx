"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageSquare, Send, Users, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const FEATURE_CONTENT = {
  inbox: {
    icon: MessageSquare,
    badge: "💬 Shared Team Inbox",
    title: "Every Customer Conversation. One Unified Workspace.",
    description:
      "Stop context-switching between tools. Route WhatsApp, Instagram, and web messages to the right agent instantly — with private notes, SLA tracking, and real-time collision detection.",
    features: [
      "Smart round-robin agent assignment & overflow routing",
      "Private team notes, tags & priority SLA labels",
      "Live collision detection — no double replies, ever",
    ],
    useImage: true,
    image: "/shared-team.png",
  },
  broadcast: {
    icon: Send,
    badge: "📊 Broadcast Campaigns",
    title: "Reach 10,000 Contacts in Seconds. See 98% Open Rates.",
    description:
      "Launch hyper-personalized promotions, cart recovery alerts, and automated drip sequences directly on WhatsApp — where your customers actually read messages.",
    features: [
      "Advanced contact segmentation & audience filters",
      "High-converting template builder with media support",
      "Real-time campaign delivery & click analytics",
    ],
    useImage: false,
  },
  crm: {
    icon: Users,
    badge: "📈 Sales Pipeline & CRM",
    title: "Close Deals Inside Chat. Zero Tab-Switching.",
    description:
      "Track leads through a visual pipeline, send secure payment links, and book meetings — all from inside the conversation thread.",
    features: [
      "Visual kanban deal pipeline with drag-and-drop",
      "Secure in-chat payment links & instant invoicing",
      "One-click meeting scheduler & follow-up reminders",
    ],
    useImage: false,
  },
} as const;

// Smooth Spring Animations Preset
const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

export default function FeaturesShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"inbox" | "broadcast" | "crm">("inbox");
  const currentFeature = FEATURE_CONTENT[activeTab];
  const ActiveIcon = currentFeature.icon;

  return (
    <section 
      aria-label="Features Showcase Section"
      className="py-14 sm:py-20 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Animated Tab Switcher with Scroll Fade/Slide */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="bg-gray-100/90 backdrop-blur-md p-1.5 rounded-full inline-flex flex-wrap justify-center gap-2 border border-gray-200/80 shadow-inner">
            {(["inbox", "broadcast", "crm"] as const).map((tab) => {
              const labels = {
                inbox: "Shared Team Inbox",
                broadcast: "Broadcast Campaigns",
                crm: "Sales Pipeline & CRM",
              };
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold transition-colors duration-300 cursor-pointer ${
                    activeTab === tab ? "text-[#1d1d1d]" : "text-gray-500 hover:text-[#1d1d1d]"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="featureTabSwitcher" 
                      className="absolute inset-0 bg-white rounded-full shadow-md border border-gray-200/80 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {labels[tab]}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Feature Display Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            
            {/* Left Text Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="lg:col-span-5"
            >
              <div className="bg-slate-50/90 border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-xs space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#00a859] shadow-2xs">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#166534] bg-[#f0fdf4] border border-[#bbf7d0] px-3 py-1 rounded-full">
                    {currentFeature.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-[#1d1d1d] tracking-tight leading-snug">
                    {currentFeature.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {currentFeature.description}
                  </p>
                </div>

                <div className="space-y-3.5 pt-1 border-t border-slate-200/70">
                  {currentFeature.features.map((featureText, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00a859] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{featureText}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link
                    href="/free-trial"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1d1d1d] text-white px-8 py-4 rounded-full font-extrabold hover:bg-[#00e785] hover:text-[#1d1d1d] transition-all duration-300 shadow-lg shadow-black/10 group cursor-pointer"
                  >
                    <span>Explore Platform Capabilities</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>

            {/* Right Preview Area */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="lg:col-span-7"
            >
              
              {/* INBOX tab: Show shared-team.png directly with clean responsive container */}
              {"useImage" in currentFeature && currentFeature.useImage ? (
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200/80 shadow-xs">
                  <Image
                    src={(currentFeature as { useImage: true; image: string }).image}
                    alt={currentFeature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              ) : (
                /* BROADCAST / CRM tabs: Premium animated data previews */
                <div className="bg-slate-50/90 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
                  
                  {/* Live status chip */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Preview
                    </div>
                    <span className="text-xs font-bold text-[#166534] bg-[#f0fdf4] border border-[#bbf7d0] px-3 py-1 rounded-full">
                      {currentFeature.badge}
                    </span>
                  </div>

                  {/* Broadcast */}
                  {activeTab === "broadcast" && (
                    <motion.div key="broadcast-content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/70 flex items-center justify-between shadow-2xs">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Active Campaign</p>
                          <p className="text-base font-black text-[#1d1d1d]">Summer Flash Sale — VIP Segment</p>
                        </div>
                        <span className="text-xs font-mono font-bold bg-[#f0fdf4] text-[#00a859] px-3 py-1 rounded-full border border-[#bbf7d0]">Delivered 98.4%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        {[
                          { value: "14,200", label: "Total Sent", color: "text-[#1d1d1d]" },
                          { value: "94%", label: "Read Rate", color: "text-[#00a859]" },
                          { value: "42%", label: "Conversion", color: "text-[#1d1d1d]" },
                        ].map((stat) => (
                          <div key={stat.label} className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                            <p className={`text-xl sm:text-2xl font-black ${stat.color}`}>{stat.value}</p>
                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs shadow-2xs">
                        <div className="flex items-center gap-2 text-slate-600 font-semibold">
                          <Zap className="w-3.5 h-3.5 text-[#00a859]" />
                          WhatsApp Business API Integration
                        </div>
                        <span className="text-[#00a859] font-bold">100% Compliant</span>
                      </div>
                    </motion.div>
                  )}

                  {/* CRM */}
                  {activeTab === "crm" && (
                    <motion.div key="crm-content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/70 flex items-center justify-between shadow-2xs">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Active Deal Value</p>
                          <p className="text-2xl font-black text-[#1d1d1d]">$4,850.00</p>
                        </div>
                        <span className="bg-purple-100 text-purple-700 text-xs font-extrabold px-3 py-1 rounded-full">Contract Sent</span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200/70 flex items-center justify-between text-sm text-slate-700 font-semibold shadow-2xs">
                        <span>Client: Apex Industries Corp</span>
                        <span className="text-[#00a859] font-bold">Closing Tomorrow 🚀</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Deals Won", value: "38", tag: "this month" },
                          { label: "Avg Close Time", value: "2.4d", tag: "faster than avg" },
                        ].map((item) => (
                          <div key={item.label} className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                            <p className="text-xl font-black text-[#1d1d1d]">{item.value}</p>
                            <p className="text-xs font-bold text-slate-500 mt-0.5">{item.label}</p>
                            <p className="text-[10px] text-[#00a859] font-bold mt-0.5 uppercase tracking-wide">{item.tag}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                </div>
              )}

            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}