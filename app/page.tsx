"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Hero from "@/components/hero"
import Featured from "@/components/featured"
import Promo from "@/components/promo"
import News from "@/components/news"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <Hero />
      <Featured />
      <Promo />
      <News />
      <Footer />
    </main>
  )
}
