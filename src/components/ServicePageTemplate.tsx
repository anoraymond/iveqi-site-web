import Image from 'next/image'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { CTA } from './CTA'
import { ServiceCard } from './ServiceCard'
import { TestimonialCard } from './TestimonialCard'
import { Service, Testimonial } from '@/lib/types'
import { CheckCircle, ArrowRight, Award } from 'lucide-react'

interface ServicePageTemplateProps {
  service: Service
  relatedServices: Service[]
  testimonials: Testimonial[]
  equipment?: any[]
}

export function ServicePageTemplate({ 
  service, 
  relatedServices, 
  testimonials,
  equipment = []
}: ServicePageTemplateProps) {
  return (
    <>
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-ink to-brand-deep text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-ink px-4 py-2 rounded-full mb-6">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Service Expert</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {service.subtitle}
              </p>
              
              <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTA variant="primary" size="lg" href="/contact">
                  Demander un devis {service.title}
                </CTA>
                <CTA variant="secondary" size="lg" href="/parc-materiel">
                  Voir notre parc matériel
                </CTA>
              </div>
            </div>
          </div>
        </section>

        {/* Problématique et Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
                    Votre problématique, nos solutions
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Nous comprenons les défis spécifiques de votre secteur et mettons 
                    notre expertise à votre service pour des résultats optimaux.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-yellow mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Expertise reconnue
                        </h3>
                        <p className="text-gray-600">
                          Plus de 24 ans d'expérience dans le secteur
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-yellow mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Parc matériel moderne
                        </h3>
                        <p className="text-gray-600">
                          Engins récents et bien entretenus
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-yellow mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Certification ISO 9001:2015
                        </h3>
                        <p className="text-gray-600">
                          Qualité garantie par Bureau Veritas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Avantages */}
        <section className="py-16 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                  Nos avantages pour {service.title}
                </h2>
                <p className="text-lg text-gray-600">
                  Découvrez pourquoi nos clients nous font confiance
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-yellow mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Parc Matériel Associé */}
        {equipment.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                    Parc matériel pour {service.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    Nos engins spécialisés pour vos projets
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {equipment.slice(0, 6).map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-brand-ink mb-2">
                          {item.name}
                        </h3>
                        <p className="text-brand-red font-medium mb-3">
                          {item.brand} {item.model}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>
                        <CTA variant="primary" size="sm" href={`/parc-materiel#${item.id}`}>
                          Voir les détails
                        </CTA>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <CTA variant="secondary" href="/parc-materiel">
                    Voir tout notre parc matériel
                  </CTA>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Témoignage Sectoriel */}
        {testimonials.length > 0 && (
          <section className="py-16 bg-brand-ink text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Témoignage client - {service.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.slice(0, 2).map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      className="bg-white/10 backdrop-blur-sm border-white/20"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services Connexes */}
        <section className="py-16 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                  Découvrez nos autres services
                </h2>
                <p className="text-lg text-gray-600">
                  Des solutions complètes pour tous vos besoins
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedServices.map((relatedService) => (
                  <ServiceCard
                    key={relatedService.id}
                    service={relatedService}
                    variant="default"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-brand-yellow">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-lg text-brand-ink mb-8">
                Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTA 
                  variant="secondary" 
                  size="lg" 
                  href="/contact"
                  className="bg-brand-ink text-white hover:bg-brand-ink/90"
                >
                  Demander un devis {service.title}
                </CTA>
                <CTA 
                  variant="primary" 
                  size="lg" 
                  href={`tel:+2250789020000`}
                  icon="phone"
                  className="bg-white text-brand-ink hover:bg-gray-100"
                >
                  Nous appeler
                </CTA>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
