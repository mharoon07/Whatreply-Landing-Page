import { NextResponse } from "next/server";
import {
  recordUniqueView,
  getViews,
  setViews,
  generateFingerprint,
} from "@/lib/views-store";
import { TARGET_BLOG_API_URL } from "@/lib/blog-data";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

/**
 * Extract client IP from headers
 */
function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  const cfIp = headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  return "127.0.0.1";
}

/**
 * Forward view event to external backend
 */
async function forwardToBackend(
  slug: string,
  incomingHeaders: Headers,
  visitorId?: string
): Promise<{ views?: number } | null> {
  const host = incomingHeaders.get("host") || "";
  const targetEndpoints: string[] = [];

  // If this request didn't originate internally from port 3000, forward to localhost:3000 backend
  if (!host.includes(":3000") && host !== "localhost:3000") {
    targetEndpoints.push(`http://localhost:3000/api/blogs/${encodeURIComponent(slug)}/view`);
    targetEndpoints.push(`http://127.0.0.1:3000/api/blogs/${encodeURIComponent(slug)}/view`);
  }

  if (
    TARGET_BLOG_API_URL &&
    !TARGET_BLOG_API_URL.includes(host)
  ) {
    targetEndpoints.push(`${TARGET_BLOG_API_URL.replace(/\/$/, "")}/${encodeURIComponent(slug)}/view`);
  }

  if (!targetEndpoints.includes(`https://app.whatreply.tech/api/blogs/${encodeURIComponent(slug)}/view`)) {
    targetEndpoints.push(`https://app.whatreply.tech/api/blogs/${encodeURIComponent(slug)}/view`);
  }

  const clientIp = getClientIp(incomingHeaders);
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "User-Agent": incomingHeaders.get("user-agent") || "WhatreplyBlogViewCounter/1.0",
    "x-forwarded-for": clientIp,
    "x-real-ip": clientIp,
  };

  if (visitorId) {
    headers["x-visitor-id"] = visitorId;
  }

  for (const endpoint of targetEndpoints) {
    try {
      const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 2500) : null;

      const res = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({ visitorId, ip: clientIp }),
        cache: "no-store",
        ...(controller ? { signal: controller.signal } : {}),
      });

      if (timeoutId) clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        const views =
          json.views ??
          json.viewCount ??
          json.viewsCount ??
          json.data?.views ??
          json.data?.viewCount;

        if (typeof views === "number") {
          return { views };
        }
      }
    } catch {
      // Silently ignore remote sync failures
    }
  }
  return null;
}

/**
 * POST /api/blogs/[slug]/view
 * Records a unique view with device & IP fingerprinting
 */
export async function POST(request: Request, context: RouteContext) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json(
      { success: false, error: "Blog slug or ID is required" },
      { status: 400 }
    );
  }

  const decodedSlug = decodeURIComponent(slug);

  // Parse body safely for client visitorId
  let clientVisitorId = request.headers.get("x-visitor-id") || "";
  try {
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("json")) {
      const body = await request.json();
      if (body?.visitorId) clientVisitorId = body.visitorId;
    }
  } catch {}

  // Generate multi-layer fingerprints
  const clientIp = getClientIp(request.headers);
  const userAgent = request.headers.get("user-agent") || "unknown";
  const acceptLanguage = request.headers.get("accept-language") || "";

  const fpList: string[] = [];
  if (clientVisitorId) {
    fpList.push(generateFingerprint(`visitor:${clientVisitorId}`));
  }
  fpList.push(generateFingerprint(`ip_ua:${clientIp}:${userAgent}`));
  fpList.push(generateFingerprint(`ip_ua_lang:${clientIp}:${userAgent}:${acceptLanguage}`));

  // 1. Check deduplication & local increment
  const { isNewView, views: localViews } = recordUniqueView(decodedSlug, fpList);

  let finalViews = localViews;

  // 2. Forward to backend (e.g. localhost:3000 or production backend)
  try {
    const remoteResult = await forwardToBackend(decodedSlug, request.headers, clientVisitorId);
    if (remoteResult && typeof remoteResult.views === "number") {
      finalViews = setViews(decodedSlug, remoteResult.views);
    }
  } catch {
    // Remote sync is non-blocking and best-effort
  }

  return NextResponse.json({
    success: true,
    slug: decodedSlug,
    views: finalViews,
    isNewView,
    message: isNewView ? "New view counted successfully" : "Visitor view already recorded",
  });
}

/**
 * GET /api/blogs/[slug]/view
 * Pure read-only retrieval of current views count
 */
export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json(
      { success: false, error: "Blog slug or ID is required" },
      { status: 400 }
    );
  }

  const decodedSlug = decodeURIComponent(slug);
  let views = getViews(decodedSlug);

  return NextResponse.json({
    success: true,
    slug: decodedSlug,
    views,
    isNewView: false,
  });
}

/**
 * OPTIONS /api/blogs/[slug]/view
 * CORS Pre-flight support
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-visitor-id",
    },
  });
}
