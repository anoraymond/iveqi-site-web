import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { CTA } from './CTA'
import { Service } from '@/lib/types'
import { CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  service: Service
  variant?: 'default' | 'featured'
  className?: string
}

export function ServiceCard({ service, variant = 'default', className = '' }: ServiceCardProps) {
  const isFeatured = variant === 'featured'
  
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${isFeatured ? 'border-brand-yellow border-2' : ''} ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isFeatured && (
          <div className="absolute top-4 left-4 bg-brand-yellow text-brand-ink px-3 py-1 rounded-full text-sm font-semibold">
            Service phare
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-brand-ink mb-2">
            {service.title}
          </h3>
          <p className="text-brand-red font-medium text-sm mb-3">
            {service.subtitle}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
        
        {/* Avantages */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-brand-ink mb-3">
            Nos avantages :
          </h4>
          <ul className="space-y-2">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{benefit}</span>
              </li>
            ))}
            {service.benefits.length > 3 && (
              <li className="text-sm text-brand-red font-medium">
                +{service.benefits.length - 3} autres avantages
              </li>
            )}
          </ul>
        </div>
        
        <CTA 
          variant="primary" 
          href={`/services/${service.slug}`}
          className="w-full"
        >
          Découvrir ce service
        </CTA>
      </CardContent>
    </Card>
  )
}

// Composant pour la grille de services
interface ServiceGridProps {
  services: Service[]
  title?: string
  description?: string
  showFeatured?: boolean
  className?: string
}

export function ServiceGrid({ 
  services, 
  title, 
  description, 
  showFeatured = false,
  className = '' 
}: ServiceGridProps) {
  const featuredServices = showFeatured ? services.filter(s => s.featured) : services
  
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant={service.featured ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
