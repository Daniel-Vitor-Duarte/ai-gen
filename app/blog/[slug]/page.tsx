"use client"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export default function BlogPost({ params }: { params: { slug: string } }) {
  useEffect(() => {
    // Redirect to the article page
    window.location.href = `/blog/artigos/${params.slug}`
  }, [params.slug])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <MainNav />
      <div className="container mx-auto text-center mt-32 px-4">
        <h1 className="text-4xl font-bold mb-6">Redirecionando...</h1>
        <p className="text-xl mb-8">Você será redirecionado para o artigo em instantes.</p>
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => (window.location.href = `/blog/artigos/${params.slug}`)}
        >
          Ir para o artigo
        </Button>
      </div>
    </div>
  )
}
