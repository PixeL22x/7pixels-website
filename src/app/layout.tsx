import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "7Pixels - Agencia de Desarrollo Web y Aplicaciones | Posicionamiento Google",
  description: "Agencia #1 en desarrollo web profesional. Creamos sitios web modernos con React/Next.js y posicionamiento Google efectivo. +1,247 proyectos entregados.",
  keywords: "desarrollo web, aplicaciones web, posicionamiento google, SEO, React, Next.js, agencia web, sitios web profesionales",
  openGraph: {
    title: "7Pixels - Desarrollo Web y Posicionamiento Google",
    description: "Sitios web profesionales con React/Next.js y posicionamiento Google efectivo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
