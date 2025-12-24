"use client"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Header from "./header"

function TypingText({ text, speed = 100, delay = 0, className = "" }: { text: string; speed?: number; delay?: number; className?: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    setDisplayedText("")
    let interval: NodeJS.Timeout | null = null
    let cursorInterval: NodeJS.Timeout | null = null
    
    const timeout = setTimeout(() => {
      let currentIndex = 0
      interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          if (interval) clearInterval(interval)
          // Blink cursor after typing is complete
          cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev)
          }, 530)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
      if (cursorInterval) clearInterval(cursorInterval)
    }
  }, [text, speed, delay])


  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="inline-block w-0.5 h-[1em] bg-white ml-1 animate-pulse">|</span>}
    </span>
  )
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <Header />
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/images/mountain-landscape.jpg"
          fill
          alt="Mountain landscape background"
          style={{ objectFit: "cover", transform: "scaleX(-1)" }}
        />
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <div className="text-left text-white max-w-5xl px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <TypingText text="Mars Rover Manipal" speed={80} delay={500} />
            </h1>
            <p className="text-base md:text-xl lg:text-3xl leading-relaxed mb-8">
              <TypingText text="Design to Discover." speed={100} delay={2500} />
            </p>
            <button className="px-4 py-2 border-2 border-white bg-transparent text-white text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
              GET STARTED
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
