import { WhatsAppButton } from '@/components/WhatsAppButton'
import { HeroCarousel } from '@/components/HeroCarousel'
import { Hero } from '@/components/Hero'
import { StatGrid } from '@/components/StatCard'
import { ServiceGrid } from '@/components/ServiceCard'
import { ProjectGrid } from '@/components/ProjectCard'
import { TestimonialSlider } from '@/components/TestimonialCard'
import { CTASection } from '@/components/CTA'
import { getStatistics, getFeaturedServices, getFeaturedProjects, getFeaturedTestimonials } from '@/lib/content'

export default async function Home() {
  const [statistics, services, projects, testimonials] = await Promise.all([
    getStatistics(),
    getFeaturedServices(),
    getFeaturedProjects(),
    getFeaturedTestimonials()
  ])

  return (
    <>
      <main>
        {/* Carrousel Hero */}
        <HeroCarousel />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Statistiques */}
        <StatGrid 
          statistics={statistics}
          title="IVEQI en chiffres"
          description="Plus de deux décennies d'expertise au service de vos projets"
        />
        
        {/* Services */}
        <ServiceGrid 
          services={services}
          title="Nos Services"
          description="Des solutions complètes pour tous vos besoins en travaux, location et transport d'engins"
          showFeatured={true}
        />
        
        {/* Réalisations récentes */}
        <ProjectGrid 
          projects={projects}
          title="Nos Réalisations"
          description="Découvrez quelques-uns de nos projets récents qui témoignent de notre savoir-faire"
          showFeatured={true}
          limit={6}
        />
        
        {/* Témoignages */}
        <TestimonialSlider 
          testimonials={testimonials}
          title="Ce que disent nos clients"
          description="La satisfaction de nos clients est notre plus belle récompense"
        />
        
        {/* CTA Final */}
        <CTASection
          title="Prêt à concrétiser votre projet ?"
          description="Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit. Notre équipe d'experts est à votre disposition."
          primaryCTA={{
            text: "Demander un devis",
            href: "/contact"
          }}
          secondaryCTA={{
            text: "Nous appeler",
            href: `tel:+2250789020000`
          }}
          variant="inverted"
        />
      </main>
      <WhatsAppButton />
    </>
  )
}
