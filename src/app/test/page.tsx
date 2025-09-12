import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Test Header & Footer - IVEQI',
  description: 'Page de test pour visualiser le Header et Footer IVEQI',
}

export default function TestPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-ink to-brand-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Test Header & Footer IVEQI
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Page de démonstration pour visualiser le design moderne du Header et Footer avec les couleurs de marque IVEQI.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚧</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-ink mb-2">
                Travaux Agricoles
              </h3>
              <p className="text-gray-600">
                Préparation des sols, labour, semis et plantation pour vos projets agricoles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⛏️</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-ink mb-2">
                Travaux Miniers
              </h3>
              <p className="text-gray-600">
                Extraction, transport et traitement des matériaux pour l'industrie minière.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-ink mb-2">
                Travaux Publics
              </h3>
              <p className="text-gray-600">
                Construction de routes, aménagement urbain et infrastructures publiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              Fonctionnalités du Header & Footer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les fonctionnalités modernes implémentées dans notre design système.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-black">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-ink mb-1">Navigation Responsive</h4>
                  <p className="text-gray-600">Menu adaptatif avec dropdown Services et drawer mobile</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-black">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-ink mb-1">Couleurs de Marque</h4>
                  <p className="text-gray-600">Palette IVEQI : jaune #F9A825, anthracite #212121, rouge #C62828</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-black">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-ink mb-1">Accessibilité</h4>
                  <p className="text-gray-600">Navigation clavier, ARIA, focus trap et contrastes optimisés</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-ink mb-1">Animations Fluides</h4>
                  <p className="text-gray-600">Soulignement animé, transitions et micro-interactions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-ink mb-1">Performance</h4>
                  <p className="text-gray-600">Composants optimisés avec Next.js 14 et Tailwind CSS</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-ink mb-1">SEO Ready</h4>
                  <p className="text-gray-600">Structure sémantique et métadonnées optimisées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-ink text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à utiliser ce design système ?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Header et Footer modernes, accessibles et optimisés pour votre site IVEQI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-yellow text-black rounded-md px-6 py-3 font-semibold hover:bg-[#E09A18] focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:ring-offset-2 transition-colors duration-200"
            >
              Demander un devis
            </a>
            <Link
              href="/"
              className="border border-white text-white rounded-md px-6 py-3 font-semibold hover:bg-white hover:text-brand-ink focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-ink transition-colors duration-200"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
