"use client"

import { useEffect, useState } from "react"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"
import Particles from "react-tsparticles"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça mais sobre a AIG e nossa missão de automatizar vendas com inteligência.",
  openGraph: {
    title: "Sobre Nós",
    description: "Conheça mais sobre a AIG e nossa missão de automatizar vendas com inteligência.",
    url: "/sobre-nos",
  },
}

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="relative flex-1">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#f8fafc",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#1e293b",
              },
              links: {
                color: "#1e293b",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}

