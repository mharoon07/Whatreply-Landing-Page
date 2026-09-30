import fs from "fs";
import path from "path";
import crypto from "crypto";

// File path for persistent blog views & visitor fingerprints data
const DATA_DIR = path.join(process.cwd(), "data");
const VIEWS_FILE = path.join(DATA_DIR, "blog-views.json");

// 24 hours cooldown for unique visitor counting (in milliseconds)
export const VISITOR_COOLDOWN_MS = 24 * 60 * 60 * 1000;

interface ViewsStoreSchema {
  views: Record<string, number>;
  visitors: Record<string, number>; // key: `${slug}#${fingerprint}`, value: timestamp
}

let storeCache: ViewsStoreSchema | null = null;

function ensureDataFile(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(VIEWS_FILE)) {
      const initial: ViewsStoreSchema = { views: {}, visitors: {} };
      fs.writeFileSync(VIEWS_FILE, JSON.stringify(initial, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("[ViewsStore] Error ensuring data file:", err);
  }
}

function loadStore(): ViewsStoreSchema {
  if (storeCache !== null) {
    return storeCache;
  }
  ensureDataFile();
  try {
    if (fs.existsSync(VIEWS_FILE)) {
      const raw = fs.readFileSync(VIEWS_FILE, "utf-8");
      const parsed = JSON.parse(raw || "{}");

      if (parsed.views && typeof parsed.views === "object") {
        storeCache = {
          views: parsed.views || {},
          visitors: parsed.visitors || {},
        };
      } else {
        storeCache = {
          views: parsed || {},
          visitors: {},
        };
      }
    } else {
      storeCache = { views: {}, visitors: {} };
    }
  } catch (err) {
    console.error("[ViewsStore] Error reading views file:", err);
    storeCache = { views: {}, visitors: {} };
  }
  return storeCache;
}

function persistStore(data: ViewsStoreSchema): void {
  ensureDataFile();
  try {
    const now = Date.now();
    const pruneThreshold = 7 * 24 * 60 * 60 * 1000; // 7 days
    const cleanedVisitors: Record<string, number> = {};

    for (const [key, timestamp] of Object.entries(data.visitors || {})) {
      if (now - timestamp < pruneThreshold) {
        cleanedVisitors[key] = timestamp;
      }
    }

    const payload = {
      views: data.views,
      visitors: cleanedVisitors,
    };

    fs.writeFileSync(VIEWS_FILE, JSON.stringify(payload, null, 2), "utf-8");
    storeCache = payload;
  } catch (err) {
    console.error("[ViewsStore] Error persisting views file:", err);
  }
}

/**
 * Generate a SHA-256 fingerprint hash
 */
export function generateFingerprint(input: string): string {
  return crypto.createHash("sha256").update(input || "anon").digest("hex").slice(0, 32);
}

/**
 * Get views count for a specific blog slug or ID
 */
export function getViews(slug: string): number {
  if (!slug) return 0;
  const store = loadStore();
  const normalizedKey = slug.trim().toLowerCase();
  return store.views[normalizedKey] || store.views[slug.trim()] || 0;
}

/**
 * Get all view counts
 */
export function getAllViews(): Record<string, number> {
  const store = loadStore();
  return { ...store.views };
}

/**
 * Record a unique view using device & IP fingerprinting with 24h cooldown deduplication
 */
export function recordUniqueView(
  slug: string,
  fingerprints: string[],
  cooldownMs: number = VISITOR_COOLDOWN_MS
): { isNewView: boolean; views: number } {
  if (!slug) return { isNewView: false, views: 0 };

  const store = loadStore();
  const normalizedKey = slug.trim().toLowerCase();
  const currentViews = store.views[normalizedKey] || store.views[slug.trim()] || 0;
  const now = Date.now();

  const validFps = fingerprints.filter(Boolean);

  // Check if ANY of the fingerprints has viewed this blog within cooldown
  for (const fp of validFps) {
    const visitorKey = `${normalizedKey}#${fp}`;
    const lastSeen = store.visitors[visitorKey];
    if (lastSeen && now - lastSeen < cooldownMs) {
      return {
        isNewView: false,
        views: currentViews,
      };
    }
  }

  // Update timestamps for all fingerprints
  for (const fp of validFps) {
    store.visitors[`${normalizedKey}#${fp}`] = now;
  }

  // Increment unique view count
  const updatedViews = currentViews + 1;
  store.views[normalizedKey] = updatedViews;
  if (slug.trim() !== normalizedKey) {
    store.views[slug.trim()] = updatedViews;
  }

  persistStore(store);

  return {
    isNewView: true,
    views: updatedViews,
  };
}

/**
 * Set views count manually if external backend has a higher count
 */
export function setViews(slug: string, count: number): number {
  if (!slug) return 0;
  const store = loadStore();
  const normalizedKey = slug.trim().toLowerCase();
  store.views[normalizedKey] = Math.max(store.views[normalizedKey] || 0, count);
  if (slug.trim() !== normalizedKey) {
    store.views[slug.trim()] = store.views[normalizedKey];
  }
  persistStore(store);
  return store.views[normalizedKey];
}
