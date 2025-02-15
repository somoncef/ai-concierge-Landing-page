"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"
import { useLanguage } from "../contexts/language-context"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          AI Concierge
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            {t("nav.features")}
          </Link>
          <Link href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
            {t("nav.howItWorks")}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            {t("nav.getStarted")}
          </Button>
        </div>
      </div>
    </header>
  )
}

