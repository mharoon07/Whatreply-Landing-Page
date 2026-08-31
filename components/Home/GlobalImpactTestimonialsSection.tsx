"use client";

import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { Star, Globe, Building2, MessageCircle, ChevronLeft, ChevronRight, Sparkles, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const stats = [
  { label: "Active Businesses", value: 20, suffix: "+", icon: Building2, desc: "Scaling operations daily", badge: "Verified", isDecimal: false },
  { label: "Countries Reached", value: 5, suffix: "+", icon: Globe, desc: "Worldwide client trust", badge: "Global", isDecimal: false },
  { label: "Messages Processed", value: 100, suffix: "K+", icon: MessageCircle, desc: "Conversational volume", badge: "High Speed", isDecimal: false },
  { label: "Customer Satisfaction", value: 4.9, suffix: "/5", icon: Star, desc: "Rated on top directories", badge: "Top Rated", isDecimal: true },
];

const testimonials = [
  {
    quote: "Replyly transformed how our sales team closes inbound leads. The shared inbox and automated broadcasts boosted our conversion rate by over 45% in just two months.",
    author: "Rohan Mehta",
    role: "Head of Growth",
    company: "Apex Retail Co.",
    avatar: "RM",
    metrics: "+45% Conversion Rate",
    rating: 5,
  },
  {
    quote: "Setting up the official WhatsApp API used to be a nightmare. With Replyly, we went live in under 10 minutes. Our customer support response time dropped from hours to seconds.",
    author: "Ayesha Siddiqui",
    role: "Customer Success Director",
    company: "UrbanEats Global",
    avatar: "AS",
    metrics: "Instant Response Time",
    rating: 5,
  },
  {
    quote: "The automation workflows and AI chatbot handling FAQs outside business hours have saved us countless man-hours. Absolute game-changer for our e-commerce store.",
    author: "Zain Al-Din",
    role: "Founder",
    company: "TrendVibe E-Commerce",
    avatar: "ZA",
    metrics: "70% Query Automation",
    rating: 5,
  },
  {
    quote: "Managing multi-channel customer requests across WhatsApp and Instagram from a single dashboard has doubled our support agents' efficiency. Highly recommended!",
    author: "Elena Rostova",
    role: "VP of Operations",
    company: "NovaTech Solutions",
    avatar: "ER",
    metrics: "2x Agent Efficiency",
    rating: 5,
  },
  {
    quote: "The personalized broadcast campaigns feature allowed us to target dormant customers with special discounts. The ROI on our marketing spend has been phenomenal.",
    author: "Marcus Vance",
    role: "Chief Marketing Officer",
    company: "Luxe Living Furnishing",
    avatar: "MV",
    metrics: "3.8x ROI on Campaigns",
    rating: 5,
  },
];

// Count-Up Animation Component
function AnimatedCounter({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = isDecimal ? v.toFixed(1) : Math.floor(v).toLocaleString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, isDecimal]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

// Carousel Variants for Smooth Directional Slide
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function GlobalImpactTestimonialsSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  // Helper to get visible items for responsive views
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(page + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#fafafa] to-white text-[#1d1d1d] relative overflow-hidden border-t border-gray-100">
      
      {/* Soft Background Emerald Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[500px] bg-[#f0fdf4] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4 sm:space-y-5"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-1.5 rounded-full text-xs font-black text-[#166534] tracking-wider uppercase shadow-xs cursor-default">
            <Globe className="w-3.5 h-3.5 text-[#00a859]" />
            <span>Global Scale & Social Proof</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Trusted by industry leaders <br />
            <span className="relative inline-block pb-2 px-3 mx-1 mt-2 sm:mt-0 bg-[#00a859] text-white rounded-xl shadow-lg transform -rotate-1">
              across 5+ countries.
            </span>
          </h2>
        </motion.div>

        {/* High-Impact Metrics Grid with Count-Up Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16 sm:mb-24"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-gray-200/85 rounded-[2rem] p-6 sm:p-8 hover:border-[#00a859]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl shadow-gray-200/50 relative overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-[#00a859]/20 to-emerald-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#00a859] shadow-xs group-hover:rotate-12 transition-transform">
                  <Zap className="w-4 h-4" />
                </div>
                
                <div className="flex items-center justify-between mb-6 pr-12">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#00a859] shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="bg-gray-100 border border-gray-200 text-gray-700 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#00a859]" />
                    {stat.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1d1d1d] tracking-tight mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                  </h3>
                  <p className="text-sm font-extrabold text-gray-900 mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-500 font-medium">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials Header with Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1d1d1d] tracking-tight">
              What our customers are saying
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Real feedback from verified business founders and leaders.</p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button 
              onClick={() => paginate(-1)}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1d1d1d] hover:bg-[#00a859] hover:text-white hover:border-[#00a859] transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1d1d1d] hover:bg-[#00a859] hover:text-white hover:border-[#00a859] transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Smooth Horizontal Testimonials Carousel */}
        <div className="relative overflow-hidden min-h-[340px] sm:min-h-[360px] py-2">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full"
            >
              {getVisibleTestimonials().map((item, index) => (
                <div
                  key={`${item.author}-${index}`}
                  className={`bg-white border border-gray-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative group hover:border-[#00a859]/60 hover:shadow-2xl hover:shadow-gray-200/70 transition-all duration-300 shadow-xl cursor-pointer ${
                    index > 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  <div>
                    {/* Rating Stars & Metric Tag */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="bg-[#f0fdf4] border border-[#bbf7d0] text-[#166534] text-[11px] font-black px-3 py-1 rounded-full tracking-wide shrink-0">
                        {item.metrics}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-8 italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Card Footer */}
                  <div className="flex items-center gap-3.5 pt-6 border-t border-gray-100 mt-auto">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#1d1d1d] to-[#2d2d2d] text-white font-black flex items-center justify-center text-sm shadow-md shrink-0">
                      {item.avatar}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[#1d1d1d] font-extrabold text-sm sm:text-base truncate">{item.author}</h4>
                      <p className="text-gray-500 text-xs font-medium truncate">{item.role}, {item.company}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] ring-1 ring-inset ring-[#00a859]/0 group-hover:ring-[#00a859]/30 transition-all pointer-events-none" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}