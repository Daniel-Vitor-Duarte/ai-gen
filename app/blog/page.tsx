import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { getAllArticles } from "@/lib/get-articles"
import BlogClient from "./client"

// Make this a Server Component to fetch articles at build time
export default async function BlogPage() {
  // Fetch articles from the artigos directory
  const articles = await getAllArticles()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 mt-16">
        <div className="container mx-auto z-10 relative">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-center">Blog de Automação Inteligente</h1>
            <p className="text-xl text-center max-w-3xl mb-8 text-gray-300">
              Artigos, dicas e estratégias sobre automação de vendas, prospecção e atendimento inteligente
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative w-full py-12 px-4">
        <BlogClient articles={articles} />
      </section>

      {/* Newsletter Section */}
      <section className="relative w-full py-20 px-4 bg-gray-900/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto max-w-4xl z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-6">Inscreva-se na Nossa Newsletter</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Receba as últimas novidades, artigos e dicas sobre automação de vendas diretamente no seu email.
            </p>

            <div className="flex flex-col sm:flex-row w-full max-w-lg gap-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md whitespace-nowrap">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
