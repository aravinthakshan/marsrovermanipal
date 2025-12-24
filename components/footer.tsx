"use client"

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-12 h-full w-full flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {/* CONTACT US */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="mb-2 uppercase text-white text-sm sm:text-base font-bold tracking-wide">CONTACT US</h3>
                <a
                  href="mailto:marsrovermanipal@gmail.com"
                  className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                >
                  <Mail className="w-4 h-4" />
                  marsrovermanipal@gmail.com
                </a>
                <div className="flex flex-col gap-2 text-neutral-300 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Aarish Patel : <a href="tel:+919769572334" className="hover:text-white transition-colors">+91 9769572334</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Kedar Vetal : <a href="tel:+919699975047" className="hover:text-white transition-colors">+91 96999 75047</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Sameer Singh : <a href="tel:+919108077003" className="hover:text-white transition-colors">+91 91080 77003</a></span>
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="mb-2 uppercase text-white text-sm sm:text-base font-bold tracking-wide">ADDRESS</h3>
                <a
                  href="https://maps.app.goo.gl/gqBbFr8yTVhM9Ccz7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-neutral-300 hover:text-white transition-colors text-xs sm:text-sm leading-relaxed"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Mars Rover Manipal, MAHE Automobile Workshop, MIT, Manipal, India - 576104</span>
                </a>
              </div>

              {/* FOLLOW US */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="mb-2 uppercase text-white text-sm sm:text-base font-bold tracking-wide">FOLLOW US</h3>
                <div className="flex flex-col gap-2 text-neutral-300 text-xs sm:text-sm">
                  <a 
                    href="https://in.linkedin.com/company/marsrovermanipal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/marsrovermanipal/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/MarsRoverManipal/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a 
                    href="https://www.youtube.com/marsrovermanipal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mt-8">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] text-white font-bold tracking-tight">
                TEAM
              </h1>
              <p className="text-white text-xs sm:text-sm">©copyright</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
