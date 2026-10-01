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
  views: number;
  originalData?: any;
}

export const DEFAULT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop";

export const DEFAULT_AUTHOR_AVATAR = "/robots.png";

export const TARGET_BLOG_API_URL =
  process.env.NEXT_PUBLIC_BLOGS_API_URL || "https://app.whatreply.tech/api/blogs";

export function getStoredApiUrl(): string {
  return TARGET_BLOG_API_URL;
}

export function setStoredApiUrl(url: string): void {
  // Direct URL binding
}

function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}


export function getOriginFromUrl(url?: string): string {
  if (!url) {
    if (typeof window !== "undefined" && window.location?.origin) {
      return window.location.origin;
    }
    return "";
  }
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const parsed = new URL(url);
      return parsed.origin;
    } catch {
      return "";
    }
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "";
}

// Helper to extract first image URL found in HTML or Markdown content
function extractImageFromContent(content?: string): string {
  if (!content || typeof content !== "string") return "";

  // 1. HTML <img src="...">
  const htmlMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (htmlMatch && htmlMatch[1]) {
    return htmlMatch[1].trim();
  }

  // 2. Markdown ![alt](url)
  const mdMatch = content.match(/!\[.*?\]\((https?:\/\/[^\s\)]+|\/[^\s\)]+|[^\s\)]+\.(?:png|jpg|jpeg|webp|gif|svg|avif))\)/i);
  if (mdMatch && mdMatch[1]) {
    return mdMatch[1].trim();
  }

  return "";
}

// Helper to extract raw image value from ANY backend object structure
function extractRawImageField(item: any): string {
  if (!item || typeof item !== "object") return "";

  // Check known direct string / object keys in order of priority
  const candidateKeys = [
    "coverImage",
    "cover_image",
    "coverImg",
    "cover_img",
    "cover",
    "cover_url",
    "coverUrl",
    "image",
    "imageUrl",
    "image_url",
    "img",
    "imgUrl",
    "img_url",
    "thumbnail",
    "thumbnailUrl",
    "thumbnail_url",
    "thumb",
    "thumb_url",
    "banner",
    "bannerUrl",
    "banner_url",
    "bannerImage",
    "banner_image",
    "featured_image",
    "featuredImage",
    "featured_media_src_url",
    "featuredMedia",
    "featured_media",
    "featureImage",
    "feature_image",
    "featureImageUrl",
    "photo",
    "photoUrl",
    "photo_url",
    "picture",
    "pictureUrl",
    "pic",
    "media",
    "mediaUrl",
    "media_url",
    "file",
    "fileUrl",
    "filePath",
    "file_path",
    "heroImage",
    "hero_image",
    "headerImage",
    "header_image",
    "mainImage",
    "main_image",
    "poster",
    "posterImage",
    "poster_image",
    "attachment",
    "attachments",
    "assets",
    "src",
  ];

  for (const key of candidateKeys) {
    const val = item[key];
    if (!val) continue;

    // String value
    if (typeof val === "string" && val.trim()) {
      return val.trim();
    }

    // Array (e.g. item.images = ["url"] or [{ url: "..." }])
    if (Array.isArray(val) && val.length > 0) {
      if (typeof val[0] === "string" && val[0].trim()) {
        return val[0].trim();
      }
      if (typeof val[0] === "object" && val[0] !== null) {
        const nested =
          val[0].url ||
          val[0].src ||
          val[0].path ||
          val[0].secure_url ||
          val[0].link ||
          val[0].href ||
          val[0].file ||
          val[0].attributes?.url;
        if (typeof nested === "string" && nested.trim()) {
          return nested.trim();
        }
      }
    }

    // Object value (e.g. Cloudinary, Strapi, Contentful, Sanity, S3 object)
    if (typeof val === "object" && val !== null) {
      // Direct properties
      const direct =
        val.url ||
        val.src ||
        val.path ||
        val.secure_url ||
        val.link ||
        val.href ||
        val.file ||
        val.publicUrl;
      if (typeof direct === "string" && direct.trim()) {
        return direct.trim();
      }

      // Strapi v4: val.data.attributes.url or val.data[0].attributes.url
      if (val.data) {
        if (val.data.attributes?.url) {
          return String(val.data.attributes.url).trim();
        }
        if (Array.isArray(val.data) && val.data[0]?.attributes?.url) {
          return String(val.data[0].attributes.url).trim();
        }
      }

      // Contentful / Sanity: val.fields.file.url or val.asset.url
      if (val.fields?.file?.url) return String(val.fields.file.url).trim();
      if (val.asset?.url) return String(val.asset.url).trim();
    }
  }

  // WordPress REST API format
  if (item._embedded && typeof item._embedded === "object") {
    const wpMedia = item._embedded["wp:featuredmedia"];
    if (Array.isArray(wpMedia) && wpMedia[0]) {
      const src =
        wpMedia[0].source_url ||
        wpMedia[0].media_details?.sizes?.full?.source_url ||
        wpMedia[0].media_details?.sizes?.large?.source_url ||
        wpMedia[0].media_details?.sizes?.medium?.source_url;
      if (typeof src === "string" && src.trim()) return src.trim();
    }
  }

  // Check array properties: item.images, item.photos, item.pictures, item.files, item.media, item.gallery
  const arrayKeys = ["images", "photos", "pictures", "files", "media", "gallery", "coverImages"];
  for (const arrKey of arrayKeys) {
    const arr = item[arrKey];
    if (Array.isArray(arr) && arr.length > 0) {
      if (typeof arr[0] === "string" && arr[0].trim()) return arr[0].trim();
      if (typeof arr[0] === "object" && arr[0] !== null) {
        const url = arr[0].url || arr[0].src || arr[0].path || arr[0].secure_url;
        if (typeof url === "string" && url.trim()) return url.trim();
      }
    }
  }

  // Check any field whose value looks like an image file path or URL
  for (const prop in item) {
    const val = item[prop];
    if (typeof val === "string") {
      const trimmed = val.trim();
      if (
        trimmed.match(/\.(jpg|jpeg|png|webp|gif|svg|avif)(\?.*)?$/i) ||
        trimmed.startsWith("data:image/") ||
        trimmed.startsWith("blob:") ||
        trimmed.startsWith("/uploads/") ||
        trimmed.startsWith("uploads/")
      ) {
        return trimmed;
      }
    }
  }

  return "";
}

// Universal Resolver that produces a valid, loadable browser image URL
export function resolveImageUrl(rawUrl?: string, apiOrigin?: string): string {
  if (!rawUrl || typeof rawUrl !== "string") {
    return DEFAULT_FALLBACK_IMAGE;
  }

  let url = rawUrl.trim();

  // If empty or literal strings 'null' / 'undefined'
  if (!url || url === "null" || url === "undefined") {
    return DEFAULT_FALLBACK_IMAGE;
  }

  // Remove wrapping quotes if any
  url = url.replace(/^["']|["']$/g, "").trim();

  // Data URLs and Blob URLs are directly loadable
  if (url.startsWith("data:image/") || url.startsWith("blob:")) {
    return url;
  }

  // Protocol-relative URLs (e.g. "//cdn.example.com/image.png")
  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  // Full HTTP / HTTPS URLs
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  // Handle Relative Paths (e.g. "/uploads/img.png", "uploads/img.png", "/static/img.png", "./images/img.png")
  let baseOrigin = (apiOrigin || "").trim();
  if (!baseOrigin && typeof window !== "undefined" && window.location?.origin) {
    baseOrigin = window.location.origin;
  }

  if (baseOrigin && (baseOrigin.startsWith("http://") || baseOrigin.startsWith("https://"))) {
    const cleanOrigin = baseOrigin.replace(/\/+$/, "");
    const cleanPath = url.replace(/^\.?\//, "");
    return `${cleanOrigin}/${cleanPath}`;
  }

  // Relative with leading slash
  if (url.startsWith("/")) {
    return url;
  }

  // Relative without leading slash
  if (url.startsWith("./")) {
    return url.slice(1);
  }

  return `/${url}`;
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
export function normalizeBlogPost(raw: any, index: number, apiOrigin?: string): BlogPost {
  if (!raw || typeof raw !== "object") {
    return {
      id: String(index + 1),
      slug: `article-${index + 1}`,
      title: "Untitled Post",
      description: "No description provided.",
      content: "No content available.",
      coverImage: DEFAULT_FALLBACK_IMAGE,
      category: "General",
      author: { name: "Whatreply Team" },
      publishedAt: new Date().toISOString().split("T")[0],
      readTime: "3 min read",
      views: 0,
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

  // Extract Cover Image reliably
  let rawCoverImage = extractRawImageField(item);
  if (!rawCoverImage) {
    rawCoverImage = extractImageFromContent(content || item.body || item.html || item.description);
  }
  const coverImage = resolveImageUrl(rawCoverImage, apiOrigin);

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
  let authorAvatar = DEFAULT_AUTHOR_AVATAR;

  if (typeof item.author === "string") {
    authorName = item.author;
  } else if (item.author && typeof item.author === "object") {
    authorName = item.author.name || item.author.username || item.author.displayName || authorName;
    authorRole = item.author.role || item.author.title || authorRole;
    const rawAvatar = item.author.avatar || item.author.avatarUrl || item.author.image || "";
    if (rawAvatar) {
      authorAvatar = resolveImageUrl(rawAvatar, apiOrigin);
    }
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

  // Extract Views
  let views = 0;
  if (typeof item.views === "number") views = item.views;
  else if (typeof item.viewCount === "number") views = item.viewCount;
  else if (typeof item.viewsCount === "number") views = item.viewsCount;
  else if (typeof item.totalViews === "number") views = item.totalViews;
  else if (typeof item.views_count === "number") views = item.views_count;
  else if (item.views && !isNaN(Number(item.views))) views = Number(item.views);
  else if (item.viewCount && !isNaN(Number(item.viewCount))) views = Number(item.viewCount);

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
    views,
    originalData: raw,
  };
}

async function attachViewsToBlogs(blogs: BlogPost[]): Promise<BlogPost[]> {
  try {
    await Promise.all(
      blogs.map(async (blog) => {
        const targetSlug = blog.slug || blog.id;
        if (targetSlug) {
          const liveViews = await fetchBlogViews(targetSlug);
          if (typeof liveViews === "number") {
            blog.views = liveViews;
          }
        }
      })
    );
  } catch {}
  return blogs;
}

export async function fetchBlogsList(): Promise<{
  blogs: BlogPost[];
  apiUrl: string;
  error?: string;
  rawResponse?: any;
}> {
  const urlsToTry = [
    process.env.NEXT_PUBLIC_BLOGS_API_URL || "",
    "http://localhost:3000/api/blogs",
    "http://127.0.0.1:3000/api/blogs",
    TARGET_BLOG_API_URL,
    "https://app.whatreply.tech/api/blogs",
    "http://app.whatreply.tech/api/blogs",
  ].filter(Boolean);

  let lastError = "";

  for (const url of urlsToTry) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        const apiOrigin = getOriginFromUrl(url);
        const rawList = extractBlogsArray(json);
        const blogs = rawList.map((item: any, idx: number) => normalizeBlogPost(item, idx, apiOrigin));
        await attachViewsToBlogs(blogs);

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

  // Server proxy fallback if direct fetch had CORS or origin mismatch
  try {
    const proxyTarget = TARGET_BLOG_API_URL || "http://localhost:3000/api/blogs";
    const proxyEndpoint = `/api/blogs-proxy?url=${encodeURIComponent(proxyTarget)}`;
    const proxyRes = await fetch(proxyEndpoint, { cache: "no-store" });

    if (proxyRes.ok) {
      const proxyJson = await proxyRes.json();
      if (proxyJson.success) {
        const apiOrigin = getOriginFromUrl(proxyTarget);
        const rawList = extractBlogsArray(proxyJson.data || proxyJson.raw);
        const blogs = rawList.map((item: any, idx: number) => normalizeBlogPost(item, idx, apiOrigin));
        await attachViewsToBlogs(blogs);

        return {
          blogs,
          apiUrl: proxyTarget,
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

/**
 * Fetch a single blog post by slug or ID
 */
export async function fetchSingleBlog(idOrSlug: string): Promise<BlogPost | null> {
  if (!idOrSlug) return null;

  const encodedSlug = encodeURIComponent(idOrSlug);
  const endpointsToTry = [
    `http://localhost:3000/api/blogs/${encodedSlug}`,
    `http://127.0.0.1:3000/api/blogs/${encodedSlug}`,
    `${TARGET_BLOG_API_URL.replace(/\/$/, "")}/${encodedSlug}`,
    `https://app.whatreply.tech/api/blogs/${encodedSlug}`,
    `http://app.whatreply.tech/api/blogs/${encodedSlug}`,
  ];

  for (const ep of endpointsToTry) {
    try {
      const res = await fetch(ep, { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        const singleData = json.data || json.blog || json.post || json;
        if (singleData && (singleData.title || singleData.slug || singleData.id)) {
          const apiOrigin = getOriginFromUrl(ep);
          const blog = normalizeBlogPost(singleData, 0, apiOrigin);
          const liveViews = await fetchBlogViews(blog.slug || blog.id || idOrSlug);
          if (typeof liveViews === "number") {
            blog.views = liveViews;
          }
          return blog;
        }
      }
    } catch {}
  }

  // Fallback to searching from all blogs
  const { blogs } = await fetchBlogsList();
  const match = blogs.find((b) => b.id === idOrSlug || b.slug === idOrSlug);
  if (match) {
    const liveViews = await fetchBlogViews(match.slug || match.id || idOrSlug);
    if (typeof liveViews === "number") {
      match.views = liveViews;
    }
    return match;
  }
  return blogs[0] || null;
}

export function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "server-visitor";
  try {
    let vid = localStorage.getItem("whatreply_visitor_id");
    if (!vid) {
      vid = "v_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now().toString(36);
      localStorage.setItem("whatreply_visitor_id", vid);
    }
    return vid;
  } catch {
    return "anon_visitor";
  }
}

/**
 * Record a view for a blog article via backend on localhost:3000, internal Next.js route, or remote backend
 */
export async function recordBlogView(slug: string, visitorId?: string): Promise<number | null> {
  if (!slug) return null;

  const vid = visitorId || getOrCreateVisitorId();
  const encodedSlug = encodeURIComponent(slug);
  const endpoints: string[] = [
    `http://localhost:3000/api/blogs/${encodedSlug}/view`,
    `http://127.0.0.1:3000/api/blogs/${encodedSlug}/view`,
    typeof window !== "undefined" ? `/api/blogs/${encodedSlug}/view` : "",
    TARGET_BLOG_API_URL ? `${TARGET_BLOG_API_URL.replace(/\/$/, "")}/${encodedSlug}/view` : "",
    `https://app.whatreply.tech/api/blogs/${encodedSlug}/view`,
  ].filter(Boolean);

  let latestViews: number | null = null;

  for (const ep of endpoints) {
    try {
      const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 2000) : null;

      const res = await fetch(ep, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-visitor-id": vid,
        },
        body: JSON.stringify({ visitorId: vid }),
        ...(controller ? { signal: controller.signal } : {}),
      });

      if (timeoutId) clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const views =
          data.views ??
          data.viewCount ??
          data.viewsCount ??
          data.data?.views ??
          data.data?.viewCount;
        if (typeof views === "number") {
          latestViews = views;
          break;
        }
      }
    } catch {
      // Gracefully try next endpoint
    }
  }

  return latestViews;
}

/**
 * Retrieve current real views count for a blog post from localhost:3000, internal API, or remote backend
 */
export async function fetchBlogViews(slugOrId: string): Promise<number | null> {
  if (!slugOrId) return null;
  const encodedSlug = encodeURIComponent(slugOrId);

  const urlsToTry: string[] = [
    `http://localhost:3000/api/blogs/${encodedSlug}/view`,
    `http://127.0.0.1:3000/api/blogs/${encodedSlug}/view`,
    `http://localhost:3000/api/blogs/${encodedSlug}`,
    typeof window !== "undefined" ? `/api/blogs/${encodedSlug}/view` : "",
    TARGET_BLOG_API_URL ? `${TARGET_BLOG_API_URL.replace(/\/$/, "")}/${encodedSlug}/view` : "",
    `https://app.whatreply.tech/api/blogs/${encodedSlug}/view`,
    `https://app.whatreply.tech/api/blogs/${encodedSlug}`,
  ].filter(Boolean);

  for (const u of urlsToTry) {
    try {
      const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 2000) : null;

      const res = await fetch(u, {
        cache: "no-store",
        ...(controller ? { signal: controller.signal } : {}),
      });

      if (timeoutId) clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        const item = json.data || json.blog || json.post || json;
        const views =
          json?.views ??
          item?.views ??
          item?.viewCount ??
          item?.viewsCount ??
          item?.data?.views;
        if (typeof views === "number") return views;
      }
    } catch {}
  }

  return null;
}





