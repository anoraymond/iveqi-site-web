import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { generateContentMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'

export async function generateMetadata(): Promise<Metadata> {
  return generateContentMetadata(
    'Mentions Légales',
    'Mentions légales du site IVEQI - Ivoire Équipements. Informations sur l\'entreprise, l\'éditeur du site et les conditions d\'utilisation.',
    '/legal/mentions-legales',
    ['mentions légales', 'conditions d\'utilisation', 'éditeur', 'IVEQI']
  )
}

export default async function MentionsLegalesPage() {
  return (
    <>
      <main >
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-ink to-brand-deep text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Mentions Légales
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Informations légales et conditions d'utilisation
              </p>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                {/* Éditeur du site */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    1. Éditeur du site
                  </h2>
                  <div className="bg-neutral-light p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      <strong>Raison sociale :</strong> {siteConfig.name}
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Siège social :</strong><br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.postalCode}<br />
                      {siteConfig.address.city}<br />
                      {siteConfig.address.country}
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Téléphone :</strong> {siteConfig.phone}
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Email :</strong> {siteConfig.email}
                    </p>
                    <p className="text-gray-700">
                      <strong>Directeur de la publication :</strong> [Nom du directeur]
                    </p>
                  </div>
                </div>

                {/* Hébergement */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    2. Hébergement du site
                  </h2>
                  <div className="bg-neutral-light p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      <strong>Hébergeur :</strong> Vercel Inc.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                    </p>
                    <p className="text-gray-700">
                      <strong>Site web :</strong> <a href="https://vercel.com" className="text-brand-red hover:underline">https://vercel.com</a>
                    </p>
                  </div>
                </div>

                {/* Propriété intellectuelle */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    3. Propriété intellectuelle
                  </h2>
                  <p className="text-gray-700 mb-4">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p className="text-gray-700 mb-4">
                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                    sauf autorisation expresse du directeur de la publication.
                  </p>
                  <p className="text-gray-700">
                    La marque et le logo {siteConfig.name} sont des marques déposées. Toute reproduction non autorisée de ces marques, 
                    dessins et modèles constitue une contrefaçon passible de sanctions pénales.
                  </p>
                </div>

                {/* Responsabilité */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    4. Responsabilité
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                    mais peut toutefois contenir des inexactitudes ou des omissions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, 
                    à l'adresse {siteConfig.email}, en décrivant le problème de la manière la plus précise possible.
                  </p>
                  <p className="text-gray-700">
                    Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. 
                    En conséquence, ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur 
                    ou d'une quelconque perte de données consécutives au téléchargement.
                  </p>
                </div>

                {/* Liens hypertextes */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    5. Liens hypertextes
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, 
                    il sortira du site {siteConfig.url}. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens 
                    et ne saurait, en aucun cas, être responsable de leur contenu.
                  </p>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    6. Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Le site {siteConfig.url} peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. 
                    Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                  </p>
                  <p className="text-gray-700">
                    Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire 
                    et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelles sans l'acceptation de cookies.
                  </p>
                </div>

                {/* Droit applicable */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    7. Droit applicable
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Tout litige en relation avec l'utilisation du site {siteConfig.url} est soumis au droit français. 
                    Il est fait attribution exclusive de juridiction aux tribunaux compétents d'Abidjan.
                  </p>
                </div>

                {/* Contact */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-brand-ink mb-6">
                    8. Contact
                  </h2>
                  <div className="bg-neutral-light p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Par email :</strong> {siteConfig.email}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Par téléphone :</strong> {siteConfig.phone}
                    </p>
                    <p className="text-gray-700">
                      <strong>Par courrier :</strong><br />
                      {siteConfig.name}<br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                      {siteConfig.address.country}
                    </p>
                  </div>
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
