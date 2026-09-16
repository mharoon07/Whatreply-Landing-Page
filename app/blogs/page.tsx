"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import BlogHero from "@/components/Blogs/BlogHero";
import BlogCard from "@/components/Blogs/BlogCard";
import { fetchBlogsList, BlogPost } from "@/lib/blog-data";
import { Loader2, ArrowRight, BookOpen, Inbox, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<string | undefined>();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const loadBlogsData = async () => {
    setLoading(true);
    setApiError(undefined);
    const result = await fetchBlogsList();
    setBlogs(result.blogs);
    setApiError(result.error);
    setLoading(false);
  };

  useEffect(() => {
    loadBlogsData();
  }, []);

  // Compute categories dynamically from fetched API articles
  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

  // Filtered blogs based on search and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.tags && blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory =
      selectedCategory === "All" || blog.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-plus-jakarta">
      {/* Global Navbar */}
      <Navbar />

      {/* Hero Header Section */}
      <BlogHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10 w-full flex-1">
        {/* Loading state: ONLY show spinner, no text */}
        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center">
            <Loader2 className="w-10 h-10 animate-spin text-[#00a859]" />
          </div>
        ) : apiError ? (
          <div className="mb-8 p-5 bg-red-50 border border-red-200 text-red-950 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <h4 className="font-bold text-sm text-red-950 mb-0.5">Could not fetch articles</h4>
              <p className="text-xs text-red-700">{apiError}</p>
            </div>
            <button
              onClick={() => loadBlogsData()}
              className="px-4 py-2 bg-red-900 text-white rounded-xl text-xs font-bold hover:bg-red-800 transition flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retry
            </button>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-20 text-center bg-gray-50 rounded-2xl border border-gray-200 p-10 max-w-md mx-auto shadow-sm">
            <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-700 mx-auto mb-4">
              <Inbox className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Articles Found</h3>
            <p className="text-gray-600 text-sm mb-6">
              {searchQuery ? `No articles match "${searchQuery}".` : "No articles available."}
            </p>
            {searchQuery ? (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-5 py-2 bg-gray-900 text-white rounded-xl font-bold text-xs hover:bg-gray-800 transition cursor-pointer"
              >
                Clear Search
              </button>
            ) : (
              <button
                onClick={() => loadBlogsData()}
                className="px-5 py-2 bg-gray-900 text-white rounded-xl font-bold text-xs hover:bg-gray-800 transition flex items-center gap-2 mx-auto cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refresh
              </button>
            )}
          </div>
        ) : (
          /* Uniform line-by-line Grid of All Articles */
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#00a859]" />
                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              </h3>
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBlogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <section className="mt-20 bg-gray-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg border border-gray-800">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-300 font-bold text-xs mb-3 border border-gray-700">
              WhatsApp Growth Platform
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
              Automate your Customer Support & Sales on WhatsApp
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
              Join fast-growing companies using Whatreply to engage customers, automate broadcasts, and boost conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="https://app.whatreply.tech/en/login"
                className="bg-[#00e785] text-gray-950 px-6 py-3 rounded-xl font-bold hover:bg-[#00d075] transition shadow-sm text-center flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
