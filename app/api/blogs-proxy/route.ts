import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl || !targetUrl.startsWith("http")) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid API URL starting with http:// or https://" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "User-Agent": "WhatreplyBlogProxy/1.0",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: `External API returned HTTP ${response.status}: ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("json")) {
      const rawText = await response.text();
      return NextResponse.json(
        {
          success: false,
          error: `The API URL returned HTML/text instead of JSON. Make sure your API endpoint returns JSON.`,
          previewText: rawText.slice(0, 200),
        },
        { status: 422 }
      );
    }

    const json = await response.json();

    // Flexible extraction of array from any standard response format
    let rawItems: any[] = [];

    if (Array.isArray(json)) {
      rawItems = json;
    } else if (json && typeof json === "object") {
      if (Array.isArray(json.data)) rawItems = json.data;
      else if (Array.isArray(json.posts)) rawItems = json.posts;
      else if (Array.isArray(json.blogs)) rawItems = json.blogs;
      else if (Array.isArray(json.articles)) rawItems = json.articles;
      else if (Array.isArray(json.items)) rawItems = json.items;
      else if (Array.isArray(json.results)) rawItems = json.results;
      else if (Array.isArray(json.payload)) rawItems = json.payload;
      else if (json.data && Array.isArray(json.data.blogs)) rawItems = json.data.blogs;
      else if (json.data && Array.isArray(json.data.posts)) rawItems = json.data.posts;
      else if (json.title || json.heading || json.name) rawItems = [json]; // single object
    }

    return NextResponse.json({
      success: true,
      data: rawItems,
      count: rawItems.length,
      raw: json,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: `Could not reach API server: ${err.message || "Network error"}. Check if your backend is running.`,
      },
      { status: 500 }
    );
  }
}
