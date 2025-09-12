'use client'

import { useState, useMemo } from 'react'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { FiltersBar, SearchBar } from '@/components/FiltersBar'
import { CTA } from '@/components/CTA'
import { Equipment, FilterGroup } from '@/lib/types'
import { Search, Truck, Wrench, Cog } from 'lucide-react'
import Image from 'next/image'

interface ParcMaterielClientProps {
  equipment: Equipment[]
  filterGroups: FilterGroup[]
}

export function ParcMaterielClient({ equipment, filterGroups }: ParcMaterielClientProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})

  // Fonction pour gérer les changements de filtres
  const handleFilterChange = (groupTitle: string, filterValue: string, checked: boolean) => {
    setActiveFilters(prev => {
      const groupFilters = prev[groupTitle] || []
      
      if (checked) {
        return {
          ...prev,
          [groupTitle]: [...groupFilters, filterValue]
        }
      } else {
        return {
          ...prev,
          [groupTitle]: groupFilters.filter(f => f !== filterValue)
        }
      }
    })
  }

  // Fonction pour effacer tous les filtres
  const handleClearFilters = () => {
    setActiveFilters({})
    setSearchTerm('')
  }

  // Filtrage des équipements
  const filteredEquipment = useMemo(() => {
    let filtered = equipment

    // Filtre par recherche
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchLower) ||
        item.brand.toLowerCase().includes(searchLower) ||
        item.model.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      )
    }

    // Filtres par catégorie
    Object.entries(activeFilters).forEach(([groupTitle, filters]) => {
      if (filters.length > 0) {
        switch (groupTitle) {
          case 'Catégorie':
            filtered = filtered.filter(item => filters.includes(item.category))
            break
          case 'Secteur d\'usage':
            filtered = filtered.filter(item => 
              item.sectors.some(sector => filters.includes(sector))
            )
            break
          case 'Marque':
            filtered = filtered.filter(item => filters.includes(item.brand))
            break
        }
      }
    })

    return filtered
  }, [equipment, searchTerm, activeFilters])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'engin':
        return <Truck className="h-6 w-6" />
      case 'vehicule':
        return <Wrench className="h-6 w-6" />
      case 'outillage':
        return <Cog className="h-6 w-6" />
      default:
        return <Truck className="h-6 w-6" />
    }
  }

  return (
    <>
      <main >
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-ink to-brand-deep text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Notre Parc Matériel
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Des engins modernes et performants pour tous vos projets
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                Découvrez notre parc d'engins de chantier, véhicules et outillages. 
                Tous nos équipements sont régulièrement entretenus et prêts à l'emploi.
              </p>
            </div>
          </div>
        </section>

        {/* Filtres et Recherche */}
        <section className="py-8 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Barre de recherche */}
                <div className="lg:col-span-1">
                  <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    placeholder="Rechercher un engin..."
                  />
                </div>

                {/* Filtres */}
                <div className="lg:col-span-3">
                  <FiltersBar
                    filterGroups={filterGroups}
                    activeFilters={activeFilters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* En-tête des résultats */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-brand-ink">
                    {filteredEquipment.length} équipement{filteredEquipment.length > 1 ? 's' : ''} trouvé{filteredEquipment.length > 1 ? 's' : ''}
                  </h2>
                  {searchTerm && (
                    <p className="text-gray-600 mt-1">
                      Résultats pour "{searchTerm}"
                    </p>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Disponibilité :</span>
                  <span className="inline-flex items-center space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Disponible</span>
                  </span>
                  <span className="inline-flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Indisponible</span>
                  </span>
                </div>
              </div>

              {/* Grille des équipements */}
              {filteredEquipment.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEquipment.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      {/* Image */}
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 flex items-center space-x-2">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                            {getCategoryIcon(item.category)}
                            <span className="text-sm font-medium text-brand-ink capitalize">
                              {item.category}
                            </span>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${item.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-brand-ink mb-2">
                          {item.name}
                        </h3>
                        
                        <p className="text-brand-red font-medium mb-3">
                          {item.brand} {item.model}
                          {item.year && ` (${item.year})`}
                        </p>

                        {/* Spécifications */}
                        <div className="space-y-2 mb-4">
                          {item.specs.power && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Puissance :</span>
                              <span className="font-medium">{item.specs.power}</span>
                            </div>
                          )}
                          {item.specs.weight && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Poids :</span>
                              <span className="font-medium">{item.specs.weight}</span>
                            </div>
                          )}
                          {item.specs.capacity && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Capacité :</span>
                              <span className="font-medium">{item.specs.capacity}</span>
                            </div>
                          )}
                        </div>

                        {/* Secteurs */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {item.sectors.map((sector) => (
                              <span
                                key={sector}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                              >
                                {sector}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                          {item.description}
                        </p>

                        {/* CTA */}
                        <CTA
                          variant={item.available ? "primary" : "secondary"}
                          size="sm"
                          href={item.available ? "/contact" : "#"}
                          className="w-full"
                        >
                          {item.available ? "Demander disponibilité" : "Indisponible"}
                        </CTA>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Aucun équipement trouvé
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Essayez de modifier vos critères de recherche ou vos filtres.
                  </p>
                  <CTA variant="primary" onClick={handleClearFilters}>
                    Effacer tous les filtres
                  </CTA>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-yellow">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
                Besoin d'un équipement spécifique ?
              </h2>
              <p className="text-lg text-brand-ink mb-8">
                Notre équipe peut vous aider à trouver l'engin parfait pour votre projet
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTA 
                  variant="secondary" 
                  size="lg" 
                  href="/contact"
                  className="bg-brand-ink text-white hover:bg-brand-ink/90"
                >
                  Demander un devis
                </CTA>
                <CTA 
                  variant="primary" 
                  size="lg" 
                  href={`tel:+2250789020000`}
                  icon="phone"
                  className="bg-white text-brand-ink hover:bg-gray-100"
                >
                  Nous appeler
                </CTA>
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
