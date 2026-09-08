'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Scale,
  Shield,
  ArrowLeft,
  Bot,
  DollarSign,
  AlertTriangle,
  Lock,
  Mail,
  Zap,
} from 'lucide-react';

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
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium max-w-3xl">
            Effective Date: January 1, 2026 • Last updated: September 2026
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
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding contractual agreement between you (&quot;Customer&quot;, &quot;User&quot;, &quot;Workspace&quot;, or &quot;you&quot;) and <strong className="text-gray-900">Whatreply</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, accessible at{' '}
              <a href="https://whatreply.tech" className="text-[#00a859] font-semibold hover:underline">
                whatreply.tech
              </a>{' '}
              and{' '}
              <a href="https://app.whatreply.tech" className="text-[#00a859] font-semibold hover:underline">
                app.whatreply.tech
              </a>
              ). By registering for an account, authorizing a WhatsApp Business Account connection, importing contact records, or utilizing our automated AI customer service platform, you certify that you have read, understood, and agreed to be unconditionally bound by these Terms.
            </p>
          </section>

          {/* Section 1: Platform Services */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#00a859]" /> 1. Platform Services & License Grant
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Whatreply provides an enterprise cloud-based software-as-a-service (SaaS) platform facilitating intelligent WhatsApp marketing, multi-agent live inboxes, no-code AI customer service agents, automated broadcast campaigns, and CRM synchronization.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Commercial License:</strong> Subject to these Terms and your paid subscription tier, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our software dashboard and APIs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Meta WhatsApp Infrastructure:</strong> Access to official WhatsApp messaging features requires an active, verified Meta Business Manager profile and compliance with Meta Platforms terms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Account Administration:</strong> You are solely responsible for all actions conducted under your workspace user credentials and for maintaining strict access authorization controls.</span>
              </li>
            </ul>
          </section>

          {/* Section 2: WhatsApp Policies & Acceptable Use */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#00a859]" /> 2. WhatsApp Messaging Regulations & Acceptable Use Policy
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              To preserve telecom carrier compliance and safeguard WhatsApp phone number quality tiers, you strictly agree to abide by the following messaging criteria:
            </p>
            <div className="bg-rose-50/70 border border-rose-200/90 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-base">
                <AlertCircle className="w-5 h-5" /> Mandatory Messaging Restrictions & Zero-Tolerance Policies
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-rose-950/90 pl-1 leading-relaxed">
                <li><strong>Mandatory Opt-In:</strong> You must have verifiable, explicit prior consent from every recipient before sending marketing, promotional, or broadcast messages.</li>
                <li><strong>Prohibition of Unsolicited Spam:</strong> Cold outreach lists, scraped phone directories, and non-permissioned broadcast lists are strictly forbidden.</li>
                <li><strong>Opt-Out Mechanism:</strong> All marketing broadcasts must contain clear opt-out instructions (e.g., &quot;Reply STOP to unsubscribe&quot;), which Whatreply automatically honors.</li>
                <li><strong>Meta Policy Adherence:</strong> You agree to fully comply with Meta&apos;s WhatsApp Business Messaging Policy and Commerce Policy at all times.</li>
                <li><strong>Prohibited Industries:</strong> Unlawful drugs, weapons, alcohol, predatory payday loans, unauthorized gambling, adult entertainment, and counterfeit goods may not be promoted via Whatreply.</li>
                <li><strong>No System Abuse:</strong> Reverse-engineering, scraping, stress-testing our APIs, or attempting to circumvent rate limits will result in immediate termination.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: AI Technology & Outputs Disclaimer */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#00a859]" /> 3. AI Technology, Output Accuracy & Human Escalation
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Whatreply integrates advanced machine learning and large language models (LLMs) to synthesize automated responses to inbound customer inquiries:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Knowledge Base Calibration</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  AI answers are derived from the documentation, catalogs, FAQs, and URLs you supply. You are responsible for ensuring that all knowledge materials uploaded to Whatreply are factually correct and up-to-date.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Human-in-the-Loop Supervision</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  While our system is engineered to minimize hallucinations, generative AI may occasionally generate inaccuracies. Workspaces must maintain human agent escalation protocols for mission-critical inquiries.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Subscription, Billing & Currency */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#00a859]" /> 4. Subscriptions, PKR Pricing & Meta Conversation Charges
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Whatreply offers tiered subscription plans (Starter Bot, Growth AI, Enterprise AI) designed to scale with your business volume:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Transparent Pricing & Billing Cycles</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All platform software subscription fees are billed in advance on a recurring monthly or annual basis in Pakistani Rupees (PKR) or US Dollars (USD). Subscriptions renew automatically unless canceled prior to the renewal date.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Meta Conversation Fees</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Meta Platforms assesses independent per-conversation charges for WhatsApp Business conversations (e.g., Marketing, Utility, Authentication, and Service). These fees are billed according to Meta published regional rates.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Free Trials</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Free trial periods provide full feature evaluation without requiring initial credit card verification. At the end of a trial, continued service requires selection of a paid subscription plan.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Cancellation & Refunds</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  You may cancel your subscription at any time directly through your workspace dashboard. Cancellations take effect at the conclusion of the current prepaid billing period.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Intellectual Property */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              5. Intellectual Property & Proprietary Ownership
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              <strong className="text-gray-900">Your Data & Assets:</strong> You retain 100% full ownership over your customer contact records, conversational chat transcripts, brand logos, and proprietary knowledge base documentation uploaded to the platform.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              <strong className="text-gray-900">Whatreply Intellectual Property:</strong> All software code, user interface designs, AI agent orchestration pipelines, documentation, trademarks, and branding of Whatreply remain the exclusive proprietary property of Whatreply and its licensors.
            </p>
          </section>

          {/* Section 6: Uptime SLA & Limitation of Liability */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              6. Service Uptime SLA & Limitation of Liability
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We target a 99.9% platform availability SLA for our core dashboard, webhook dispatchers, and AI services. However:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Third-Party Outages:</strong> Whatreply shall not be liable for delivery delays or interruptions caused by Meta WhatsApp Cloud API outages, telecommunications carrier routing failures, or internet service provider disruptions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Consequential Damages:</strong> To the maximum extent permitted by applicable law, Whatreply shall not be liable for lost profits, lost business revenue, loss of customer goodwill, or indirect damages.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Liability Cap:</strong> Our aggregate financial liability arising out of or related to these Terms shall under no circumstances exceed the total fees paid by you to Whatreply in the twelve (12) months preceding the incident.</span>
              </li>
            </ul>
          </section>

          {/* Section 7: Indemnification */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              7. Customer Indemnification
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              You agree to defend, indemnify, and hold harmless Whatreply, its officers, directors, employees, and affiliates from and against any third-party claims, liabilities, damages, or fines arising from: (a) your violation of these Terms; (b) your violation of Meta WhatsApp Business Messaging Policies; (c) sending unsolicited messages or spam to recipients without opt-in consent; or (d) any unlawful or infringing content transmitted through your workspace.
            </p>
          </section>

          {/* Section 8: Suspension & Termination */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              8. Suspension & Termination
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Whatreply reserves the right to immediately suspend or permanently terminate your workspace access without prior notice if: (a) your account is flagged by Meta for excessive user blocks or quality rating drops to &quot;Low / Red&quot;; (b) we receive verified spam complaints regarding your broadcasts; (c) you fail to cure payment delinquencies; or (d) you breach our Acceptable Use Policy.
            </p>
          </section>

          {/* Section 9: Governing Law & Legal Contact */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00a859]" /> 9. Governing Law & Legal Inquiries
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              These Terms shall be governed by and construed in accordance with commercial laws. Any dispute shall first be addressed through good-faith mutual negotiations. For legal notices, inquiries, or regulatory submissions:
            </p>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-2">
              <p className="text-sm font-extrabold text-gray-900">Whatreply Legal Affairs &amp; Compliance Office</p>
              <p className="text-sm text-gray-600">
                Legal Counsel Email:{' '}
                <a href="mailto:terms@whatreply.tech" className="text-[#00a859] hover:underline font-bold">
                  terms@whatreply.tech
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Support Desk:{' '}
                <a href="mailto:support@whatreply.tech" className="text-[#00a859] hover:underline font-bold">
                  support@whatreply.tech
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
