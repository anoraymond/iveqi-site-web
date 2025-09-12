import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Pages statiques principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/parc-materiel`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/temoignages`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/engagements`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Pages de services
  const servicePages = [
    'travaux-agricoles',
    'travaux-miniers', 
    'travaux-publics',
    'location-engins',
    'transport-engins'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Pages légales
  const legalPages = [
    'mentions-legales',
    'confidentialite'
  ].map(legal => ({
    url: `${baseUrl}/legal/${legal}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }))

  return [...staticPages, ...servicePages, ...legalPages]
}
