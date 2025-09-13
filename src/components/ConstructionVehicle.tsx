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
      className={`fixed right-8 w-32 h-20 z-40 transition-transform duration-300 ease-out ${className}`}
      style={{ 
        transform: `translateY(${translateY}vh)`,
        filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.8))',
        top: 0
      }}
    >
      <svg 
        viewBox="0 0 80 50" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fond de chantier - terre */}
        <rect x="0" y="35" width="80" height="15" fill="#8B4513" opacity="0.3"/>
        
        {/* Terre déplacée par la chargeuse */}
        <ellipse cx="65" cy="40" rx="8" ry="3" fill="#A0522D" opacity="0.6"/>
        <ellipse cx="70" cy="38" rx="5" ry="2" fill="#CD853F" opacity="0.5"/>
        
        {/* Châssis principal - Chargeuse à pneus réaliste */}
        <rect x="8" y="20" width="45" height="18" fill="#FF4444" rx="3" stroke="#212121" strokeWidth="1.5"/>
        
        {/* Cabine de la chargeuse */}
        <rect x="10" y="12" width="20" height="16" fill="#F9A825" rx="2" stroke="#212121" strokeWidth="1.5"/>
        
        {/* Vitres de la cabine */}
        <rect x="12" y="14" width="16" height="8" fill="#87CEEB" rx="1" stroke="#212121" strokeWidth="1"/>
        <rect x="13" y="15" width="14" height="6" fill="#E6F3FF" rx="0.5"/>
        
        {/* Bras de chargeuse - réaliste */}
        <rect x="48" y="18" width="20" height="6" fill="#FF4444" rx="3" stroke="#212121" strokeWidth="1.5"/>
        <rect x="65" y="16" width="8" height="10" fill="#FF4444" rx="2" stroke="#212121" strokeWidth="1.5"/>
        
        {/* Godet de chargeuse - réaliste */}
        <path d="M70 12 L78 18 L70 24 L62 18 Z" fill="#FF4444" stroke="#212121" strokeWidth="1.5"/>
        
        {/* Dents du godet */}
        <rect x="72" y="10" width="2" height="8" fill="#212121"/>
        <rect x="74" y="9" width="2" height="10" fill="#212121"/>
        <rect x="76" y="8" width="2" height="12" fill="#212121"/>
        
        {/* Pneus avant - réalistes */}
        <circle cx="18" cy="42" r="6" fill="#212121" stroke="#FFFFFF" strokeWidth="2"/>
        <circle cx="18" cy="42" r="4.5" fill="#444444"/>
        <circle cx="18" cy="42" r="3" fill="#666666"/>
        <circle cx="18" cy="42" r="1.5" fill="#999999"/>
        
        {/* Pneus arrière - réalistes */}
        <circle cx="45" cy="42" r="6" fill="#212121" stroke="#FFFFFF" strokeWidth="2"/>
        <circle cx="45" cy="42" r="4.5" fill="#444444"/>
        <circle cx="45" cy="42" r="3" fill="#666666"/>
        <circle cx="45" cy="42" r="1.5" fill="#999999"/>
        
        {/* Phares avant */}
        <circle cx="24" cy="16" r="2.5" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="26" cy="16" r="2.5" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="25" cy="15" r="1.5" fill="#FFD700"/>
        
        {/* Phares arrière */}
        <circle cx="42" cy="24" r="2" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="44" cy="24" r="2" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="43" cy="23" r="1" fill="#FF4444"/>
        
        {/* Échappement */}
        <rect x="48" y="22" width="3" height="8" fill="#333333"/>
        <ellipse cx="49.5" cy="20" rx="1.5" ry="2" fill="#666666"/>
        
        {/* Détails du châssis */}
        <rect x="15" y="25" width="8" height="3" fill="#333333"/>
        <rect x="25" y="25" width="8" height="3" fill="#333333"/>
        <rect x="35" y="25" width="8" height="3" fill="#333333"/>
        
        {/* Particules de poussière qui suivent la chargeuse */}
        <circle cx="58" cy="32" r="1" fill="#D2B48C" opacity="0.6"/>
        <circle cx="62" cy="30" r="0.8" fill="#D2B48C" opacity="0.5"/>
        <circle cx="66" cy="28" r="0.6" fill="#D2B48C" opacity="0.4"/>
        <circle cx="70" cy="26" r="0.5" fill="#D2B48C" opacity="0.3"/>
      </svg>
    </div>
  )
}
