import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { CTA } from './CTA'
import { Project } from '@/lib/types'
import { MapPin, Calendar, Building, CheckCircle } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'featured'
  className?: string
}

export function ProjectCard({ project, variant = 'default', className = '' }: ProjectCardProps) {
  const isFeatured = variant === 'featured'
  
  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'agricole':
        return 'bg-green-100 text-green-800'
      case 'minier':
        return 'bg-yellow-100 text-yellow-800'
      case 'public':
        return 'bg-blue-100 text-blue-800'
      case 'transport':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  const getSectorLabel = (sector: string) => {
    switch (sector) {
      case 'agricole':
        return 'Agricole'
      case 'minier':
        return 'Minier'
      case 'public':
        return 'Public'
      case 'transport':
        return 'Transport'
      default:
        return sector
    }
  }
  
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${isFeatured ? 'border-brand-yellow border-2' : ''} ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSectorColor(project.sector)}`}>
            {getSectorLabel(project.sector)}
          </span>
          {isFeatured && (
            <span className="bg-brand-yellow text-brand-ink px-3 py-1 rounded-full text-sm font-semibold">
              Projet phare
            </span>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-brand-ink mb-2 line-clamp-2">
            {project.title}
          </h3>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{project.duration}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-brand-red mb-3">
            <Building className="h-4 w-4" />
            <span>{project.client}</span>
          </div>
          
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
        
        {/* Résultats clés */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-brand-ink mb-3">
            Résultats clés :
          </h4>
          <ul className="space-y-1">
            {project.results.slice(0, 2).map((result, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{result}</span>
              </li>
            ))}
            {project.results.length > 2 && (
              <li className="text-sm text-brand-red font-medium">
                +{project.results.length - 2} autres résultats
              </li>
            )}
          </ul>
        </div>
        
        <CTA 
          variant="primary" 
          href={`/realisations/${project.id}`}
          className="w-full"
        >
          Voir le projet
        </CTA>
      </CardContent>
    </Card>
  )
}

// Composant pour la grille de projets
interface ProjectGridProps {
  projects: Project[]
  title?: string
  description?: string
  showFeatured?: boolean
  limit?: number
  className?: string
}

export function ProjectGrid({ 
  projects, 
  title, 
  description, 
  showFeatured = false,
  limit,
  className = '' 
}: ProjectGridProps) {
  let displayProjects = showFeatured ? projects.filter(p => p.featured) : projects
  
  if (limit) {
    displayProjects = displayProjects.slice(0, limit)
  }
  
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={project.featured ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
