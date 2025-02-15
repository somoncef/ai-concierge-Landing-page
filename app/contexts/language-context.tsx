"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"

type Language = "en" | "fr"

type Translations = {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    "nav.about": "About",
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.getStarted": "Get Started",

    "hero.title": "Revolutionize Your Restaurant Experience with AI",
    "hero.subtitle": "Engage customers with a multilingual AI agent that informs, entertains, and converts.",
    "hero.getStarted": "Get Started",
    "hero.bookDemo": "Book a Demo",

    "about.title": "About Our AI Concierge",
    "about.feature1.title": "Intelligent Interaction",
    "about.feature1.description":
      "Our AI agent uses advanced natural language processing to understand and respond to customer inquiries in a human-like manner.",
    "about.feature2.title": "Multilingual Support",
    "about.feature2.description":
      "Communicate with customers in multiple languages, breaking down language barriers and expanding your reach.",
    "about.feature3.title": "24/7 Availability",
    "about.feature3.description":
      "Provide instant responses to customer queries at any time of day, improving customer satisfaction and reducing workload on staff.",
    "about.feature4.title": "Seamless Integration",
    "about.feature4.description":
      "Easily integrate our AI concierge into your existing website or booking system with minimal technical expertise required.",

    "features.title": "Features & Benefits",
    "features.0.title": "Multilingual Support",
    "features.0.description": "Communicate with customers in their preferred language, expanding your global reach.",
    "features.1.title": "Reservation Management",
    "features.1.description": "Effortlessly handle bookings and manage reservations through natural conversation.",
    "features.2.title": "Interactive FAQ",
    "features.2.description": "Answer common questions about your restaurant, menu, and services instantly.",
    "features.3.title": "Real-time Updates",
    "features.3.description":
      "Keep customers informed about wait times, special offers, and menu changes in real-time.",

    "howItWorks.title": "How It Works",
    "howItWorks.step1.title": "Sign Up",
    "howItWorks.step1.description": "Create an account and provide basic information about your restaurant.",
    "howItWorks.step2.title": "Customize",
    "howItWorks.step2.description": "Tailor the AI agent to match your brand voice and restaurant-specific details.",
    "howItWorks.step3.title": "Integrate",
    "howItWorks.step3.description": "Add a simple code snippet to your website to embed the AI concierge.",
    "howItWorks.step4.title": "Go Live",
    "howItWorks.step4.description": "Launch your AI-powered concierge and start engaging with customers instantly.",

    "cta.title": "Ready to Transform Your Restaurant Experience?",
    "cta.description": "Join the AI revolution and take your customer service to the next level.",
    "cta.getStarted": "Get Started Today",
    "cta.bookDemo": "Book a Demo",

    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.newsletter": "Newsletter",
    "footer.subscribe": "Subscribe",
    "footer.emailPlaceholder": "Your email",
    "footer.rights": "All rights reserved",

    languageToggle: "FR",
  },
  fr: {
    "nav.about": "À propos",
    "nav.features": "Fonctionnalités",
    "nav.howItWorks": "Comment ça marche",
    "nav.getStarted": "Commencer",

    "hero.title": "Révolutionnez l'Expérience de Votre Restaurant avec l'IA",
    "hero.subtitle": "Engagez vos clients avec un agent IA multilingue qui informe, divertit et convertit.",
    "hero.getStarted": "Commencer",
    "hero.bookDemo": "Réserver une Démo",

    "about.title": "À Propos de Notre Concierge IA",
    "about.feature1.title": "Interaction Intelligente",
    "about.feature1.description":
      "Notre agent IA utilise un traitement avancé du langage naturel pour comprendre et répondre aux demandes des clients de manière humaine.",
    "about.feature2.title": "Support Multilingue",
    "about.feature2.description":
      "Communiquez avec les clients dans plusieurs langues, en brisant les barrières linguistiques et en élargissant votre portée.",
    "about.feature3.title": "Disponibilité 24/7",
    "about.feature3.description":
      "Fournissez des réponses instantanées aux requêtes des clients à tout moment, améliorant la satisfaction client et réduisant la charge de travail du personnel.",
    "about.feature4.title": "Intégration Transparente",
    "about.feature4.description":
      "Intégrez facilement notre concierge IA à votre site web ou système de réservation existant avec une expertise technique minimale.",

    "features.title": "Fonctionnalités et Avantages",
    "features.0.title": "Support Multilingue",
    "features.0.description":
      "Communiquez avec les clients dans leur langue préférée, élargissant votre portée mondiale.",
    "features.1.title": "Gestion des Réservations",
    "features.1.description": "Gérez facilement les réservations grâce à une conversation naturelle.",
    "features.2.title": "FAQ Interactive",
    "features.2.description": "Répondez instantanément aux questions courantes sur votre restaurant, menu et services.",
    "features.3.title": "Mises à Jour en Temps Réel",
    "features.3.description":
      "Informez les clients des temps d'attente, des offres spéciales et des changements de menu en temps réel.",

    "howItWorks.title": "Comment Ça Marche",
    "howItWorks.step1.title": "Inscription",
    "howItWorks.step1.description": "Créez un compte et fournissez des informations de base sur votre restaurant.",
    "howItWorks.step2.title": "Personnalisation",
    "howItWorks.step2.description":
      "Adaptez l'agent IA pour qu'il corresponde à la voix de votre marque et aux détails spécifiques de votre restaurant.",
    "howItWorks.step3.title": "Intégration",
    "howItWorks.step3.description": "Ajoutez un simple extrait de code à votre site web pour intégrer le concierge IA.",
    "howItWorks.step4.title": "Mise en Service",
    "howItWorks.step4.description":
      "Lancez votre concierge alimenté par l'IA et commencez à interagir avec les clients instantanément.",

    "cta.title": "Prêt à Transformer l'Expérience de Votre Restaurant ?",
    "cta.description": "Rejoignez la révolution de l'IA et élevez votre service client au niveau supérieur.",
    "cta.getStarted": "Commencer Maintenant",
    "cta.bookDemo": "Réserver une Démo",

    "footer.quickLinks": "Liens Rapides",
    "footer.contact": "Contact",
    "footer.newsletter": "Newsletter",
    "footer.subscribe": "S'abonner",
    "footer.emailPlaceholder": "Votre email",
    "footer.rights": "Tous droits réservés",

    languageToggle: "EN",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

