"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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

    // Refresh ScrollTrigger on navigation/mount
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    // Cleanup function
    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
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
