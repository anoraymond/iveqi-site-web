# IVEQI - Site Web Officiel

Site vitrine professionnel pour **IVEQI / Ivoire Équipements**, entreprise certifiée ISO 9001:2015 spécialisée dans les travaux agricoles, miniers, publics, location et transport d'engins en Côte d'Ivoire.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide React** (icônes)
- **React Hook Form** + **Zod** (formulaires)

## 🎨 Design

- **Palette IVEQI** : Rouge engin (#C62828), Jaune godet (#F9A825), Anthracite (#212121)
- **Responsive** : Mobile-first design
- **Accessibilité** : AA minimum, focus visible, ARIA landmarks
- **Performance** : Optimisé pour Lighthouse ≥ 90

## 📁 Structure

```
src/
├── app/                    # Pages Next.js App Router
│   ├── page.tsx           # Accueil
│   ├── services/          # Pages services
│   ├── parc-materiel/     # Parc matériel avec filtres
│   ├── realisations/      # Projets réalisés
│   ├── temoignages/       # Témoignages clients
│   ├── engagements/       # Engagements qualité
│   ├── contact/           # Formulaire contact
│   └── legal/             # Pages légales
├── components/            # Composants réutilisables
│   ├── ui/               # Composants shadcn/ui
│   ├── Header.tsx        # Navigation principale
│   ├── Footer.tsx        # Pied de page
│   ├── Hero.tsx          # Section hero
│   ├── ServiceCard.tsx   # Cartes services
│   ├── ProjectCard.tsx   # Cartes projets
│   ├── TestimonialCard.tsx # Témoignages
│   ├── ContactForm.tsx   # Formulaire contact
│   └── WhatsAppButton.tsx # Bouton WhatsApp
├── lib/                  # Utilitaires
│   ├── config.ts         # Configuration site
│   ├── seo.ts           # Métadonnées SEO
│   ├── content.ts       # Helpers données
│   └── types.ts         # Types TypeScript
└── data/                # Données mock JSON
    ├── services.json
    ├── equipment.json
    ├── projects.json
    ├── testimonials.json
    └── ...
```

## 🛠️ Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd iveqi_site_web

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

## 🌐 Déploiement

### Vercel (Recommandé)

1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement :
   ```
   NEXT_PUBLIC_WHATSAPP_PHONE=+2250789020000
   CONTACT_TO=contact@iveqi.com
   ```
3. Déployer automatiquement

### Autres plateformes

Le site est compatible avec toute plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Fonctionnalités

### ✅ Implémentées
- **8 pages principales** avec contenu complet
- **Navigation responsive** avec menu mobile
- **Formulaire de contact** multi-étapes avec validation
- **Filtres avancés** pour le parc matériel
- **SEO optimisé** (sitemap, robots.txt, métadonnées)
- **Accessibilité** (skip-links, ARIA, focus visible)
- **Performance** (images optimisées, code-splitting)
- **PWA ready** (manifest, favicon, icônes)

### 🔄 À personnaliser
- **Images réelles** (remplacer les placeholders SVG)
- **Contenu textuel** (ajuster selon besoins)
- **Intégration email** (configurer SMTP)
- **Analytics** (Google Analytics, Vercel Analytics)

## 🎯 SEO

- **Métadonnées** complètes par page
- **OpenGraph** et Twitter Cards
- **JSON-LD** (Organization, LocalBusiness)
- **Sitemap** dynamique
- **Robots.txt** optimisé
- **Géolocalisation** Côte d'Ivoire

## 📞 Contact

- **Téléphone** : +225 07 89 02 00 00
- **Email** : contact@iveqi.com
- **Adresse** : PK 23 autoroute nord, sortie ALLOKOI – Direction PALMAFRIQUE, 01 BP 5120 Abidjan 01, Côte d'Ivoire

## 📄 Licence

© 2025 IVEQI - Ivoire Équipements. Tous droits réservés.

---

**Développé avec ❤️ pour IVEQI**