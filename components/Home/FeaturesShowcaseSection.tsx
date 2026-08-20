"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, Users, Layers, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { useState } from "react";

// Feature content data structure for cleaner separation and maintainability
const FEATURE_CONTENT = {
  inbox: {
    icon: MessageSquare,
    badge: "💬 Shared Team Inbox Simulator",
    title: "One unified workspace for all customer chats",
    description:
      "Route incoming messages from WhatsApp, Instagram, and web widgets to the right team members instantly. Add internal notes and resolve tickets at lightning speed.",
    features: [
      "Smart round-robin agent assignment rules",
      "Private team notes & conversation tagging",
    ],
  },
  broadcast: {
    icon: Send,
    badge: "📊 Campaign Metrics Dashboard",
    title: "Broadcast targeted campaigns with 98% open rates",
    description:
      "Launch personalized promotions, cart recovery alerts, and automated drip sequences to segmented audience lists directly on WhatsApp.",
    features: [
      "Advanced contact list segmentation",
      "High-converting template builder & scheduler",
    ],
  },
  crm: {
    icon: Users,
    badge: "📈 Sales Pipeline & Deals",
    title: "Convert prospects into buyers right inside chat",
    description:
      "Track leads seamlessly across a visual kanban pipeline. Score prospects, send secure payment links, and close deals without leaving the messaging app.",
    features: [
      "Visual kanban pipeline deal tracking",
      "Secure in-chat payment links & invoicing",
    ],
  },
} as const;

export default function FeaturesShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"inbox" | "broadcast" | "crm">("inbox");
  const currentFeature = FEATURE_CONTENT[activeTab];
  const ActiveIcon = currentFeature.icon;

  return (
    <section className="py-32 bg-gradient-to-b from-white via-[#fafafa] to-white relative overflow-hidden border-t border-gray-100">
      
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#f0fdf4]/80 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Punchy, Premium Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-5"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-1.5 rounded-full text-xs font-black text-[#166534] shadow-sm tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-[#00a859]" />
            <span>Unmatched Capabilities</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-[#1d1d1d] tracking-tight leading-tight">
            Built for scale. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a859] via-emerald-600 to-[#166534]">
              Designed for conversion.
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg font-normal">
            Equip your marketing, sales, and support squads with a high-octane conversational command center.
          </p>

          {/* Sleek Animated Switcher Tabs */}
          <div className="flex justify-center pt-4">
            <div className="bg-gray-200/70 backdrop-blur-md p-2 rounded-full inline-flex flex-wrap justify-center gap-2 border border-gray-200 shadow-inner">
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
                    className={`relative px-7 py-3 rounded-full text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                      activeTab === tab ? "text-[#1d1d1d]" : "text-gray-500 hover:text-[#1d1d1d]"
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="featureTabSwitcher" 
                        className="absolute inset-0 bg-white rounded-full shadow-md border border-gray-200/80 -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    {labels[tab]}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Feature Display Bento Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-gray-200/80 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl shadow-gray-200/50 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#00a859] shadow-sm">
              <ActiveIcon className="w-7 h-7" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab} 
                initial={{ opacity: 0, x: -15 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }} 
                className="space-y-4"
              >
                <h3 className="text-3xl font-black text-[#1d1d1d] tracking-tight leading-tight">
                  {currentFeature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base font-normal">
                  {currentFeature.description}
                </p>
                <div className="space-y-3.5 pt-2">
                  {currentFeature.features.map((featureText, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 text-sm font-semibold text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#00a859]" /> 
                      <span>{featureText}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-4">
              <button className="bg-[#1d1d1d] text-white px-8 py-4 rounded-full font-extrabold hover:bg-[#00e785] hover:text-[#1d1d1d] transition-all duration-300 shadow-lg shadow-black/10 flex items-center gap-3 group cursor-pointer">
                <span>Explore Platform Capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Preview Simulation Area */}
          <div className="lg:col-span-7 bg-[#fafafa] p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-inner space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-200/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                {currentFeature.badge}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "inbox" && (
                <motion.div key="inbox-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#00a859] text-white font-black flex items-center justify-center text-sm shadow-sm">JD</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">John Doe <span className="text-xs text-emerald-600 font-mono ml-2">WhatsApp Official API</span></p>
                        <p className="text-xs text-gray-500">Assigned to: Sarah (Support Lead)</p>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-[#166534] text-xs font-extrabold px-3 py-1 rounded-full">Active Ticket</span>
                  </div>
                  <div className="bg-[#f0fdf4] border border-[#bbf7d0] p-4 rounded-2xl space-y-1.5 shadow-sm">
                    <p className="text-xs text-[#166534] font-bold">🔒 Internal Note by Sarah:</p>
                    <p className="text-xs text-gray-700 italic font-medium">&quot;Customer requested enterprise billing details. Invoice #942 dispatched.&quot;</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "broadcast" && (
                <motion.div key="broadcast-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 flex items-center justify-between shadow-sm">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Campaign</p>
                      <p className="text-base font-black text-gray-900">Summer Flash Sale - VIP Segment</p>
                    </div>
                    <span className="text-xs font-mono font-bold bg-[#f0fdf4] text-[#00a859] px-3 py-1 rounded-full border border-[#bbf7d0]">Delivered 98.4%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm"><p className="text-2xl font-black text-[#1d1d1d]">14,200</p><p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">Total Sent</p></div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm"><p className="text-2xl font-black text-[#00a859]">94%</p><p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">Read Rate</p></div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm"><p className="text-2xl font-black text-[#1d1d1d]">42%</p><p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">Conversion</p></div>
                  </div>
                </motion.div>
              )}

              {activeTab === "crm" && (
                <motion.div key="crm-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 flex items-center justify-between shadow-sm">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Deal Value</p>
                      <p className="text-xl font-black text-[#1d1d1d]">$4,850.00</p>
                    </div>
                    <span className="bg-purple-100 text-purple-700 text-xs font-extrabold px-3 py-1 rounded-full">Contract Sent</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex items-center justify-between text-xs text-gray-700 font-semibold shadow-sm">
                    <span>Client: Apex Industries Corp</span>
                    <span className="text-[#00a859] font-bold">Closing Tomorrow 🚀</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#00a859]" />
                Official WhatsApp Business API Integration
              </span>
              <span className="text-[#00a859] font-bold">100% Secure & Compliant</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}