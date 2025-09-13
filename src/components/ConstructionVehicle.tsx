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
      className={`absolute bottom-0 left-0 w-16 h-10 transition-transform duration-300 ease-out ${className}`}
      style={{ 
        transform: `translateX(${translateX}vw)`,
        filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.6))'
      }}
    >
      <svg 
        viewBox="0 0 64 40" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fond blanc pour contraste */}
        <rect x="2" y="10" width="60" height="16" fill="#FFFFFF" rx="3" opacity="0.9"/>
        
        {/* Châssis principal - Chargeuse à pneus */}
        <rect x="6" y="14" width="36" height="14" fill="#B71C1C" rx="2" stroke="#212121" strokeWidth="1"/>
        
        {/* Cabine avec vitres */}
        <rect x="8" y="6" width="16" height="12" fill="#212121" rx="1"/>
        <rect x="9" y="7" width="14" height="10" fill="#87CEEB" rx="0.5"/>
        <rect x="10" y="8" width="12" height="8" fill="#FFFFFF" rx="0.5" opacity="0.8"/>
        
        {/* Bras de chargeuse */}
        <rect x="42" y="10" width="16" height="4" fill="#B71C1C" rx="2" stroke="#212121" strokeWidth="1"/>
        <rect x="56" y="8" width="6" height="8" fill="#B71C1C" rx="2" stroke="#212121" strokeWidth="1"/>
        
        {/* Godet de chargeuse */}
        <path d="M58 6 L66 12 L58 18 L50 12 Z" fill="#B71C1C" stroke="#212121" strokeWidth="1"/>
        
        {/* Pneus avant - plus gros et contrastés */}
        <circle cx="14" cy="32" r="5" fill="#212121" stroke="#FFFFFF" strokeWidth="2"/>
        <circle cx="14" cy="32" r="3.5" fill="#666666"/>
        <circle cx="14" cy="32" r="2" fill="#999999"/>
        <circle cx="14" cy="32" r="1" fill="#CCCCCC"/>
        
        {/* Pneus arrière - plus gros et contrastés */}
        <circle cx="38" cy="32" r="5" fill="#212121" stroke="#FFFFFF" strokeWidth="2"/>
        <circle cx="38" cy="32" r="3.5" fill="#666666"/>
        <circle cx="38" cy="32" r="2" fill="#999999"/>
        <circle cx="38" cy="32" r="1" fill="#CCCCCC"/>
        
        {/* Phares avant - plus visibles */}
        <circle cx="20" cy="12" r="2" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="22" cy="12" r="2" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="21" cy="11" r="1" fill="#FFD700"/>
        
        {/* Phares arrière - plus visibles */}
        <circle cx="36" cy="18" r="1.5" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="38" cy="18" r="1.5" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="37" cy="17" r="0.8" fill="#FF4444"/>
        
        {/* Détails du godet - plus contrastés */}
        <rect x="56" y="9" width="3" height="6" fill="#212121"/>
        <rect x="58" y="8" width="3" height="8" fill="#212121"/>
        <rect x="60" y="7" width="3" height="10" fill="#212121"/>
        
        {/* Contour général pour visibilité */}
        <rect x="2" y="10" width="60" height="16" fill="none" stroke="#212121" strokeWidth="1" rx="3"/>
      </svg>
    </div>
  )
}
