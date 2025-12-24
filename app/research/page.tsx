import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ResearchPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        <PrinciplesSection />
        <Footer />
      </div>
    </main>
  )
}

