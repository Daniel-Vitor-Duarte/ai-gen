import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="w-full bg-black py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-8">
            Preencha o formulário abaixo e nossa equipe entrará em contato para
            uma demonstração personalizada.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
