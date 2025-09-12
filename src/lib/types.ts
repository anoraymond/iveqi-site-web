// Types pour les services
export interface Service {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  benefits: string[]
  image: string
  icon: string
  sector: 'agricole' | 'minier' | 'public' | 'location' | 'transport'
  featured: boolean
}

// Types pour le parc matériel
export interface Equipment {
  id: string
  name: string
  category: 'engin' | 'vehicule' | 'outillage'
  brand: string
  model: string
  year?: number
  specs: {
    power?: string
    weight?: string
    capacity?: string
    fuel?: string
    dimensions?: string
  }
  image: string
  sectors: string[]
  available: boolean
  description: string
}

// Types pour les réalisations
export interface Project {
  id: string
  title: string
  sector: 'agricole' | 'minier' | 'public' | 'transport'
  client: string
  location: string
  duration: string
  description: string
  challenge: string
  solution: string
  results: string[]
  images: string[]
  featured: boolean
  completedAt: string
}

// Types pour les témoignages
export interface Testimonial {
  id: string
  author: string
  position: string
  company: string
  content: string
  rating: number
  sector: string
  avatar?: string
  featured: boolean
}

// Types pour les statistiques
export interface Statistic {
  id: string
  value: string
  label: string
  icon: string
  description?: string
}

// Types pour les engagements
export interface Commitment {
  id: string
  title: string
  description: string
  icon: string
  category: 'qualite' | 'securite' | 'environnement' | 'innovation'
}

// Types pour les contacts
export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  service: string
  message: string
  consent: boolean
}

// Types pour la navigation
export interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

// Types pour les filtres
export interface Filter {
  id: string
  label: string
  value: string
  count?: number
}

export interface FilterGroup {
  title: string
  filters: Filter[]
}
