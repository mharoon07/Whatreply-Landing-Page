'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Globe,
  Scale,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Mail,
  FileCheck,
  Server,
  RefreshCw,
} from 'lucide-react';

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
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium max-w-3xl">
            Effective Date: January 1, 2026 • Last updated: September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 text-gray-700 leading-relaxed font-normal">
          {/* Executive Overview */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#00a859]" /> Overview & Commitment
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At <strong className="text-gray-900">Whatreply</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;, accessible via{' '}
              <a href="https://whatreply.tech" className="text-[#00a859] font-semibold hover:underline">
                whatreply.tech
              </a>{' '}
              and{' '}
              <a href="https://app.whatreply.tech" className="text-[#00a859] font-semibold hover:underline">
                app.whatreply.tech
              </a>
              ), safeguarding the confidentiality, integrity, and security of your business records and customer communications is our foundational principle. This Privacy Policy governs our collection, storage, processing, and disclosure practices for personal data when you interact with our AI-powered WhatsApp business software, live team inbox, broadcast automation engines, and developer APIs.
            </p>
          </section>

          {/* Controller vs Processor Designation */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#00a859]" /> 1. Data Controller vs. Data Processor Role
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Under international data protection frameworks, including the General Data Protection Regulation (GDPR):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-xs font-bold text-[#00a859] uppercase tracking-wider block mb-1">Whatreply as Data Controller</span>
                <h4 className="font-bold text-gray-900 text-sm mb-2">Account & Billing Operations</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We act as the Data Controller for information provided directly by our business customers when creating accounts, subscribing to plans, configuring billing credentials, or submitting support inquiries.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-xs font-bold text-[#00a859] uppercase tracking-wider block mb-1">Whatreply as Data Processor</span>
                <h4 className="font-bold text-gray-900 text-sm mb-2">End-User WhatsApp Communications</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  You (the subscribing business workspace) remain the Data Controller for your end-user communications, phone contact lists, and uploaded knowledge base materials. Whatreply acts strictly as a Data Processor on your behalf.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Database className="w-5 h-5 text-[#00a859]" /> 2. Information We Collect
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We collect information necessary to provide low-latency, automated conversational AI services and official WhatsApp Cloud API synchronization:
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80">
                <h4 className="text-sm font-bold text-gray-900 mb-1">A. Workspace & Account Credentials</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Full name, corporate email address, telephone number, workspace moniker, company legal name, billing country, password hashes, and user access roles (Admin, Agent, Manager).
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80">
                <h4 className="text-sm font-bold text-gray-900 mb-1">B. WhatsApp Customer & Conversational Data</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  End-recipient phone numbers, incoming customer queries, automated AI reply logs, live agent chat transcripts, multimedia attachments (images, PDFs, voice notes), message statuses (sent, delivered, read), and customer tags.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80">
                <h4 className="text-sm font-bold text-gray-900 mb-1">C. AI Knowledge Base & Training Data</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Proprietary FAQs, product documentation, catalog feeds, website URLs, and workflow guidelines uploaded directly into your workspace to train and calibrate your dedicated AI assistants.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80">
                <h4 className="text-sm font-bold text-gray-900 mb-1">D. Integration & Meta Platform Credentials</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Meta WhatsApp Business Account (WABA) IDs, Phone Number IDs, Webhook verification tokens, and API secret keys necessary to interface with the Meta Cloud API ecosystem.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80">
                <h4 className="text-sm font-bold text-gray-900 mb-1">E. Technical, Network & Telemetry Logs</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  IP addresses, browser client fingerprints, access timestamps, HTTP error diagnostics, and system latency metrics used to preserve platform uptime and thwart fraudulent attempts.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              3. Purpose & Legal Basis for Data Processing
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We process data under strict contractual necessity, legitimate business interests, and legal compliance grounds:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">AI Inference & Real-Time Resolution</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Synthesizing real-time, context-accurate responses to customer inquiries using your workspace-isolated AI knowledge base.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Shared Inbox & Multi-Agent Routing</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Routing inbound conversations to designated human support agents, managing team collaboration, and synchronizing chat states.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Automated Broadcast Dispatch</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Delivering approved Meta WhatsApp template campaigns to opt-in contact lists and recording analytics on conversion and delivery.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Security, Rate-Limiting & Billing</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Preventing spam abuse, tracking monthly subscription quotas in PKR or USD, and safeguarding API endpoints against cyberattacks.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: AI Privacy & Zero Public Training Guarantee */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00a859]" /> 4. AI Privacy & Zero Public LLM Training Guarantee
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We understand the sensitive nature of business knowledge and proprietary conversation transcripts. We uphold strict AI isolation standards:
            </p>
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-[#00a859] font-black text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Zero Public Model Training Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Your proprietary business knowledge base, uploaded PDFs, catalog data, and end-customer conversation histories are <strong>NEVER</strong> used to train, retrain, or fine-tune public or foundation AI models (such as OpenAI, Anthropic, or Meta Llama).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2 bg-white/80 p-3.5 rounded-xl border border-emerald-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#00a859] shrink-0 mt-0.5" />
                  <span><strong>Tenant Data Isolation:</strong> Every workspace operates within an isolated logical data boundary.</span>
                </div>
                <div className="flex items-start gap-2 bg-white/80 p-3.5 rounded-xl border border-emerald-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#00a859] shrink-0 mt-0.5" />
                  <span><strong>Zero-Retention Inference:</strong> Upstream LLM inference calls are executed under enterprise zero-data-retention terms.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Third-Party Subprocessors */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Server className="w-5 h-5 text-[#00a859]" /> 5. Third-Party Subprocessors & Infrastructure Partners
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              To operate Whatreply with enterprise-grade reliability and 99.9% uptime, we partner with vetted third-party subprocessors bound by Data Processing Agreements:
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-gray-900">Meta Platforms, Inc. (WhatsApp Cloud API):</strong> Used to deliver official WhatsApp messages, template webhooks, and phone number verification.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-gray-900">Cloud Infrastructure (AWS / Google Cloud):</strong> Secure compute, encrypted relational database clusters, and containerized microservices.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-gray-900">Enterprise AI Inference Providers:</strong> High-throughput inference pipelines operating under contractual zero-retention data privacy standards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00a859] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-gray-900">Payment Processors:</strong> PCI-DSS certified payment gateways that securely manage subscription billing without Whatreply ever storing raw card credentials.</span>
              </li>
            </ul>
          </section>

          {/* Section 6: Security & Encryption */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#00a859]" /> 6. Data Security & Encryption Standards
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We employ military-grade security controls to protect information against unauthorized modification, leakage, or loss:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-gray-900 mb-1">TLS 1.3 in Transit</h4>
                <p className="text-xs text-gray-500">Every external API request, dashboard session, and webhook transmission is encrypted with modern TLS 1.3 cryptographic protocols.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-gray-900 mb-1">AES-256 at Rest</h4>
                <p className="text-xs text-gray-500">All database volumes, message logs, and uploaded knowledge base documents are stored encrypted using AES-256 keys.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Role-Based Access</h4>
                <p className="text-xs text-gray-500">Granular permissions ensure human agents only see data assigned to their organizational role with mandatory two-factor authentication.</p>
              </div>
            </div>
          </section>

          {/* Section 7: Data Retention & Deletion */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#00a859]" /> 7. Data Retention & Account Deletion
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We retain workspace data only for as long as your subscription remains active or as needed to comply with statutory accounting and tax obligations:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 pl-2">
              <li className="flex items-center gap-2">
                <span className="text-[#00a859] font-bold">•</span>
                <span><strong>Active Subscriptions:</strong> Conversation logs and customer contact lists remain accessible for continuous customer service.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00a859] font-bold">•</span>
                <span><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Workspaces can request a full hard-purge of all conversation transcripts and uploaded documents at any time.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00a859] font-bold">•</span>
                <span><strong>Account Termination:</strong> Following workspace cancellation, all non-statutory data is permanently deleted from primary databases within 30 days.</span>
              </li>
            </ul>
          </section>

          {/* Section 8: Your Rights & GDPR Compliance */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#00a859]" /> 8. Your Rights & Global Privacy Controls
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Depending on your jurisdiction, you and your authorized workspace administrators hold the following statutory rights:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-gray-700">
              <div className="p-3.5 rounded-xl border border-gray-200 bg-white">
                <strong className="text-gray-900 block mb-1">Right to Access & Export</strong>
                You may request a copy of all personal data and conversation histories held in standardized CSV or JSON format.
              </div>
              <div className="p-3.5 rounded-xl border border-gray-200 bg-white">
                <strong className="text-gray-900 block mb-1">Right to Rectification</strong>
                You can correct or update inaccurate account information or outdated knowledge base training documents.
              </div>
              <div className="p-3.5 rounded-xl border border-gray-200 bg-white">
                <strong className="text-gray-900 block mb-1">Right to Object & Restrict</strong>
                You may restrict processing or opt-out of non-essential operational or promotional communications.
              </div>
              <div className="p-3.5 rounded-xl border border-gray-200 bg-white">
                <strong className="text-gray-900 block mb-1">Withdrawal of Consent</strong>
                Where processing is grounded in consent, you may withdraw your consent at any time without retroactive invalidation.
              </div>
            </div>
          </section>

          {/* Section 9: Cookies & Tracking */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              9. Cookies & Tracking Technologies
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We utilize essential session and authentication cookies strictly required to maintain secure logins, authenticate API calls, and remember workspace user preferences. <strong>We do not use invasive third-party cross-site advertising trackers or sell customer behavioral data to data brokers.</strong>
            </p>
          </section>

          {/* Section 10: Children's Privacy */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              10. Children&apos;s Online Privacy Protection
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Whatreply is a dedicated B2B enterprise software application and does not knowingly collect or solicit personal information from children under the age of 18. If we discover that personal data of a minor has been collected without verifiable parental consent, we take immediate measures to delete that information.
            </p>
          </section>

          {/* Section 11: Contact & Privacy Office */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00a859]" /> 11. Contact the Data Protection Office
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              For any questions, data subject access requests (DSARs), or security inquiries regarding this Privacy Policy, please contact our dedicated Privacy &amp; Compliance Office:
            </p>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-2">
              <p className="text-sm font-extrabold text-gray-900">Whatreply Privacy &amp; Data Protection Office</p>
              <p className="text-sm text-gray-600">
                Official Email:{' '}
                <a href="mailto:privacy@whatreply.tech" className="text-[#00a859] hover:underline font-bold">
                  privacy@whatreply.tech
                </a>
              </p>
              <p className="text-sm text-gray-600">
                General Support:{' '}
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
