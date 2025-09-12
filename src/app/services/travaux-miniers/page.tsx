import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/lib/seo'
import { getServiceBySlug, getServices, getTestimonialsBySector, getEquipmentBySector } from '@/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    'Travaux Miniers',
    'Solutions minières complètes : extraction, transport et traitement des matériaux. Expertise en travaux miniers avec engins adaptés aux conditions difficiles.'
  )
}

export default async function TravauxMiniersPage() {
  const [service, allServices, testimonials, equipment] = await Promise.all([
    getServiceBySlug('travaux-miniers'),
    getServices(),
    getTestimonialsBySector('minier'),
    getEquipmentBySector('minier')
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
