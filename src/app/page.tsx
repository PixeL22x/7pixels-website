"use client";
import React, { lazy, Suspense } from "react";
import OptimizedHero from "@/components/optimized-hero";
import ScrollProgress from "@/components/scroll-progress";
import ModernNavbar from "@/components/modern-navbar";
import ModernContactForm from "@/components/modern-contact-form";
import { useTranslations } from "@/hooks/useTranslations";
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { ProcessFeatures } from '@/components/ui/process-features';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { IconPencil, IconPalette, IconCode, IconRocket } from "@tabler/icons-react";

// Lazy load heavy components below the fold
const EnhancedServices = lazy(() => import("@/components/enhanced-services"));
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
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 transition-colors duration-300">
      {/* Modern Navbar */}
      <ModernNavbar />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Background particles removed for a cleaner, more professional look */}
      
      {/* Optimized Hero Section */}
      <section id="hero">
        <OptimizedHero />
      </section>
      
      {/* Trust Bar with Carousel */}
      <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex animate-scroll-trust">
            {/* Repeat trust bar 10 times for truly infinite effect */}
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center gap-12 mr-12 whitespace-nowrap">
              {/* Trust Metrics */}
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">1,247</span>
                  <span>proyectos entregados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">4.9/5</span>
                  <span>satisfacción cliente</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">2.3x</span>
                  <span>mejora en tráfico</span>
                </div>
              </div>
              
              {/* Tech Stack */}
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Tecnología:</span>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">WordPress</div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">Cloudflare</div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">Google Analytics</div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">React</div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">SSL</div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Gallery Section */}
      <section className="pt-2 pb-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee">
              {/* First set */}
              <div className="flex gap-8 shrink-0">
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/acabados7p2.png" 
                    alt="Acabados 7P - Servicios" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/acabados7p3.png" 
                    alt="Acabados 7P - Galería" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/Acabados7p4.png" 
                    alt="Acabados 7P - Contacto" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/Acabados7p5.png" 
                    alt="Acabados 7P - Proyectos" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/Acabados7p6.png" 
                    alt="Acabados 7P - Detalles" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
              </div>
              
              {/* Second set for seamless loop */}
              <div className="flex gap-8 shrink-0">
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/acabados7p2.png" 
                    alt="Acabados 7P - Servicios" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/acabados7p3.png" 
                    alt="Acabados 7P - Galería" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/Acabados7p4.png" 
                    alt="Acabados 7P - Contacto" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/Acabados7p5.png" 
                    alt="Acabados 7P - Proyectos" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
                <div className="group relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/projects/Acabados7p6.png" 
                    alt="Acabados 7P - Detalles" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Suspense fallback={<div className="h-screen bg-gray-50 animate-pulse" />}>
          <EnhancedServices />
        </Suspense>
      </section>
      
      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.processTitle}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Trabajamos de forma estructurada para garantizar el mejor resultado en cada proyecto</p>
          </div>
          
          <ProcessFeatures 
            features={[
              {
                title: t.processStep1,
                description: t.processStep1Desc,
                icon: <IconPencil size={24} />
              },
              {
                title: t.processStep2,
                description: t.processStep2Desc,
                icon: <IconPalette size={24} />
              },
              {
                title: t.processStep3,
                description: t.processStep3Desc,
                icon: <IconCode size={24} />
              },
              {
                title: t.processStep4,
                description: t.processStep4Desc,
                icon: <IconRocket size={24} />
              }
            ]}
          />
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.guaranteeTitle}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.guaranteeCopy}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-3 text-center">{t.guaranteePoint1}</h4>
              <p className="text-gray-600 text-center text-sm flex-grow">Corrección de errores sin costo adicional</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-3 text-center">{t.guaranteePoint2}</h4>
              <p className="text-gray-600 text-center text-sm flex-grow">Planes de mantenimiento y nuevas funcionalidades</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-3 text-center">{t.guaranteePoint3}</h4>
              <p className="text-gray-600 text-center text-sm flex-grow">Seguimiento del rendimiento y optimización</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.faqTitle}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.faqSubtitle}</p>
          </div>
          
          <FAQAccordion 
            faqs={[
              {
                question: t.faqQuestion1,
                answer: t.faqAnswer1
              },
              {
                question: t.faqQuestion2,
                answer: t.faqAnswer2
              },
              {
                question: t.faqQuestion3,
                answer: t.faqAnswer3
              },
              {
                question: t.faqQuestion4,
                answer: t.faqAnswer4
              },
              {
                question: t.faqQuestion5,
                answer: t.faqAnswer5
              }
            ]}
          />
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t.contactTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.contactDescription}
            </p>
          </div>
          
          <ModernContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white text-gray-800 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {t.footerCompanyName}
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.footerCompanyDescription}
              </p>
              <div className="flex space-x-4">
                {['📘', '📷', '🐦', '💼'].map((icon, index) => (
                  <button 
                    key={index}
                    className="w-10 h-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center text-lg hover:from-green-200 hover:to-blue-200 transition-colors duration-300"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-gray-800 mb-4">{t.footerServicesTitle}</h5>
              <ul className="space-y-2 text-gray-600">
                <li>{t.footerServiceWeb}</li>
                <li>{t.footerServiceApps}</li>
                <li>{t.footerServiceSEO}</li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h5 className="font-semibold text-gray-800 mb-4">{t.footerContactTitle}</h5>
              <ul className="space-y-2 text-gray-600">
                <li>{t.footerContactEmail}</li>
                <li>{t.footerContactPhone}</li>
                <li>{t.footerContactLocation}</li>
                <li>{t.footerContactSchedule}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500">
              {t.footerCopyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
