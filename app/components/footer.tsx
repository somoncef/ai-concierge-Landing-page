import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary transition-colors">
                  {t("nav.features")}
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-primary transition-colors">
                  {t("nav.howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <p className="mb-2">Email: support@aiconcierge.com</p>
            <p className="mb-2">Phone: +1 (555) 123-4567</p>
            <p>Address: 123 AI Street, Tech City, 12345</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.newsletter")}</h3>
            <p className="mb-4">Stay updated with our latest features and news.</p>
            <form className="flex">
              <Input type="email" placeholder={t("footer.emailPlaceholder")} className="mr-2" />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t("footer.subscribe")}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center">
          <p>&copy; 2025 AI Restaurant Concierge. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}

