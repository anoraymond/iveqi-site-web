'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { ContactForm as ContactFormType } from '@/lib/types'

// Schéma de validation Zod
const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(8, 'Le numéro de téléphone doit contenir au moins 8 caractères'),
  company: z.string().optional(),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  consent: z.boolean().refine(val => val === true, 'Vous devez accepter les conditions')
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  className?: string
  onSuccess?: () => void
}

export function ContactForm({ className = '', onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const services = [
    'Travaux Agricoles',
    'Travaux Miniers',
    'Travaux Publics',
    'Location d\'Engins',
    'Transport d\'Engins',
    'Autre'
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulation d'envoi - à remplacer par l'action serveur
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Ici, vous appelleriez votre action serveur
      // await submitContactForm(data)
      
      setSubmitStatus('success')
      reset()
      onSuccess?.()
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <Card className={className}>
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-brand-ink mb-2">
            Message envoyé avec succès !
          </h3>
          <p className="text-gray-600 mb-6">
            Nous vous recontacterons dans les plus brefs délais.
          </p>
          <Button 
            onClick={() => setSubmitStatus('idle')}
            variant="outline"
          >
            Envoyer un autre message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-brand-ink">
          Demandez votre devis
        </CardTitle>
        <p className="text-gray-600">
          Remplissez ce formulaire et nous vous recontacterons rapidement.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Informations personnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                {...register('firstName')}
                className={errors.firstName ? 'border-red-500' : ''}
                placeholder="Votre prénom"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.firstName.message}
                </p>
              )}
            </div>
            
            <div>
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                {...register('lastName')}
                className={errors.lastName ? 'border-red-500' : ''}
                placeholder="Votre nom"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>
            
            <div>
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
                placeholder="+225 XX XX XX XX"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Entreprise */}
          <div>
            <Label htmlFor="company">Entreprise (optionnel)</Label>
            <Input
              id="company"
              {...register('company')}
              placeholder="Nom de votre entreprise"
            />
          </div>

          {/* Service */}
          <div>
            <Label htmlFor="service">Service souhaité *</Label>
            <select
              id="service"
              {...register('service')}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Sélectionnez un service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              {...register('message')}
              className={errors.message ? 'border-red-500' : ''}
              placeholder="Décrivez votre projet ou vos besoins..."
              rows={5}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Consentement */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              {...register('consent')}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm text-gray-600">
              J'accepte que mes données soient utilisées pour me recontacter concernant ma demande. *
            </Label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.consent.message}
            </p>
          )}

          {/* Message d'erreur global */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                Une erreur est survenue lors de l'envoi. Veuillez réessayer.
              </p>
            </div>
          )}

          {/* Bouton de soumission */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-yellow text-brand-ink hover:bg-brand-yellow/90 font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              'Envoyer ma demande'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
