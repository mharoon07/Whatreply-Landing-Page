import { NextResponse } from "next/server";
import { getAllViews } from "@/lib/views-store";

export async function GET() {
  const views = getAllViews();
  return NextResponse.json({
    success: true,
    views,
  });
}
