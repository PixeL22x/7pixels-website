"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslations } from "@/hooks/useTranslations";
import { GlobeAltIcon, ChevronDownIcon, ComputerDesktopIcon, ShoppingBagIcon, CodeBracketIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { theme, language, toggleLanguage } = useTheme();
  const t = useTranslations();

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

  // Cerrar dropdowns cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false);
      }
      if (isServicesDropdownOpen) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLanguageDropdownOpen, isServicesDropdownOpen]);

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
  };

  // Navegación a páginas
  const navigateToPage = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  // Cambiar idioma y cerrar dropdown
  const changeLanguage = (newLanguage: 'es' | 'en') => {
    if (newLanguage !== language) {
      toggleLanguage();
    }
    setIsLanguageDropdownOpen(false);
  };

  const servicesItems = [
    { 
      id: "desarrollo-web", 
      label: t.serviceWeb, 
      description: t.serviceWebDesc, 
      icon: <ComputerDesktopIcon className="w-5 h-5" />
    },
    { 
      id: "ecommerce", 
      label: t.serviceEcommerce, 
      description: t.serviceEcommerceDesc, 
      icon: <ShoppingBagIcon className="w-5 h-5" />
    },
    { 
      id: "aplicaciones-web", 
      label: t.serviceApps, 
      description: t.serviceAppsDesc, 
      icon: <CodeBracketIcon className="w-5 h-5" />
    },
    { 
      id: "posicionamiento-seo", 
      label: t.serviceSEO, 
      description: t.serviceSEODesc, 
      icon: <MagnifyingGlassIcon className="w-5 h-5" />
    },
    {
      id: "mantenimiento-web",
      label: t.serviceMaintenance,
      description: t.serviceMaintenanceDesc,
      icon: <WrenchScrewdriverIcon className="w-5 h-5" />
    },
    { 
      id: "consultoria", 
      label: t.navConsulting, 
      description: t.navConsultingDesc, 
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />
    },
  ];

  const menuItems = [
    { id: "home", label: t.navHome, type: "scroll" }, // Siempre va a index
    { id: "proyectos", label: t.navPortfolio, type: "page", path: "/proyectos" }, // Página separada
    { id: "precios", label: t.navPricing, type: "page", path: "/precios" }, // Página separada
    { id: "contact", label: t.navContact, type: "page", path: "/contacto" }, // Página separada
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-green-200 shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => navigateToPage("/")}
            >
              <div className="text-2xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                7Pixels
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Inicio */}
              <motion.button
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === "home"
                    ? "text-green-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                onClick={() => {
                  window.location.href = "/";
                  setIsMobileMenuOpen(false);
                }}
              >
                {t.navHome}
                
                {/* Indicador activo */}
                {activeSection === "home" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-green-500/10 border border-green-500/30 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </motion.button>

              {/* Servicios Dropdown */}
              <div className="relative">
                <motion.button
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                    isServicesDropdownOpen
                      ? "text-green-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                >
                  <span>{t.navServices}</span>
                  <motion.div
                    animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                  
                  {/* Indicador activo */}
                  {isServicesDropdownOpen && (
                    <motion.div
                      layoutId="activeIndicatorServices"
                      className="absolute inset-0 bg-green-500/10 border border-green-500/30 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </motion.button>
                
                {/* Services Dropdown Menu */}
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      className="absolute left-0 top-12 w-[360px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                    >
                      <div className="p-3">
                        <div className="grid grid-cols-2 gap-2">
                          {servicesItems.map((service, index) => (
                            <motion.button
                              key={service.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                              onClick={() => {
                                window.location.href = `/servicios/${service.id}`;
                                setIsServicesDropdownOpen(false);
                              }}
                            >
                              <div className="text-gray-600 group-hover:text-green-600 transition-colors duration-200 flex-shrink-0">
                                {service.icon}
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className="font-semibold text-gray-800 text-xs group-hover:text-green-700 transition-colors duration-200">
                                  {service.label}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {service.description}
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resto del menú */}
              {menuItems.slice(1).map((item) => (
                <motion.button
                  key={item.id}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-green-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (item.type === "page") {
                      navigateToPage(item.path!);
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
                {/* Language Dropdown */}
                <div className="relative">
                  <motion.button
                    className="w-10 h-10 bg-gradient-to-r from-green-100 to-blue-100 backdrop-blur-sm rounded-full flex items-center justify-center text-lg text-gray-700 hover:from-green-200 hover:to-blue-200 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    title="Seleccionar idioma"
                  >
                    <GlobeAltIcon className="w-5 h-5" />
                  </motion.button>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isLanguageDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute right-0 top-12 w-32 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                      >
                        <button
                          onClick={() => changeLanguage('es')}
                          className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 ${
                            language === 'es' 
                              ? 'bg-green-500/10 text-green-600' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          🇪🇸 Español
                        </button>
                        <button
                          onClick={() => changeLanguage('en')}
                          className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 ${
                            language === 'en' 
                              ? 'bg-green-500/10 text-green-600' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          🇺🇸 English
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>


              </div>

              {/* CTA Button */}
              <motion.button
                className="ml-2 sm:ml-4 px-4 sm:px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full text-xs sm:text-sm hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-green-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
              >
                {t.heroCta1}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Simple and Clean */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Inicio */}
                <button
                    onClick={() => {
                    setIsMobileMenuOpen(false);
                        window.location.href = "/";
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === "home"
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {t.navHome}
                </button>

                {/* Servicios Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span>{t.navServices}</span>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  {/* Services Dropdown Content */}
                    <AnimatePresence>
                    {isMobileServicesOpen && (
                        <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1">
                          {servicesItems.map((service) => (
                          <button
                              key={service.id}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                                window.location.href = `/servicios/${service.id}`;
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors rounded-lg"
                            >
                              {service.label}
                          </button>
                          ))}
                        </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                {/* Rest of Main Navigation (excluding home) */}
                {menuItems.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (item.type === "page") {
                        window.location.href = item.path!;
                      } else {
                        setTimeout(() => scrollToSection(item.id), 100);
                      }
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-green-100 text-green-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Language */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Idioma
                  </div>
                  <div className="flex space-x-2 px-4">
                    <button
                      onClick={() => {
                        changeLanguage('es');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        language === 'es' 
                          ? "bg-green-100 text-green-700" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      🇪🇸 ES
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('en');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        language === 'en' 
                          ? "bg-green-100 text-green-700" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      🇺🇸 EN
                    </button>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-2 border-t border-gray-100 space-y-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection("contact"), 100);
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  {t.heroCta1}
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = "/proyectos";
                    }}
                    className="w-full py-3 px-4 border-2 border-green-300 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 text-center"
                  >
                    {t.heroCta2}
                  </button>
                </div>
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
