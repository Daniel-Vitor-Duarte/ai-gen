import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Twitter, Facebook, Linkedin, Share2 } from "lucide-react"

export default function CasosSucessoIAPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="network-bg w-full h-full opacity-20"></div>
      </div>

      {/* Navigation */}
      <MainNav />

      {/* Article */}
      <article className="relative z-10 container mx-auto max-w-4xl pb-8 pt-24 px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-500 hover:text-blue-400 flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Voltar para Blog</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
              Inteligência Artificial
            </span>
            <span className="text-gray-400 text-sm">15 de maio de 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">6 Casos de Sucesso de IA no Atendimento ao Cliente</h1>
          <p className="text-xl text-gray-300">
            Conheça como grandes empresas estão usando inteligência artificial para revolucionar o atendimento e
            aumentar a satisfação dos clientes.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src="/images/casos-de-sucesso.png"
            alt="IA no atendimento ao cliente"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-400 mt-2 text-center">
            Interfaces de IA estão transformando o atendimento ao cliente em diversos setores
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2>Introdução</h2>
          <p>
            A inteligência artificial está redefinindo o atendimento ao cliente em escala global. Empresas líderes em
            seus segmentos estão implementando soluções de IA para oferecer experiências mais rápidas, personalizadas e
            eficientes. Neste artigo, exploramos casos reais de empresas que transformaram seu atendimento com
            tecnologias inteligentes.
          </p>

          <p>
            Vamos analisar como Sephora, Vodafone e Alibaba implementaram soluções de IA que não apenas reduziram custos
            operacionais, mas também elevaram significativamente a satisfação dos clientes e impulsionaram as vendas.
          </p>

          <h2>Casos de Sucesso</h2>

          <h3>Sephora – Chatbots para Agendamentos e Recomendações</h3>

          <p>
            A Sephora oferece agendamentos e recomendações de beleza com bots no Messenger e no site, conectando o
            atendimento digital às lojas físicas.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg my-6">
            <p className="font-medium mb-2">Destaques:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tecnologias: Chatbots, IA conversacional, recomendação personalizada</li>
              <li>Resultados: +11% em agendamentos, ticket médio acima de US$ 50</li>
            </ul>
          </div>

          <h3>Vodafone – Chatbot TOBi no WhatsApp e Web</h3>

          <p>
            O TOBi responde dúvidas e realiza tarefas de atendimento técnico usando IA. Após atualizações com modelos de
            linguagem mais avançados, a satisfação aumentou em 50% e o NPS em 20%.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg my-6">
            <p className="font-medium mb-2">Destaques:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tecnologias: NLP, IA generativa, LLMs</li>
              <li>Resultados: 44% das demandas resolvidas sem humanos, aumento de NPS</li>
            </ul>
          </div>

          <h3>Alibaba – Chatbot AliMe em Escala Global</h3>

          <p>
            Durante o "Singles' Day", o chatbot AliMe atendeu 300 milhões de mensagens, resolvendo 97% das dúvidas. No
            dia a dia, cobre 95% dos atendimentos, com redução de 80% no tempo de resposta.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg my-6">
            <p className="font-medium mb-2">Destaques:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tecnologias: Reconhecimento de voz, PLN, IA preditiva, sentimento</li>
              <li>Resultados: Economia de 50% em atendimento, alta escalabilidade, retenção +30%</li>
            </ul>
          </div>

          <h2>Comparativo Rápido</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-3 text-left">Empresa</th>
                  <th className="px-4 py-3 text-left">Tecnologia Empregada</th>
                  <th className="px-4 py-3 text-left">Destaques</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-600">
                  <td className="px-4 py-3">Bank of America</td>
                  <td className="px-4 py-3">Chatbot com PLN e analytics financeiro</td>
                  <td className="px-4 py-3">98% de dúvidas resolvidas em 44s</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-4 py-3">Starbucks</td>
                  <td className="px-4 py-3">ML e assistente de voz via app</td>
                  <td className="px-4 py-3">+30% ROI, +15% engajamento</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-4 py-3">Domino's</td>
                  <td className="px-4 py-3">Comandos de voz, chatbot omnichannel</td>
                  <td className="px-4 py-3">70% dos pedidos via IA</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-4 py-3">Sephora</td>
                  <td className="px-4 py-3">Beauty bots e agendamento por chat</td>
                  <td className="px-4 py-3">+11% agendamentos, ticket médio US$ 50</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-4 py-3">Vodafone</td>
                  <td className="px-4 py-3">NLP e IA generativa</td>
                  <td className="px-4 py-3">44% dos atendimentos 100% automatizados</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-4 py-3">Alibaba</td>
                  <td className="px-4 py-3">IA multimodal com sentimento e preditivo</td>
                  <td className="px-4 py-3">300M atendimentos em um dia, 95% sem ajuda humana</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Conclusão</h2>

          <p>
            Os resultados demonstram que investir em IA no atendimento ao cliente não é apenas uma inovação — é um
            diferencial competitivo. As empresas que adotaram soluções inteligentes conseguiram reduzir custos, acelerar
            o atendimento e aumentar a satisfação do consumidor. Com o avanço da IA generativa e NLP, as interações se
            tornarão ainda mais personalizadas, naturais e eficazes. O momento de investir nessa transformação é agora.
          </p>

          <h2>Referências</h2>

          <ul>
            <li>
              <a
                href="https://newsroom.bankofamerica.com/press-releases/consumer-banking/erica-surpasses-1-billion-client-interactions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Bank of America – Erica
              </a>
            </li>
            <li>
              <a
                href="https://www.americanbanker.com/news/bank-of-america-is-now-using-its-erica-chatbot-to-help-employees-too"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Erica for employees – Bank of America
              </a>
            </li>
            <li>
              <a
                href="https://stories.starbucks.com/stories/2020/inside-deep-brew-starbucks-ai-powered-platform/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Starbucks e Deep Brew
              </a>
            </li>
            <li>
              <a
                href="https://www.qsrmagazine.com/news/starbucks-app-now-accounts-25-percent-us-transactions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Starbucks Mobile Order Data
              </a>
            </li>
            <li>
              <a
                href="https://techcrunch.com/2016/06/20/dominos-now-lets-you-order-pizza-via-facebook-messenger/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Domino's Anyware e chatbot Dom
              </a>
            </li>
            <li>
              <a
                href="https://www.businessinsider.com/dominos-digital-innovation-drives-pizza-sales-2019-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Domino's voice ordering stats
              </a>
            </li>
            <li>
              <a
                href="https://www.businessinsider.com/sephora-facebook-messenger-bot-increases-bookings-2017-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Sephora Messenger bot
              </a>
            </li>
            <li>
              <a
                href="https://www.retaildive.com/ex/mobilecommercedaily/sephora-deepens-personalization-with-facebook-messenger-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Sephora Virtual Artist
              </a>
            </li>
            <li>
              <a
                href="https://www.vodafone.com/news/technology/vodafone-customer-service-chatbot-tobi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Vodafone TOBi
              </a>
            </li>
            <li>
              <a
                href="https://venturebeat.com/ai/vodafone-is-training-its-customer-service-chatbot-tobi-to-be-smarter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Vodafone NLP improvements
              </a>
            </li>
            <li>
              <a
                href="https://www.alizila.com/alime-ali-tmalls-customer-service-chatbot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Alibaba AliMe
              </a>
            </li>
            <li>
              <a
                href="https://www.scmp.com/tech/enterprises/article/3037195/alibabas-chatbot-handled-97-customer-queries-singles-day-2019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Alibaba Singles Day AI support
              </a>
            </li>
            <li>
              <a
                href="https://www.gartner.com/en/newsroom/press-releases/2023-07-18-gartner-says-80-percent-of-enterprises-will-have-used-generative-ai-apis-or-models-by-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Gartner – Future of Generative AI
              </a>
            </li>
            <li>
              <a
                href="https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                McKinsey – AI in customer service
              </a>
            </li>
          </ul>
        </div>

        {/* Author */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex items-center gap-4">
            <img src="/professional-headshot.png" alt="Autor" className="w-16 h-16 rounded-full" />
            <div>
              <h4 className="text-lg font-bold">Equipe de Automação</h4>
              <p className="text-gray-400">
                Especialistas em automação, inteligência artificial e transformação digital para negócios.
              </p>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="mt-8">
          <h4 className="text-lg font-bold mb-4">Compartilhe este artigo</h4>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter size={18} />
              <span className="sr-only">Compartilhar no Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook size={18} />
              <span className="sr-only">Compartilhar no Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin size={18} />
              <span className="sr-only">Compartilhar no LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 size={18} />
              <span className="sr-only">Compartilhar via link</span>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="relative z-10 container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src="/ai-chatbot-interface.png" alt="Implementando chatbots" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-500 text-sm font-medium">Inteligência Artificial</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Como Implementar Chatbots que Realmente Funcionam</h3>
              <p className="text-gray-400 mb-4">
                Guia prático para implementar chatbots que melhoram a experiência do cliente e reduzem custos.
              </p>
              <Link href="#" className="text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200">
                Ler mais →
              </Link>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src="/placeholder.svg?key=glh17" alt="NLP no atendimento" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-500 text-sm font-medium">NLP</span>
              <h3 className="text-xl font-bold mt-2 mb-3">
                O Papel do Processamento de Linguagem Natural no Atendimento
              </h3>
              <p className="text-gray-400 mb-4">
                Como o NLP está transformando a capacidade dos sistemas de atendimento em compreender os clientes.
              </p>
              <Link href="#" className="text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200">
                Ler mais →
              </Link>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src="/placeholder.svg?key=gfxkw" alt="Métricas de atendimento" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-500 text-sm font-medium">Métricas</span>
              <h3 className="text-xl font-bold mt-2 mb-3">
                10 Métricas Essenciais para Avaliar seu Atendimento ao Cliente
              </h3>
              <p className="text-gray-400 mb-4">
                Indicadores que toda empresa deve monitorar para garantir a excelência no atendimento ao cliente.
              </p>
              <Link href="#" className="text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200">
                Ler mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 w-full py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-6">Inscreva-se na Nossa Newsletter</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Receba os últimos artigos e novidades sobre automação e IA diretamente no seu email.
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
