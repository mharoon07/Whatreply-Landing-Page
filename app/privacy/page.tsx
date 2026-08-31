'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import { ShieldCheck, Lock, Eye, Database, Globe, Scale, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function PrivacyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" /> Legal & Privacy Assurance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            Effective Date: August 31, 2026 • Last updated: August 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 text-gray-700 leading-relaxed font-normal">
          {/* Introduction */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#00a859]" /> Overview & Commitment
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At <strong className="text-gray-900">Replyly</strong> ("we", "our", or "us"), protecting your privacy and ensuring the security of your business and customer data is our highest priority. This Privacy Policy details how we collect, process, store, and safeguard information when you use our AI customer communication platform, website widgets, WhatsApp API integrations, and related services.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Information We Collect
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We collect information to deliver reliable, intelligent, and real-time automated messaging experiences:
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-gray-900">Account & Identity Information:</strong> Name, work email address, company name, phone number, billing credentials, and password hashes when registering for an account.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-gray-900">Conversational & Communication Data:</strong> Messages, customer inquiries, AI chat transcripts, metadata (timestamps, channel origin), and contact lists uploaded for broadcasting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-gray-900">Integration Data:</strong> Data synchronized through third-party connections such as Meta WhatsApp Cloud API, Shopify, HubSpot, Zendesk, or custom webhooks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-gray-900">Technical & Device Telemetry:</strong> IP addresses, browser types, operating systems, session logs, and performance metrics to ensure uptime and platform security.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. How We Use Your Information
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We process data solely for explicit business purposes, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">AI Automation & Answering</h4>
                <p className="text-xs text-gray-500">Generating instant, context-aware responses to your incoming customer queries according to your custom knowledge base.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Platform Operations & Routing</h4>
                <p className="text-xs text-gray-500">Ensuring uninterrupted message delivery, live agent routing, and CRM synchronization.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Billing & Account Administration</h4>
                <p className="text-xs text-gray-500">Managing subscriptions, issuing invoices in PKR or international currencies, and tracking monthly plan limits.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Security & Fraud Prevention</h4>
                <p className="text-xs text-gray-500">Monitoring for abusive behavior, rate limiting spam, and validating API token authorization.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#00a859]" /> 3. Data Protection & AI Privacy
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We adopt strict security measures to keep your data confidential:
            </p>
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#00a859] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Zero Public AI Model Training on Private Data
              </div>
              <p className="text-xs sm:text-sm text-gray-700">
                Your proprietary business knowledge base and end-user conversation logs are never used to train public, open foundational models. All AI inference is isolated strictly within your organization's tenant.
              </p>
              <div className="flex items-center gap-2 text-[#00a859] font-bold text-sm pt-2">
                <CheckCircle2 className="w-4 h-4" /> Industry-Standard Encryption
              </div>
              <p className="text-xs sm:text-sm text-gray-700">
                All data in transit is encrypted using TLS 1.3, and data at rest is protected with AES-256 bit encryption across all database tiers.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              4. Third-Party Services & Subprocessors
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              To operate our ecosystem, we partner with industry-leading infrastructure providers under stringent data processing agreements:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600 pl-2">
              <li><strong className="text-gray-900">Meta Platforms, Inc. (WhatsApp Cloud API):</strong> For delivering verified WhatsApp Business messages.</li>
              <li><strong className="text-gray-900">Cloud Infrastructure (AWS / Google Cloud):</strong> For scalable, isolated hosting and high-availability database replication.</li>
              <li><strong className="text-gray-900">Payment Gateways:</strong> For processing subscription payments securely without storing full credit card numbers on our servers.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              5. Your Rights & Data Controls
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              You retain full ownership and control over your customer records. You have the right to:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-center gap-2">
                <span className="text-[#00a859] font-bold">•</span>
                <span>Access, export, and download your complete chat logs and customer list at any time.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00a859] font-bold">•</span>
                <span>Request the permanent deletion of your account and all associated workspace records.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00a859] font-bold">•</span>
                <span>Opt-out of non-essential marketing communications with a single click.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              6. Contact Us
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Team:
            </p>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <p className="text-sm font-bold text-gray-900">Replyly Privacy & Compliance Office</p>
              <p className="text-sm text-gray-600 mt-1">Email: <a href="mailto:privacy@whatreply.tech" className="text-[#00a859] hover:underline font-semibold">privacy@whatreply.tech</a></p>
              <p className="text-sm text-gray-600 mt-0.5">Support Desk: <a href="https://app.whatreply.tech/en/login" className="text-[#00a859] hover:underline font-semibold">app.whatreply.tech/en/login</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
