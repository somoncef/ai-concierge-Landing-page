"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/language-context"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <Button
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 flex items-center justify-center text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90"
    >
      {t("languageToggle")}
    </Button>
  )
}

