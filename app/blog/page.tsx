import { MainNav } from "@/components/main-nav"
import { getAllArticles } from "@/lib/get-articles"
import BlogClient from "./client"
import { Newsletter } from "../components/Newsletter/newsletter"

// Make this a Server Component to fetch articles at build time
export default async function BlogPage() {
  // Fetch articles from the artigos directory
  const articles = await getAllArticles()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="relative w-full pt-12 px-4 mt-16">
        <div className="container mx-auto z-10 relative">
          <div className="flex flex-col items-center ">
            <h1 className="text-5xl font-bold mb-4 text-center">Blog</h1>
            <p className="text-xl text-center max-w-3xl  text-gray-300">
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
      <section>
        <Newsletter />
      </section>
    </div>
  )
}
