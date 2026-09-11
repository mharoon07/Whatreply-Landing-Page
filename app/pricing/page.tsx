'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import { Check, X, Sparkles, ShieldCheck, Zap, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  starter: string;
  growth: string;
  business: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Setup Fee',
    starter: 'Free',
    growth: 'Free',
    business: 'Free',
  },
  {
    feature: 'Contacts',
    starter: '3,000',
    growth: '15,000',
    business: 'Unlimited',
  },
  {
    feature: 'Bot Flows',
    starter: '15',
    growth: '75',
    business: 'Unlimited',
  },
  {
    feature: 'Campaigns',
    starter: '30',
    growth: '150',
    business: 'Unlimited',
  },
  {
    feature: 'Team Members',
    starter: '4',
    growth: '8',
    business: 'Unlimited',
  },
  {
    feature: 'Messages/Broadcasts',
    starter: '7,500',
    growth: '75,000',
    business: 'Unlimited',
  },
  {
    feature: 'AI Chatbot',
    starter: 'Not Included',
    growth: 'Included',
    business: 'Included',
  },
  {
    feature: 'Instagram & Facebook Integration',
    starter: 'Not Included',
    growth: 'Included',
    business: 'Included',
  },
  {
    feature: 'Multiple Projects',
    starter: 'Not Included',
    growth: 'Not Included',
    business: 'Included',
  },
  {
    feature: 'CRM Pipeline & WooCommerce',
    starter: 'Not Included',
    growth: 'Not Included',
    business: 'Included',
  },
  {
    feature: 'Support',
    starter: 'Email/Chat',
    growth: 'Priority Chat',
    business: 'Dedicated Manager, 24/7',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.35, 
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

  // Pricing calculations
  const starterPrice = billingCycle === 'monthly' ? 'Rs 3,999' : 'Rs 3,199';
  const growthPrice = billingCycle === 'monthly' ? 'Rs 6,499' : 'Rs 5,199';
  const businessPrice = billingCycle === 'monthly' ? 'Rs 8,999' : 'Rs 7,199';

  const renderTableCellContent = (val: string) => {
    if (val === 'Included') {
      return (
        <span className="inline-flex items-center gap-1.5 font-bold text-[#00a859]">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Included</span>
        </span>
      );
    }
    if (val === 'Not Included') {
      return (
        <span className="inline-flex items-center gap-1.5 font-medium text-gray-400">
          <X className="w-4 h-4 text-gray-300" />
          <span>Not Included</span>
        </span>
      );
    }
    if (val === 'Free') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-[#0e4a32]">
          Free
        </span>
      );
    }
    if (val === 'Unlimited') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-600 text-white shadow-xs">
          Unlimited
        </span>
      );
    }
    return <span className="font-semibold text-gray-800 text-sm">{val}</span>;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#00a859] selection:text-white overflow-x-hidden flex flex-col justify-between">
      
      {/* Custom Keyframes for Floating Animation */}
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

      {/* Navbar Component */}
      <Navbar />

      <main>
        {/* Hero Header Section */}
        <section className="pt-32 pb-10 px-4 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[#00a859] text-xs font-semibold tracking-wide uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> 7-Day Free Trial • Free Setup Included
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Simple Pricing. <span className="bg-[#00a859] text-white px-3 py-1 rounded-xl inline-block shadow-md rotate-1 transform">Instant AI Support.</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Automate customer queries, run high-converting WhatsApp marketing campaigns, and scale your sales with zero setup fees.
          </p>

          {/* Pill Toggle Switch for Monthly / Annually */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-100 p-1.5 rounded-full flex items-center shadow-inner border border-gray-200/60 relative">
              <button
                type="button"
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
                type="button"
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

        {/* Pricing Cards Section with Slide-Out Deck Animation */}
        <section ref={sectionRef} className="pb-20 pt-10 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative min-h-[600px]">
            
            {/* Left Card: Starter */}
            <div
              className={`bg-white rounded-3xl p-8 border border-gray-200 shadow-xl transition-all duration-700 ease-out flex flex-col justify-between h-full z-10 origin-right ${
                isSectionVisible
                  ? 'lg:translate-x-0 lg:rotate-0 lg:opacity-100'
                  : 'lg:translate-x-[68%] lg:-rotate-3 lg:opacity-0 '
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-gray-900">Starter</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-[#00a859] border border-emerald-100">
                    Free Setup
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Essential WhatsApp automation for small businesses.</p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                    {starterPrice}
                  </span>
                  <span className="ml-1 text-gray-500 text-sm">/mo</span>
                </div>

                <div className="mt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> No one-time onboarding fee
                </div>

                <div className="my-6 border-t border-gray-100" />

                <ul className="space-y-3.5 text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span><strong>3,000</strong> Contacts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span><strong>15</strong> Bot Flows</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span><strong>30</strong> Campaigns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span><strong>4</strong> Team Members</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span><strong>7,500</strong> Messages / Broadcasts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>Email & Chat Support</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="https://app.whatreply.tech/en/login" 
                className="mt-8 w-full block text-center py-3.5 rounded-2xl bg-gray-100 hover:bg-[#00a859] hover:text-white text-gray-900 font-bold transition-all duration-300 cursor-pointer shadow-2xs"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Center Card: Growth (Most Popular) */}
            <div className="bg-[#1d1d1d] rounded-3xl p-8 border-2 border-[#00e785]/80 shadow-2xl shadow-emerald-950/30 relative z-30 transform lg:-translate-y-4 flex flex-col justify-between h-full text-white">
              
              {/* 3D Megaphone Badge with HD Supersampling & Smooth Float Animation */}
              <div className="absolute -top-16 -right-8 w-32 h-32 z-45 pointer-events-none">
                <div className="animate-float-badge w-full h-full relative">
                  <Image
                    src="/3d.png"
                    alt="3D Megaphone"
                    width={256}
                    height={256}
                    priority
                    className="w-full h-full object-contain drop-shadow-2xl filter contrast-105"
                  />
                </div>
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00e785] text-slate-950 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md z-40">
                Most Popular
              </div>

              <div>
                <div className="flex items-center justify-between pt-2">
                  <h3 className="text-2xl font-black text-white">Growth</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-950 text-[#00e785] border border-emerald-800">
                    Free Setup
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Ideal for scaling businesses with AI & social integrations.</p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-black tracking-tight text-[#00e785]">
                    {growthPrice}
                  </span>
                  <span className="ml-1 text-slate-400 text-sm">/mo</span>
                </div>

                <div className="mt-2 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> No one-time onboarding fee
                </div>

                <div className="my-6 border-t border-gray-800" />

                <ul className="space-y-3.5 text-sm text-slate-200 font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span><strong>15,000</strong> Contacts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span><strong>75</strong> Bot Flows & <strong>150</strong> Campaigns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span><strong>8</strong> Team Members</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span><strong>75,000</strong> Messages / Broadcasts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span className="font-bold text-[#00e785]">AI Chatbot Included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span>Instagram & Facebook Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00e785] text-slate-950 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span>Priority Chat Support</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="https://app.whatreply.tech/en/login" 
                className="mt-8 w-full block text-center py-4 rounded-2xl bg-[#00e785] hover:bg-[#00c974] text-slate-950 font-black text-base transition-all duration-300 cursor-pointer shadow-lg shadow-[#00e785]/25 hover:shadow-[#00e785]/40 hover:-translate-y-0.5"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Right Card: Business */}
            <div
              className={`bg-white rounded-3xl p-8 border border-gray-200 shadow-xl transition-all duration-700 ease-out flex flex-col justify-between h-full z-10 origin-left ${
                isSectionVisible
                  ? 'lg:translate-x-0 lg:rotate-0 lg:opacity-100'
                  : 'lg:-translate-x-[68%] lg:rotate-3 lg:opacity-0 '
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-gray-900">Business</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-[#00a859] border border-emerald-100">
                    Free Setup
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Unlimited capacity, multi-project & dedicated management.</p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                    {businessPrice}
                  </span>
                  <span className="ml-1 text-gray-500 text-sm">/mo</span>
                </div>

                <div className="mt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> No one-time onboarding fee
                </div>

                <div className="my-6 border-t border-gray-100" />

                <ul className="space-y-3.5 text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span><strong>Unlimited</strong> Contacts, Flows & Campaigns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span><strong>Unlimited</strong> Team Members & Messages</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span className="font-semibold text-emerald-900">AI Chatbot Included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>Instagram & Facebook Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>Multiple Projects Included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>CRM Pipeline & WooCommerce</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span className="font-semibold text-emerald-900">Dedicated Manager, 24/7 Support</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="https://app.whatreply.tech/en/login" 
                className="mt-8 w-full block text-center py-3.5 rounded-2xl bg-gray-900 hover:bg-[#00a859] text-white font-bold transition-all duration-300 cursor-pointer shadow-2xs"
              >
                Start Free Trial
              </Link>
            </div>

          </div>
        </section>

        {/* Feature Comparison Table Section (Directly matching the table specification) */}
        <section className="pb-28 pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Compare Plan Features
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Detailed side-by-side comparison of features across all plans.
            </p>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                {/* Table Header: Styled after the forest green header in the specification */}
                <thead>
                  <tr className="bg-[#124b33] text-white text-sm sm:text-base">
                    <th className="py-5 px-6 font-bold w-[28%] border-b border-emerald-900/60">
                      Feature
                    </th>
                    <th className="py-5 px-6 font-bold w-[24%] border-b border-emerald-900/60 text-center">
                      <div>Starter</div>
                      <div className="text-xs sm:text-sm font-semibold text-emerald-200 mt-0.5">
                        {starterPrice}/mo
                      </div>
                    </th>
                    <th className="py-5 px-6 font-bold w-[24%] border-b border-emerald-900/60 text-center bg-[#0d3f2a] relative">
                      <span className="inline-block bg-[#00e785] text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1">
                        Most Popular
                      </span>
                      <div>Growth</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#00e785] mt-0.5">
                        {growthPrice}/mo
                      </div>
                    </th>
                    <th className="py-5 px-6 font-bold w-[24%] border-b border-emerald-900/60 text-center">
                      <div>Business</div>
                      <div className="text-xs sm:text-sm font-semibold text-emerald-200 mt-0.5">
                        {businessPrice}/mo
                      </div>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-200 text-sm">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr 
                      key={idx}
                      className={`transition-colors hover:bg-gray-50/70 ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      }`}
                    >
                      {/* Feature Name */}
                      <td className="py-4 px-6 font-bold text-gray-900">
                        {row.feature}
                      </td>

                      {/* Starter */}
                      <td className="py-4 px-6 text-center border-l border-gray-100">
                        {renderTableCellContent(row.starter)}
                      </td>

                      {/* Growth (Highlighted column with soft emerald background) */}
                      <td className="py-4 px-6 text-center border-l border-r border-emerald-100/80 bg-emerald-50/40 font-semibold">
                        {renderTableCellContent(row.growth)}
                      </td>

                      {/* Business */}
                      <td className="py-4 px-6 text-center">
                        {renderTableCellContent(row.business)}
                      </td>
                    </tr>
                  ))}

                  {/* Table CTA Action Row */}
                  <tr className="bg-gray-50/80 border-t-2 border-gray-200">
                    <td className="py-5 px-6 font-bold text-gray-700">
                      Get Started
                    </td>
                    <td className="py-5 px-6 text-center border-l border-gray-100">
                      <Link
                        href="https://app.whatreply.tech/en/login"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-gray-100 hover:bg-[#00a859] hover:text-white text-gray-900 transition-colors shadow-2xs"
                      >
                        Choose Starter
                      </Link>
                    </td>
                    <td className="py-5 px-6 text-center border-l border-r border-emerald-100/80 bg-emerald-50/60">
                      <Link
                        href="https://app.whatreply.tech/en/login"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-black bg-[#00a859] hover:bg-[#00924c] text-white shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
                      >
                        Choose Growth
                      </Link>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <Link
                        href="https://app.whatreply.tech/en/login"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-gray-900 hover:bg-[#00a859] text-white transition-colors shadow-2xs"
                      >
                        Choose Business
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnote callout matching the image note */}
          <div className="mt-6 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#00a859] shrink-0" />
            <p className="text-sm text-emerald-950 font-medium italic">
              <strong>Note:</strong> All plans include a free setup, no one-time onboarding fee.
            </p>
          </div>
        </section>

        {/* Value Guarantees / Trust Badges Section */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00a859] flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">7-Day Free Trial</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Test full platform features with complete peace of mind. No credit card required to start.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00a859] flex items-center justify-center font-bold shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">100% Free Setup</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Every package includes a complimentary setup with our team. Zero hidden or onboarding charges.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00a859] flex items-center justify-center font-bold shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Dedicated Human Support</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Get personalized support via WhatsApp, live chat, or email to maximize your ROI quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}