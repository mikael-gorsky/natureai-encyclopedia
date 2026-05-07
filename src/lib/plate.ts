/**
 * Astro derives `entry.slug` from the file path, including the language folder prefix
 * (e.g., `en/cognitive-offloading`). All routes and cross-links should use just the
 * basename — this helper strips the prefix in one place.
 */
export function articleSlug(entrySlug: string): string {
  const parts = entrySlug.split('/');
  return parts[parts.length - 1] ?? entrySlug;
}
