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
    <>
      {/* Route verticale de 10px à 50px du bord droit */}
      <div 
        className="fixed top-0 h-screen z-30"
        style={{ 
          right: '50px',
          width: '10px',
          background: 'repeating-linear-gradient(to bottom, #4A4A4A 0px, #4A4A4A 15px, #6A6A6A 15px, #6A6A6A 30px)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 2px rgba(0,0,0,0.4)'
        }}
      />
      
      {/* Ligne blanche centrale de la route (marquage routier) */}
      <div 
        className="fixed top-0 h-screen z-30"
        style={{ 
          right: '50px',
          width: '10px',
          background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 20px, rgba(255,255,255,0.9) 20px, rgba(255,255,255,0.9) 40px)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px'
        }}
      />
      
      {/* Engin parfaitement centré sur la route */}
      <div 
        className={`fixed w-28 h-16 z-40 transition-transform duration-300 ease-out ${className}`}
        style={{ 
          transform: `translateY(${translateY}vh)`,
          filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.8))',
          top: 0,
          right: '39px', // 50px - 11px (moitié de 28px - moitié de 10px) pour centrer parfaitement
          left: 'auto',
          marginLeft: '0'
        }}
      >
      <svg 
        viewBox="0 0 60 40" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Châssis principal - Vue de dessus du compacteur */}
        <rect x="12" y="16" width="36" height="16" fill="#FF4444" rx="3" stroke="#212121" strokeWidth="1.5"/>
        
        {/* Cabine du compacteur - vue de dessus */}
        <rect x="15" y="8" width="30" height="12" fill="#F9A825" rx="2" stroke="#212121" strokeWidth="1.5"/>
        
        {/* Vitres de la cabine */}
        <rect x="18" y="11" width="24" height="6" fill="#87CEEB" rx="1" stroke="#212121" strokeWidth="1"/>
        <rect x="20" y="12" width="20" height="4" fill="#E6F3FF" rx="0.5"/>
        
        {/* Rouleau avant - vue de dessus */}
        <ellipse cx="25" cy="32" rx="10" ry="6" fill="#666666" stroke="#212121" strokeWidth="2"/>
        <ellipse cx="25" cy="32" rx="7" ry="4" fill="#888888"/>
        <ellipse cx="25" cy="32" rx="5" ry="3" fill="#AAAAAA"/>
        
        {/* Rouleau arrière - vue de dessus */}
        <ellipse cx="35" cy="32" rx="10" ry="6" fill="#666666" stroke="#212121" strokeWidth="2"/>
        <ellipse cx="35" cy="32" rx="7" ry="4" fill="#888888"/>
        <ellipse cx="35" cy="32" rx="5" ry="3" fill="#AAAAAA"/>
        
        {/* Détails des rouleaux - rainures (vue de dessus) */}
        <rect x="18" y="28" width="14" height="1" fill="#555555"/>
        <rect x="18" y="30" width="14" height="1" fill="#555555"/>
        <rect x="18" y="32" width="14" height="1" fill="#555555"/>
        <rect x="18" y="34" width="14" height="1" fill="#555555"/>
        <rect x="18" y="36" width="14" height="1" fill="#555555"/>
        
        <rect x="28" y="28" width="14" height="1" fill="#555555"/>
        <rect x="28" y="30" width="14" height="1" fill="#555555"/>
        <rect x="28" y="32" width="14" height="1" fill="#555555"/>
        <rect x="28" y="34" width="14" height="1" fill="#555555"/>
        <rect x="28" y="36" width="14" height="1" fill="#555555"/>
        
        {/* Phares avant - vue de dessus */}
        <circle cx="22" cy="12" r="2.5" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="38" cy="12" r="2.5" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="30" cy="10" r="2" fill="#FFD700"/>
        
        {/* Phares arrière - vue de dessus */}
        <circle cx="18" cy="20" r="2" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="42" cy="20" r="2" fill="#FFFFFF" stroke="#212121" strokeWidth="1"/>
        <circle cx="30" cy="22" r="1.5" fill="#FF4444"/>
        
        {/* Échappement - vue de dessus */}
        <rect x="45" y="18" width="3" height="8" fill="#333333"/>
        <ellipse cx="46.5" cy="16" rx="1.5" ry="2" fill="#666666"/>
        
        {/* Détails du châssis */}
        <rect x="16" y="18" width="8" height="3" fill="#333333"/>
        <rect x="26" y="18" width="8" height="3" fill="#333333"/>
        <rect x="36" y="18" width="8" height="3" fill="#333333"/>
        
        {/* Ombre sous le compacteur */}
        <ellipse cx="30" cy="38" rx="20" ry="3" fill="rgba(0,0,0,0.3)" opacity="0.5"/>
      </svg>
      </div>
    </>
  )
}
