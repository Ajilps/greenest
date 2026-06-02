import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.greennest.com';
  const now = new Date();

  const staticRoutes = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/kanthalloor`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/investment`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/waitlist`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  const blogSlugs = [
    'best-places-kanthalloor',
    'kanthalloor-vs-munnar',
    'fruit-farms-kanthalloor',
    'weekend-getaway-kochi',
    'why-eco-tourism-matters',
    'best-time-visit-kanthalloor',
    'nature-retreats-kerala',
    'hidden-gems-kerala-highlands',
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }));

  return [
    ...staticRoutes.map((r) => ({ ...r, lastModified: now })),
    ...blogRoutes,
  ];
}
