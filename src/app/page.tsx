"use client";
import React, { lazy, Suspense } from "react";
import OptimizedHero from "@/components/optimized-hero";
import StatsSection from "@/components/stats-section";
import ScrollProgress from "@/components/scroll-progress";
import ModernNavbar from "@/components/modern-navbar";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";

// Lazy load heavy components below the fold
const OptimizedParticles = lazy(() => import("@/components/optimized-particles"));
const EnhancedServices = lazy(() => import("@/components/enhanced-services"));
const ModernTestimonials = lazy(() => import("@/components/modern-testimonials"));
// Formulario moderno interactivo
import ModernContactForm from "@/components/modern-contact-form";

export default function Home() {
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
          </p>
          <ModernContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                7Pixels
              </h4>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Somos la agencia de marketing digital que transforma tu visión en resultados extraordinarios.
                Especializados en hacer crecer negocios en el mundo digital.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
                  { icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
                  { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
                  { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" }
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-lg hover:bg-neutral-700 transition-colors duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-white mb-4">Servicios</h5>
              <ul className="space-y-2 text-neutral-300">
                <li>Marketing en Redes Sociales</li>
                <li>Google Ads & SEO</li>
                <li>Diseño & Branding</li>
                <li>Desarrollo Web</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-semibold text-white mb-4">Contacto</h5>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contacto@7pixels.es</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +34 610 154 191</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Barcelona, España</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lun - Vie: 9AM - 6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-neutral-400">
              © 2024 7Pixels. Todos los derechos reservados. Transformando ideas en realidad digital.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
