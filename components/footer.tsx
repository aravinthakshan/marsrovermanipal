"use client"

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
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                >
                  marsrovermanipal@gmail.com
                </a>
                <div className="flex flex-col gap-2 text-neutral-300 text-xs sm:text-sm">
                  <div>Aarish Patel : <a href="tel:+919769572334" className="hover:text-white transition-colors">+91 9769572334</a></div>
                  <div>Kedar Vetal : <a href="tel:+919699975047" className="hover:text-white transition-colors">+91 96999 75047</a></div>
                  <div>Sameer Singh : <a href="tel:+919108077003" className="hover:text-white transition-colors">+91 91080 77003</a></div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="mb-2 uppercase text-white text-sm sm:text-base font-bold tracking-wide">ADDRESS</h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  Mars Rover Manipal, MAHE Automobile Workshop, MIT, Manipal, India - 576104
                </p>
              </div>

              {/* FOLLOW US */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="mb-2 uppercase text-white text-sm sm:text-base font-bold tracking-wide">FOLLOW US</h3>
                <div className="flex flex-col gap-2 text-neutral-300 text-xs sm:text-sm">
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Instagram</a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Twitter</a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Facebook</a>
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
