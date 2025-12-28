import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { ResearchTheme } from "@/components/research-theme"
import "../research-globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  title: "Research — Mars Rover Manipal",
  description:
    "We publish papers and present them at some of the world's top conferences and research journals.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Research — Mars Rover Manipal",
    description: "We publish papers and present them at some of the world's top conferences and research journals.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Mars Rover Manipal Research",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research — Mars Rover Manipal",
    description: "We publish papers and present them at some of the world's top conferences and research journals.",
    images: ["/preview.png"],
  },
}

export default function ResearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ResearchTheme />
      <div
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} min-h-screen`}
        style={{ fontFamily: 'var(--font-ibm-plex-sans), sans-serif' }}
      >
        <div className="noise-overlay fixed inset-0 pointer-events-none z-[1000] opacity-[0.03]" aria-hidden="true" />
        {children}
      </div>
    </>
  )
}

