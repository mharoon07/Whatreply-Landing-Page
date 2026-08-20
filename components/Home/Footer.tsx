"use client";

import Link from "next/link";
import { MessageSquare, ArrowRight, Globe } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "AI Chatbots & Automation", href: "#" },
    { name: "Shared Team Inbox", href: "#" },
    { name: "Bulk Broadcast Campaigns", href: "#" },
    { name: "CRM & E-Commerce Sync", href: "#" },
    { name: "API & Webhook Integrations", href: "#" },
  ],
  company: [
    { name: "About Our Vision", href: "#" },
    { name: "Careers & Culture", href: "#" },
    { name: "Press & Media Kit", href: "#" },
    { name: "Global Partner Network", href: "#" },
    { name: "Direct Contact", href: "#" },
  ],
  resources: [
    { name: "Developer Documentation", href: "#" },
    { name: "Interactive API Guides", href: "#" },
    { name: "Case Studies & Growth", href: "#" },
    { name: "Community Forum", href: "#" },
    { name: "System Status & Uptime", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security & Trust", href: "#" },
    { name: "GDPR Compliance", href: "#" },
  ],
};

export default function Footer() {
  return (
    <section className="bg-white pt-16 pb-0">
      {/* Footer box has side margins/padding from the screen edges, but sits flush at the bottom */}
      <div className="mx-4 sm:mx-8 lg:mx-12">
        <footer className="bg-[#0b0b0b] text-white pt-20 px-8 sm:px-12 lg:px-16 pb-0 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] relative overflow-hidden border-t border-x border-gray-800 shadow-2xl">
          
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#00a859]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto">
            
            {/* Top Section: Brand & Newsletter */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00a859] flex items-center justify-center text-white shadow-lg">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-2xl font-black tracking-tight text-white">Replyly </span>
                </div>
                <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
                  Engineering high-performance web applications, scalable cloud backends, and modern digital experiences.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-3 bg-[#141414] border border-gray-800 p-2.5 rounded-2xl shadow-xl">
                <input 
                  type="email" 
                  placeholder="Enter your work email..." 
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
                />
                <button className="w-full sm:w-auto px-6 py-3.5 bg-[#00a859] hover:bg-[#00924d] text-white font-extrabold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg active:scale-95">
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Links Grid Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-gray-800">
              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-widest uppercase text-[#00e785]">Solutions</h4>
                <ul className="space-y-2.5">
                  {footerLinks.solutions.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-widest uppercase text-[#00e785]">Company</h4>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black tracking-widest uppercase text-[#00e785]">Resources</h4>
                <ul className="space-y-2.5">
                  {footerLinks.resources.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xs font-black tracking-widest uppercase text-[#00e785]">Legal</h4>
                  <ul className="space-y-2.5">
                    {footerLinks.legal.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 bg-[#141414] border border-gray-800 p-2.5 rounded-xl w-fit cursor-pointer hover:border-gray-700 transition-colors">
                  <Globe className="w-4 h-4 text-[#00e785]" />
                  <span className="text-xs font-bold text-gray-300">English (Global)</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
              <p>© {new Date().getFullYear()} AJ Developer. All rights reserved. Crafted for excellence.</p>
              
              <div className="flex items-center gap-4 text-gray-400">
                <Link href="#" className="p-2.5 bg-[#141414] hover:bg-gray-800 rounded-full border border-gray-800 text-white transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="#" className="p-2.5 bg-[#141414] hover:bg-gray-800 rounded-full border border-gray-800 text-white transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </Link>
                <Link href="#" className="p-2.5 bg-[#141414] hover:bg-gray-800 rounded-full border border-gray-800 text-white transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.774.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </Link>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </section>
  );
}