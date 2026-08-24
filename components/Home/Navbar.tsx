"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    name: "Wati for Marketing",
    desc: "Acquire and engage leads at scale",
    href: "#marketing",
  },
  {
    name: "Wati for Support",
    desc: "AI-powered query resolution",
    href: "#support",
  },
  {
    name: "Wati for Sales",
    desc: "Nurture leads and close deals",
    href: "#sales",
  },
];

const PRODUCTS = [
  {
    name: "No-Code Chatbots",
    desc: "Human-like AI chatbots for every use case",
    href: "#chatbots",
  },
  {
    name: "Team Inbox",
    desc: "All sales & service chats in one place",
    href: "#inbox",
  },
  {
    name: "WhatsApp API",
    desc: "Connect with customers at scale",
    href: "#whatsapp-api",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Image */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none">
          <div className="relative w-48 h-16 flex items-center">
            <Image
              src="/logo-navbar3.png"
              alt="Wati Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-[#1d1d1d]">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
              className="flex items-center gap-1 hover:text-[#00e785] transition-colors py-2 cursor-pointer"
            >
              Solutions <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            {solutionsOpen && (
              <div
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-2xl p-4 border border-gray-100 flex flex-col gap-3"
              >
                {SOLUTIONS.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-3 hover:bg-gray-50 rounded-xl transition"
                  >
                    <p className="font-bold text-[#1d1d1d] text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Product Dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
              className="flex items-center gap-1 hover:text-[#00e785] transition-colors py-2 cursor-pointer"
            >
              Product <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            {productOpen && (
              <div
                onMouseEnter={() => setProductOpen(true)}
                onMouseLeave={() => setProductOpen(false)}
                className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-2xl p-4 border border-gray-100 flex flex-col gap-3"
              >
                {PRODUCTS.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-3 hover:bg-gray-50 rounded-xl transition"
                  >
                    <p className="font-bold text-[#1d1d1d] text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
          href="/pricing"
            className="hover:text-[#00e785] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#resources"
            className="hover:text-[#00e785] transition-colors"
          >
            Resources
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="text-[#1d1d1d] font-semibold hover:text-[#00e785] transition"
          >
            Log in
          </Link>
          <Link
            href="/demo"
            className="bg-[#1d1d1d] text-white px-6 py-3 rounded-full font-bold hover:bg-[#00e785] hover:text-[#1d1d1d] transition-all shadow-md flex items-center gap-2"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-[#1d1d1d] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-2xl px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link
            href="#solutions"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1d1d1d] hover:text-[#00e785]"
          >
            Solutions
          </Link>
          <Link
            href="#product"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1d1d1d] hover:text-[#00e785]"
          >
            Product
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1d1d1d] hover:text-[#00e785]"
          >
            Pricing
          </Link>
          <Link
            href="#resources"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#1d1d1d] hover:text-[#00e785]"
          >
            Resources
          </Link>

          <hr className="border-gray-100 my-2" />

          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-center py-3 font-bold text-[#1d1d1d] border border-gray-200 rounded-full hover:bg-gray-50"
            >
              Log in
            </Link>
            <Link
              href="/demo"
              onClick={() => setIsOpen(false)}
              className="text-center py-3 font-bold text-[#1d1d1d] bg-[#00e785] rounded-full hover:bg-[#00d075] shadow-md"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}