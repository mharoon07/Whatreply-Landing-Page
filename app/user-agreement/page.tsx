'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import { Users, CheckCircle2, Bot, ShieldCheck, Cpu, ArrowLeft } from 'lucide-react';

export default function UserAgreementPage() {
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
            <Users className="w-3.5 h-3.5" /> End-User & Customer Policy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            User Agreement
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            Effective Date: August 31, 2026 • Last updated: August 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 text-gray-700 leading-relaxed font-normal">
          {/* Overview */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#00a859]" /> Purpose of this Agreement
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This End User Agreement governs the expectations, operational guidelines, and ethical standards between <strong className="text-gray-900">Replyly</strong>, our business clients ("Workspaces"), and authorized team members who configure, supervise, or interact with our conversational AI platform and WhatsApp API services.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#00a859]" /> 1. AI Agents & Human Supervision
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Replyly leverages cutting-edge large language models (LLMs) to automate customer support and sales qualification. While our models are calibrated for high factual accuracy, users acknowledge that:
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span>AI responses are generated dynamically based on documents, FAQs, and URLs provided in your workspace knowledge base.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span>Workspaces should establish human handover escalation protocols for complex, high-liability, or sensitive consumer inquiries.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00a859]" /> 2. Customer Consent & Opt-In Mandate
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              When utilizing automated WhatsApp broadcast tools and chat workflows:
            </p>
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#00a859] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Explicit Opt-In Requirement
              </div>
              <p className="text-xs sm:text-sm text-gray-700">
                You certify that all recipient phone numbers imported into Replyly have provided verifiable, explicit consent to receive automated communications from your brand in compliance with local telecom regulations.
              </p>
              <div className="flex items-center gap-2 text-[#00a859] font-bold text-sm pt-2">
                <CheckCircle2 className="w-4 h-4" /> Mandatory Opt-Out Mechanisms
              </div>
              <p className="text-xs sm:text-sm text-gray-700">
                All broadcast templates must provide automated opt-out keywords (e.g., "STOP" or "UNSUBSCRIBE") that instantly blacklist the contact from further automated outreach.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              3. Authorized Team Roles & Security
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Workspace administrators are responsible for provisioning appropriate role-based access control (Admin, Agent, Manager) to team members. Users must maintain multi-factor authentication and never share individual credentials.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              4. Service Availability & Maintenance Windows
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Replyly maintains continuous 24/7 service monitoring. Scheduled maintenance windows that may cause brief interruptions are communicated at least 48 hours in advance via dashboard notices or email broadcasts.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              5. Agreement Updates & Legal Inquiries
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We may revise this User Agreement periodically to reflect new features or regulatory obligations. Continued use of Replyly following any posted updates signifies your acceptance.
            </p>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 mt-4">
              <p className="text-sm font-bold text-gray-900">Need assistance or have questions?</p>
              <p className="text-sm text-gray-600 mt-1">Direct inquiries to: <a href="mailto:support@whatreply.tech" className="text-[#00a859] hover:underline font-semibold">support@whatreply.tech</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
