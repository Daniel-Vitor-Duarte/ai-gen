"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Calendar, ArrowRight } from "lucide-react"
import type { Article } from "@/lib/get-articles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"
import Particles from "react-tsparticles"

export default function BlogClient({ articles }: { articles: Article[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredArticles, setFilteredArticles] = useState(articles)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term)

    if (term) {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(term.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(term.toLowerCase()) ||
          article.category.toLowerCase().includes(term.toLowerCase()),
      )
      setFilteredArticles(filtered)
    } else {
      setFilteredArticles(articles)
    }
  }

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  if (!mounted) return null

  return (
    <>
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

      {/* Search Bar */}
      <div className="container mx-auto z-10 relative mb-12">
        <div className="w-full max-w-2xl mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar artigos..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Articles Section */}
      <div className="container mx-auto z-10 relative">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-400">Nenhum artigo encontrado</h3>
            <p className="mt-2 text-gray-500">Tente buscar por outro termo</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-800"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-2/3 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-600/20 text-blue-400 text-xs font-medium px-2.5 py-1 rounded">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{article.title}</h2>

                    <p className="text-gray-300 mb-6 flex-grow">{article.excerpt}</p>

                    <div className="mt-auto">
                      <Link
                        href={`/blog/artigos/${article.slug}`}
                        className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
                      >
                        Ler artigo completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
