import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { CTASection } from '@/components/CTA'
import { generateContentMetadata } from '@/lib/seo'
import { getCommitments, getCommitmentsByCategory } from '@/lib/content'
import { Award, Shield, Leaf, Lightbulb, GraduationCap, Heart, CheckCircle, Users, Target, Globe } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return generateContentMetadata(
    'Nos Engagements',
    'Découvrez nos engagements en matière de qualité, sécurité, environnement et innovation. IVEQI s\'engage pour l\'excellence et le développement durable.',
    '/engagements',
    ['engagements', 'qualité', 'sécurité', 'environnement', 'innovation', 'ISO 9001']
  )
}

export default async function EngagementsPage() {
  const [allCommitments, qualityCommitments, securityCommitments, environmentCommitments, innovationCommitments] = await Promise.all([
    getCommitments(),
    getCommitmentsByCategory('qualite'),
    getCommitmentsByCategory('securite'),
    getCommitmentsByCategory('environnement'),
    getCommitmentsByCategory('innovation')
  ])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'qualite':
        return <Award className="h-8 w-8" />
      case 'securite':
        return <Shield className="h-8 w-8" />
      case 'environnement':
        return <Leaf className="h-8 w-8" />
      case 'innovation':
        return <Lightbulb className="h-8 w-8" />
      default:
        return <Award className="h-8 w-8" />
    }
  }

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'qualite':
        return 'Engagement Qualité'
      case 'securite':
        return 'Engagement Sécurité'
      case 'environnement':
        return 'Engagement Environnement'
      case 'innovation':
        return 'Engagement Innovation'
      default:
        return category
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'qualite':
        return 'text-brand-yellow'
      case 'securite':
        return 'text-brand-red'
      case 'environnement':
        return 'text-green-600'
      case 'innovation':
        return 'text-blue-600'
      default:
        return 'text-brand-ink'
    }
  }

  const getCategoryBgColor = (category: string) => {
    switch (category) {
      case 'qualite':
        return 'bg-brand-yellow/10'
      case 'securite':
        return 'bg-brand-red/10'
      case 'environnement':
        return 'bg-green-50'
      case 'innovation':
        return 'bg-blue-50'
      default:
        return 'bg-neutral-light'
    }
  }

  return (
    <>
      <main >
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-ink to-brand-deep text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-ink px-4 py-2 rounded-full mb-6">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Nos Engagements</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nos Valeurs et Engagements
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                L'excellence au service de vos projets
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                Chez IVEQI, nous nous engageons au quotidien pour la qualité, la sécurité, 
                l'environnement et l'innovation. Découvrez nos valeurs qui guident chacune de nos actions.
              </p>
            </div>
          </div>
        </section>

        {/* Certification ISO */}
        <section className="py-16 bg-brand-yellow">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-brand-ink text-white px-4 py-2 rounded-full mb-6">
                    <Award className="h-5 w-5" />
                    <span className="font-semibold">Certification ISO 9001:2015</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
                    Qualité certifiée Bureau Veritas
                  </h2>
                  
                  <p className="text-lg text-brand-ink mb-6 leading-relaxed">
                    Notre certification ISO 9001:2015 par Bureau Veritas atteste de notre engagement 
                    envers la qualité et l'amélioration continue de nos processus.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-ink mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Système de management de la qualité
                        </h3>
                        <p className="text-brand-ink/80">
                          Processus optimisés et contrôlés en permanence
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-ink mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Amélioration continue
                        </h3>
                        <p className="text-brand-ink/80">
                          Évolution constante de nos méthodes et performances
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-ink mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Satisfaction client garantie
                        </h3>
                        <p className="text-brand-ink/80">
                          Engagement envers l'excellence du service client
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-8 shadow-xl">
                  <div className="text-center">
                    <Award className="h-24 w-24 text-brand-yellow mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-brand-ink mb-4">
                      ISO 9001:2015
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Certification qualité par Bureau Veritas
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Certification :</span>
                        <span className="font-semibold text-brand-ink">Active</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Organisme :</span>
                        <span className="font-semibold text-brand-ink">Bureau Veritas</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Renouvellement :</span>
                        <span className="font-semibold text-brand-ink">Annuel</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Domaine :</span>
                        <span className="font-semibold text-brand-ink">Tous services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagements par catégorie */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                  Nos 4 piliers d'engagement
                </h2>
                <p className="text-lg text-gray-600">
                  Des valeurs qui guident chacune de nos actions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allCommitments.map((commitment) => (
                  <div
                    key={commitment.id}
                    className={`p-8 rounded-lg ${getCategoryBgColor(commitment.category)} hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${getCategoryColor(commitment.category)} flex-shrink-0`}>
                        {getCategoryIcon(commitment.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-ink mb-3">
                          {commitment.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {commitment.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistiques d'engagement */}
        <section className="py-16 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                  Nos résultats en chiffres
                </h2>
                <p className="text-lg text-gray-600">
                  Des performances qui témoignent de notre engagement
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <Users className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <div className="text-3xl font-bold text-brand-ink mb-2">0</div>
                  <div className="text-gray-600">Accident de travail</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <Target className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <div className="text-3xl font-bold text-brand-ink mb-2">98%</div>
                  <div className="text-gray-600">Satisfaction client</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <Globe className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <div className="text-3xl font-bold text-brand-ink mb-2">100%</div>
                  <div className="text-gray-600">Respect environnement</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <Award className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <div className="text-3xl font-bold text-brand-ink mb-2">24</div>
                  <div className="text-gray-600">Années d'excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formation et développement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-ink px-4 py-2 rounded-full mb-6">
                    <GraduationCap className="h-5 w-5" />
                    <span className="font-semibold">Formation Continue</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
                    Investir dans nos équipes
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Nous croyons que la formation continue de nos équipes est la clé de notre succès. 
                    Chaque collaborateur bénéficie d'un plan de formation personnalisé.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-yellow mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Formation technique spécialisée
                        </h3>
                        <p className="text-gray-600">
                          Maîtrise des dernières technologies et techniques
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-yellow mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Certifications sécurité
                        </h3>
                        <p className="text-gray-600">
                          Formation HSE et prévention des risques
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-yellow mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-brand-ink mb-1">
                          Développement personnel
                        </h3>
                        <p className="text-gray-600">
                          Accompagnement et évolution de carrière
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-neutral-light rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-brand-ink mb-6">
                    Nos investissements formation
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Formation technique</span>
                        <span className="font-semibold text-brand-ink">40h/an</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-yellow h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Sécurité HSE</span>
                        <span className="font-semibold text-brand-ink">24h/an</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-red h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Développement personnel</span>
                        <span className="font-semibold text-brand-ink">16h/an</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Rejoignez une entreprise engagée"
          description="Découvrez comment nos engagements se traduisent concrètement dans la réalisation de vos projets. Contactez-nous pour en savoir plus."
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
      <Footer />
      <WhatsAppButton />
    </>
  )
}
