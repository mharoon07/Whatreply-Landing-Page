'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import {
  Users,
  CheckCircle2,
  Bot,
  ShieldCheck,
  Cpu,
  ArrowLeft,
  AlertOctagon,
  UserCheck,
  Clock,
  Radio,
  Lock,
  Mail,
  HelpCircle,
} from 'lucide-react';

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
            <Users className="w-3.5 h-3.5" /> End-User &amp; Operational Policy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            User Agreement
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium max-w-3xl">
            Effective Date: January 1, 2026 • Last updated: September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 text-gray-700 leading-relaxed font-normal">
          {/* Overview */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#00a859]" /> Purpose &amp; Scope of this Agreement
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              This End User Agreement sets forth the operational guidelines, ethical artificial intelligence standards, and carrier compliance responsibilities between <strong className="text-gray-900">Whatreply</strong>, our subscribed business clients (&quot;Workspaces&quot;), and all authorized workspace administrators, support agents, and team members who access our dashboard, configure AI chatbots, or broadcast WhatsApp campaigns.
            </p>
          </section>

          {/* Section 1: AI Agent Deployment & Human Supervision */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#00a859]" /> 1. AI Agent Ethics, Transparency &amp; Human Takeover
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Whatreply provides automated generative AI assistants powered by cutting-edge large language models to assist customers in real time. Workspaces deploying AI agents agree to the following operational standards:
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>AI Transparency:</strong> Where required by local consumer protection statutes, businesses must inform users that they are interacting with an automated AI assistant.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Grounded Knowledge Base:</strong> AI responses are synthesized strictly from workspace-provided documents, FAQs, and URLs. Administrators must verify and keep their knowledge base current.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Human Escalation &amp; Takeover:</strong> Workspaces must maintain human agent escalation protocols so that frustrated or high-priority inquiries can be instantly transitioned to live agents.</span>
              </li>
            </ul>
          </section>

          {/* Section 2: Opt-In & Opt-Out Requirements */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00a859]" /> 2. WhatsApp Explicit Opt-In &amp; Mandatory Opt-Out Rules
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              When launching WhatsApp broadcast campaigns or automated trigger notifications:
            </p>
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#00a859] font-bold text-base">
                <CheckCircle2 className="w-5 h-5" /> Mandatory Consent &amp; Anti-Spam Safeguards
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00a859] shrink-0 mt-0.5" />
                  <span><strong>Explicit Prior Consent:</strong> You certify that every recipient imported into Whatreply has given express, verifiable consent to receive communications from your organization.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00a859] shrink-0 mt-0.5" />
                  <span><strong>Automatic Opt-Out Keywords:</strong> All marketing broadcast templates must provide automated opt-out keywords (e.g. &quot;Reply STOP to unsubscribe&quot;). Whatreply automatically blacklists unsubscribed contacts from further automated messaging.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00a859] shrink-0 mt-0.5" />
                  <span><strong>Respecting Quiet Hours:</strong> Workspaces must respect recipient time zones and avoid dispatching marketing broadcasts during late-night or unsociable hours.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Workspace Team Roles & Credential Hygiene */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#00a859]" /> 3. Workspace Team Roles &amp; Credential Hygiene
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              To protect the security and privacy of customer communications, workspace administrators and users must maintain strict security hygiene:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Role-Based Access</h4>
                <p className="text-xs text-gray-500">Assign team members minimal necessary privilege levels (Admin, Manager, Live Agent) based on job function.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">No Shared Logins</h4>
                <p className="text-xs text-gray-500">Every team member must possess unique login credentials. Sharing accounts or passwords across multiple staff is strictly prohibited.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Offboarding Protocol</h4>
                <p className="text-xs text-gray-500">Administrators must immediately revoke workspace access for employees who resign or are terminated.</p>
              </div>
            </div>
          </section>

          {/* Section 4: WhatsApp Quality Rating Protection */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Radio className="w-5 h-5 text-[#00a859]" /> 4. Phone Number Quality Rating &amp; Carrier Health
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Meta continuously evaluates phone number quality ratings based on recipient blocks and spam reports. Workspaces must actively monitor their quality tier:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-gray-600 space-y-2">
              <p>
                <strong>Quality Score Maintenance:</strong> Workspaces that cause phone number ratings to drop to &quot;Low / Red&quot; status through high customer report rates will have their broadcast volume throttled automatically by Meta.
              </p>
              <p>
                <strong>Warmup Limits:</strong> Newly registered WhatsApp phone numbers must adhere to Meta&apos;s daily messaging tier limits (Tier 1: 1,000 unique recipients/24h) before scaling to higher tiers.
              </p>
            </div>
          </section>

          {/* Section 5: Prohibited Content & Enforcement */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-rose-600" /> 5. Prohibited Communications &amp; Conduct
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Under no circumstances may Whatreply be utilized for:
            </p>
            <div className="bg-rose-50/70 border border-rose-200/90 rounded-2xl p-5 space-y-2 text-xs sm:text-sm text-rose-950/90">
              <ul className="list-disc list-inside space-y-1.5 pl-1">
                <li>Transmission of malware, phishing links, or deceitful impersonation schemes.</li>
                <li>Hate speech, harassment, defamatory content, or threatening communications.</li>
                <li>Distribution of prohibited goods (weapons, unregulated pharmaceuticals, adult services).</li>
                <li>Unauthorized bulk SMS-style cold marketing blasts to unverified phone directories.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Maintenance & Availability */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#00a859]" /> 6. Service Availability &amp; Maintenance Windows
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Whatreply maintains continuous 24/7 service monitoring. Planned maintenance windows that may cause brief interruptions are scheduled during off-peak hours and announced at least 48 hours in advance via dashboard notices or email broadcasts.
            </p>
          </section>

          {/* Section 7: Agreement Updates & Support */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00a859]" /> 7. Agreement Updates &amp; Operational Assistance
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We may revise this User Agreement periodically to reflect evolving telecom guidelines or platform feature updates. Continued use of Whatreply indicates acceptance of updated guidelines.
            </p>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-2">
              <p className="text-sm font-extrabold text-gray-900">Whatreply Customer Support &amp; Compliance</p>
              <p className="text-sm text-gray-600">
                Support Inquiries:{' '}
                <a href="mailto:support@whatreply.tech" className="text-[#00a859] hover:underline font-bold">
                  support@whatreply.tech
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Compliance Desk:{' '}
                <a href="mailto:privacy@whatreply.tech" className="text-[#00a859] hover:underline font-bold">
                  privacy@whatreply.tech
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Workspace Dashboard:{' '}
                <a href="https://app.whatreply.tech/en/login" className="text-[#00a859] hover:underline font-bold">
                  app.whatreply.tech/en/login
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
