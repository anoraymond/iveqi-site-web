'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { navigationItems } from '@/lib/routes'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)
  const lastFocusableRef = useRef<HTMLButtonElement>(null)

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
      firstFocusableRef.current?.focus()
    } else {
      document.documentElement.style.overflow = 'unset'
    }

    return () => {
      document.documentElement.style.overflow = 'unset'
    }
  }, [isOpen])

  // Focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab') {
        const focusableElements = drawerRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        
        if (!focusableElements?.length) return

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img 
            src="/images/logo/logo-Iveqi.png" 
            alt="IVEQI - Ivoire Équipements" 
            className="h-8 w-auto"
          />
          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="p-2 text-brand-ink hover:text-brand-red transition-colors duration-200 focus-visible-ring rounded-md"
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* CTA en haut */}
        <div className="p-4 border-b border-gray-200">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full bg-brand-yellow text-black rounded-md px-4 py-3 font-semibold hover:bg-[#E09A18] focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:ring-offset-2 inline-block text-center transition-colors duration-200"
          >
            Demander un devis
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1 px-4">
            {navigationItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <div className="space-y-1">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 text-brand-ink hover:bg-brand-yellow hover:text-black transition-colors duration-200 font-medium px-3 rounded-md"
                    >
                      {item.label}
                    </Link>
                    <div className="space-y-1 ml-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-brand-ink hover:bg-brand-yellow hover:text-black transition-colors duration-200 px-3 rounded-md"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-brand-ink hover:bg-brand-yellow hover:text-black transition-colors duration-200 font-medium px-3 rounded-md"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
