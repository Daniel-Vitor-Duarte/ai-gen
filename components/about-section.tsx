import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, Users, Lightbulb, Award, TrendingUp } from "lucide-react"

const sections = [
  {
    id: "mission",
    title: "Nossa Missão",
    subtitle: "Impulsionando o progresso com IA",
    content: `A AIG nasceu da paixão pela tecnologia e da visão de um futuro onde a inteligência artificial não apenas automatiza processos, mas também personaliza e humaniza o atendimento ao cliente. Desde o lançamento do ChatGPT, observamos o potencial revolucionário da IA e, em 2024, decidimos unir forças para criar soluções inovadoras que transformam empresas, tornando-as mais produtivas e eficientes.

    Nossa missão é clara: impulsionar o progresso. Acreditamos que a evolução tecnológica deve ser utilizada para otimizar operações, melhorar a experiência do cliente e permitir que negócios alcancem seu máximo potencial. Trabalhamos para ajudar empresas a crescer, eliminando tarefas repetitivas e permitindo que gestores e equipes foquem no que realmente importa: inovação e estratégia.`,
    image: "/placeholder.svg?height=400&width=600",
    icon: Target,
  },
  {
    id: "values",
    title: "Nossos Valores",
    subtitle: "Razão, integridade e busca pela excelência",
    content: `Na AIG, guiamos nossas ações por três pilares fundamentais: razão, integridade e busca pela excelência. Acreditamos que a racionalidade e o pensamento independente são as chaves para criar soluções inovadoras. Nossa transparência e compromisso com a verdade fortalecem a confiança com nossos clientes e parceiros. Acima de tudo, buscamos excelência em tudo o que fazemos, desafiando constantemente o status quo para entregar o melhor resultado possível.`,
    image: "/placeholder.svg?height=400&width=600",
    icon: Award,
  },
  {
    id: "impact",
    title: "Como a IA Está Transformando Empresas",
    subtitle: "O impacto e as oportunidades no Brasil",
    content: `Enxergamos um Brasil onde o atendimento ao cliente se tornará referência mundial, onde cada cliente se sinta respeitado e valorizado. Visualizamos um mercado onde as empresas encontram os clientes ideais com facilidade e onde a produtividade cresce exponencialmente graças à automação inteligente. Nossa missão é eliminar trabalhos repetitivos e desnecessários, permitindo que os negócios prosperem com base na criatividade e estratégia de seus líderes.`,
    image: "/placeholder.svg?height=400&width=600",
    icon: Brain,
  },
  {
    id: "team",
    title: "Nossa Equipe",
    subtitle: "Os especialistas por trás da AIG",
    content:
      "Nossa equipe traz uma combinação única de habilidades para criar soluções eficientes e sob medida para cada cliente.",
    team: [
      {
        name: "Davi Silva",
        role: "Especialista em Desenvolvimento Full-Stack",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Especialista em desenvolvimento full-stack e automação, com foco em soluções escaláveis e eficientes.",
      },
      {
        name: "Bruno Santos",
        role: "Estrategista de IA",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Especialista em estratégia de IA e otimização de prompts, com foco em maximizar o potencial da tecnologia.",
      },
      {
        name: "Daniel Costa",
        role: "Especialista em TI e Negócios",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Especialista em TI e expansão de negócios, com vasta experiência em implementação de soluções tecnológicas.",
      },
    ],
    icon: Users,
  },
  {
    id: "differentials",
    title: "Nossos Diferenciais",
    subtitle: "Por que a AIG é única",
    content: `O maior desafio que enfrentamos é a resistência à mudança. Muitas empresas ainda hesitam em adotar a inteligência artificial, sem perceber que ela não é uma ameaça, mas sim uma ferramenta poderosa para crescimento. Estamos aqui para mudar essa mentalidade, demonstrando na prática como a IA pode otimizar processos, reduzir custos e gerar mais oportunidades.

    O que nos diferencia no mercado é a nossa abordagem personalizada. Não acreditamos em soluções genéricas. Desenvolvemos sistemas que realmente entendem e se adaptam às necessidades dos clientes, combinando IA avançada, automação e programação de alto nível.
    
    Para nós, cada cliente é único. Valorizamos um relacionamento próximo e respeitoso, entendendo profundamente as necessidades de cada negócio para oferecer soluções que realmente fazem a diferença. Nossa abordagem vai além da tecnologia: queremos criar parcerias de longo prazo, baseadas na confiança, transparência e entrega de valor real.`,
    image: "/placeholder.svg?height=400&width=600",
    icon: Lightbulb,
  },
  {
    id: "future",
    title: "Planos para o Futuro",
    subtitle: "A evolução da AIG e os próximos passos",
    content: `Nosso foco é expandir e aprimorar nossas soluções de captura de leads e atendimento humanizado, garantindo que empresas tenham uma comunicação eficiente e personalizada com seus clientes. Além disso, visamos ampliar nossos serviços para incluir tráfego pago e criação de landing pages otimizadas, oferecendo uma solução completa para impulsionar negócios no ambiente digital.

    Estamos apenas começando. O futuro da inteligência artificial no Brasil é promissor, e a AIG está pronta para liderar essa transformação.`,
    image: "/placeholder.svg?height=400&width=600",
    icon: TrendingUp,
  },
]

export function AboutSection() {
  return (
    <div className="relative container py-24 space-y-32">
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`relative z-10 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex flex-col lg:flex-row items-center gap-12 lg:gap-24`}
        >
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
              <section.icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{section.title}</h2>
            <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {section.subtitle}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">{section.content}</p>

            {section.id === "team" && section.team && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {section.team.map((member) => (
                  <Card key={member.name} className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className={`w-full object-cover aspect-square`}
                      />
                      <div className="p-6 space-y-2">
                        <h3 className="font-bold text-xl">{member.name}</h3>
                        <p className="text-blue-600 font-medium">{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {section.id !== "team" && section.id !== "differentials" && (
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-2xl" />
              <Image
                src={section.image || "/placeholder.svg"}
                alt={section.title}
                width={600}
                height={400}
                className={`relative rounded-2xl w-full object-cover`}
              />
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

