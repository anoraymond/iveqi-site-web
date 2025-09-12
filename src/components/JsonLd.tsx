import { siteConfig } from '@/lib/config'

interface JsonLdProps {
  data: object
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Données structurées pour l'organisation
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "alternateName": "IVEQI",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/images/logo/logo-Iveqi.png`,
  "description": siteConfig.description,
  "foundingDate": "2000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.street,
    "postalCode": siteConfig.address.postalCode,
    "addressLocality": siteConfig.address.city,
    "addressCountry": siteConfig.address.country
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.phone,
    "contactType": "customer service",
    "email": siteConfig.email,
    "availableLanguage": ["French"]
  },
  "sameAs": [
    siteConfig.social.whatsapp
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": siteConfig.certification.iso,
    "credentialCategory": "ISO Certification",
    "recognizedBy": {
      "@type": "Organization",
      "name": siteConfig.certification.certifier
    }
  },
  "serviceArea": {
    "@type": "Country",
    "name": "Côte d'Ivoire"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Abidjan"
    },
    {
      "@type": "Country", 
      "name": "Côte d'Ivoire"
    }
  ]
}

// Données structurées pour l'entreprise locale
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}#business`,
  "name": siteConfig.name,
  "image": `${siteConfig.url}/images/logo/logo-Iveqi.png`,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "telephone": siteConfig.phone,
  "email": siteConfig.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.street,
    "postalCode": siteConfig.address.postalCode,
    "addressLocality": siteConfig.address.city,
    "addressCountry": siteConfig.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "5.3600",
    "longitude": "-4.0083"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "XOF",
  "hasMap": "https://maps.google.com/?q=PK+23+autoroute+nord+Abidjan",
  "serviceArea": {
    "@type": "Country",
    "name": "Côte d'Ivoire"
  }
}

// Données structurées pour les services
export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Services IVEQI",
  "description": "Travaux agricoles, miniers, publics, location et transport d'engins",
  "provider": {
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url
  },
  "areaServed": {
    "@type": "Country",
    "name": "Côte d'Ivoire"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services IVEQI",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Travaux Agricoles",
          "description": "Services de travaux agricoles avec engins spécialisés"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Travaux Miniers",
          "description": "Services de travaux miniers et d'extraction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Travaux Publics",
          "description": "Services de travaux publics et d'infrastructure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Location d'Engins",
          "description": "Location d'engins de chantier et de construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transport d'Engins", 
          "description": "Transport sécurisé d'engins lourds"
        }
      }
    ]
  }
}
