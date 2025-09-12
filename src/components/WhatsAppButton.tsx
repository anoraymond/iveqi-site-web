'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { siteConfig } from '@/lib/config'

interface WhatsAppButtonProps {
  className?: string
  showOnPages?: string[]
  hideOnPages?: string[]
}

export function WhatsAppButton({ 
  className = '',
  showOnPages = [],
  hideOnPages = []
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    // Détecter la page actuelle
    setCurrentPath(window.location.pathname)
    
    // Afficher le bouton après un délai
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Afficher après 3 secondes

    return () => clearTimeout(timer)
  }, [])

  // Vérifier si le bouton doit être affiché sur cette page
  const shouldShow = () => {
    if (hideOnPages.length > 0 && hideOnPages.includes(currentPath)) {
      return false
    }
    if (showOnPages.length > 0 && !showOnPages.includes(currentPath)) {
      return false
    }
    return true
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour, je suis intéressé(e) par vos services. Pouvez-vous me renseigner ?`
    )
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  if (!isVisible || !shouldShow()) {
    return null
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Message d'aide */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-brand-ink text-sm">
              Besoin d'aide ?
            </h4>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Contactez-nous directement sur WhatsApp pour une réponse rapide !
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
          >
            Ouvrir WhatsApp
          </button>
        </div>
      )}

      {/* Bouton principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Indicateur de notification */}
        <div className="absolute -top-1 -right-1 bg-brand-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          !
        </div>
      </button>

      {/* Tooltip au survol */}
      <div className="absolute bottom-full right-0 mb-2 bg-brand-ink text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Contactez-nous sur WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-ink"></div>
      </div>
    </div>
  )
}

// Composant pour les liens WhatsApp dans le contenu
interface WhatsAppLinkProps {
  children: React.ReactNode
  message?: string
  className?: string
}

export function WhatsAppLink({ 
  children, 
  message = "Bonjour, je suis intéressé(e) par vos services.",
  className = ""
}: WhatsAppLinkProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      <span>{children}</span>
    </button>
  )
}

// Composant pour afficher le numéro WhatsApp
export function WhatsAppContact() {
  return (
    <div className="flex items-center space-x-2 text-green-600">
      <MessageCircle className="h-5 w-5" />
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium hover:underline"
      >
        {siteConfig.phone}
      </a>
    </div>
  )
}
