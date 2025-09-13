'use client'

import { useEffect, useState } from 'react'

interface ConstructionVehicleProps {
  className?: string
}

export function ConstructionVehicle({ className = '' }: ConstructionVehicleProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / documentHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Position horizontale basée sur le scroll (de gauche à droite)
  const translateX = scrollProgress * 100 // Pourcentage de la largeur

  return (
    <div 
      className={`absolute bottom-0 left-0 w-12 h-8 transition-transform duration-300 ease-out ${className}`}
      style={{ 
        transform: `translateX(${translateX}vw)`,
        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))'
      }}
    >
      <svg 
        viewBox="0 0 48 32" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Châssis principal - Chargeuse à pneus */}
        <rect x="4" y="12" width="28" height="12" fill="#C62828" rx="2"/>
        
        {/* Cabine avec vitres */}
        <rect x="6" y="6" width="12" height="8" fill="#F9A825" rx="1"/>
        <rect x="7" y="7" width="10" height="6" fill="#87CEEB" rx="0.5"/>
        
        {/* Bras de chargeuse */}
        <rect x="32" y="8" width="12" height="3" fill="#C62828" rx="1.5"/>
        <rect x="42" y="6" width="4" height="7" fill="#C62828" rx="2"/>
        
        {/* Godet de chargeuse */}
        <path d="M44 4 L50 8 L44 12 L40 8 Z" fill="#C62828"/>
        
        {/* Pneus avant - plus gros */}
        <circle cx="10" cy="26" r="4" fill="#212121"/>
        <circle cx="10" cy="26" r="3" fill="#666666"/>
        <circle cx="10" cy="26" r="2" fill="#999999"/>
        
        {/* Pneus arrière - plus gros */}
        <circle cx="30" cy="26" r="4" fill="#212121"/>
        <circle cx="30" cy="26" r="3" fill="#666666"/>
        <circle cx="30" cy="26" r="2" fill="#999999"/>
        
        {/* Phares avant */}
        <circle cx="16" cy="10" r="1.5" fill="#FFD700"/>
        <circle cx="18" cy="10" r="1.5" fill="#FFD700"/>
        
        {/* Phares arrière */}
        <circle cx="28" cy="14" r="1" fill="#FF4444"/>
        <circle cx="30" cy="14" r="1" fill="#FF4444"/>
        
        {/* Détails du godet */}
        <rect x="42" y="7" width="2" height="5" fill="#B71C1C"/>
        <rect x="44" y="6" width="2" height="6" fill="#B71C1C"/>
      </svg>
    </div>
  )
}
