import { Card, CardContent } from '@/components/ui/card'
import { Testimonial } from '@/lib/types'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: Testimonial
  variant?: 'default' | 'featured'
  className?: string
}

export function TestimonialCard({ testimonial, variant = 'default', className = '' }: TestimonialCardProps) {
  const isFeatured = variant === 'featured'
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-brand-yellow fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }
  
  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'agricole':
        return 'bg-green-100 text-green-800'
      case 'minier':
        return 'bg-yellow-100 text-yellow-800'
      case 'public':
        return 'bg-blue-100 text-blue-800'
      case 'transport':
        return 'bg-purple-100 text-purple-800'
      case 'location':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  const getSectorLabel = (sector: string) => {
    switch (sector) {
      case 'agricole':
        return 'Agricole'
      case 'minier':
        return 'Minier'
      case 'public':
        return 'Public'
      case 'transport':
        return 'Transport'
      case 'location':
        return 'Location'
      default:
        return sector
    }
  }
  
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 ${isFeatured ? 'border-brand-yellow border-2' : ''} ${className}`}>
      <CardContent className="p-6">
        {/* Citation */}
        <div className="mb-6">
          <Quote className="h-8 w-8 text-brand-yellow mb-4" />
          <blockquote className="text-gray-700 leading-relaxed italic">
            "{testimonial.content}"
          </blockquote>
        </div>
        
        {/* Note */}
        <div className="flex items-center space-x-1 mb-4">
          {renderStars(testimonial.rating)}
          <span className="text-sm text-gray-500 ml-2">
            {testimonial.rating}/5
          </span>
        </div>
        
        {/* Informations auteur */}
        <div className="flex items-start space-x-4">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
              <span className="text-brand-ink font-semibold text-lg">
                {testimonial.author.charAt(0)}
              </span>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-brand-ink">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-brand-red font-medium">
                  {testimonial.position}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.company}
                </p>
              </div>
              
              <div className="mt-2 sm:mt-0">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSectorColor(testimonial.sector)}`}>
                  {getSectorLabel(testimonial.sector)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Composant pour la grille de témoignages
interface TestimonialGridProps {
  testimonials: Testimonial[]
  title?: string
  description?: string
  showFeatured?: boolean
  limit?: number
  className?: string
}

export function TestimonialGrid({ 
  testimonials, 
  title, 
  description, 
  showFeatured = false,
  limit,
  className = '' 
}: TestimonialGridProps) {
  let displayTestimonials = showFeatured ? testimonials.filter(t => t.featured) : testimonials
  
  if (limit) {
    displayTestimonials = displayTestimonials.slice(0, limit)
  }
  
  return (
    <section className={`py-16 bg-neutral-light ${className}`}>
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
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              variant={testimonial.featured ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Composant slider pour les témoignages (optionnel)
interface TestimonialSliderProps {
  testimonials: Testimonial[]
  title?: string
  description?: string
  className?: string
}

export function TestimonialSlider({ 
  testimonials, 
  title, 
  description, 
  className = '' 
}: TestimonialSliderProps) {
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
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant={testimonial.featured ? 'featured' : 'default'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
