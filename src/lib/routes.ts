export interface NavItem {
  href: string;
  label: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/travaux-agricoles', label: 'Travaux agricoles' },
      { href: '/services/travaux-miniers', label: 'Travaux miniers' },
      { href: '/services/travaux-publics', label: 'Travaux publics' },
      { href: '/services/location-engins', label: 'Location d\'engins' },
      { href: '/services/transport-engins', label: 'Transport d\'engins' },
      { href: '/services', label: 'Tous les services' },
    ]
  },
  { href: '/parc-materiel', label: 'Parc matériel' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/engagements', label: 'Engagements' },
  { href: '/contact', label: 'Contact' },
];

export const footerLinks = {
  quickNav: [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/services', label: 'Services' },
    { href: '/parc-materiel', label: 'Parc matériel' },
    { href: '/realisations', label: 'Réalisations' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/legal/mentions-legales', label: 'Mentions légales' },
    { href: '/legal/confidentialite', label: 'Confidentialité' },
    { href: '/legal/cookies', label: 'Cookies' },
  ],
  social: [
    { href: 'https://facebook.com/iveqi', label: 'Facebook', icon: 'facebook' },
    { href: 'https://linkedin.com/company/iveqi', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://twitter.com/iveqi', label: 'Twitter', icon: 'twitter' },
    { href: 'https://instagram.com/iveqi', label: 'Instagram', icon: 'instagram' },
  ]
};