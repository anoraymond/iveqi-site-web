import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, FileText, User, MessageCircle } from 'lucide-react'

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'modern-primary' | 'modern-secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  icon?: 'arrow' | 'phone' | 'mail' | 'file' | 'user' | 'message'
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
  const baseClasses = "inline-flex items-center justify-center gap-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
  
  const variants = {
    primary: "bg-brand-yellow text-brand-ink hover:bg-brand-yellow/90 focus:ring-brand-yellow shadow-lg hover:shadow-xl",
    secondary: "bg-brand-red text-white hover:bg-brand-deep focus:ring-brand-red shadow-lg hover:shadow-xl",
    'modern-primary': "bg-gradient-to-r from-brand-yellow to-[#E09A18] text-brand-ink hover:from-[#E09A18] hover:to-brand-yellow focus:ring-brand-yellow shadow-lg hover:shadow-2xl rounded-full border-2 border-brand-yellow/20",
    'modern-secondary': "bg-gradient-to-r from-brand-red to-[#B71C1C] text-white hover:from-[#B71C1C] hover:to-brand-red focus:ring-brand-red shadow-lg hover:shadow-2xl rounded-full border-2 border-brand-red/20"
  }
  
  const sizes = {
    sm: "px-6 py-3 text-sm rounded-full",
    md: "px-8 py-4 text-base rounded-full", 
    lg: "px-10 py-5 text-lg rounded-full"
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
      case 'file':
        return <FileText className={iconSizes[size]} />
      case 'user':
        return <User className={iconSizes[size]} />
      case 'message':
        return <MessageCircle className={iconSizes[size]} />
      default:
        return <ArrowRight className={iconSizes[size]} />
    }
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <Button asChild className={classes}>
        <Link href={href}>
          {getIcon()}
          {children}
        </Link>
      </Button>
    )
  }
  
  return (
    <Button 
      onClick={onClick}
      className={classes}
    >
      {getIcon()}
      {children}
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
          
          {/* Description améliorée avec icônes */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex items-center gap-4 text-lg">
              <div className={`p-3 rounded-full ${isInverted ? 'bg-brand-yellow/20' : 'bg-brand-yellow/10'}`}>
                <FileText className={`h-6 w-6 ${isInverted ? 'text-brand-yellow' : 'text-brand-red'}`} />
              </div>
              <span className={`font-medium ${isInverted ? 'text-gray-200' : 'text-gray-700'}`}>
                Devis personnalisé et gratuit
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-lg">
              <div className={`p-3 rounded-full ${isInverted ? 'bg-brand-yellow/20' : 'bg-brand-yellow/10'}`}>
                <User className={`h-6 w-6 ${isInverted ? 'text-brand-yellow' : 'text-brand-red'}`} />
              </div>
              <span className={`font-medium ${isInverted ? 'text-gray-200' : 'text-gray-700'}`}>
                Équipe d'experts à votre disposition
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-lg">
              <div className={`p-3 rounded-full ${isInverted ? 'bg-brand-yellow/20' : 'bg-brand-yellow/10'}`}>
                <MessageCircle className={`h-6 w-6 ${isInverted ? 'text-brand-yellow' : 'text-brand-red'}`} />
              </div>
              <span className={`font-medium ${isInverted ? 'text-gray-200' : 'text-gray-700'}`}>
                Contactez-nous dès aujourd'hui
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTA 
              variant="modern-primary" 
              size="lg" 
              href={primaryCTA.href}
              icon="file"
            >
              {primaryCTA.text}
            </CTA>
            
            {secondaryCTA && (
              <CTA 
                variant="modern-secondary" 
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
