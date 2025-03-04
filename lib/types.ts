import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  ddi: z.string(),
  phone: z
    .string()
    .regex(/^\(\d{2}\)\s?\d?\d{4}-\d{4}$/, "Número de telefone inválido"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const countries = [
  {
    value: "+1-US",
    label: "Estados Unidos",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+1-CA",
    label: "Canadá",
    flag: "/placeholder.svg?height=20&width=30",
  },
  { value: "+20", label: "Egito", flag: "/placeholder.svg?height=20&width=30" },
  {
    value: "+27",
    label: "África do Sul",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+30",
    label: "Grécia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+31",
    label: "Holanda",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+32",
    label: "Bélgica",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+33",
    label: "França",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+34",
    label: "Espanha",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+351",
    label: "Portugal",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+353",
    label: "Irlanda",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+358",
    label: "Finlândia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+39",
    label: "Itália",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+40",
    label: "Romênia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  { value: "+41", label: "Suíça", flag: "/placeholder.svg?height=20&width=30" },
  {
    value: "+43",
    label: "Áustria",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+44",
    label: "Reino Unido",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+45",
    label: "Dinamarca",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+46",
    label: "Suécia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+47",
    label: "Noruega",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+48",
    label: "Polônia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+49",
    label: "Alemanha",
    flag: "/placeholder.svg?height=20&width=30",
  },
  { value: "+51", label: "Peru", flag: "/placeholder.svg?height=20&width=30" },
  {
    value: "+52",
    label: "México",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+54",
    label: "Argentina",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+55",
    label: "Brasil",
    flag: "/placeholder.svg?height=20&width=30",
  },
  { value: "+56", label: "Chile", flag: "/placeholder.svg?height=20&width=30" },
  {
    value: "+57",
    label: "Colômbia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+58",
    label: "Venezuela",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+60",
    label: "Malásia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+61",
    label: "Austrália",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+62",
    label: "Indonésia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+63",
    label: "Filipinas",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+64",
    label: "Nova Zelândia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+65",
    label: "Singapura",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+66",
    label: "Tailândia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  { value: "+81", label: "Japão", flag: "/placeholder.svg?height=20&width=30" },
  {
    value: "+82",
    label: "Coreia do Sul",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+84",
    label: "Vietnã",
    flag: "/placeholder.svg?height=20&width=30",
  },
  { value: "+86", label: "China", flag: "/placeholder.svg?height=20&width=30" },
  {
    value: "+90",
    label: "Turquia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  { value: "+91", label: "Índia", flag: "/placeholder.svg?height=20&width=30" },
  {
    value: "+92",
    label: "Paquistão",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+93",
    label: "Afeganistão",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+94",
    label: "Sri Lanka",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+95",
    label: "Myanmar",
    flag: "/placeholder.svg?height=20&width=30",
  },
  { value: "+98", label: "Irã", flag: "/placeholder.svg?height=20&width=30" },
  {
    value: "+212",
    label: "Marrocos",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+213",
    label: "Argélia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+216",
    label: "Tunísia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+218",
    label: "Líbia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+220",
    label: "Gâmbia",
    flag: "/placeholder.svg?height=20&width=30",
  },
  {
    value: "+221",
    label: "Senegal",
    flag: "/placeholder.svg?height=20&width=30",
  },
].sort(
  (a, b) =>
    Number.parseInt(a.value.slice(1)) - Number.parseInt(b.value.slice(1))
);
