"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Language = "es" | "en";

interface ThemeContextType {
  theme: Theme;
  language: Language;
  toggleLanguage: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  // Cargar preferencias del localStorage al montar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Por defecto: Español siempre
      setLanguage("es");
    }
    
    setMounted(true);
  }, []);

  // Aplicar tema al HTML - siempre light mode
  useEffect(() => {
    if (mounted) {
      const html = document.documentElement;
      html.classList.remove("light", "dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [mounted]);

  // Guardar idioma
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);



  const toggleLanguage = () => {
    setLanguage(prev => prev === "es" ? "en" : "es");
  };

  // Evitar hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
