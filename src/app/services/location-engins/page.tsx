import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/lib/seo'
import { getServiceBySlug, getServices, getTestimonialsBySector, getEquipment } from '@/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    'Location d\'Engins',
    'Location d\'engins de chantier pour tous vos projets. Parc matériel moderne et bien entretenu disponible avec ou sans conducteur en Côte d\'Ivoire.'
  )
}

export default async function LocationEnginsPage() {
  const [service, allServices, testimonials, equipment] = await Promise.all([
    getServiceBySlug('location-engins'),
    getServices(),
    getTestimonialsBySector('location'),
    getEquipment()
  ])

  if (!service) {
    return <div>Service non trouvé</div>
  }

  const relatedServices = allServices.filter(s => s.id !== service.id).slice(0, 3)

  return (
    <ServicePageTemplate
      service={service}
      relatedServices={relatedServices}
      testimonials={testimonials}
      equipment={equipment}
    />
  )
}
