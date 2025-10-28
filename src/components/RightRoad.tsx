'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function RightRoad() {
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

  // Position verticale basée sur le scroll (de haut en bas)
  const translateY = 10 + (scrollProgress * 80) // De 10vh à 90vh
  return (
    <aside 
      className="fixed top-0 bottom-0 w-8 xl:w-10 hidden lg:block pointer-events-none z-30"
      style={{ right: '-4px' }}
      aria-hidden="true"
    >
      {/* Conteneur de la route */}
      <div className="iveqi-road h-full relative">
        {/* Pointillés de voie centrale */}
        <div className="iveqi-road-dash absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full" />
        
        {/* Liseré jaune en haut */}
        <div className="iveqi-road-cap absolute top-0 left-0 right-0 h-1.5" />
        
        {/* Liseré jaune en bas */}
        <div className="iveqi-road-cap absolute bottom-0 left-0 right-0 h-1.5" />
        
        {/* Tombereau en déplacement basé sur le scroll */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out" 
          style={{ 
            transform: `translateX(-50%) translateY(${translateY}vh)`,
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))'
          }}
          aria-hidden="true"
        >
          <Image
            src="/t𝐨𝐦𝐛𝐞𝐫𝐞𝐚𝐮𝐱.svg"
            alt="Tombereau articulé"
            width={24}
            height={48}
            className="drop-shadow-lg"
            priority={false}
            aria-hidden="true"
          />
        </div>
      </div>
    </aside>
  )
}
