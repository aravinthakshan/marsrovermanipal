"use client"

import { useEffect } from "react"

export function ResearchTheme() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
    return () => {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return null
}

