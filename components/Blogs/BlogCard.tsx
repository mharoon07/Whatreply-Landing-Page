"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Eye } from "lucide-react";
import { BlogPost, DEFAULT_FALLBACK_IMAGE, fetchBlogViews } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const targetHref = `/blogs/${post.id || post.slug}`;
  const [viewsCount, setViewsCount] = useState<number>(post.views || 0);

  useEffect(() => {
    if (typeof post.views === "number" && post.views > 0) {
      setViewsCount(post.views);
    }

    let isMounted = true;
    const targetSlug = post.slug || post.id;
    if (targetSlug) {
      fetchBlogViews(targetSlug).then((views) => {
        if (isMounted && typeof views === "number" && views > 0) {
          setViewsCount((prev) => Math.max(prev, views));
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [post.slug, post.id, post.views]);

  // Force author name to "Whatreply" if it says "Admin" or default
  const authorName = post.author?.name?.toLowerCase().includes("admin")
    ? "Whatreply"
    : post.author?.name || "Whatreply";

  return (
    <Link
      href={targetHref}
      className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full cursor-pointer"
    >
      <div>
        {/* Card Thumbnail Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100 cursor-pointer">
          <img
            src={post.coverImage || DEFAULT_FALLBACK_IMAGE}
            alt={post.title}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== DEFAULT_FALLBACK_IMAGE) {
                target.src = DEFAULT_FALLBACK_IMAGE;
              }
            }}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category Badge (Top-Left) */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 font-bold text-xs border border-gray-200/80 shadow-sm">
              {post.category}
            </span>
          </div>

          {/* Views Pill (Top-Right) */}
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-bold text-[11px] border border-white/20 shadow-sm flex items-center gap-1.5">
              <Eye className="w-3 h-3 text-[#00e785]" />
              {viewsCount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00a859] transition-colors leading-snug line-clamp-2 cursor-pointer mb-2">
            {post.title}
          </h3>
        </div>
      </div>

      {/* Card Footer: Author with Circular robots.png Profile Picture */}
      <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between mt-auto cursor-pointer">
        <div className="flex items-center gap-2.5">
          <img
            src={post.author?.avatar || "/robots.png"}
            alt="Whatreply AI Avatar"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = "/robots.png";
            }}
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-[#00a859]">
              {authorName}
            </span>
            <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" /> {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-400" /> {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-gray-600 font-semibold">
                <Eye className="w-3 h-3 text-[#00a859]" /> {viewsCount.toLocaleString()} views
              </span>
            </div>
          </div>
        </div>

        <span className="text-xs font-bold text-gray-900 group-hover:text-[#00a859] flex items-center gap-1 transition shrink-0 cursor-pointer">
          Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
