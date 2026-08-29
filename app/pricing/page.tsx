'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Home/Navbar';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer: Cards tuck behind the center card when out of view, slide out when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        } else {
          setIsSectionVisible(false);
        }
      },
      { 
        threshold: 0.45, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#00a859] selection:text-white overflow-x-hidden">
      
      {/* Custom Keyframes for Premium Floating Animation */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(12deg) scale(1.1);
          }
          50% {
            transform: translateY(-10px) rotate(15deg) scale(1.12);
          }
        }
        .animate-float-badge {
          animation: floatSlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Navbar Component Import */}
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-32 pb-12 px-4 text-center max-w-3xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[#00a859] text-xs font-semibold tracking-wide uppercase shadow-2xs">
          7-Day Free Trial • No Credit Card Required
        </div>
        
        {/* Punchy, Hook-Driven Heading */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
          Simple Pricing. <span className="bg-[#00a859] text-white px-3 py-1 rounded-xl inline-block shadow-md rotate-1 transform">Instant AI Support.</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg mx-auto font-medium">
          Stop losing leads to slow response times. Automate 80% of your customer queries in minutes.
        </p>

        {/* Pill Toggle Switch for Monthly / Annually */}
        <div className="mt-8 flex justify-center">
          <div className="bg-gray-100 p-1.5 rounded-full flex items-center shadow-inner border border-gray-200/60 relative">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                billingCycle === 'annually'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Annually <span className="text-xs text-[#00a859] font-bold ml-1">(-20% OFF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section with Tucked/Slide-Out Deck Animation */}
      <section ref={sectionRef} className="pb-32 pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative min-h-[600px]">
          
          {/* Left Card */}
          <div
            className={`bg-white rounded-3xl p-8 border border-gray-200 shadow-xl transition-all duration-700 ease-out flex flex-col justify-between h-full z-10 origin-right ${
              isSectionVisible
                ? 'lg:translate-x-0 lg:rotate-0 lg:opacity-100'
                : 'lg:translate-x-[68%] lg:-rotate-3 lg:opacity-0 '
            }`}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900">Starter Bot</h3>
              <p className="text-xs text-gray-500 mt-1">For small websites starting with AI support.</p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                  {billingCycle === 'monthly' ? '$49' : '$39'}
                </span>
                <span className="ml-1 text-gray-500 text-sm">/mo</span>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold">✓</span>
                  1,000 Chats / month
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold">✓</span>
                  Basic Website Widget
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold">✓</span>
                  Email Support
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-3 rounded-2xl bg-gray-100 hover:bg-[#00a859] hover:text-white text-gray-900 font-semibold transition-all duration-300 cursor-pointer shadow-2xs">
              Start Free Trial
            </button>
          </div>

          {/* Center Card: High-End HDR Image + Floating Animation (Growth AI - Premium Black) */}
          <div className="bg-[#1d1d1d] rounded-3xl p-8 border-2 border-[#00e785]/80 shadow-2xl shadow-emerald-950/30 relative z-30 transform lg:-translate-y-4 flex flex-col justify-between h-full text-white">
            
            {/* 3D Megaphone Badge with HD Supersampling & Smooth Float Animation */}
            <div className="absolute -top-16 -right-8 w-32 h-32 z-45 pointer-events-none">
              <div className="animate-float-badge w-full h-full relative">
                <Image
                  src="/3d.png"
                  alt="3D Megaphone"
                  width={256}
                  height={256}
                  quality={100}
                  priority
                  className="w-full h-full object-contain drop-shadow-2xl filter contrast-105"
                />
              </div>
            </div>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00e785] text-slate-950 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md z-40">
              Most Popular
            </div>

            <div>
              <h3 className="text-2xl font-black text-white pt-2">Growth AI</h3>
              <p className="text-xs text-slate-400 mt-1">Ideal for scaling businesses & high volume.</p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-black tracking-tight text-[#00e785]">
                  {billingCycle === 'monthly' ? '$129' : '$99'}
                </span>
                <span className="ml-1 text-slate-400 text-sm">/mo</span>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm text-slate-200 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                  Unlimited AI Chats
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                  Custom Chatbot Persona
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                  CRM Integrations (Shopify/HubSpot)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                  24/7 Priority Support
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-4 rounded-2xl bg-[#00e785] hover:bg-[#00c974] text-slate-950 font-black text-base transition-all duration-300 cursor-pointer shadow-lg shadow-[#00e785]/25 hover:shadow-[#00e785]/40 hover:-translate-y-0.5">
              Start Free Trial
            </button>
          </div>

          {/* Right Card */}
          <div
            className={`bg-white rounded-3xl p-8 border border-gray-200 shadow-xl transition-all duration-700 ease-out flex flex-col justify-between h-full z-10 origin-left ${
              isSectionVisible
                ? 'lg:translate-x-0 lg:rotate-0 lg:opacity-100'
                : 'lg:-translate-x-[68%] lg:rotate-3 lg:opacity-0 '
            }`}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900">Enterprise AI</h3>
              <p className="text-xs text-gray-500 mt-1">For large teams with advanced security needs.</p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                  {billingCycle === 'monthly' ? '$299' : '$249'}
                </span>
                <span className="ml-1 text-gray-500 text-sm">/mo</span>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold">✓</span>
                  Custom AI Model Training
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold">✓</span>
                  Dedicated Support Agent
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold">✓</span>
                  Advanced Security & SLA
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-3 rounded-2xl bg-gray-100 hover:bg-[#00a859] hover:text-white text-gray-900 font-semibold transition-all duration-300 cursor-pointer shadow-2xs">
              Contact Sales
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}