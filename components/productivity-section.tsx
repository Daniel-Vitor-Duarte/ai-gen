"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

const stats = [
  {
    title: "IA Agentiva: Como a Nova Geração da Inteligência Artificial Está Transformando os Negócios",
    slug: "ia-agentiva-transformando-negocios",
    excerpt: "Entenda como a IA agentiva está revolucionando o mercado corporativo com agentes autônomos que tomam decisões, executam tarefas e aumentam a eficiência das empresas.",
    category: "Inteligência Artificial",
    image: "/images/ia-agentiva-negocios.png",

  },
  {
    category: "Atendimento",
    title: "Casos de Sucesso: IA Revolucionando o Atendimento ao Cliente",
    excerpt: " Conheça como grandes empresas estão usando inteligência artificial para revolucionar o atendimento e aumentar a satisfação dos clientes.",
    slug: "casos-sucesso-ia-atendimento-cliente",
    image: "/images/sucesso.jpg",
  },
  {
    category: "Automação de Marketing",
    title: "Como Implementar Automação de Marketing com Resultados Reais",
    excerpt: "Guia prático para implementar automação de marketing que gera leads qualificados e aumenta a conversão.",
    slug: "implementar-automacao-marketing-resultados",
    image: "/images/resultados.png",
  },
]

const plugin = Autoplay({ delay: 4000, stopOnInteraction: true })

export function ProductivitySection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const scrollTo = (index: number) => {
    carouselApi?.scrollTo(index)
  }

  useEffect(() => {
    if (!carouselApi) return

    const onSelect = () => {
      setActiveSlide(carouselApi.selectedScrollSnap())
    }

    carouselApi.on("select", onSelect)
    onSelect()

    return () => {
      carouselApi?.off("select", onSelect)
    }
  }, [carouselApi])

  return (
    <section className="w-full bg-black">
      <div className="container px-0 md:px-6">
        <div className="text-center relative backdrop-blur-sm bg-black/20 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-white mb-4">
            Aumente sua Produtividade com IA
          </h2>
          <p className="mx-auto max-w-[770px] text-gray-300 md:text-xl md:px-0 px-4">
            A Inteligência Artificial está revolucionando a forma como <br className="md:hidden" /> as empresas operam, oferecendo ganhos
            significativos em eficiência <br className="md:hidden" /> e produtividade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setCarouselApi} plugins={[plugin]}>
            <CarouselContent>
              {stats.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 bg-transparent">
                    <CardContent className="flex flex-col md:flex-row gap-8 p-6">
                      <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mix-blend-overlay" />
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                        />
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <span className="text-blue-500 text-sm font-medium mb-2">{item.category}</span>
                        <h3 className={`text-3xl font-semibold text-white mb-4 ${index == 1 ? 'max-w-[30rem]' : '' }`}>{item.title}</h3>
                        <p className="text-gray-300 mb-6 text-lg">{item.excerpt}</p>
                        <Link
                          href={`/blog/${item.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                        >
                          Ler mais →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Botões de navegação */}
          <div className="flex justify-center gap-1 mt-4">
            {stats.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-4 bg-blue-400" : "w-2 bg-gray-600"
                  }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
