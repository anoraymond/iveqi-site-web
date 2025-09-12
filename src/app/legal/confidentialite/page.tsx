import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { generateContentMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'

export async function generateMetadata(): Promise<Metadata> {
  return generateContentMetadata(
    'Politique de Confidentialité',
    'Politique de confidentialité et protection des données personnelles d\'IVEQI - Ivoire Équipements. Informations sur la collecte et l\'utilisation de vos données.',
    '/legal/confidentialite',
    ['confidentialité', 'données personnelles', 'RGPD', 'protection', 'IVEQI']
  )
}

export default async function ConfidentialitePage() {
  return (
    <>
      <main >
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-ink to-brand-deep text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Politique de Confidentialité
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Protection de vos données personnelles
              </p>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    1. Introduction
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {siteConfig.name} s'engage à protéger votre vie privée et vos données personnelles. 
                    Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
                    vos informations personnelles lorsque vous utilisez notre site web.
                  </p>
                  <p className="text-gray-700">
                    En utilisant notre site, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                  </p>
                </div>

                {/* Données collectées */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    2. Données personnelles collectées
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Nous collectons les informations suivantes lorsque vous utilisez notre site ou nos services :
                  </p>
                  
                  <div className="bg-neutral-light p-6 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold text-brand-ink mb-3">
                      Informations que vous nous fournissez directement :
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Nom de votre entreprise (optionnel)</li>
                      <li>Messages et demandes de devis</li>
                      <li>Informations sur vos projets</li>
                    </ul>
                  </div>

                  <div className="bg-neutral-light p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-ink mb-3">
                      Informations collectées automatiquement :
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Adresse IP</li>
                      <li>Type de navigateur et version</li>
                      <li>Pages visitées et durée de visite</li>
                      <li>Date et heure de visite</li>
                      <li>Site web de référence</li>
                    </ul>
                  </div>
                </div>

                {/* Utilisation des données */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    3. Utilisation de vos données personnelles
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Nous utilisons vos données personnelles pour les finalités suivantes :
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-neutral-light p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-brand-ink mb-3">
                        Finalités principales :
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Répondre à vos demandes de devis et de contact</li>
                        <li>Vous fournir nos services de travaux, location et transport d'engins</li>
                        <li>Communiquer avec vous concernant vos projets</li>
                        <li>Améliorer la qualité de nos services</li>
                      </ul>
                    </div>

                    <div className="bg-neutral-light p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-brand-ink mb-3">
                        Finalités secondaires :
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Analyser l'utilisation de notre site web</li>
                        <li>Améliorer notre site et nos services</li>
                        <li>Respecter nos obligations légales</li>
                        <li>Protéger nos droits et intérêts légitimes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Base légale */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    4. Base légale du traitement
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Nous traitons vos données personnelles sur la base de :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Votre consentement</strong> : pour l'envoi de communications marketing</li>
                    <li><strong>L'exécution d'un contrat</strong> : pour la fourniture de nos services</li>
                    <li><strong>Notre intérêt légitime</strong> : pour l'amélioration de nos services</li>
                    <li><strong>L'obligation légale</strong> : pour respecter la réglementation applicable</li>
                  </ul>
                </div>

                {/* Partage des données */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    5. Partage de vos données
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                    sauf dans les cas suivants :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Avec votre consentement explicite</li>
                    <li>Pour respecter une obligation légale</li>
                    <li>Avec nos prestataires de services (sous contrat de confidentialité)</li>
                    <li>En cas de fusion, acquisition ou vente d'actifs</li>
                  </ul>
                </div>

                {/* Sécurité */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    6. Sécurité de vos données
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Formation du personnel sur la protection des données</li>
                    <li>Surveillance et audit réguliers</li>
                    <li>Sauvegarde sécurisée des données</li>
                  </ul>
                </div>

                {/* Conservation */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    7. Conservation des données
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Nous conservons vos données personnelles pendant les durées suivantes :
                  </p>
                  <div className="bg-neutral-light p-6 rounded-lg">
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                      <li><strong>Données contractuelles :</strong> 10 ans après la fin du contrat</li>
                      <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                      <li><strong>Données marketing :</strong> Jusqu'au retrait du consentement</li>
                    </ul>
                  </div>
                </div>

                {/* Vos droits */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    8. Vos droits
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-neutral-light p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-brand-ink mb-3">
                        Droit d'accès
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Obtenir une copie de vos données personnelles
                      </p>
                    </div>
                    
                    <div className="bg-neutral-light p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-brand-ink mb-3">
                        Droit de rectification
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Corriger des données inexactes ou incomplètes
                      </p>
                    </div>
                    
                    <div className="bg-neutral-light p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-brand-ink mb-3">
                        Droit d'effacement
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Demander la suppression de vos données
                      </p>
                    </div>
                    
                    <div className="bg-neutral-light p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-brand-ink mb-3">
                        Droit d'opposition
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Vous opposer au traitement de vos données
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    9. Cookies et technologies similaires
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                    Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                  </p>
                  <p className="text-gray-700">
                    Types de cookies utilisés :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                    <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                    <li><strong>Cookies analytiques :</strong> Pour analyser l'utilisation du site</li>
                    <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    10. Contact et réclamations
                  </h2>
                  <div className="bg-neutral-light p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      Pour exercer vos droits ou pour toute question relative à cette politique de confidentialité :
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Email :</strong> {siteConfig.email}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Téléphone :</strong> {siteConfig.phone}
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Courrier :</strong><br />
                      {siteConfig.name}<br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                      {siteConfig.address.country}
                    </p>
                    <p className="text-gray-700">
                      Vous avez également le droit d'introduire une réclamation auprès de l'autorité de contrôle 
                      compétente si vous estimez que le traitement de vos données personnelles ne respecte pas 
                      la réglementation en vigueur.
                    </p>
                  </div>
                </div>

                {/* Modifications */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    11. Modifications de cette politique
                  </h2>
                  <p className="text-gray-700">
                    Nous pouvons modifier cette politique de confidentialité à tout moment. 
                    Les modifications seront publiées sur cette page avec une date de mise à jour. 
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé 
                    de nos pratiques de confidentialité.
                  </p>
                </div>

                {/* Dernière mise à jour */}
                <div className="text-center text-gray-500 text-sm">
                  <p>
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
