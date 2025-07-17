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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: {
    default: "AIG",
    template: "%s | AIG",
  },
  description: "Automação e Inteligência Artificial aplicados na sua empresa",
  openGraph: {
    title: "AIG",
    description:
      "Automação e Inteligência Artificial aplicados na sua empresa",
    url: "/",
    siteName: "AIG",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lato.className} ${geist.className}`}>
      <body>
        {children}
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
