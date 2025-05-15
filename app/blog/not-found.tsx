import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="network-bg w-full h-full opacity-20"></div>
      </div>

      <div className="text-center z-10">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Artigo Não Encontrado</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
          O artigo que você está procurando não existe ou foi removido.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
          <Link href="/blog">Voltar para o Blog</Link>
        </Button>
      </div>
    </div>
  )
}
