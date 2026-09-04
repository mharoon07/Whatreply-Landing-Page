"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import BlogCard from "@/components/Blogs/BlogCard";
import { fetchSingleBlog, fetchBlogsList, BlogPost, DEFAULT_FALLBACK_IMAGE } from "@/lib/blog-data";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Loader2,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SingleBlogPage({ params }: PageProps) {
  // Next.js 16 async params resolution using React.use
  const resolvedParams = use(params);
  const slugOrId = resolvedParams.slug;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPostData() {
      setLoading(true);
      const post = await fetchSingleBlog(slugOrId);
      setBlog(post);

      // Load related blogs
      const { blogs } = await fetchBlogsList();
      const filtered = blogs.filter((b) => b.id !== post?.id && b.slug !== post?.slug);
      setRelatedBlogs(filtered.slice(0, 3));
      setLoading(false);
    }
    loadPostData();
  }, [slugOrId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col font-plus-jakarta">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-20">
          <Loader2 className="w-10 h-10 animate-spin text-[#00a859]" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col font-plus-jakarta">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            The blog article you are looking for might have been moved or removed.
          </p>
          <Link
            href="/blogs"
            className="px-6 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-[#00a859] transition cursor-pointer"
          >
            ← Back to all articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#00e785] selection:text-gray-900 flex flex-col font-plus-jakarta">
      {/* Global Header */}
      <Navbar />

      {/* Main Article Section - Wide Container (max-w-6xl) for Spacious Reading */}
      <article className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full flex-1">
        {/* Back Link & Category / Metadata bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 hover:text-[#00a859] transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-500 flex-wrap">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-[#00a859] font-bold border border-emerald-200/80">
              {blog.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" /> {blog.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" /> {blog.readTime}
            </span>
          </div>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.2] mb-6">
          {blog.title}
        </h1>

        {/* Author Details Bar */}
        <div className="flex items-center justify-between py-4 border-y border-gray-100 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={blog.author?.avatar || "/robots.png"}
              alt="Whatreply Profile Avatar"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = "/robots.png";
              }}
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
            <div className="flex flex-col gap-0.5">
              <h4 className="font-extrabold text-sm text-[#00a859]">Whatreply</h4>
              <p className="text-[11px] text-gray-400">{blog.publishedAt} • {blog.readTime}</p>
            </div>
          </div>
        </div>

        {/* Featured Cover Image - Spacious full width banner */}
        {blog.coverImage && (
          <div className="relative w-full h-72 sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden mb-12 shadow-lg bg-gray-100 border border-gray-200">
            <img
              src={blog.coverImage || DEFAULT_FALLBACK_IMAGE}
              alt={blog.title}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== DEFAULT_FALLBACK_IMAGE) {
                  target.src = DEFAULT_FALLBACK_IMAGE;
                }
              }}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Main Content Body - Full Width & High Legibility Typography */}
        <div
          className="prose prose-lg sm:prose-xl max-w-none text-gray-800 leading-relaxed sm:leading-8 space-y-6 [&>p]:text-base [&>p]:sm:text-lg [&>p]:text-gray-700 [&>p]:leading-relaxed [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a859] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-6 [&>blockquote]:bg-emerald-50/50 [&>blockquote]:p-4 [&>blockquote]:rounded-r-xl"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-14 pt-8 border-t border-gray-100 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Tags:</span>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-lg transition"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <img
            src="/robots.png"
            alt="Whatreply Profile Avatar"
            className="w-12 h-12 rounded-full object-cover shrink-0"
          />
          <div>
            <span className="text-[11px] font-bold text-[#00a859] uppercase tracking-wider">Published By</span>
            <h3 className="text-base font-bold text-gray-900">Whatreply</h3>
            <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
              Official Whatreply insights, announcements, and guides for WhatsApp business automation.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20 pt-16 border-t border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#00a859]" /> Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedBlogs.map((rel) => (
                <BlogCard key={rel.id} post={rel} />
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
