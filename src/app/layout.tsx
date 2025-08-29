import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SmoothScrollProvider } from "@/contexts/SmoothScrollContext";
import AuthSessionProvider from "@/components/providers/session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "7Pixels - Agencia de Marketing Digital | Expertos en Crecimiento Online",
  description: "Agencia #1 en marketing digital. Transformamos tu presencia digital en resultados extraordinarios. Servicios: SEO, Google Ads, Redes Sociales, Desarrollo Web y más.",
  keywords: "marketing digital, agencia digital, SEO, Google Ads, redes sociales, desarrollo web, branding digital",
  openGraph: {
    title: "7Pixels - Agencia de Marketing Digital",
    description: "Transformamos tu presencia digital en resultados extraordinarios",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthSessionProvider>
          <ThemeProvider>
            <SmoothScrollProvider>
              {children}
            </SmoothScrollProvider>
          </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
