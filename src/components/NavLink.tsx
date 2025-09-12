'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'relative text-ink hover:text-brand-red transition-colors duration-200 font-medium',
        'hover:after:content-[""] hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:right-0',
        'hover:after:border-b-2 hover:after:border-brand-red',
        isActive && 'text-brand-red after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:border-b-2 after:border-brand-red',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
