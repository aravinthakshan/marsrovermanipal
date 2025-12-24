"use client"

export default function Header() {
  const navItems = [
    "HOME",
    "THE TEAM",
    "COMPETITIONS",
    "RESEARCH",
    "OUR ALUMNI",
    "SPONSORSHIP",
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8">
      <nav className="flex items-center justify-center">
        <div className="flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={handleClick}
              className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm font-medium tracking-wide cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
