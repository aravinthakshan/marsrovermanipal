import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mars Rover Manipal',
  description: 'Mars Rover Manipal - A multi-disciplinary student team designing and building next generation rovers for extraterrestrial exploration',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Mars Rover Manipal',
    description: 'A multi-disciplinary student team designing and building next generation rovers for extraterrestrial exploration',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Mars Rover Manipal Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mars Rover Manipal',
    description: 'A multi-disciplinary student team designing and building next generation rovers for extraterrestrial exploration',
    images: ['/preview.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
