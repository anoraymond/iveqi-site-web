import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/lib/seo'
import { getServiceBySlug, getServices, getTestimonialsBySector, getEquipmentBySector } from '@/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    'Travaux Agricoles',
    'Expertise en travaux agricoles avec notre parc d\'engins spécialisés. Préparation des sols, semis, entretien des cultures, récolte et transport en Côte d\'Ivoire.'
  )
}

export default async function TravauxAgricolesPage() {
  const [service, allServices, testimonials, equipment] = await Promise.all([
    getServiceBySlug('travaux-agricoles'),
    getServices(),
    getTestimonialsBySector('agricole'),
    getEquipmentBySector('agricole')
  ])

  if (!service) {
    return <div>Service non trouvé</div>
  }

  // Services connexes (exclure le service actuel)
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
