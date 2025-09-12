import { CTA } from './CTA'
import { siteConfig } from '@/lib/config'
import { Award, Phone, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge certification */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-8">
            <Award className="h-5 w-5 text-[#F9A825]" />
            <span className="text-sm font-semibold text-brand-ink">
              {siteConfig.certification.iso} - {siteConfig.certification.certifier}
            </span>
          </div>

          {/* Titre principal */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-[#F9A825]">IVEQI</span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-ink">
              Ivoire Équipements
            </h2>
          </div>

          {/* Sous-titre en jaune */}
          <p className="text-xl md:text-2xl mb-8 text-[#F9A825] max-w-3xl mx-auto leading-relaxed font-semibold">
            Faire de nos clients les témoignages de notre savoir-faire
          </p>

          {/* Description */}
          <p className="text-lg mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Entreprise certifiée <span className="text-[#F9A825] font-semibold">ISO 9001:2015</span>, nous réalisons vos projets de travaux agricoles, 
            miniers, publics, location et transport d'engins en Côte d'Ivoire.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CTA 
              variant="primary" 
              size="lg" 
              href="/contact"
              className="text-lg px-8 py-4"
            >
              Demander un devis
            </CTA>
            <CTA 
              variant="secondary" 
              size="lg" 
              href={`tel:${siteConfig.phone}`}
              icon="phone"
              className="text-lg px-8 py-4"
            >
              Nous appeler
            </CTA>
          </div>

          {/* Informations de contact rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <Phone className="h-6 w-6 text-[#F9A825]" />
              <div className="text-left">
                <p className="text-sm text-gray-600">Téléphone</p>
                <p className="font-semibold text-brand-ink">{siteConfig.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <MapPin className="h-6 w-6 text-[#F9A825]" />
              <div className="text-left">
                <p className="text-sm text-gray-600">Localisation</p>
                <p className="font-semibold text-brand-ink">Abidjan, Côte d'Ivoire</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <Award className="h-6 w-6 text-[#F9A825]" />
              <div className="text-left">
                <p className="text-sm text-gray-600">Certification</p>
                <p className="font-semibold text-brand-ink">ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
