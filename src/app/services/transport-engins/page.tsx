import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/lib/seo'
import { getServiceBySlug, getServices, getTestimonialsBySector, getEquipmentBySector } from '@/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    'Transport d\'Engins',
    'Transport sécurisé d\'engins lourds sur tout le territoire ivoirien. Flotte de véhicules spécialisés garantissant la sécurité de vos équipements.'
  )
}

export default async function TransportEnginsPage() {
  const [service, allServices, testimonials, equipment] = await Promise.all([
    getServiceBySlug('transport-engins'),
    getServices(),
    getTestimonialsBySector('transport'),
    getEquipmentBySector('transport')
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
