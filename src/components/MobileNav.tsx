'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/NavLink'
import { Dropdown } from '@/components/Dropdown'
import { navigation } from '@/lib/routes'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus trap
      const focusableElements = navRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements?.[0] as HTMLElement
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus()
              e.preventDefault()
            }
          }
        }
      }

      document.addEventListener('keydown', handleTabKey)
      firstElement?.focus()

      return () => {
        document.removeEventListener('keydown', handleTabKey)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        ref={navRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-ink">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-ink hover:text-brand-red transition-colors duration-200"
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-2 px-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {item.name}
                    </div>
                    <div className="space-y-1 ml-4">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-ink hover:text-brand-red transition-colors duration-200"
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-ink hover:text-brand-red transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="p-4 border-t border-gray-200">
          <Button 
            asChild 
            className="w-full bg-brand-yellow text-black hover:bg-[#E09A18] focus:ring-2 focus:ring-brand-deep focus:ring-offset-2 font-semibold"
          >
            <Link href="/contact" onClick={onClose}>
              Demander un devis
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
