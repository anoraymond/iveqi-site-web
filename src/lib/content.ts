import { 
  Service, 
  Equipment, 
  Project, 
  Testimonial, 
  Statistic, 
  Commitment,
  FilterGroup 
} from './types'

// Import des données JSON
import servicesData from '@/data/services.json'
import equipmentData from '@/data/equipment.json'
import projectsData from '@/data/projects.json'
import testimonialsData from '@/data/testimonials.json'
import statisticsData from '@/data/statistics.json'
import commitmentsData from '@/data/commitments.json'

// Services
export async function getServices(): Promise<Service[]> {
  return servicesData as Service[]
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices()
  return services.find(service => service.slug === slug) || null
}

export async function getFeaturedServices(): Promise<Service[]> {
  const services = await getServices()
  return services.filter(service => service.featured)
}

export async function getServicesBySector(sector: string): Promise<Service[]> {
  const services = await getServices()
  return services.filter(service => service.sector === sector)
}

// Équipements
export async function getEquipment(): Promise<Equipment[]> {
  return equipmentData as Equipment[]
}

export async function getEquipmentById(id: string): Promise<Equipment | null> {
  const equipment = await getEquipment()
  return equipment.find(item => item.id === id) || null
}

export async function getAvailableEquipment(): Promise<Equipment[]> {
  const equipment = await getEquipment()
  return equipment.filter(item => item.available)
}

export async function getEquipmentByCategory(category: string): Promise<Equipment[]> {
  const equipment = await getEquipment()
  return equipment.filter(item => item.category === category)
}

export async function getEquipmentBySector(sector: string): Promise<Equipment[]> {
  const equipment = await getEquipment()
  return equipment.filter(item => item.sectors.includes(sector))
}

export async function getEquipmentByBrand(brand: string): Promise<Equipment[]> {
  const equipment = await getEquipment()
  return equipment.filter(item => item.brand.toLowerCase() === brand.toLowerCase())
}

// Projets/Réalisations
export async function getProjects(): Promise<Project[]> {
  return projectsData as Project[]
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find(project => project.id === id) || null
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects()
  return projects.filter(project => project.featured)
}

export async function getProjectsBySector(sector: string): Promise<Project[]> {
  const projects = await getProjects()
  return projects.filter(project => project.sector === sector)
}

export async function getRecentProjects(limit: number = 6): Promise<Project[]> {
  const projects = await getProjects()
  return projects
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, limit)
}

// Témoignages
export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonialsData as Testimonial[]
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const testimonials = await getTestimonials()
  return testimonials.filter(testimonial => testimonial.featured)
}

export async function getTestimonialsBySector(sector: string): Promise<Testimonial[]> {
  const testimonials = await getTestimonials()
  return testimonials.filter(testimonial => testimonial.sector === sector)
}

// Statistiques
export async function getStatistics(): Promise<Statistic[]> {
  return statisticsData as Statistic[]
}

// Engagements
export async function getCommitments(): Promise<Commitment[]> {
  return commitmentsData as Commitment[]
}

export async function getCommitmentsByCategory(category: string): Promise<Commitment[]> {
  const commitments = await getCommitments()
  return commitments.filter(commitment => commitment.category === category)
}

// Filtres pour le parc matériel
export async function getEquipmentFilters(): Promise<FilterGroup[]> {
  const equipment = await getEquipment()
  
  // Catégories
  const categories = [...new Set(equipment.map(item => item.category))]
  const categoryFilters = categories.map(category => ({
    id: category,
    label: category.charAt(0).toUpperCase() + category.slice(1),
    value: category,
    count: equipment.filter(item => item.category === category).length
  }))

  // Secteurs
  const allSectors = equipment.flatMap(item => item.sectors)
  const sectors = [...new Set(allSectors)]
  const sectorFilters = sectors.map(sector => ({
    id: sector,
    label: sector.charAt(0).toUpperCase() + sector.slice(1),
    value: sector,
    count: equipment.filter(item => item.sectors.includes(sector)).length
  }))

  // Marques
  const brands = [...new Set(equipment.map(item => item.brand))]
  const brandFilters = brands.map(brand => ({
    id: brand.toLowerCase(),
    label: brand,
    value: brand,
    count: equipment.filter(item => item.brand === brand).length
  }))

  return [
    {
      title: 'Catégorie',
      filters: categoryFilters
    },
    {
      title: 'Secteur d\'usage',
      filters: sectorFilters
    },
    {
      title: 'Marque',
      filters: brandFilters
    }
  ]
}

// Recherche
export async function searchEquipment(query: string): Promise<Equipment[]> {
  const equipment = await getEquipment()
  const searchTerm = query.toLowerCase()
  
  return equipment.filter(item => 
    item.name.toLowerCase().includes(searchTerm) ||
    item.brand.toLowerCase().includes(searchTerm) ||
    item.model.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  )
}

// Navigation
export async function getNavigationItems() {
  const services = await getServices()
  
  return [
    {
      title: 'Accueil',
      href: '/'
    },
    {
      title: 'À propos',
      href: '/a-propos'
    },
    {
      title: 'Services',
      href: '/services',
      children: services.map(service => ({
        title: service.title,
        href: `/services/${service.slug}`
      }))
    },
    {
      title: 'Parc matériel',
      href: '/parc-materiel'
    },
    {
      title: 'Réalisations',
      href: '/realisations'
    },
    {
      title: 'Témoignages',
      href: '/temoignages'
    },
    {
      title: 'Engagements',
      href: '/engagements'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ]
}
