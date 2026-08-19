import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://greenestco.in";
  const now = new Date();

  const staticRoutes = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    {
      url: `${base}/about`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${base}/kanthalloor`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${base}/waitlist`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${base}/contact`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ];

  return staticRoutes.map((route) => ({ ...route, lastModified: now }));
}
