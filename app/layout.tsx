import type { Metadata } from "next";
import { Lato, Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"

const lato = Lato({
  weight: ["700"],
  subsets: ["latin"],
});

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIG",
  description: "Automação e Inteligência Artificial aplicados na sua empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lato.className} ${geist.className}`}>
      <head>
        <meta
          name="google-site-verification"
          content="QMSOkaqxsXZzibvg49qJjlwTNIozWkXyT4e-PbtOlTU"
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
