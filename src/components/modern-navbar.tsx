"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, language, toggleLanguage } = useTheme();

  // Detectar scroll para cambiar estilos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar página actual y actualizar estado activo
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash.replace('#', '');
    
    if (currentPath === '/portfolio') {
      setActiveSection('portfolio');
    } else if (currentPath === '/equipo') {
      setActiveSection('equipo');
    } else if (currentPath === '/') {
      if (currentHash) {
        setActiveSection(currentHash);
      } else {
        setActiveSection('home');
      }
    }
  }, []);

  // Navegación inteligente para secciones (siempre va a index)
  const scrollToSection = (sectionId: string) => {
    const currentPath = window.location.pathname;
    
    // Si no estamos en la página principal, navegar a index con hash
    if (currentPath !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Si estamos en la página principal, hacer scroll suave
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  // Navegación a páginas
  const navigateToPage = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: "home", label: "Inicio", type: "scroll" }, // Siempre va a index
    { id: "portfolio", label: "Portfolio", type: "page", path: "/portfolio" }, // Página separada
    { id: "equipo", label: "Team", type: "page", path: "/equipo" }, // Página separada
    { id: "contact", label: "Contacto", type: "page", path: "/contacto" }, // Página separada
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-2xl"
            : "bg-white/80 dark:bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateToPage("/")}
            >
              <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                7Pixels
              </div>
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-green-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (item.type === "page") {
                      navigateToPage(item.path!);
                    } else if (item.id === "home") {
                      // Inicio siempre va a la página principal sin hash
                      window.location.href = "/";
                      setIsMobileMenuOpen(false);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                >
                  {item.label}
                  
                  {/* Indicador activo */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-green-500/10 border border-green-500/30 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </motion.button>
              ))}

              {/* Theme & Language Controls */}
              <div className="flex items-center space-x-2 ml-4">
                {/* Language Toggle */}
                <motion.button
                  className="w-10 h-10 bg-gray-200 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-black dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleLanguage}
                  title={`Cambiar a ${language === 'es' ? 'English' : 'Español'}`}
                >
                  {language === 'es' ? '🇺🇸' : '🇪🇸'}
                </motion.button>


              </div>

              {/* CTA Button */}
              <motion.button
                className="ml-4 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full text-sm hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-green-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
              >
                Comenzar Proyecto
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-green-400 bg-green-500/10"
                        : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                    onClick={() => {
                      if (item.type === "page") {
                        navigateToPage(item.path!);
                      } else if (item.id === "home") {
                        // Inicio siempre va a la página principal sin hash
                        window.location.href = "/";
                        setIsMobileMenuOpen(false);
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Theme & Language Controls */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex space-x-4 mt-6"
                >
                  {/* Language Toggle Mobile */}
                  <motion.button
                    className="flex-1 h-12 bg-gray-200 dark:bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-black dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleLanguage}
                  >
                    <span className="text-sm font-medium">
                      {language === 'es' ? 'Eng' : 'Esp'}
                    </span>
                  </motion.button>


                </motion.div>

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl text-lg shadow-lg shadow-green-500/25"
                  onClick={() => scrollToSection("contact")}
                >
                  🚀 Comenzar Proyecto
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer para evitar que el contenido se oculte detrás del navbar */}
      <div className="h-16" />
    </>
  );
};

export default ModernNavbar;
