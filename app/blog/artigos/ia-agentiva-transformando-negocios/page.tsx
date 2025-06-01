import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Twitter, Facebook, Linkedin, Share2 } from "lucide-react"
import { Newsletter } from "@/app/components/Newsletter/newsletter"

export default function IAAgentivaPage() {
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
            <span>Voltar para o Blog</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
              Inteligência Artificial
            </span>
            <span className="text-gray-400 text-sm">20 de maio de 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IA Agentiva: Como a Nova Geração da Inteligência Artificial Está Transformando os Negócios
          </h1>
          <p className="text-xl text-gray-300">
            Conheça como a IA agentiva está revolucionando empresas com sistemas que tomam decisões, executam ações e
            perseguem metas complexas de forma autônoma.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img src="/images/ia-agentiva-negocios.png" alt="IA Agentiva nos negócios" className="w-full h-auto rounded-lg" />
          <p className="text-sm text-gray-400 mt-2 text-center">
            Agentes de IA autônomos estão transformando a forma como as empresas operam
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            A Inteligência Artificial (IA) está passando por uma evolução significativa com a chegada da chamada{" "}
            <strong>IA agentiva</strong>. Diferente dos modelos tradicionais baseados em comandos (como os LLMs), a IA
            agentiva atua com alto grau de autonomia: ela{" "}
            <strong>toma decisões, executa ações e persegue metas complexas</strong> sem depender de comandos humanos
            constantes.
          </p>

          <p>
            Essa nova abordagem já está sendo aplicada em empresas de diversos setores. A seguir, explicamos como ela
            funciona, onde pode ser usada, quais impactos trará no futuro dos negócios e como sua empresa pode começar a
            adotá-la.
          </p>

          <hr className="my-8 border-gray-700" />

          <h2>O que é IA agentiva?</h2>

          <p>
            A IA agentiva é um sistema de inteligência artificial capaz de <strong>agir com independência</strong>, ou
            seja, <strong>operações autônomas com base em metas definidas</strong>. Ela é composta por três habilidades
            principais:
          </p>

          <ul>
            <li>
              <strong>Perceber</strong> o ambiente onde está inserida;
            </li>
            <li>
              <strong>Planejar</strong> estratégias para atingir um objetivo;
            </li>
            <li>
              <strong>Agir</strong> de forma autônoma, ajustando-se à medida que novos dados surgem.
            </li>
          </ul>

          <p>
            Isso a diferencia de modelos como o ChatGPT, que precisa de comandos manuais a cada interação. A IA agentiva
            pode tomar iniciativas, executar tarefas em cadeia e se adaptar a diferentes contextos, aproximando-se do
            comportamento humano em ambientes digitais.
          </p>

          <div className="bg-blue-900/30 border border-blue-800 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Conceito-chave</h3>
            <p className="text-gray-200 mb-0">
              A IA agentiva não apenas responde a perguntas ou executa comandos isolados — ela mantém um contexto
              contínuo, toma iniciativas e realiza sequências complexas de ações para atingir objetivos definidos.
            </p>
          </div>

          <hr className="my-8 border-gray-700" />

          <h2>Aplicações reais em empresas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Atendimento ao cliente</h3>
              <p>
                Agentes autônomos podem antecipar dúvidas e tomar a iniciativa de resolver problemas, como reprogramar
                uma entrega ou sugerir soluções personalizadas. Isso reduz atritos e aumenta a satisfação.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Vendas e marketing</h3>
              <p>
                Plataformas como a Agentforce (Salesforce) permitem construir agentes que seguem leads, disparam
                campanhas e atualizam dados sem ação humana.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Logística e operações</h3>
              <p>
                A IA pode gerenciar estoques, ajustar rotas e monitorar entregas em tempo real, aumentando a eficiência
                e diminuindo custos.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">TI e infraestrutura</h3>
              <p>
                Agentes monitoram sistemas, detectam falhas e aplicam correções automaticamente. Com isso, evitam
                paralisações e reduzem o tempo de resposta.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
              <h3 className="text-xl font-bold mb-3">Finanças</h3>
              <p>
                Em investimentos e análise de riscos, agentes identificam oportunidades ou anomalias, podendo agir de
                imediato para otimizar carteiras ou evitar fraudes.
              </p>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />

          <h2>Por que isso é importante?</h2>

          <p>
            <strong>Velocidade e autonomia</strong> são os principais diferenciais. Uma empresa que utiliza IA agentiva
            consegue reagir rapidamente a mudanças no mercado, evitar perdas operacionais e aumentar a produtividade.
            Além disso, abre espaço para que os colaboradores se concentrem em atividades estratégicas.
          </p>

          <hr className="my-8 border-gray-700" />

          <h2>Diferença em relação a outras IAs</h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-white">Critério</th>
                  <th className="px-6 py-3 text-left text-white">IA Tradicional (LLM/Chatbot)</th>
                  <th className="px-6 py-3 text-left text-white">IA Agentiva</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-4 font-medium">Autonomia</td>
                  <td className="px-6 py-4">Responde a comandos</td>
                  <td className="px-6 py-4">Age sozinha com base em objetivos</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-4 font-medium">Ação</td>
                  <td className="px-6 py-4">Gera conteúdo</td>
                  <td className="px-6 py-4">Executa tarefas concretas</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-4 font-medium">Adaptação</td>
                  <td className="px-6 py-4">Limitada</td>
                  <td className="px-6 py-4">Alta capacidade adaptativa</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-4 font-medium">Supervisão humana</td>
                  <td className="px-6 py-4">Necessária constantemente</td>
                  <td className="px-6 py-4">Opcional, com monitoramento</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-8 border-gray-700" />

          <h2>Impacto no futuro dos negócios</h2>

          <p>A IA agentiva tende a se tornar parte do cotidiano empresarial:</p>

          <ul>
            <li>
              <strong>Empresas mais responsivas</strong> ao mercado, adaptando-se em tempo real.
            </li>
            <li>
              <strong>Redução de custos operacionais</strong> com automação de processos complexos.
            </li>
            <li>
              <strong>Colaboração entre humanos e IAs</strong>, com os humanos focando em decisões estratégicas e os
              agentes executando tarefas operacionais.
            </li>
          </ul>

          <div className="my-8">

            <p className="text-sm text-gray-400 mt-2 text-center">
              O futuro do trabalho envolve colaboração estreita entre humanos e agentes de IA
            </p>
          </div>

          <hr className="my-8 border-gray-700" />

          <h2>Como começar a implementar</h2>

          <ol>
            <li>
              <strong>Educação interna</strong>: Estude a tecnologia e compartilhe o conhecimento com a equipe.
            </li>
            <li>
              <strong>Mapeie processos</strong> repetitivos e sujeitos a erros que podem ser automatizados.
            </li>
            <li>
              <strong>Escolha um piloto simples</strong> para iniciar, com um agente de suporte, por exemplo.
            </li>
            <li>
              <strong>Integre aos poucos</strong>, expandindo o uso conforme os resultados.
            </li>
            <li>
              <strong>Crie uma cultura colaborativa</strong> entre tecnologia e pessoas.
            </li>
          </ol>

          <div className="bg-gray-800 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-3">Dica prática</h3>
            <p className="mb-0">
              Comece com um caso de uso específico e bem definido, como um assistente de agendamento ou um agente de
              qualificação de leads. Isso permite avaliar resultados concretos antes de expandir para processos mais
              complexos.
            </p>
          </div>

          <hr className="my-8 border-gray-700" />

          <h2>Conclusão</h2>

          <p>
            A IA agentiva não é apenas mais uma tendência tecnológica: ela representa uma nova forma de operar empresas,
            tornando-as mais ágeis, eficientes e inovadoras. Implementar essa tecnologia não é uma opção futurista — é
            um diferencial competitivo agora. Empresas que começarem a testar e adaptar seus processos com IA agentiva
            estarão melhor preparadas para liderar os mercados nos próximos anos.
          </p>

          <hr className="my-8 border-gray-700" />

          <h2>Referências</h2>

          <ol>
            <li>
              <a
                href="https://venturebeat.com/ai/agentic-ai-deep-dive-future-automation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://venturebeat.com/ai/agentic-ai-deep-dive-future-automation/
              </a>
            </li>
            <li>
              <a
                href="https://www.restack.io/p/agentic-workflows-answer-agentic-meaning-psychology-cat-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.restack.io/p/agentic-workflows-answer-agentic-meaning-psychology-cat-ai
              </a>
            </li>
            <li>
              <a
                href="https://www.businessinsider.com/yoshua-bengio-ai-godfather-agents-2025-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.businessinsider.com/yoshua-bengio-ai-godfather-agents-2025-1
              </a>
            </li>
            <li>
              <a
                href="https://hbr.org/2024/04/ai-agents-will-change-how-we-work"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://hbr.org/2024/04/ai-agents-will-change-how-we-work
              </a>
            </li>
            <li>
              <a
                href="https://www.salesforce.com/news/stories/agentforce-new-generative-ai-agents/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.salesforce.com/news/stories/agentforce-new-generative-ai-agents/
              </a>
            </li>
            <li>
              <a
                href="https://www.moveworks.com/us/en/resources/blog/what-does-agentic-mean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.moveworks.com/us/en/resources/blog/what-does-agentic-mean
              </a>
            </li>
            <li>
              <a
                href="https://www.businessinsider.com/signal-president-warns-privacy-threat-agentic-ai-meredith-whittaker-2025-3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.businessinsider.com/signal-president-warns-privacy-threat-agentic-ai-meredith-whittaker-2025-3
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=-pqzyvRp3Tc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.youtube.com/watch?v=-pqzyvRp3Tc
              </a>
            </li>
          </ol>
        </div>

        {/* Author */}
        {/* <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex items-center gap-4">
            <img src="/professional-headshot.png" alt="Autor" className="w-16 h-16 rounded-full" />
            <div>
              <h4 className="text-lg font-bold">Equipe de Automação</h4>
              <p className="text-gray-400">
                Especialistas em automação, inteligência artificial e transformação digital para negócios.
              </p>
            </div>
          </div>
        </div> */}

        {/* Share */}
        <div className="border-t border-gray-800 pt-8">
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

      

      {/* Newsletter */}
      <section>
        <Newsletter />
      </section>
    </div>
  )
}
