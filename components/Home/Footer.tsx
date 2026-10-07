"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "User Agreement", href: "/user-agreement" }
    
  ],
};

export default function Footer() {
  return (
    <section className="bg-white pt-20 pb-0 overflow-hidden">
       <div className="w-full px-0 mx-0">
        <footer className="bg-[#050505] text-white pt-24 px-6 sm:px-12 lg:px-20 pb-0 rounded-t-[3rem] sm:rounded-t-[4rem] relative overflow-hidden border-t border-gray-800">
          
          {/* Subtle Ambient Glow Effects without heavy black shadow */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[#00a859]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto">
            
            {/* Top Section: Brand & Newsletter */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800/80 items-center">
              <div className="lg:col-span-6 space-y-4">
                {/* Replaced Icon & Text with logo-navbar3.png */}
                <div className="flex items-center">
                  <div className="relative w-36 sm:w-66 h-20">
                    <Image
                      src="/logo-navbar3.png"
                      alt="Whatreply Logo"
                      fill
                      sizes="180px"
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-base max-w-md leading-relaxed">
                  AI-powered WhatsApp platform for automated customer engagement, multi-agent team inboxes, and intelligent sales chatbots.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-3 bg-[#111111] border border-gray-800 p-2.5 rounded-2xl">
                <input 
                  type="email" 
                  placeholder="Enter your work email..." 
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
                />
                <Link href="https://app.whatreply.tech/en/login" className="w-full sm:w-auto px-7 py-3.5 bg-[#00a859] hover:bg-[#00924d] text-white font-extrabold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-95">
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

           

            {/* Bottom Bar Section */}
            <div className="pt-12 pb-2 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-400">
                <p>© {new Date().getFullYear()} Whatreply. All rights reserved.</p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                  <Link href="/user-agreement" className="hover:text-white transition-colors">User Agreement</Link>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                  <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
                </div>
              </div>

              {/* Even Larger, Pure White Bottom Brand Text spanning edge to edge */}
              <div className="relative w-full overflow-hidden text-center select-none pt-2 pb-0">
                <h1 className="text-[16vw] lg:text-[15vw] leading-[0.75] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/30 to-white/0 tracking-tighter">
                  WHATREPLY
                </h1>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </section>
  );
}