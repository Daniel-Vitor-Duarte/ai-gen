import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "O que é a AI Gen?",
    answer:
      "A AI Gen é uma empresa especializada em automação inteligente e prospecção de clientes com Inteligência Artificial. Nosso foco é ajudar empresas a escalar operações, reduzir custos e aumentar vendas por meio da integração de IA, automação de leads e atendimento híbrido.",
  },
  {
    question: "Como a AI Gen pode ajudar minha empresa?",
    answer:
      "Oferecemos soluções que automatizam a prospecção de clientes, otimizam o atendimento e melhoram a conversão de vendas. Nossos serviços incluem chatbots inteligentes, integração com CRM, automação de follow-ups e personalização de comunicação, garantindo eficiência e um atendimento mais humanizado.",
  },
  {
    question: "Como funciona a prospecção de clientes com IA?",
    answer:
      "Nossa tecnologia busca e qualifica leads automaticamente, entrando em contato inicial e realizando follow-ups de forma estratégica. Com integração ao seu CRM, organizamos e nutrimos os leads para aumentar a taxa de conversão de vendas.",
  },
  {
    question: "A AI Gen oferece suporte e personalização dos serviços?",
    answer:
      "Sim! Entendemos que cada empresa é única, por isso personalizamos nossas soluções conforme as necessidades do seu negócio. Também oferecemos suporte contínuo para garantir que tudo funcione da melhor forma.",
  },
  {
    question: "Quais tipos de empresas podem se beneficiar com a AI Gen?",
    answer:
      "Atendemos principalmente agências de marketing digital, empresas B2B de tecnologia e SaaS, consultorias e prestadores de serviços premium, além de e-commerces e negócios digitais que querem aumentar conversão e melhorar o atendimento.",
  },
  {
    question: "Qual é o investimento necessário?",
    answer:
      "Oferecemos planos flexíveis que se adaptam ao tamanho e às necessidades do seu negócio. O investimento varia de acordo com as funcionalidades escolhidas e o volume de uso. Entre em contato conosco para uma avaliação personalizada.",
  },
  {
    question: "Como faço para contratar a AI Gen?",
    answer:
      "Entre em contato pelo nosso site ou WhatsApp e nossa equipe agendará uma reunião para entender suas necessidades e apresentar a melhor solução para o seu negócio.",
  },
  {
    question: "Em quanto tempo verei resultados com a AI Gen?",
    answer:
      "Os resultados variam conforme a estrutura do seu negócio, mas normalmente nossos clientes percebem melhorias na eficiência operacional e no aumento de conversões já nos primeiros meses de implementação.",
  },
  {
    question: "A AI Gen pode ser integrada com meu CRM e outras ferramentas?",
    answer:
      "Sim! Nossas soluções são desenvolvidas para integrar com CRMs, plataformas de vendas, WhatsApp, redes sociais e outras ferramentas que sua empresa já utiliza, garantindo uma operação mais eficiente.",
  },
]

export function FaqSection() {
  return (
    <section className="w-full bg-black py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Principais dúvidas sobre nossos serviços e soluções de IA
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg px-6 bg-gray-900/50 backdrop-blur-sm transition-colors hover:border-gray-700"
              >
                <AccordionTrigger className="text-white hover:text-gray-300 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300">
            Ainda tem dúvidas?{" "}
            <a href="/contato" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
              Entre em contato conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

