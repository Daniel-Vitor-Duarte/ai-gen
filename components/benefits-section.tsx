import { Bot, Users, Share2, TrendingDown } from "lucide-react"

const benefits = [
  {
    icon: Bot,
    title: "Prospecção com IA",
    description: "Encontre e qualifique leads automaticamente com nossa tecnologia de inteligência artificial avançada",
  },
  {
    icon: Users,
    title: "Atendimento Híbrido",
    description: "IA + equipe humana trabalhando em conjunto para garantir máxima eficiência no atendimento",
  },
  {
    icon: Share2,
    title: "Automação e Integração",
    description: "CRM, WhatsApp, site e redes sociais perfeitamente sincronizados em uma única plataforma",
  },
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    description: "Automatize tarefas repetitivas e reduza significativamente seus custos operacionais",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="w-full bg-black py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Benefícios da Solução
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900/50 p-6 backdrop-blur-sm 
                        transition-all duration-300 hover:bg-gray-800/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-3 text-white">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-lg transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

