import type { Metadata } from "next";
import { Lato, Geist } from "next/font/google";
import "./globals.css";
// import { ToastProvider } from "@/components/ui/use-toast";

const lato = Lato({
  weight: ["700"],
  subsets: ["latin"],
});

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Gen",
  description: "Automação e Inteligência Artificial aplicados na sua empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lato.className} ${geist.className}`}>
      <body>
        {/* Uncomment if needed */}
        {/* <ToastProvider> */}
        {children}
        {/* </ToastProvider> */}
      </body>
    </html>
  );
}
