export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  tags?: string[];
  originalData?: any;
}

export const TARGET_BLOG_API_URL = "http://app.whatreply.tech/api/blogs";

export function getStoredApiUrl(): string {
  return TARGET_BLOG_API_URL;
}

export function setStoredApiUrl(url: string): void {
  // No-op for direct URL binding
}

function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

// Extract array of blog posts from ANY JSON structure
export function extractBlogsArray(data: any): any[] {
  if (!data) return [];
  if (Array.isArray(data)) return data;

  if (typeof data === "object") {
    // Check common property names
    const keysToTry = ["blogs", "posts", "data", "articles", "items", "results", "payload", "rows"];
    for (const key of keysToTry) {
      if (Array.isArray(data[key])) return data[key];
    }

    // Check nested objects e.g. data.data, data.blogs
    if (data.data && typeof data.data === "object") {
      if (Array.isArray(data.data)) return data.data;
      for (const key of keysToTry) {
        if (Array.isArray(data.data[key])) return data.data[key];
      }
    }

    // Search any property on object that is an array of objects
    for (const key in data) {
      if (Array.isArray(data[key]) && data[key].length > 0) {
        return data[key];
      }
    }

    // If single blog object returned
    if (data.title || data.heading || data.name || data._id || data.id) {
      return [data];
    }
  }

  return [];
}

// Universal Normalizer to handle any backend schema
export function normalizeBlogPost(raw: any, index: number): BlogPost {
  if (!raw || typeof raw !== "object") {
    return {
      id: String(index + 1),
      slug: `article-${index + 1}`,
      title: "Untitled Post",
      description: "No description provided.",
      content: "No content available.",
      coverImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
      category: "General",
      author: { name: "Whatreply Team" },
      publishedAt: new Date().toISOString().split("T")[0],
      readTime: "3 min read",
    };
  }

  // Handle Strapi v4 wrapper (raw.attributes)
  const item = raw.attributes ? { ...raw.attributes, id: raw.id || raw.attributes.id } : raw;

  // Extract ID & Slug
  const id = String(item.id || item._id || item.slug || index + 1);
  const slug = String(item.slug || item.id || item._id || `post-${id}`);

  // Extract Title
  let title = "Untitled Blog Post";
  if (typeof item.title === "string") title = item.title;
  else if (item.title?.rendered) title = item.title.rendered;
  else if (typeof item.name === "string") title = item.name;
  else if (typeof item.heading === "string") title = item.heading;
  else if (typeof item.post_title === "string") title = item.post_title;

  // Extract Content
  let content = "";
  if (typeof item.content === "string") content = item.content;
  else if (item.content?.rendered) content = item.content.rendered;
  else if (typeof item.body === "string") content = item.body;
  else if (typeof item.html === "string") content = item.html;
  else if (typeof item.description === "string") content = item.description;
  else if (typeof item.text === "string") content = item.text;

  // Extract Description / Excerpt
  let description = "";
  if (typeof item.description === "string" && item.description.trim()) {
    description = stripHtml(item.description);
  } else if (typeof item.excerpt === "string" && item.excerpt.trim()) {
    description = stripHtml(item.excerpt);
  } else if (item.excerpt?.rendered) {
    description = stripHtml(item.excerpt.rendered);
  } else if (typeof item.summary === "string" && item.summary.trim()) {
    description = stripHtml(item.summary);
  } else if (typeof item.subtitle === "string" && item.subtitle.trim()) {
    description = stripHtml(item.subtitle);
  } else if (content) {
    const cleanText = stripHtml(content);
    description = cleanText.slice(0, 160) + (cleanText.length > 160 ? "..." : "");
  }
  if (!description) description = "Click read article to view the full post content.";

  // Extract Cover Image
  let coverImage = "";
  if (typeof item.coverImage === "string") coverImage = item.coverImage;
  else if (typeof item.image === "string") coverImage = item.image;
  else if (typeof item.imageUrl === "string") coverImage = item.imageUrl;
  else if (typeof item.thumbnail === "string") coverImage = item.thumbnail;
  else if (typeof item.banner === "string") coverImage = item.banner;
  else if (typeof item.featured_image === "string") coverImage = item.featured_image;
  else if (typeof item.featured_media_src_url === "string") coverImage = item.featured_media_src_url;
  else if (item.image?.url) coverImage = item.image.url;
  else if (item.coverImage?.url) coverImage = item.coverImage.url;
  else if (item.thumbnail?.url) coverImage = item.thumbnail.url;

  if (!coverImage || !coverImage.startsWith("http")) {
    coverImage = "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop";
  }

  // Extract Category
  let category = "General";
  if (typeof item.category === "string") category = item.category;
  else if (item.category?.name) category = item.category.name;
  else if (Array.isArray(item.categories) && item.categories[0]) {
    category = typeof item.categories[0] === "string" ? item.categories[0] : item.categories[0].name || "General";
  } else if (Array.isArray(item.tags) && item.tags[0]) {
    category = typeof item.tags[0] === "string" ? item.tags[0] : "General";
  }

  // Extract Author
  let authorName = "Whatreply Team";
  let authorRole = "Author";
  let authorAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";

  if (typeof item.author === "string") {
    authorName = item.author;
  } else if (item.author && typeof item.author === "object") {
    authorName = item.author.name || item.author.username || item.author.displayName || authorName;
    authorRole = item.author.role || item.author.title || authorRole;
    authorAvatar = item.author.avatar || item.author.avatarUrl || item.author.image || authorAvatar;
  } else if (item.authorName) {
    authorName = item.authorName;
  }

  // Extract Published Date
  let publishedAt = item.publishedAt || item.createdAt || item.date || item.created_at || item.published_at;
  if (publishedAt) {
    try {
      publishedAt = new Date(publishedAt).toISOString().split("T")[0];
    } catch (e) {
      publishedAt = String(publishedAt);
    }
  } else {
    publishedAt = new Date().toISOString().split("T")[0];
  }

  // Reading time computation
  let readTime = item.readTime || item.readingTime;
  if (!readTime) {
    const wordCount = stripHtml(content).split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    readTime = `${minutes} min read`;
  }

  // Extract Tags
  let tags: string[] = [];
  if (Array.isArray(item.tags)) {
    tags = item.tags.map((t: any) => (typeof t === "string" ? t : t.name || String(t)));
  } else if (typeof item.tags === "string") {
    tags = item.tags.split(",").map((t: string) => t.trim());
  } else {
    tags = [category];
  }

  return {
    id,
    slug,
    title,
    description,
    content: content || `<p>${description}</p>`,
    coverImage,
    category,
    author: {
      name: authorName,
      role: authorRole,
      avatar: authorAvatar,
    },
    publishedAt,
    readTime,
    tags,
    originalData: raw,
  };
}

export async function fetchBlogsList(): Promise<{
  blogs: BlogPost[];
  apiUrl: string;
  error?: string;
  rawResponse?: any;
}> {
  // URLs to try: relative '/api/blogs', 'http://localhost:3000/api/blogs', or env var
  const urlsToTry = [
    "/api/blogs",
    TARGET_BLOG_API_URL,
    process.env.NEXT_PUBLIC_BLOGS_API_URL || "",
  ].filter(Boolean);

  let lastError = "";

  for (const url of urlsToTry) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        console.log(`[Whatreply Blogs] Successfully fetched from ${url}:`, json);

        const rawList = extractBlogsArray(json);
        const blogs = rawList.map((item: any, idx: number) => normalizeBlogPost(item, idx));

        return {
          blogs,
          apiUrl: url,
          rawResponse: json,
        };
      } else {
        lastError = `HTTP ${res.status}: ${res.statusText} from ${url}`;
      }
    } catch (err: any) {
      lastError = err.message || `Failed to connect to ${url}`;
    }
  }

  // Server proxy fallback if direct fetch to localhost had CORS or origin mismatch
  try {
    const proxyEndpoint = `/api/blogs-proxy?url=${encodeURIComponent(TARGET_BLOG_API_URL)}`;
    const proxyRes = await fetch(proxyEndpoint, { cache: "no-store" });

    if (proxyRes.ok) {
      const proxyJson = await proxyRes.json();
      if (proxyJson.success) {
        const rawList = extractBlogsArray(proxyJson.data || proxyJson.raw);
        const blogs = rawList.map((item: any, idx: number) => normalizeBlogPost(item, idx));
        return {
          blogs,
          apiUrl: TARGET_BLOG_API_URL,
          rawResponse: proxyJson.raw,
        };
      } else {
        lastError = proxyJson.error || lastError;
      }
    }
  } catch (proxyErr: any) {
    lastError = proxyErr.message || lastError;
  }

  return {
    blogs: [],
    apiUrl: TARGET_BLOG_API_URL,
    error: `Could not fetch blogs from ${TARGET_BLOG_API_URL}. Details: ${lastError}`,
  };
}

export async function fetchSingleBlog(idOrSlug: string): Promise<BlogPost | null> {
  const { blogs } = await fetchBlogsList();
  const match = blogs.find((b) => b.id === idOrSlug || b.slug === idOrSlug);
  if (match) return match;
  return blogs[0] || null;
}
