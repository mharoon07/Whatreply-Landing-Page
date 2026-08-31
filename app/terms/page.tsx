'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import { FileText, CheckCircle2, AlertCircle, Scale, Shield, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#00a859] selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#00a859] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center sm:text-left border-b border-gray-100 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[#00a859] text-xs font-bold tracking-wide uppercase shadow-2xs">
            <Scale className="w-3.5 h-3.5" /> Legal Terms of Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            Effective Date: August 31, 2026 • Last updated: August 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 text-gray-700 leading-relaxed font-normal">
          {/* Agreement Notice */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#00a859]" /> Agreement to Terms
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "User", or "you") and <strong className="text-gray-900">Replyly</strong> ("we", "us", or "our"). By registering for an account, accessing our dashboard, integrating our WhatsApp APIs, or utilizing any of our automated AI services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Platform Services & License Grant
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Replyly provides a cloud-based software-as-a-service (SaaS) platform offering conversational AI agents, live team inboxes, automated broadcast campaign managers, and CRM synchronization capabilities.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span>We grant you a non-exclusive, non-transferable, revocable license to use the platform in accordance with your subscribed plan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span>You are responsible for obtaining and maintaining all necessary equipment, network access, and third-party credentials (including verified Meta Business Manager accounts) required to connect with our platform.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. Acceptable Use Policy & Messaging Regulations
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              To preserve system integrity and carrier compliance, you agree NOT to use the services for:
            </p>
            <div className="bg-rose-50/60 border border-rose-200/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertCircle className="w-4 h-4" /> Prohibited Activities
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-rose-900/80 pl-2">
                <li>Sending unsolicited broadcast messages (spam) or violating WhatsApp / Meta Business Messaging Policies.</li>
                <li>Transmitting malicious code, automated scraping bots, or attempting unauthorized system vulnerability scans.</li>
                <li>Distributing deceptive, unlawful, defamatory, or fraudulent content.</li>
                <li>Reselling, sublicensing, or reverse-engineering Replyly software without prior written consent.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              3. Subscription Plans, Billing & PKR Pricing
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              All subscription tiers (Starter Bot, Growth AI, Enterprise AI) are billed in advance on a recurring monthly or annual billing cycle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Transparent Pricing</h4>
                <p className="text-xs text-gray-500">All plan rates are clearly indicated in PKR (or applicable local currencies) and exclude third-party carrier conversation fees levied directly by Meta where applicable.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Free Trials & Cancellations</h4>
                <p className="text-xs text-gray-500">Free trials do not require upfront credit card verification. You may cancel your subscription at any time via your account management settings.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              4. Intellectual Property & Customer Ownership
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              <strong className="text-gray-900">Your Content:</strong> You retain 100% ownership over your business knowledge bases, customer communication transcripts, and brand assets uploaded to the platform.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              <strong className="text-gray-900">Platform IP:</strong> All code, user interfaces, branding, software algorithms, and visual designs of Replyly remain the exclusive property of Replyly and its licensors.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              5. Service Uptime & Limitation of Liability
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We strive for 99.9% platform availability. However, Replyly will not be held liable for indirect, incidental, or consequential damages resulting from upstream carrier network outages, Meta API rate limits, or unauthorized account compromises arising from lost credentials.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              6. Governing Law & Dispute Resolution
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              These Terms shall be governed by and construed under the relevant commercial and corporate laws. Any disputes arising under these Terms shall first be resolved through good-faith mutual negotiations.
            </p>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 mt-4">
              <p className="text-sm font-bold text-gray-900">Questions regarding these terms?</p>
              <p className="text-sm text-gray-600 mt-1">Contact legal counsel at: <a href="mailto:terms@whatreply.tech" className="text-[#00a859] hover:underline font-semibold">terms@whatreply.tech</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
