import { Metadata } from 'next'
import { siteConfig } from './config'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime
}: SEOProps): Metadata {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} – Travaux, Location & Transport d'engins`
  
  const fullDescription = description || siteConfig.description
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const fullImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}/og-default.jpg`

  const baseKeywords = [
    'IVEQI',
    'Ivoire Équipements',
    'travaux agricoles',
    'travaux miniers',
    'travaux publics',
    'location engins',
    'transport engins',
    'Côte d\'Ivoire',
    'Abidjan',
    'ISO 9001:2015',
    'Bureau Veritas'
  ]

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [...baseKeywords, ...keywords].join(', '),
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'fr_CI',
      type,
      publishedTime,
      modifiedTime,
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },
    
    // Autres métadonnées
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Géolocalisation
    other: {
      'geo.region': 'CI',
      'geo.country': 'Côte d\'Ivoire',
      'geo.placename': 'Abidjan',
    },
  }
}

// Métadonnées par défaut pour les pages
export const defaultMetadata: Metadata = generateMetadata({
  title: 'Accueil',
  description: siteConfig.description,
})

// Métadonnées pour les pages de services
export function generateServiceMetadata(serviceName: string, serviceDescription: string): Metadata {
  return generateMetadata({
    title: serviceName,
    description: serviceDescription,
    keywords: [serviceName.toLowerCase(), 'service', 'expertise'],
    url: `/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
  })
}

// Métadonnées pour les pages de contenu
export function generateContentMetadata(
  title: string, 
  description: string, 
  url: string,
  keywords: string[] = []
): Metadata {
  return generateMetadata({
    title,
    description,
    keywords,
    url,
  })
}
