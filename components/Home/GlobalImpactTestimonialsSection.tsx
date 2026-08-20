"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Globe, Building2, MessageCircle, Quote, ArrowRight, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

const stats = [
  { label: "Active Businesses", value: "16,000+", icon: Building2, desc: "Scaling operations globally", badge: "Verified" },
  { label: "Countries Reached", value: "190+", icon: Globe, desc: "Worldwide enterprise trust", badge: "Global" },
  { label: "Messages Processed", value: "50M+", icon: MessageCircle, desc: "Daily conversational volume", badge: "High Speed" },
  { label: "Customer Satisfaction", value: "4.9/5", icon: Star, desc: "Rated on top directories", badge: "Top Rated" },
];

const testimonials = [
  {
    quote: "Wati transformed how our sales team closes inbound leads. The shared inbox and automated broadcasts boosted our conversion rate by over 45% in just two months.",
    author: "Rohan Mehta",
    role: "Head of Growth, Apex Retail",
    company: "Apex Retail Co.",
    avatar: "RM",
    metrics: "+45% Conversion Rate",
    rating: 5,
  },
  {
    quote: "Setting up the official WhatsApp API used to be a nightmare. With Wati, we went live in under 10 minutes. Our customer support response time dropped from hours to seconds.",
    author: "Ayesha Siddiqui",
    role: "Customer Success Director, UrbanEats",
    company: "UrbanEats Global",
    avatar: "AS",
    metrics: "Instant Response Time",
    rating: 5,
  },
  {
    quote: "The automation workflows and AI chatbot handling FAQs outside business hours have saved us countless man-hours. Absolute game-changer for our e-commerce store.",
    author: "Zain Al-Din",
    role: "Founder, TrendVibe Co.",
    company: "TrendVibe E-Commerce",
    avatar: "ZA",
    metrics: "70% Query Automation",
    rating: 5,
  },
  {
    quote: "Managing multi-channel customer requests across WhatsApp and Instagram from a single dashboard has doubled our support agents' efficiency. Highly recommended!",
    author: "Elena Rostova",
    role: "VP of Operations, NovaTech",
    company: "NovaTech Solutions",
    avatar: "ER",
    metrics: "2x Agent Efficiency",
    rating: 5,
  },
  {
    quote: "The personalized broadcast campaigns feature allowed us to target dormant customers with special discounts. The ROI on our marketing spend has been phenomenal.",
    author: "Marcus Vance",
    role: "Chief Marketing Officer, Luxe Living",
    company: "Luxe Living Furnishing",
    avatar: "MV",
    metrics: "3.8x ROI on Campaigns",
    rating: 5,
  },
];

export default function GlobalImpactTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#fafafa] to-white text-[#1d1d1d] relative overflow-hidden border-t border-gray-100">
      
      {/* Soft Background Emerald Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#f0fdf4] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-5"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-1.5 rounded-full text-xs font-black text-[#166534] tracking-wider uppercase shadow-sm cursor-default">
            <Globe className="w-3.5 h-3.5 text-[#00a859]" />
            <span>Global Scale & Social Proof</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Trusted by industry leaders <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a859] via-emerald-600 to-[#166534]">
              across 190+ countries.
            </span>
          </h2>

          <p className="text-gray-600 text-lg font-normal">
            See why fast-growing startups and global enterprises choose Wati to power their customer engagement.
          </p>
        </motion.div>

        {/* High-Impact Metrics Grid with Side Decorative Circles & Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-gray-200/85 rounded-[2.2rem] p-8 hover:border-[#00a859]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl shadow-gray-200/50 relative overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* Decorative Side Glowing Circle & Icon Element */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-[#00a859]/20 to-emerald-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#00a859] shadow-sm group-hover:rotate-12 transition-transform">
                  <Zap className="w-4 h-4" />
                </div>
                
                <div className="flex items-center justify-between mb-6 pr-12">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#00a859] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="bg-gray-100 border border-gray-200 text-gray-700 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#00a859]" />
                    {stat.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-4xl sm:text-5xl font-black text-[#1d1d1d] tracking-tight mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-extrabold text-gray-900 mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-500 font-medium">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials Header with Interactive Slide Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1d1d1d] tracking-tight">
              What our customers are saying
            </h3>
            <p className="text-gray-500 text-sm">Real feedback from verified business founders and leaders.</p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1d1d1d] hover:bg-[#00a859] hover:text-white hover:border-[#00a859] transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1d1d1d] hover:bg-[#00a859] hover:text-white hover:border-[#00a859] transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Luxury Testimonials Grid Slider Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden py-2">
          <AnimatePresence mode="popLayout">
            {testimonials.slice(currentIndex, currentIndex + 3).map((item) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white border border-gray-200/90 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#00a859]/60 hover:shadow-2xl hover:shadow-gray-200/70 transition-all duration-500 shadow-xl cursor-pointer"
              >
                <div>
                  {/* Top Bar: Stars & Metric Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="bg-[#f0fdf4] border border-[#bbf7d0] text-[#166534] text-xs font-black px-3 py-1 rounded-full tracking-wide">
                      {item.metrics}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal mb-8 italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1d1d1d] to-[#2d2d2d] text-white font-black flex items-center justify-center text-sm shadow-md">
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-[#1d1d1d] font-extrabold text-sm sm:text-base">{item.author}</h4>
                      <p className="text-gray-500 text-xs font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>

                {/* Hover subtle glow ring */}
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-[#00a859]/0 group-hover:ring-[#00a859]/30 transition-all pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 bg-gradient-to-r from-[#1d1d1d] via-[#2d2d2d] to-[#1d1d1d] rounded-[2.5rem] p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-800"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a859]/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="text-left space-y-3 relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#00a859]/20 border border-[#00a859]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#00e785] cursor-default">
              <ShieldCheck className="w-4 h-4" />
              <span>Free 7-Day Trial • Instant WhatsApp API Setup</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to scale your business conversations?
            </h3>
            <p className="text-gray-300 text-base font-normal">
              Join thousands of brands closing deals faster on WhatsApp today.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button className="bg-[#00a859] text-white px-9 py-4 rounded-full font-extrabold hover:bg-[#00e785] hover:text-[#1d1d1d] transition-all duration-300 shadow-xl shadow-[#00a859]/20 flex items-center gap-3 group cursor-pointer active:scale-95">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}