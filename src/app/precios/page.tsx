"use client";
import React from "react";
import ModernNavbar from "@/components/modern-navbar";
import { CheckIcon, StarIcon, RocketLaunchIcon, SparklesIcon, ArrowRightIcon, ShieldCheckIcon, ClockIcon, CurrencyEuroIcon, TagIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';

export default function PreciosPage() {
  const t = useTranslations();
  
  const planes = [
    {
      id: "basico",
      nombre: t.pricingBasic,
      precio: "300",
      descripcion: t.pricingBasicDesc,
      icono: <CheckIcon className="w-8 h-8" />,
      color: "green",
      popular: false,
      caracteristicas: [
        "Sitio web hasta 5 páginas",
        "Diseño responsive completo",
        "Formulario de contacto",
        "SEO básico incluido",
        "Hosting + dominio 1 año",
        "Soporte por email",
        "Entrega en 2-3 semanas"
      ],
      cta: t.pricingBasicCta,
      destacado: false
    },
    {
      id: "pro",
      nombre: t.pricingPro,
      precio: "500",
      descripcion: t.pricingProDesc,
      icono: <StarIcon className="w-8 h-8" />,
      color: "blue",
      popular: true,
      caracteristicas: [
        "Sitio web hasta 10 páginas",
        "Sistema de gestión (CMS)",
        "SEO avanzado + Google Analytics",
        "Formularios avanzados",
        "Hosting premium + dominio",
        "Soporte prioritario",
        "Entrega en 3-4 semanas",
        "Capacitación incluida"
      ],
      cta: t.pricingProCta,
      destacado: true
    },
    {
      id: "premium",
      nombre: t.pricingPremium,
      precio: "900",
      descripcion: t.pricingPremiumDesc,
      icono: <SparklesIcon className="w-8 h-8" />,
      color: "purple",
      popular: false,
      caracteristicas: [
        "Páginas ilimitadas",
        "E-commerce básico incluido",
        "SEO completo + consultoría",
        "Integración redes sociales",
        "Hosting empresarial + subdominios",
        "Soporte 24/7",
        "Entrega en 4-6 semanas",
        "Mantenimiento 3 meses"
      ],
      cta: t.pricingPremiumCta,
      destacado: false
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    const colors = {
      green: {
        bg: popular ? "bg-gradient-to-br from-green-500 to-emerald-600" : "bg-white",
        text: popular ? "text-white" : "text-gray-800",
        border: popular ? "border-green-400" : "border-gray-200",
        button: "bg-green-600 hover:bg-green-700",
        accent: "text-green-600"
      },
      blue: {
        bg: popular ? "bg-gradient-to-br from-blue-50 to-blue-100" : "bg-white",
        text: popular ? "text-gray-800" : "text-gray-800",
        border: popular ? "border-blue-50" : "border-gray-200",
        button: "bg-blue-600 hover:bg-blue-700",
        accent: "text-blue-200"
      },
      purple: {
        bg: popular ? "bg-gradient-to-br from-purple-500 to-violet-600" : "bg-white",
        text: popular ? "text-white" : "text-gray-800",
        border: popular ? "border-purple-400" : "border-gray-200",
        button: "bg-purple-600 hover:bg-purple-700",
        accent: "text-purple-600"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernNavbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-4 pb-16 md:pt-6 md:pb-20 text-center bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <span className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">
              <CurrencyEuroIcon className="w-4 h-4 mr-2" /> {t.pricingTransparent}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 px-4">
              {t.pricingTitle} <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{t.pricingTitleHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 px-4">
              {t.pricingDescription}
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <TagIcon className="w-4 h-4 mr-2" />
              {t.pricingOffer}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-3">{t.pricingCompare}</p>
              <div className="flex justify-center">
                <ArrowRightIcon className="w-5 h-5 text-gray-400 rotate-90 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pt-2 pb-4 px-4 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.pricingPageTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.pricingPageDesc}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {planes.map((plan) => {
                const colors = getColorClasses(plan.color, plan.popular);
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-3xl shadow-xl border-2 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${colors.bg} ${colors.border} ${
                      plan.popular ? 'ring-1 ring-blue-50 ring-opacity-80 mt-8' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">
                          {t.pricingMostPopular}
                        </span>
                      </div>
                    )}
                    
                    <div className="p-4 sm:p-6">
                      {/* Plan Header */}
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${plan.popular ? 'bg-white/20 shadow-lg' : 'bg-gray-100 shadow-md'} transition-all duration-300`}>
                          <div className={`${colors.accent} transition-transform duration-300 hover:scale-110`}>
                            {plan.icono}
                          </div>
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>
                          {plan.nombre}
                        </h3>
                        <div className="mb-4">
                          <span className={`text-4xl font-extrabold ${colors.text}`}>
                            €{plan.precio}
                          </span>
                          <span className={`text-lg ${colors.text} opacity-75 ml-2`}>
                            {t.pricingPerProject}
                          </span>
                        </div>
                        <p className={`text-base ${colors.text} opacity-80 leading-relaxed`}>
                          {plan.descripcion}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {plan.caracteristicas.map((caracteristica, index) => (
                            <li key={index} className="flex items-start group">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 transition-all duration-200 ${colors.accent} bg-opacity-10 group-hover:bg-opacity-20`}>
                                <CheckIcon className={`w-3 h-3 ${colors.accent}`} />
                              </div>
                              <span className={`text-sm ${colors.text} opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-200`}>
                                {caracteristica}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <button
                        className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${colors.button}`}
                        onClick={() => {
                          const contactSection = document.getElementById('contact');
                          contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {plan.cta}
                        <ArrowRightIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t.pricingFaqTitle} <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{t.pricingFaqHighlight}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.pricingFaqDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CurrencyEuroIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{t.pricingFaqIva}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.pricingFaqIvaAnswer}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{t.pricingFaqHosting}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.pricingFaqHostingAnswer}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <ArrowRightIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{t.pricingFaqChange}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.pricingFaqChangeAnswer}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{t.pricingFaqCosts}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.pricingFaqCostsAnswer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 text-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t.pricingCtaTitle} <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{t.pricingCtaHighlight}</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t.pricingCtaDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="px-10 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <RocketLaunchIcon className="w-6 h-6" />
                  {t.pricingCtaButton}
                </button>
                <button 
                  className="px-10 py-4 bg-white text-gray-700 font-bold rounded-2xl border-2 border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  onClick={() => window.open('tel:+34600000000', '_self')}
                >
                  📞 {t.pricingCtaCall}
                </button>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600" />
                  {t.pricingNoCommitment}
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600" />
                  {t.pricingResponse24h}
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600" />
                  {t.pricingPersonalizedConsultation}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
