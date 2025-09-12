import { Statistic } from '@/lib/types'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  statistic: Statistic
  className?: string
}

export function StatCard({ statistic, className = '' }: StatCardProps) {
  // Import dynamique de l'icône Lucide
  const IconComponent = ({ name }: { name: string }) => {
    // Mapping des noms d'icônes vers les composants Lucide
    const iconMap: Record<string, LucideIcon> = {
      Calendar: require('lucide-react').Calendar,
      Award: require('lucide-react').Award,
      Layers: require('lucide-react').Layers,
      CheckCircle: require('lucide-react').CheckCircle,
    }
    
    const Icon = iconMap[name] || require('lucide-react').BarChart3
    return <Icon className="h-8 w-8" />
  }

  return (
    <div className={`text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ${className}`}>
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-full mb-4">
          <IconComponent name={statistic.icon} />
        </div>
        <div className="text-4xl md:text-5xl font-bold text-brand-ink mb-2">
          {statistic.value}
        </div>
        <div className="text-lg font-semibold text-brand-red mb-2">
          {statistic.label}
        </div>
        {statistic.description && (
          <p className="text-sm text-gray-600 leading-relaxed">
            {statistic.description}
          </p>
        )}
      </div>
    </div>
  )
}

// Composant pour la grille de statistiques
interface StatGridProps {
  statistics: Statistic[]
  title?: string
  description?: string
  className?: string
}

export function StatGrid({ 
  statistics, 
  title, 
  description, 
  className = '' 
}: StatGridProps) {
  return (
    <section className={`py-16 bg-neutral-light ${className}`}>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((statistic) => (
            <StatCard
              key={statistic.id}
              statistic={statistic}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
