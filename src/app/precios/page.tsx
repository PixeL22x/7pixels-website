"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ModernNavbar from "@/components/modern-navbar";
import { CheckIcon, StarIcon, RocketLaunchIcon, SparklesIcon, ArrowRightIcon, ShieldCheckIcon, CurrencyEuroIcon, TagIcon, CogIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';

export default function PreciosPage() {
  const t = useTranslations();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'webpages' | 'webapps'>('webpages');
  
  const planes = [
    {
      id: "basico",
      nombre: t.pricingBasic,
      precio: "300",
      precioOriginal: "500",
      descripcion: t.pricingBasicDesc,
      icono: <CheckIcon className="w-8 h-8" />,
      color: "green",
      popular: false,
      caracteristicas: t.pricingBasicFeatures,
      cta: t.pricingBasicCta,
      destacado: false
    },
    {
      id: "pro",
      nombre: t.pricingPro,
      precio: "900",
      descripcion: t.pricingProDesc,
      icono: <StarIcon className="w-8 h-8" />,
      color: "blue",
      popular: true,
      caracteristicas: t.pricingProFeatures,
      cta: t.pricingProCta,
      destacado: true
    },
    {
      id: "premium",
      nombre: t.pricingPremium,
      precio: "1.200",
      descripcion: t.pricingPremiumDesc,
      icono: <SparklesIcon className="w-8 h-8" />,
      color: "purple",
      popular: false,
      caracteristicas: t.pricingPremiumFeatures,
      cta: t.pricingPremiumCta,
      destacado: false
    },
    {
      id: "custom",
      nombre: t.pricingCustom,
      precio: t.pricingCustomPrice,
      descripcion: t.pricingCustomDesc,
      icono: <CogIcon className="w-8 h-8" />,
      color: "orange",
      popular: false,
      caracteristicas: t.pricingCustomFeatures,
      cta: t.pricingCustomCta,
      destacado: false
    }
  ];

  const planesWebApps = [
    {
      id: "basico-app",
      nombre: t.pricingAppBasic,
      precio: "1.200",
      precioOriginal: undefined,
      descripcion: t.pricingAppBasicDesc,
      icono: <CheckIcon className="w-8 h-8" />,
      color: "green",
      popular: false,
      caracteristicas: t.pricingAppBasicFeatures,
      cta: t.pricingAppBasicCta,
      destacado: false
    },
    {
      id: "pro-app",
      nombre: t.pricingAppPro,
      precio: "3.500",
      precioOriginal: undefined,
      descripcion: t.pricingAppProDesc,
      icono: <StarIcon className="w-8 h-8" />,
      color: "blue",
      popular: true,
      caracteristicas: t.pricingAppProFeatures,
      cta: t.pricingAppProCta,
      destacado: true
    },
    {
      id: "premium-app",
      nombre: t.pricingAppPremium,
      precio: "7.500",
      precioOriginal: undefined,
      descripcion: t.pricingAppPremiumDesc,
      icono: <SparklesIcon className="w-8 h-8" />,
      color: "purple",
      popular: false,
      caracteristicas: t.pricingAppPremiumFeatures,
      cta: t.pricingAppPremiumCta,
      destacado: false
    },
    {
      id: "custom-app",
      nombre: t.pricingCustom,
      precio: t.pricingCustomPrice,
      precioOriginal: undefined,
      descripcion: t.pricingCustomDesc,
      icono: <CogIcon className="w-8 h-8" />,
      color: "orange",
      popular: false,
      caracteristicas: t.pricingCustomFeatures,
      cta: t.pricingCustomCta,
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
      },
      orange: {
        bg: popular ? "bg-gradient-to-br from-emerald-500 to-green-600" : "bg-white",
        text: popular ? "text-white" : "text-gray-800",
        border: popular ? "border-emerald-400" : "border-gray-200",
        button: "bg-emerald-600 hover:bg-emerald-700",
        accent: "text-emerald-600"
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
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                {t.pricingPageDesc}
              </p>
              
              {/* Tabs */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-2xl p-2 inline-flex">
                  <button
                    onClick={() => setActiveTab('webpages')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === 'webpages'
                        ? 'bg-white text-gray-800 shadow-lg'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {t.pricingWebPages}
                  </button>
                  <button
                    onClick={() => setActiveTab('webapps')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === 'webapps'
                        ? 'bg-white text-gray-800 shadow-lg'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {t.pricingWebApps}
                  </button>
                </div>
              </div>
              
              {/* Tab Description */}
              <p className="text-base text-gray-500 max-w-xl mx-auto mb-8">
                {activeTab === 'webpages' ? t.pricingWebPagesDesc : t.pricingWebAppsDesc}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto items-stretch">
              {(activeTab === 'webpages' ? planes : planesWebApps).filter(plan => !plan.id.includes('custom')).map((plan) => {
                const colors = getColorClasses(plan.color, plan.popular);
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-3xl shadow-xl border-2 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${colors.bg} ${colors.border} ${
                      plan.popular ? 'ring-1 ring-blue-50 ring-opacity-80 mt-8' : ''
                    } flex flex-col`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">
                          {t.pricingMostPopular}
                        </span>
                      </div>
                    )}
                    
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
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
                          {plan.precioOriginal && (
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <span className={`text-lg line-through ${colors.text} opacity-50`}>
                                €{plan.precioOriginal}
                              </span>
                              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold">
                                {t.pricingOfferBadge}
                              </span>
                            </div>
                          )}
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
                      <div className="mb-6 flex-grow">
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
                        onClick={() => router.push('/contacto')}
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

        {/* Custom Plan Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t.pricingCustomSectionTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.pricingCustomSectionDesc}
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-200 p-8 md:p-12">
              {(() => {
                const customPlan = (activeTab === 'webpages' ? planes : planesWebApps).find(plan => plan.id.includes('custom'));
                const colors = getColorClasses(customPlan?.color || 'orange', false);
                return (
                  <div className="text-center">
                    {/* Plan Header */}
                    <div className="mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-emerald-100 shadow-lg">
                        <div className="text-emerald-600">
                          {customPlan?.icono}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        {customPlan?.nombre}
                      </h3>
                      <div className="mb-6">
                        <span className="text-5xl font-extrabold text-emerald-600">
                          {customPlan?.precio}
                        </span>
                      </div>
                      <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        {customPlan?.descripcion}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {customPlan?.caracteristicas.map((caracteristica, index) => (
                          <li key={index} className="flex items-start group">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 bg-emerald-100 group-hover:bg-emerald-200 transition-colors duration-200">
                              <CheckIcon className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                              {caracteristica}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`px-12 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 text-lg mx-auto ${colors.button}`}
                      onClick={() => router.push('/contacto')}
                    >
                      <RocketLaunchIcon className="w-6 h-6" />
                      {customPlan?.cta}
                    </button>
                  </div>
                );
              })()}
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
                  onClick={() => router.push('/contacto')}
                >
                  <RocketLaunchIcon className="w-6 h-6" />
                  {t.pricingCtaButton}
                </button>
                <button
                  className="px-10 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  onClick={() => window.open('https://wa.me/34634968135', '_blank')}
                >
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  {t.pricingCtaCall}
                  <span className="text-sm opacity-90">{t.pricingWhatsAppSubtext}</span>
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
