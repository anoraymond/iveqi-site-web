import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/lib/seo'
import { getServiceBySlug, getServices, getTestimonialsBySector, getEquipmentBySector } from '@/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    'Travaux Publics',
    'Participation aux grands projets d\'infrastructure en Côte d\'Ivoire. Routes, ponts, bâtiments publics avec notre savoir-faire et nos engins spécialisés.'
  )
}

export default async function TravauxPublicsPage() {
  const [service, allServices, testimonials, equipment] = await Promise.all([
    getServiceBySlug('travaux-publics'),
    getServices(),
    getTestimonialsBySector('public'),
    getEquipmentBySector('public')
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
