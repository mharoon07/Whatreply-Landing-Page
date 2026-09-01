"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const targetHref = `/blogs/${post.id || post.slug}`;

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
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 font-bold text-xs border border-gray-200/80 shadow-sm">
              {post.category}
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
            src="/robots.png"
            alt="Whatreply AI Avatar"
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-[#00a859]">
              {authorName}
            </span>
            <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" /> {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-400" /> {post.readTime}
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
