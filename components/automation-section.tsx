import { Button } from "@/components/ui/button"
import { MessageSquare, Mail, Workflow, Database, Mailbox, Bot, Boxes } from "lucide-react"

const integrations = [
  {
    category: "CRM",
    tools: [
      { name: "HubSpot", icon: Database },
      { name: "Pipedrive", icon: Database },
      { name: "Salesforce", icon: Database },
    ],
  },
  {
    category: "Messaging",
    tools: [
      { name: "WhatsApp API", icon: MessageSquare },
      { name: "AI Humanizada", icon: Bot },
    ],
  },
  {
    category: "Email Marketing",
    tools: [
      { name: "MailChimp", icon: Mail },
      { name: "RD Station", icon: Mailbox },
    ],
  },
  {
    category: "Automation",
    tools: [
      { name: "n8n", icon: Workflow },
      { name: "Zapier", icon: Boxes },
    ],
  },
]

export function AutomationSection() {
  return (
    <section className="w-full bg-black py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Automação Inteligente: Do Lead à Conversão
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-12">
            Nosso sistema identifica, qualifica e converte leads automaticamente, integrando atendimento humano quando
            necessário.
          </p>

          <div className="max-w-[800px] mx-auto mb-8 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Demo Video"
              className="w-full h-full rounded-lg shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 mb-20"
          >
            Solicitar Demonstração
          </Button>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-12">Exemplos de Integrações</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-fit mx-auto">
              {integrations.map((category) => (
                <div key={category.category} className="relative ">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 " />
                  <div className="relative rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                        <Database className="h-4 w-4 text-white" />
                      </div>
                      {category.category}
                    </h4>
                    <div className="space-y-3">
                      {category.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="flex items-center gap-3 text-gray-400 "
                        >
                          <div className="w-1 h-1 rounded-full bg-blue-500/50 g" />
                          <tool.icon className="h-4 w-4" />
                          <span className="text-sm">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

