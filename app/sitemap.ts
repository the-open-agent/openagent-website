import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteUrl } from '@/lib/shared';
import { redirects } from '@/lib/redirects.mjs';

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const redirected = new Set(redirects.map((redirect) => redirect.source));
  const pages = source.getPages().filter((page) => !redirected.has(page.url));

  return [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    ...pages.map((page) => ({
      url: `${siteUrl}${page.url}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
