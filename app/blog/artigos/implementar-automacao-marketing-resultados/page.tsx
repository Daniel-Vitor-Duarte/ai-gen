import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Twitter, Facebook, Linkedin, Share2 } from "lucide-react"
import { Newsletter } from "@/app/components/Newsletter/newsletter"

export default function AutomacaoMarketingPage() {
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
          <Link href="/blog/artigos" className="text-blue-500 hover:text-blue-400 flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Voltar para Artigos</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
              Automação de Marketing
            </span>
            <span className="text-gray-400 text-sm">10 de maio de 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Como Implementar Automação de Marketing com Resultados Reais
          </h1>
          <p className="text-xl text-gray-300">
            Guia prático para implementar automação de marketing que gera leads qualificados e aumenta a conversão.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src="/marketing-automation-dashboard.png"
            alt="Dashboard de automação de marketing"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-400 mt-2 text-center">
            Dashboard de automação de marketing mostrando métricas de campanhas
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2>Introdução</h2>
          <p>
            A automação de marketing deixou de ser um diferencial para se tornar uma necessidade competitiva. Empresas
            que implementam estratégias de automação eficientes conseguem nutrir leads, personalizar a comunicação e
            aumentar as taxas de conversão, tudo isso enquanto reduzem o tempo gasto em tarefas repetitivas.
          </p>

          <p>
            Neste artigo, vamos explorar um passo a passo prático para implementar automação de marketing que gera
            resultados mensuráveis, independentemente do tamanho da sua empresa ou do seu orçamento.
          </p>

          <h2>O que é automação de marketing?</h2>

          <p>
            Automação de marketing é o uso de software e tecnologia para automatizar processos e tarefas de marketing
            repetitivas. Isso inclui segmentação de público, envio de emails, nutrição de leads, publicação em redes
            sociais e análise de resultados.
          </p>

          <p>
            O objetivo principal é otimizar o funil de vendas, melhorar a eficiência operacional e personalizar a
            experiência do cliente em escala.
          </p>

          <h2>Benefícios da automação de marketing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Aumento de produtividade</h3>
              <p>
                Redução de até 80% no tempo gasto em tarefas repetitivas, permitindo que a equipe foque em atividades
                estratégicas.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Geração de leads qualificados</h3>
              <p>
                Aumento médio de 451% na qualificação de leads através de processos de nutrição automatizados e
                personalizados.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Maior taxa de conversão</h3>
              <p>
                Empresas que utilizam automação de marketing têm, em média, 53% mais conversões do que aquelas que não
                utilizam.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">ROI mensurável</h3>
              <p>
                Capacidade de medir com precisão o retorno sobre investimento de cada campanha e ajustar estratégias em
                tempo real.
              </p>
            </div>
          </div>

          <h2>Passo a passo para implementar automação de marketing</h2>

          <h3>1. Defina objetivos claros</h3>

          <p>
            Antes de escolher qualquer ferramenta ou criar fluxos de automação, defina exatamente o que você quer
            alcançar. Alguns objetivos comuns incluem:
          </p>

          <ul>
            <li>Aumentar a geração de leads qualificados</li>
            <li>Melhorar a taxa de conversão</li>
            <li>Reduzir o ciclo de vendas</li>
            <li>Aumentar a retenção de clientes</li>
            <li>Melhorar o engajamento com a marca</li>
          </ul>

          <div className="bg-blue-900/30 border border-blue-800 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Dica prática</h3>
            <p className="text-gray-200 mb-0">
              Estabeleça métricas específicas para cada objetivo. Por exemplo, em vez de "aumentar leads", defina
              "aumentar a geração de leads qualificados em 30% nos próximos 3 meses".
            </p>
          </div>

          <h3>2. Mapeie a jornada do cliente</h3>

          <p>
            Entenda as diferentes etapas que seus clientes percorrem, desde o primeiro contato até a compra e além.
            Identifique:
          </p>

          <ul>
            <li>Pontos de contato principais</li>
            <li>Gatilhos de decisão</li>
            <li>Objeções comuns</li>
            <li>Necessidades de informação em cada etapa</li>
          </ul>

          <p>
            Este mapeamento será a base para criar fluxos de automação que atendam às necessidades específicas dos
            clientes em cada momento da jornada.
          </p>

          <h3>3. Escolha as ferramentas certas</h3>

          <p>
            Existem diversas plataformas de automação de marketing disponíveis, cada uma com seus pontos fortes. Alguns
            fatores a considerar na escolha:
          </p>

          <ul>
            <li>Tamanho da sua empresa e base de contatos</li>
            <li>Orçamento disponível</li>
            <li>Integrações necessárias com CRM e outras ferramentas</li>
            <li>Recursos específicos para seu setor</li>
            <li>Facilidade de uso e curva de aprendizado</li>
          </ul>

          <h3>4. Segmente seu público</h3>

          <p>A segmentação é fundamental para o sucesso da automação de marketing. Divida seus contatos com base em:</p>

          <ul>
            <li>Dados demográficos (idade, localização, cargo)</li>
            <li>Comportamento no site (páginas visitadas, downloads)</li>
            <li>Histórico de compras</li>
            <li>Engajamento com emails anteriores</li>
            <li>Estágio no funil de vendas</li>
          </ul>

          <h3>5. Crie fluxos de automação</h3>

          <p>Comece com fluxos simples e expanda conforme ganha experiência:</p>

          <ul>
            <li>
              <strong>Email de boas-vindas:</strong> Série de emails para novos assinantes ou clientes
            </li>
            <li>
              <strong>Nutrição de leads:</strong> Conteúdo educativo baseado nos interesses demonstrados
            </li>
            <li>
              <strong>Recuperação de carrinho abandonado:</strong> Lembretes para completar a compra
            </li>
            <li>
              <strong>Reengajamento:</strong> Campanhas para contatos inativos
            </li>
            <li>
              <strong>Pós-venda:</strong> Suporte, upsell e cross-sell para clientes existentes
            </li>
          </ul>

          <h3>6. Crie conteúdo relevante</h3>

          <p>
            O conteúdo é o combustível da sua automação de marketing. Desenvolva materiais específicos para cada
            segmento e etapa da jornada:
          </p>

          <ul>
            <li>Emails personalizados</li>
            <li>Landing pages</li>
            <li>E-books e whitepapers</li>
            <li>Webinars</li>
            <li>Estudos de caso</li>
          </ul>

          <h3>7. Implemente e teste</h3>

          <p>
            Antes de lançar seus fluxos de automação em larga escala, teste-os internamente e com um pequeno grupo de
            contatos. Verifique:
          </p>

          <ul>
            <li>Funcionamento dos gatilhos</li>
            <li>Personalização correta</li>
            <li>Links e redirecionamentos</li>
            <li>Visualização em diferentes dispositivos</li>
            <li>Integrações com outras ferramentas</li>
          </ul>

          <h3>8. Monitore e otimize</h3>

          <p>
            A automação de marketing não é "configurar e esquecer". Monitore regularmente os resultados e faça ajustes:
          </p>

          <ul>
            <li>Analise taxas de abertura, clique e conversão</li>
            <li>Teste diferentes assuntos, conteúdos e CTAs</li>
            <li>Refine a segmentação com base nos dados coletados</li>
            <li>Ajuste a frequência e timing dos envios</li>
            <li>Atualize o conteúdo regularmente</li>
          </ul>

          <h2>Casos de sucesso</h2>

          <h3>Empresa B2B de Software</h3>

          <p>
            Uma empresa de software B2B implementou um fluxo de nutrição de leads baseado em pontuação de engajamento.
            Os resultados após 6 meses:
          </p>

          <ul>
            <li>Aumento de 67% na taxa de conversão de MQLs para SQLs</li>
            <li>Redução de 35% no ciclo de vendas</li>
            <li>Aumento de 22% no valor médio dos contratos</li>
          </ul>

          <h3>E-commerce de Moda</h3>

          <p>
            Um e-commerce de moda implementou automação para recuperação de carrinho abandonado e recomendações
            personalizadas:
          </p>

          <ul>
            <li>Recuperação de 28% dos carrinhos abandonados</li>
            <li>Aumento de 41% nas vendas cruzadas</li>
            <li>Crescimento de 15% no valor médio do pedido</li>
          </ul>

          <h2>Conclusão</h2>

          <p>
            A automação de marketing, quando implementada corretamente, pode transformar completamente os resultados da
            sua empresa. O segredo está em começar com objetivos claros, entender profundamente seu público e criar
            fluxos que entreguem valor real em cada interação.
          </p>

          <p>
            Lembre-se que a tecnologia é apenas um facilitador – o verdadeiro diferencial está na estratégia, no
            conteúdo relevante e na capacidade de analisar e otimizar constantemente seus processos.
          </p>

          <p>
            Comece pequeno, aprenda com os resultados e expanda gradualmente. Com o tempo, você construirá uma máquina
            de marketing que gera leads qualificados, aumenta conversões e impulsiona o crescimento do seu negócio de
            forma escalável e previsível.
          </p>
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
            <img src="/placeholder.svg?key=ia-agentiva" alt="IA Agentiva" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-500 text-sm font-medium">Inteligência Artificial</span>
              <h3 className="text-xl font-bold mt-2 mb-3">
                IA Agentiva: Como a Nova Geração da Inteligência Artificial Está Transformando os Negócios
              </h3>
              <p className="text-gray-400 mb-4">
                Conheça como a IA agentiva está revolucionando empresas com sistemas que tomam decisões e executam ações
                de forma autônoma.
              </p>
              <Link
                href="/blog/artigos/ia-agentiva-transformando-negocios"
                className="text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200"
              >
                Ler mais →
              </Link>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src="/placeholder.svg?key=xzwz3" alt="Futuro do CRM" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-500 text-sm font-medium">CRM</span>
              <h3 className="text-xl font-bold mt-2 mb-3">O Futuro do CRM: Inteligência Artificial e Personalização</h3>
              <p className="text-gray-400 mb-4">
                Descubra como a IA está transformando os sistemas de CRM e criando experiências altamente
                personalizadas.
              </p>
              <Link
                href="/blog/artigos/futuro-crm-inteligencia-artificial-personalizacao"
                className="text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200"
              >
                Ler mais →
              </Link>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src="/placeholder.svg?key=k38w4" alt="IA no Atendimento" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-500 text-sm font-medium">Inteligência Artificial</span>
              <h3 className="text-xl font-bold mt-2 mb-3">6 Casos de Sucesso de IA no Atendimento ao Cliente</h3>
              <p className="text-gray-400 mb-4">
                Conheça como grandes empresas estão usando IA para revolucionar o atendimento ao cliente.
              </p>
              <Link
                href="/blog/artigos/casos-sucesso-ia-atendimento-cliente"
                className="text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200"
              >
                Ler mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <Newsletter />
      </section>
    </div>
  )
}
