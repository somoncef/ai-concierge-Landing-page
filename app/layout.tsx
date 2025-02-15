import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import { LanguageProvider } from "./contexts/language-context"
import Header from "./components/header"
import Footer from "./components/footer"
import LanguageToggle from "./components/language-toggle"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Restaurant Concierge",
  description: "Revolutionize Your Restaurant Experience with AI",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <LanguageToggle />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

