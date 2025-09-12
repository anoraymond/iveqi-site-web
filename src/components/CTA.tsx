import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

interface CTAProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  icon?: 'arrow' | 'phone' | 'mail'
  className?: string
  onClick?: () => void
}

export function CTA({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  children, 
  icon = 'arrow',
  className = '',
  onClick 
}: CTAProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-brand-yellow text-brand-ink hover:bg-brand-yellow/90 focus:ring-brand-yellow",
    secondary: "bg-brand-red text-white hover:bg-brand-deep focus:ring-brand-red"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  }
  
  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5", 
    lg: "h-6 w-6"
  }
  
  const getIcon = () => {
    switch (icon) {
      case 'phone':
        return <Phone className={iconSizes[size]} />
      case 'mail':
        return <Mail className={iconSizes[size]} />
      default:
        return <ArrowRight className={iconSizes[size]} />
    }
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <Button asChild className={classes}>
        <Link href={href}>
          {children}
          {getIcon()}
        </Link>
      </Button>
    )
  }
  
  return (
    <Button 
      onClick={onClick}
      className={classes}
    >
      {children}
      {getIcon()}
    </Button>
  )
}

// Composant CTA Section pour les bandeaux
interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  variant?: 'default' | 'inverted'
  className?: string
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  className = ''
}: CTASectionProps) {
  const isInverted = variant === 'inverted'
  
  return (
    <section className={`py-16 ${isInverted ? 'bg-brand-ink text-white' : 'bg-neutral-light'} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isInverted ? 'text-white' : 'text-brand-ink'}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${isInverted ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTA 
              variant="primary" 
              size="lg" 
              href={primaryCTA.href}
            >
              {primaryCTA.text}
            </CTA>
            
            {secondaryCTA && (
              <CTA 
                variant="secondary" 
                size="lg" 
                href={secondaryCTA.href}
                icon="phone"
              >
                {secondaryCTA.text}
              </CTA>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Composant CTA Card pour les cartes
interface CTACardProps {
  title: string
  description: string
  ctaText: string
  ctaHref: string
  icon?: React.ReactNode
  className?: string
}

export function CTACard({
  title,
  description,
  ctaText,
  ctaHref,
  icon,
  className = ''
}: CTACardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ${className}`}>
      {icon && (
        <div className="mb-4 text-brand-yellow">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-brand-ink mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <CTA variant="primary" href={ctaHref}>
        {ctaText}
      </CTA>
    </div>
  )
}
