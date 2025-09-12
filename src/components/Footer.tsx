import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#212121] text-[#9CA3AF]">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1 : Logo + pitch + socials */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-Iveqi.png"
              alt="IVEQI / Ivoire Équipements"
              width={80}
              height={52}
              className="h-10 w-10 object-contain"
            />
            <span className="text-white text-xl font-semibold">IVEQI</span>
          </div>

          <p className="mt-4 text-sm leading-6 max-w-xs">
            Entreprise certifiée ISO 9001:2015, spécialisée dans les travaux
            agricoles, miniers, publics, la location et le transport d'engins en Côte d'Ivoire.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a aria-label="Facebook" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Facebook className="h-4 w-4 text-[#9CA3AF]" />
            </a>
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Linkedin className="h-4 w-4 text-[#9CA3AF]" />
            </a>
            <a aria-label="Twitter" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Twitter className="h-4 w-4 text-[#9CA3AF]" />
            </a>
          </div>
        </div>

        {/* Col 2 : Navigation */}
        <div>
          <h3 className="text-white font-semibold">Navigation</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
            <li><Link href="/a-propos" className="hover:text-white transition">À propos</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/parc-materiel" className="hover:text-white transition">Parc matériel</Link></li>
            <li><Link href="/realisations" className="hover:text-white transition">Réalisations</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3 : Contact */}
        <div>
          <h3 className="text-white font-semibold">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-[#9CA3AF]" />
              <a href="tel:+2250789020000" className="hover:text-white transition">
                +225 07 89 02 00 00
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-[#9CA3AF]" />
              <a href="mailto:contact@iveqi.com" className="hover:text-white transition">
                contact@iveqi.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[#9CA3AF]" />
              <span>
                PK 23 autoroute nord, sortie ALLOKOI – Direction PALMAFRIQUE<br />
                01 BP 5120, Abidjan 01, Côte d'Ivoire
              </span>
            </li>
          </ul>
        </div>

        {/* Col 4 : Newsletter / CTA */}
        <div>
          <h3 className="text-white font-semibold">Newsletter</h3>
          <p className="mt-4 text-sm">
            Restez informé de nos dernières actualités et offres spéciales.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md bg-white/5 text-white placeholder-[#9CA3AF] px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-[#F9A825] px-4 py-2 font-semibold text-black hover:bg-[#E09A18] focus:outline-none focus:ring-2 focus:ring-[#C62828] transition"
            >
              S'abonner <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs">
            © {currentYear} IVEQI – Ivoire Équipements. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/legal/mentions-legales" className="hover:text-white transition">Mentions légales</Link>
            <Link href="/legal/confidentialite" className="hover:text-white transition">Confidentialité</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}