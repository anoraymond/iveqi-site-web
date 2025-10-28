import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ProjectGrid } from '@/components/ProjectCard'
import { CTASection } from '@/components/CTA'
import { generateContentMetadata } from '@/lib/seo'
import { getProjects } from '@/lib/content'
import { Building, Mountain, Tractor, Truck, Filter } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return generateContentMetadata(
    'Nos Réalisations',
    'Découvrez nos projets récents dans les secteurs agricole, minier, public et transport. Plus de 500 projets réalisés avec succès en Côte d\'Ivoire.',
    '/realisations',
    ['projets', 'réalisations', 'travaux', 'chantiers', 'succès']
  )
}

export default async function RealisationsPage() {
  const projects = await getProjects()

  // Grouper les projets par secteur
  const projectsBySector = {
    agricole: projects.filter(p => p.sector === 'agricole'),
    minier: projects.filter(p => p.sector === 'minier'),
    public: projects.filter(p => p.sector === 'public'),
    transport: projects.filter(p => p.sector === 'transport')
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
        return 'Travaux Agricoles'
      case 'minier':
        return 'Travaux Miniers'
      case 'public':
        return 'Travaux Publics'
      case 'transport':
        return 'Transport d\'Engins'
      default:
        return sector
    }
  }

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'agricole':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'minier':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'public':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'transport':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <>
      <main >
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-ink to-brand-deep text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nos Réalisations
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Plus de 500 projets réalisés avec succès
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise 
                et de notre engagement envers l'excellence dans tous nos secteurs d'activité.
              </p>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-brand-yellow mb-2">500+</div>
                  <div className="text-gray-600">Projets réalisés</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-yellow mb-2">24</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-yellow mb-2">4</div>
                  <div className="text-gray-600">Secteurs d'activité</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-yellow mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtres par secteur */}
        <section className="py-8 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(projectsBySector).map(([sector, sectorProjects]) => (
                  <div
                    key={sector}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 ${getSectorColor(sector)}`}
                  >
                    {getSectorIcon(sector)}
                    <span className="font-medium">{getSectorTitle(sector)}</span>
                    <span className="bg-white/50 px-2 py-1 rounded-full text-xs font-semibold">
                      {sectorProjects.length}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projets par secteur */}
        {Object.entries(projectsBySector).map(([sector, sectorProjects]) => (
          sectorProjects.length > 0 && (
            <section key={sector} className="py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-3 mb-4">
                      {getSectorIcon(sector)}
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
                        {getSectorTitle(sector)}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Découvrez nos réalisations dans le secteur {sector === 'agricole' ? 'agricole' : 
                      sector === 'minier' ? 'minier' : 
                      sector === 'public' ? 'des travaux publics' : 
                      'du transport d\'engins'}.
                    </p>
                  </div>
                  
                  <ProjectGrid
                    projects={sectorProjects}
                    showFeatured={false}
                    className="bg-transparent"
                  />
                </div>
              </div>
            </section>
          )
        ))}

        {/* Témoignages clients */}
        <section className="py-16 bg-brand-ink text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                La satisfaction de nos clients
              </h2>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Nos clients témoignent de la qualité de nos services et de notre professionnalisme
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">98%</div>
                  <div className="text-gray-300">Clients satisfaits</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">95%</div>
                  <div className="text-gray-300">Projets livrés dans les délais</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">100%</div>
                  <div className="text-gray-300">Respect des normes de sécurité</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Votre projet sera notre prochaine réussite"
          description="Rejoignez nos clients satisfaits et confiez-nous la réalisation de votre projet. Notre expertise et notre engagement sont à votre service."
          primaryCTA={{
            text: "Demander un devis",
            href: "/contact"
          }}
          secondaryCTA={{
            text: "Voir nos services",
            href: "/services"
          }}
          variant="default"
        />
      </main>
      <WhatsAppButton />
    </>
  )
}
