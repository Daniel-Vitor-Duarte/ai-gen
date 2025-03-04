"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { TrendingUp, LineChart, DollarSign, ExternalLink } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
// import { ToolsCarousel } from "./tools-carousel"

const stats = [
  {
    icon: TrendingUp,
    stat: "4.8x",
    title: "Aumento de Produtividade",
    description: "Setores que adotam IA registram aumento de produtividade de até 4.8x",
    source: "PwC",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: LineChart,
    stat: "72%",
    title: "Prioridade Executiva",
    description: "dos executivos brasileiros priorizam IA para aumentar a produtividade",
    source: "Bain & Company",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: DollarSign,
    stat: "↓ 40%",
    title: "Redução de Custos",
    description: "Automação reduz custos operacionais e melhora eficiência",
    source: "Interno",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const plugin = Autoplay({ delay: 4000, stopOnInteraction: true })

export function ProductivitySection() {
  return (
    <section className="w-full bg-black py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 relative backdrop-blur-sm bg-black/20 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Aumente sua Produtividade com IA
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            A Inteligência Artificial está revolucionando a forma como as empresas operam, oferecendo ganhos
            significativos em eficiência e produtividade.
          </p>
        </div>

        <Carousel plugins={[plugin]} className="max-w-6xl mx-auto">
          <CarouselContent>
            {stats.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 bg-transparent">
                  <CardContent className="flex flex-col md:flex-row gap-8 p-6">
                    <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mix-blend-overlay" />
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <div className="mb-6 inline-flex items-center">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 mr-4">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-white">{item.stat}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{item.description}</p>
                      <Link
                        href={
                          item.source === "PwC"
                            ? "https://www.pwc.com.br/pt/sala-de-imprensa/release/setores-mais-expostos-a-IA-registram-aumento-de-quase-cinco-vezes-na-produtividade-do-trabalho-diz-PwC.html?utm_source=chatgpt.com"
                            : item.source === "Bain & Company"
                              ? "https://www.bain.com/pt-br/about/media-center/press-releases/south-america/2023/72-dos-executivos-brasileiros-buscam-aumentar-a-produtividade-de-seus-times-com-inteligencia-artificial-revela-pesquisa-da-bain/?utm_source=chatgpt.com"
                              : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                      >
                        Fonte: {item.source}
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* <ToolsCarousel /> */}
      </div>
    </section>
  )
}

