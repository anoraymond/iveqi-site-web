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
      // Debug temporaire
      console.log('Scroll progress:', progress, 'TranslateY:', 10 + (progress * 80))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Position verticale basée sur le scroll (de haut en bas)
  // Ajouter un offset pour ne pas commencer tout en haut
  const translateY = 10 + (scrollProgress * 80) // De 10vh à 90vh

  return (
    <div 
      className={`fixed right-12 w-28 h-16 z-40 transition-transform duration-300 ease-out ${className}`}
      style={{ 
        transform: `translateY(${translateY}vh)`,
        filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.8))',
        top: 0
      }}
    >
      <svg 
        viewBox="0 0 60 40" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Route verticale que suit le compacteur */}
        <rect x="28" y="0" width="4" height="40" fill="#4A4A4A" opacity="0.8"/>
        
        {/* Marques de route (lignes blanches) */}
        <rect x="29.5" y="0" width="1" height="40" fill="#FFFFFF" opacity="0.6"/>
        
        {/* Châssis principal - Compacteur (rouleau compresseur) */}
        <rect x="15" y="15" width="30" height="12" fill="#FF4444" rx="2" stroke="#212121" strokeWidth="1.5"/>
        
        {/* Cabine du compacteur */}
        <rect x="18" y="8" width="24" height="10" fill="#F9A825" rx="1" stroke="#212121" strokeWidth="1.5"/>
        
        {/* Vitres de la cabine */}
        <rect x="20" y="10" width="20" height="6" fill="#87CEEB" rx="0.5" stroke="#212121" strokeWidth="1"/>
        <rect x="21" y="11" width="18" height="4" fill="#E6F3FF" rx="0.5"/>
        
        {/* Rouleau avant - compacteur */}
        <circle cx="25" cy="30" r="8" fill="#666666" stroke="#212121" strokeWidth="2"/>
        <circle cx="25" cy="30" r="6" fill="#888888"/>
        <circle cx="25" cy="30" r="4" fill="#AAAAAA"/>
        
        {/* Rouleau arrière - compacteur */}
        <circle cx="35" cy="30" r="8" fill="#666666" stroke="#212121" strokeWidth="2"/>
        <circle cx="35" cy="30" r="6" fill="#888888"/>
        <circle cx="35" cy="30" r="4" fill="#AAAAAA"/>
        
        {/* Détails des rouleaux - rainures */}
        <rect x="21" y="26" width="8" height="1" fill="#555555"/>
        <rect x="21" y="28" width="8" height="1" fill="#555555"/>
        <rect x="21" y="30" width="8" height="1" fill="#555555"/>
        <rect x="21" y="32" width="8" height="1" fill="#555555"/>
        <rect x="21" y="34" width="8" height="1" fill="#555555"/>
        
        <rect x="31" y="26" width="8" height="1" fill="#555555"/>
        <rect x="31" y="28" width="8" height="1" fill="#555555"/>
        <rect x="31" y="30" width="8" height="1" fill="#555555"/>
        <rect x="31" y="32" width="8" height="1" fill="#555555"/>
        <rect x="31" y="34" width="8" height="1" fill="#555555"/>
        
        {/* Phares avant */}
        <circle cx="24" cy="12" r="2" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="36" cy="12" r="2" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="30" cy="11" r="1.5" fill="#FFD700"/>
        
        {/* Phares arrière */}
        <circle cx="22" cy="20" r="1.5" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="38" cy="20" r="1.5" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="30" cy="19" r="1" fill="#FF4444"/>
        
        {/* Échappement */}
        <rect x="42" y="18" width="2" height="6" fill="#333333"/>
        <ellipse cx="43" cy="16" rx="1" ry="1.5" fill="#666666"/>
        
        {/* Détails du châssis */}
        <rect x="18" y="17" width="6" height="2" fill="#333333"/>
        <rect x="26" y="17" width="6" height="2" fill="#333333"/>
        <rect x="34" y="17" width="6" height="2" fill="#333333"/>
        
        {/* Asphalte compacté derrière le compacteur */}
        <rect x="28" y="32" width="4" height="8" fill="#2A2A2A" opacity="0.7"/>
        <rect x="29" y="33" width="2" height="6" fill="#333333" opacity="0.5"/>
      </svg>
    </div>
  )
}
