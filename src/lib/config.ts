// Configuration du site IVEQI
export const siteConfig = {
  name: "IVEQI - Ivoire Équipements",
  description: "Entreprise certifiée ISO 9001:2015 spécialisée dans les travaux agricoles, miniers, publics, location et transport d'engins en Côte d'Ivoire.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  
  // Contact
  phone: "+225 07 89 02 00 00",
  email: "contact@iveqi.com",
  whatsapp: "+2250789020000",
  
  // Adresse
  address: {
    street: "PK 23 autoroute nord, sortie ALLOKOI – Direction PALMAFRIQUE",
    postalCode: "01 BP 5120",
    city: "Abidjan 01",
    country: "Côte d'Ivoire"
  },
  
  // Réseaux sociaux
  social: {
    whatsapp: "https://wa.me/2250789020000",
  },
  
  // Certification
  certification: {
    iso: "ISO 9001:2015",
    certifier: "Bureau Veritas"
  }
} as const;
