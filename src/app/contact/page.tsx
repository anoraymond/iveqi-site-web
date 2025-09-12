import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ContactForm } from '@/components/ContactForm'
import { generateContentMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return generateContentMetadata(
    'Contact - Demander un Devis',
    'Contactez IVEQI pour vos projets de travaux agricoles, miniers, publics, location et transport d\'engins. Devis gratuit et réponse rapide garantie.',
    '/contact',
    ['contact', 'devis', 'travaux', 'engins', 'Abidjan', 'Côte d\'Ivoire']
  )
}

export default async function ContactPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-ink to-brand-deep text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Votre projet mérite notre expertise
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                Demandez votre devis personnalisé et gratuit. Notre équipe d'experts est à votre 
                disposition pour vous accompagner dans la réalisation de vos projets.
              </p>
            </div>
          </div>
        </section>

        {/* Informations de contact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="text-center p-6 bg-neutral-light rounded-lg">
                  <Phone className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-ink mb-2">
                    Téléphone
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Appelez-nous directement
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-brand-red font-semibold hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="text-center p-6 bg-neutral-light rounded-lg">
                  <Mail className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-ink mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Écrivez-nous un message
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-brand-red font-semibold hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="text-center p-6 bg-neutral-light rounded-lg">
                  <MapPin className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-ink mb-2">
                    Adresse
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Venez nous rendre visite
                  </p>
                  <div className="text-brand-red font-semibold text-sm">
                    <div>{siteConfig.address.street}</div>
                    <div>{siteConfig.address.postalCode}</div>
                    <div>{siteConfig.address.city}</div>
                  </div>
                </div>

                <div className="text-center p-6 bg-neutral-light rounded-lg">
                  <Clock className="h-12 w-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-ink mb-2">
                    Horaires
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Nos heures d'ouverture
                  </p>
                  <div className="text-brand-red font-semibold text-sm">
                    <div>Lun - Ven : 8h - 17h</div>
                    <div>Sam : 8h - 12h</div>
                    <div>Dim : Fermé</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de contact */}
        <section className="py-16 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                  Demandez votre devis gratuit
                </h2>
                <p className="text-lg text-gray-600">
                  Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Formulaire */}
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>

                {/* Informations complémentaires */}
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <MessageCircle className="h-8 w-8 text-green-500" />
                      <h3 className="text-lg font-semibold text-brand-ink">
                        Contact WhatsApp
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Pour une réponse encore plus rapide, contactez-nous directement sur WhatsApp.
                    </p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Ouvrir WhatsApp</span>
                    </a>
                  </div>

                  {/* Temps de réponse */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-brand-ink mb-4">
                      Temps de réponse
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Email :</span>
                        <span className="font-semibold text-brand-ink">24h max</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Téléphone :</span>
                        <span className="font-semibold text-brand-ink">Immédiat</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">WhatsApp :</span>
                        <span className="font-semibold text-brand-ink">2h max</span>
                      </div>
                    </div>
                  </div>

                  {/* Pourquoi nous choisir */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-brand-ink mb-4">
                      Pourquoi nous choisir ?
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <span className="text-brand-yellow mt-1">•</span>
                        <span>Devis gratuit et personnalisé</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-brand-yellow mt-1">•</span>
                        <span>Réponse rapide garantie</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-brand-yellow mt-1">•</span>
                        <span>Expertise certifiée ISO 9001:2015</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-brand-yellow mt-1">•</span>
                        <span>24 ans d'expérience</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-brand-yellow mt-1">•</span>
                        <span>Parc matériel moderne</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carte et localisation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                  Notre localisation
                </h2>
                <p className="text-lg text-gray-600">
                  Situés à Abidjan, nous intervenons sur tout le territoire ivoirien
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Informations d'accès */}
                <div>
                  <h3 className="text-2xl font-semibold text-brand-ink mb-6">
                    Comment nous trouver
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-brand-ink mb-2">
                        En voiture
                      </h4>
                      <p className="text-gray-600">
                        PK 23 autoroute nord, sortie ALLOKOI – Direction PALMAFRIQUE. 
                        Parking disponible sur place.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brand-ink mb-2">
                        En transport public
                      </h4>
                      <p className="text-gray-600">
                        Ligne de bus vers ALLOKOI. Arrêt à 5 minutes à pied de nos locaux.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brand-ink mb-2">
                        Zone d'intervention
                      </h4>
                      <p className="text-gray-600">
                        Nous intervenons sur tout le territoire de la Côte d'Ivoire. 
                        Déplacements gratuits pour les devis dans un rayon de 50km.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carte placeholder */}
                <div className="bg-neutral-light rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-brand-yellow mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-ink mb-2">
                      Carte interactive
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Carte Google Maps à intégrer
                    </p>
                    <a
                      href="https://maps.google.com/?q=PK+23+autoroute+nord+Abidjan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-ink px-4 py-2 rounded-lg hover:bg-brand-yellow/90 transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Voir sur Google Maps</span>
                    </a>
                  </div>
                </div>
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
