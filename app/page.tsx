import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import FeaturesSection from "./components/features-section"
import HowItWorksSection from "./components/how-it-works-section"
import CTASection from "./components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  )
}

