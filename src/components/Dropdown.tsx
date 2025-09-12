'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavItem } from '@/lib/routes'

interface DropdownProps {
  item: NavItem
}

export function Dropdown({ item }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={cn(
          'flex items-center space-x-1 text-ink hover:text-brand-red transition-colors duration-200 font-medium',
          'hover:after:content-[""] hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:right-0',
          'hover:after:border-b-2 hover:after:border-brand-red',
          isOpen && 'text-brand-red'
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{item.name}</span>
        <ChevronDown 
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-ink hover:bg-gray-50 hover:text-brand-red transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
