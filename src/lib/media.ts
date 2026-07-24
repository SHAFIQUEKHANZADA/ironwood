import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

/**
 * Resolve an image that may or may not have been added yet.
 *
 * Pass a path under /public without an extension, e.g. "/products/10x10-pop-up-canopy".
 * Returns the first matching file's public path, or undefined if none exists.
 *
 * This lets the team drop a photo into /public/products/ and have it appear
 * with no code change — and keeps pages from pointing at files that aren't
 * there yet (which would 404 through the image optimizer).
 *
 * Server-side only: call it from Server Components, never from "use client".
 */
export function findImage(basePathWithoutExt: string): string | undefined {
  const rel = basePathWithoutExt.replace(/^\//, "");
  for (const ext of EXTENSIONS) {
    const abs = path.join(process.cwd(), "public", `${rel}${ext}`);
    if (fs.existsSync(abs)) return `/${rel}${ext}`;
  }
  return undefined;
}
