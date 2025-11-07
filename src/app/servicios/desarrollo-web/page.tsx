"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ModernNavbar from "@/components/modern-navbar";
import { CheckCircleIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';
import TrueFocus from '@/components/TrueFocus';

export default function DesarrolloWebPage() {
  const t = useTranslations();
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <RocketLaunchIcon className="w-4 h-4 mr-2" />
            {t.serviceWebDevTitle}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            <TrueFocus
              sentence="SERVICIOS DE DESARROLLO WEB"
              blurAmount={3}
              borderColor="#10b981"
              glowColor="rgba(16, 185, 129, 0.6)"
              animationDuration={0.8}
              pauseBetweenAnimations={1.5}
            />
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.serviceWebDevDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => router.push('/contacto')}
            >
              {t.serviceWebDevCta}
            </button>
            <button 
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-green-500 hover:text-green-600 transition-all duration-200"
              onClick={() => router.push('/proyectos')}
            >
              {t.heroCta2}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceWebWhyTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.serviceWebWhyDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceWebTechTitle}</h3>
              <p className="text-gray-600">{t.serviceWebTechDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceWebSEOTitle}</h3>
              <p className="text-gray-600">{t.serviceWebSEODesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceWebSpeedTitle}</h3>
              <p className="text-gray-600">{t.serviceWebSpeedDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceWebProcessTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceWebProcessDesc}
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceWebStep1Title}</h3>
                <p className="text-gray-600">{t.serviceWebStep1Desc}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceWebStep2Title}</h3>
                <p className="text-gray-600">{t.serviceWebStep2Desc}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceWebStep3Title}</h3>
                <p className="text-gray-600">{t.serviceWebStep3Desc}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceWebStep4Title}</h3>
                <p className="text-gray-600">{t.serviceWebStep4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.contactDescription}
          </p>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() => router.push('/contacto')}
          >
            {t.contactCta}
          </button>
        </div>
      </section>
    </div>
  );
}
