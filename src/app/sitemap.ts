// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site.config'
import { regions } from '@/config/regions.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = [
    '',
    '/about',
    '/services',
    '/calculators',
    '/resources',
    '/apply',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add regional pages
  const regionalPages = regions.map((region) => ({
    url: `${baseUrl}/${region.code}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...regionalPages]
}