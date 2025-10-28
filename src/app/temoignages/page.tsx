import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { TestimonialGrid } from '@/components/TestimonialCard'
import { CTASection } from '@/components/CTA'
import { generateContentMetadata } from '@/lib/seo'
import { getTestimonials, getTestimonialsBySector } from '@/lib/content'
import { Star, Quote, Building, Tractor, Mountain, Truck, Award } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return generateContentMetadata(
    'Témoignages Clients',
    'Découvrez les témoignages de nos clients satisfaits dans tous nos secteurs d\'activité. Plus de 500 projets réalisés avec succès en Côte d\'Ivoire.',
    '/temoignages',
    ['témoignages', 'clients', 'satisfaction', 'avis', 'références']
  )
}

export default async function TemoignagesPage() {
  const [allTestimonials, agricoleTestimonials, minierTestimonials, publicTestimonials, transportTestimonials] = await Promise.all([
    getTestimonials(),
    getTestimonialsBySector('agricole'),
    getTestimonialsBySector('minier'),
    getTestimonialsBySector('public'),
    getTestimonialsBySector('transport')
  ])

  const testimonialsBySector = {
    agricole: agricoleTestimonials,
    minier: minierTestimonials,
    public: publicTestimonials,
    transport: transportTestimonials
  }

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'agricole':
        return <Tractor className="h-6 w-6" />
      case 'minier':
        return <Mountain className="h-6 w-6" />
      case 'public':
        return <Building className="h-6 w-6" />
      case 'transport':
        return <Truck className="h-6 w-6" />
      default:
        return <Building className="h-6 w-6" />
    }
  }

  const getSectorTitle = (sector: string) => {
    switch (sector) {
      case 'agricole':
        return 'Témoignages - Secteur Agricole'
      case 'minier':
        return 'Témoignages - Secteur Minier'
      case 'public':
        return 'Témoignages - Travaux Publics'
      case 'transport':
        return 'Témoignages - Transport d\'Engins'
      default:
        return `Témoignages - ${sector}`
    }
  }

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'agricole':
        return 'text-green-600'
      case 'minier':
        return 'text-yellow-600'
      case 'public':
        return 'text-blue-600'
      case 'transport':
        return 'text-purple-600'
      default:
        return 'text-gray-600'
    }
  }

  // Calculer la note moyenne
  const averageRating = allTestimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / allTestimonials.length

  return (
    <>
      <main >
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-ink to-brand-deep text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-ink px-4 py-2 rounded-full mb-6">
                <Quote className="h-5 w-5" />
                <span className="font-semibold">Témoignages Clients</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ce que disent nos clients
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                La satisfaction de nos clients est notre plus belle récompense
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                Découvrez les témoignages authentiques de nos clients qui nous font confiance 
                pour leurs projets dans tous nos secteurs d'activité.
              </p>
            </div>
          </div>
        </section>

        {/* Statistiques de satisfaction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                  Notre satisfaction client en chiffres
                </h2>
                <p className="text-lg text-gray-600">
                  Des résultats qui parlent d'eux-mêmes
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-8 w-8 ${
                          i < Math.floor(averageRating) ? 'text-brand-yellow fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-brand-ink mb-2">
                    {averageRating.toFixed(1)}/5
                  </div>
                  <div className="text-gray-600">Note moyenne</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">98%</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">500+</div>
                  <div className="text-gray-600">Projets réalisés</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">24</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages par secteur */}
        {Object.entries(testimonialsBySector).map(([sector, sectorTestimonials]) => (
          sectorTestimonials.length > 0 && (
            <section key={sector} className={`py-16 ${sector === 'agricole' ? 'bg-neutral-light' : 'bg-white'}`}>
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-3 mb-4">
                      <div className={getSectorColor(sector)}>
                        {getSectorIcon(sector)}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
                        {getSectorTitle(sector)}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Découvrez ce que pensent nos clients du secteur {sector === 'agricole' ? 'agricole' : 
                      sector === 'minier' ? 'minier' : 
                      sector === 'public' ? 'des travaux publics' : 
                      'du transport d\'engins'}.
                    </p>
                  </div>
                  
                  <TestimonialGrid
                    testimonials={sectorTestimonials}
                    showFeatured={false}
                    className="bg-transparent"
                  />
                </div>
              </div>
            </section>
          )
        ))}

        {/* Témoignages vedettes */}
        <section className="py-16 bg-brand-ink text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-ink px-4 py-2 rounded-full mb-6">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Témoignages Vedettes</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nos clients les plus satisfaits
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Des témoignages exceptionnels qui reflètent notre engagement envers l'excellence
                </p>
              </div>
              
              <TestimonialGrid
                testimonials={allTestimonials.filter(t => t.featured)}
                showFeatured={true}
                className="bg-transparent"
              />
            </div>
          </div>
        </section>

        {/* Certification et reconnaissance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                  Reconnaissance et certifications
                </h2>
                <p className="text-lg text-gray-600">
                  Notre expertise reconnue par les plus grandes institutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-neutral-light rounded-lg">
                  <Award className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-ink mb-2">
                    ISO 9001:2015
                  </h3>
                  <p className="text-gray-600">
                    Certification qualité par Bureau Veritas
                  </p>
                </div>
                
                <div className="text-center p-6 bg-neutral-light rounded-lg">
                  <Building className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-ink mb-2">
                    Partenaire Ministères
                  </h3>
                  <p className="text-gray-600">
                    Partenaire privilégié des institutions publiques
                  </p>
                </div>
                
                <div className="text-center p-6 bg-neutral-light rounded-lg">
                  <Star className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-ink mb-2">
                    Excellence Client
                  </h3>
                  <p className="text-gray-600">
                    98% de satisfaction client depuis 24 ans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Rejoignez nos clients satisfaits"
          description="Découvrez pourquoi nos clients nous font confiance pour leurs projets les plus importants. Contactez-nous dès aujourd'hui."
          primaryCTA={{
            text: "Demander un devis",
            href: "/contact"
          }}
          secondaryCTA={{
            text: "Voir nos réalisations",
            href: "/realisations"
          }}
          variant="inverted"
        />
      </main>
      <WhatsAppButton />
    </>
  )
}
