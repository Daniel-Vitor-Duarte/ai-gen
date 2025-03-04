import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = {
  address: {
    street: "Av. Paulista, 1000",
    complement: "10º andar",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    postal: "01310-100",
  },
  phone: "+55 11 3456-7890",
  email: "contato@aigen.com.br",
};

export function ContactPageContent() {
  return (
    <div className="container relative z-10 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Entre em Contato
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Estamos aqui para ajudar sua empresa a crescer com inteligência
          artificial
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="rounded-2xl bg-white p-8 shadow-lg h-fit">
            <h2 className="text-2xl font-bold tracking-tight">
              Informações de Contato
            </h2>
            <p className="mt-2 text-gray-600">
              Entre em contato conosco através dos canais abaixo ou preencha o
              formulário.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <address className="not-italic text-gray-600 space-y-1">
                    <p>{contactInfo.address.street}</p>
                    <p>{contactInfo.address.complement}</p>
                    <p>
                      {contactInfo.address.city}, {contactInfo.address.state}
                    </p>
                    <p>{contactInfo.address.postal}</p>
                    <p>{contactInfo.address.country}</p>
                  </address>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-3">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">
                    <a
                      href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                      className="hover:text-blue-600"
                    >
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-3">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-blue-600"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold">Horário de Atendimento</h3>
              <div className="mt-3 space-y-2 text-gray-600">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Formulário de Contato
            </h2>
            <ContactForm />
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
            <h2 className="text-2xl font-bold tracking-tight">
              Por que escolher a AI Gen?
            </h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-blue-200">•</span>
                <span>Atendimento personalizado e humanizado</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-200">•</span>
                <span>Soluções sob medida para seu negócio</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-200">•</span>
                <span>Equipe especializada em IA e automação</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-200">•</span>
                <span>Suporte técnico dedicado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
