"use client";
import React, { lazy, Suspense } from "react";
import OptimizedHero from "@/components/optimized-hero";
import StatsSection from "@/components/stats-section";
import ScrollProgress from "@/components/scroll-progress";
import ModernNavbar from "@/components/modern-navbar";
import ModernContactForm from "@/components/modern-contact-form";
import { useTranslations } from "@/hooks/useTranslations";

// Lazy load heavy components below the fold
const OptimizedParticles = lazy(() => import("@/components/optimized-particles"));
const EnhancedServices = lazy(() => import("@/components/enhanced-services"));
const ModernTestimonials = lazy(() => import("@/components/modern-testimonials"));
// Formulario moderno interactivo


export default function Home() {
  const t = useTranslations();
  
  // Manejar navegación desde hash URLs
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Esperar un poco para que la página se cargue completamente
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Modern Navbar */}
      <ModernNavbar />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Optimized Particles Background */}
      <Suspense fallback={<div className="fixed inset-0 -z-10" />}>
        <OptimizedParticles />
      </Suspense>
      
      {/* Optimized Hero Section */}
      <section id="hero">
        <OptimizedHero />
      </section>
      
      {/* Stats Section */}
      <section id="stats">
        <StatsSection />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Suspense fallback={<div className="h-screen bg-neutral-900 animate-pulse" />}>
          <EnhancedServices />
        </Suspense>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <Suspense fallback={<div className="h-screen bg-black animate-pulse" />}>
          <ModernTestimonials />
        </Suspense>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gray-200 dark:bg-black relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black dark:text-white mb-8">
              {t.contactReadyTitle}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
              {t.contactReadyDescription}
            </p>
          </div>
          
          <ModernContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-100 dark:bg-neutral-900 text-black dark:text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                {t.footerCompanyName}
              </h4>
              <p className="text-gray-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {t.footerCompanyDescription}
              </p>
              <div className="flex space-x-4">
                {['📘', '📷', '🐦', '💼'].map((icon, index) => (
                  <button 
                    key={index}
                    className="w-10 h-10 bg-gray-300 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-lg hover:bg-gray-400 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-black dark:text-white mb-4">{t.footerServicesTitle}</h5>
              <ul className="space-y-2 text-gray-700 dark:text-neutral-300">
                <li>{t.footerServiceSocial}</li>
                <li>{t.footerServiceAds}</li>
                <li>{t.footerServiceDesign}</li>
                <li>{t.footerServiceWeb}</li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h5 className="font-semibold text-black dark:text-white mb-4">{t.footerContactTitle}</h5>
              <ul className="space-y-2 text-gray-700 dark:text-neutral-300">
                <li>{t.footerContactEmail}</li>
                <li>{t.footerContactPhone}</li>
                <li>{t.footerContactLocation}</li>
                <li>{t.footerContactSchedule}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 dark:border-neutral-800 pt-8 text-center">
            <p className="text-gray-600 dark:text-neutral-400">
              {t.footerCopyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
