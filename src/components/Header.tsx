'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import { navigationItems } from '@/lib/routes'
import { MobileDrawer } from '@/components/MobileDrawer'
import { ConstructionVehicle } from '@/components/ConstructionVehicle'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header 
        className="fixed inset-x-0 top-0 z-50 bg-white text-black shadow-md"
      >
        {/* Barre jaune avec animation d'engin */}
        <div className="relative bg-[#F9A825] h-2 w-full overflow-hidden">
          <ConstructionVehicle className="opacity-90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="/images/logo/logo-Iveqi.png" 
                alt="IVEQI - Ivoire Équipements" 
                className="h-20 w-auto"
              />
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.href} className="relative">
                  {item.children ? (
                    <div ref={dropdownRef} className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`navlink font-medium text-brand-ink hover:text-brand-ink flex items-center space-x-1 ${
                          isActive(item.href) ? 'text-brand-yellow' : ''
                        }`}
                        data-active={isActive(item.href)}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-brand-ink hover:bg-gray-50 hover:text-brand-red transition-colors duration-200"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`navlink font-medium text-brand-ink hover:text-brand-ink ${
                        isActive(item.href) ? 'text-brand-yellow' : ''
                      }`}
                      data-active={isActive(item.href)}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA et Menu Mobile */}
            <div className="flex items-center space-x-4">
              {/* CTA Desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-flex bg-brand-yellow text-black rounded-md px-4 py-2 font-semibold hover:bg-[#E09A18] focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:ring-offset-2 transition-colors duration-200"
              >
                Demander un devis
              </Link>

              {/* Menu Mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-brand-ink hover:text-brand-red transition-colors duration-200 focus-visible-ring rounded-md"
                aria-label="Ouvrir le menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}