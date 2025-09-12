'use client'

import { useState } from 'react'
import { FilterGroup } from '@/lib/types'
import { X, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FiltersBarProps {
  filterGroups: FilterGroup[]
  activeFilters: Record<string, string[]>
  onFilterChange: (groupTitle: string, filterValue: string, checked: boolean) => void
  onClearFilters: () => void
  className?: string
}

export function FiltersBar({
  filterGroups,
  activeFilters,
  onFilterChange,
  onClearFilters,
  className = ''
}: FiltersBarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0)

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-brand-ink" />
          <h3 className="text-lg font-semibold text-brand-ink">
            Filtrer le parc matériel
          </h3>
        </div>
        
        <div className="flex items-center space-x-2">
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
            >
              <X className="h-4 w-4 mr-1" />
              Effacer
            </Button>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden"
          >
            {isExpanded ? 'Masquer' : 'Afficher'} les filtres
          </Button>
        </div>
      </div>

      <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {filterGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold text-brand-ink mb-3">
              {group.title}
            </h4>
            
            <div className="space-y-2">
              {group.filters.map((filter) => {
                const isActive = activeFilters[group.title]?.includes(filter.value) || false
                
                return (
                  <label
                    key={filter.id}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-neutral-light p-2 rounded-md transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={(e) => onFilterChange(group.title, filter.value, e.target.checked)}
                      className="w-4 h-4 text-brand-yellow border-gray-300 rounded focus:ring-brand-yellow"
                    />
                    <span className="text-sm text-gray-700 flex-1">
                      {filter.label}
                    </span>
                    {filter.count && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {filter.count}
                      </span>
                    )}
                  </label>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Résumé des filtres actifs */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-brand-ink mb-3">
            Filtres actifs :
          </h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([groupTitle, filters]) =>
              filters.map((filter) => (
                <span
                  key={`${groupTitle}-${filter}`}
                  className="inline-flex items-center space-x-1 bg-brand-yellow text-brand-ink px-3 py-1 rounded-full text-sm"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => onFilterChange(groupTitle, filter, false)}
                    className="hover:bg-brand-ink/20 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Composant pour la recherche
interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  placeholder?: string
  className?: string
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  placeholder = "Rechercher un engin...",
  className = ''
}: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  )
}
