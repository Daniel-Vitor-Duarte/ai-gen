import { Button } from "@/components/ui/button"

export function Newsletter() {
  return (
    <section className="relative z-10 w-full py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">Inscreva-se na Nossa Newsletter</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-[30rem]">
            Receba os últimos artigos e novidades sobre automação e IA diretamente no seu email.
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-lg gap-4">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-md whitespace-nowrap h-full">
              Inscrever-se
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
