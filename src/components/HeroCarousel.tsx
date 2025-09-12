'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const bannerImages = [
  {
    src: '/images/banner/travaux-agricole-banner.jpg',
    alt: 'Travaux Agricoles - IVEQI',
    title: 'Travaux Agricoles',
    description: 'Expertise en travaux agricoles avec nos engins spécialisés'
  },
  {
    src: '/images/banner/travaux-public-banner.jpg',
    alt: 'Travaux Publics - IVEQI',
    title: 'Travaux Publics',
    description: 'Infrastructures et aménagements pour le développement'
  },
  {
    src: '/images/banner/location-engin-banner.jpg',
    alt: 'Location d\'Engins - IVEQI',
    title: 'Location d\'Engins',
    description: 'Parc matériel moderne disponible avec ou sans conducteur'
  },
  {
    src: '/images/banner/transport-engin-banner.jpg',
    alt: 'Transport d\'Engins - IVEQI',
    title: 'Transport d\'Engins',
    description: 'Transport sécurisé de vos engins lourds'
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
        aria-label="Image suivante"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-[#F9A825] scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenu du slide actuel */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#F9A825]">
            {bannerImages[currentSlide].title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {bannerImages[currentSlide].description}
          </p>
        </div>
      </div>
    </section>
  )
}
