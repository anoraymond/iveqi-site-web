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
      className={`absolute bottom-0 left-0 w-8 h-6 transition-transform duration-300 ease-out ${className}`}
      style={{ 
        transform: `translateX(${translateX}vw)`,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
      }}
    >
      <svg 
        viewBox="0 0 32 24" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Châssis principal */}
        <rect x="2" y="8" width="20" height="8" fill="#C62828" rx="1"/>
        
        {/* Cabine */}
        <rect x="4" y="4" width="8" height="6" fill="#F9A825" rx="1"/>
        
        {/* Fenêtre de la cabine */}
        <rect x="5" y="5" width="6" height="4" fill="#87CEEB" rx="0.5"/>
        
        {/* Roue avant */}
        <circle cx="7" cy="18" r="3" fill="#212121"/>
        <circle cx="7" cy="18" r="2" fill="#666666"/>
        
        {/* Roue arrière */}
        <circle cx="23" cy="18" r="3" fill="#212121"/>
        <circle cx="23" cy="18" r="2" fill="#666666"/>
        
        {/* Bras de pelle (optionnel) */}
        <rect x="22" y="2" width="8" height="2" fill="#C62828" rx="1"/>
        
        {/* Godet */}
        <path d="M30 2 L35 5 L30 8 Z" fill="#C62828"/>
        
        {/* Phare */}
        <circle cx="12" cy="6" r="1" fill="#FFD700"/>
      </svg>
    </div>
  )
}
