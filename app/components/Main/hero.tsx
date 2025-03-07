"use client"

import { useEffect, useState } from "react"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"
import Particles from "react-tsparticles"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { BenefitsSection } from "@/components/benefits-section"
import { AutomationSection } from "@/components/automation-section"
import { ProductivitySection } from "@/components/productivity-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  const scrollToNextSection = () => {
    const benefitsSection = document.querySelector("#benefits")
    benefitsSection?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <main className="flex flex-col w-full">
      <div className="relative lg:pt-[8rem] pt-[5.5rem] w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        <MainNav />
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
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
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
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
          className="absolute inset-0 max-h-screen"
        />
        <div className="relative z-10 container">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white max-w-[56rem]">
              Automação Inteligente para Escalar suas Vendas
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Prospecção automatizada, atendimento inteligente e gestão eficiente para transformar leads em clientes.
            </p>
            <Button
              size="lg"
              className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 lg:py-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 lg:text-[1.5rem] "
            >
              Solicitar Demonstração
            </Button>
          </div>
        </div>
        <button
          onClick={scrollToNextSection}
          className=" mt-12 animate-bounce cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10"
          aria-label="Scroll to benefits section"
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </button>
      </div>
      <BenefitsSection />
      <AutomationSection />
      <ProductivitySection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

