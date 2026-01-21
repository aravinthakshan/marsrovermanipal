"use client"

import Link from "next/link"

export default function Header() {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "THE TEAM", href: "/team" },
    { label: "COMPETITIONS", href: "/competitions" },
    { label: "IRC 2026", href: "/irc" },
    { label: "RESEARCH", href: "/research" },
    { label: "SPONSORSHIP", href: "/sponsorship" },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#") {
      e.preventDefault()
    }
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8 pointer-events-auto">
      <nav className="flex items-center justify-center">
        <div className="flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center pointer-events-auto">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm font-medium tracking-wide cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
