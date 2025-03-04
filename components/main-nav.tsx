"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const mainNavItems = [
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/casos-de-uso", label: "Casos de Uso" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
]

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: "twitter.svg" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin.svg" },
  { href: "https://instagram.com", label: "Instagram", icon: "instagram.svg" },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState<"pt" | "en">("pt")

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-black/50 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-white hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-gray-900/95 backdrop-blur-xl">
              <div className="flex flex-col space-y-4 pt-6">
                {mainNavItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="mt-4 border-t border-gray-800 pt-4">
                  <div className="flex items-center space-x-4">
                    {socialLinks.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="text-white hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{label}</span>
                        <img src={`/social/${label.toLowerCase()}.svg`} alt={label} className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="text-xl font-bold text-white">
            Logo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {mainNavItems.map(({ href, label }) => (
            <div key={href} className="relative group">
              <Link href={href} className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                {label}
              </Link>
              {href !== "/sobre-nos" && href !== "/contato" && (
                <div className="absolute hidden group-hover:block -top-12 left-1/2 -translate-x-1/2 bg-black/90 rounded-lg p-2 z-50">
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    alt="Em construção"
                    width={30}
                    height={30}
                    className="opacity-80"
                  />
                  <span className="text-xs text-white whitespace-nowrap">Em construção</span>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{label}</span>
                <img src={`/social/${label.toLowerCase()}.svg`} alt={label} className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={toggleLanguage}>
            <Globe className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

