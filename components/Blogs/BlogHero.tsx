"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

export default function BlogHero({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}: BlogHeroProps) {
  return (
    <div className="pt-28 pb-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
       

        {/* 2-Line High Impact Heading with <br /> and green highlighted span tag */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Discover Our Latest Stories  <br className="hidden sm:inline" />
          <span className="bg-[#00a859] text-white px-4 py-1.5 rounded-2xl shadow-sm inline-block mt-2">
            Whatreply Blog & Articles
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
          Insights, technical guides, and growth strategies for WhatsApp business automation.
        </p>

        {/* Fully Rounded Search Input */}
        <div className="max-w-xl mx-auto relative mb-8">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute left-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-13 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a859] focus:bg-white transition-all placeholder-gray-400 cursor-text shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Pills */}
        {categories.length > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gray-900 text-white shadow-sm scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
