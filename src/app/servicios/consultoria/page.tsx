"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ModernNavbar from "@/components/modern-navbar";
import { ChatBubbleLeftRightIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';

export default function ConsultoriaPage() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
            {t.serviceConsultingSubtitle}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {t.serviceConsultingTitle}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.serviceConsultingDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => router.push('/contacto')}
            >
              {t.serviceConsultingCta}
            </button>
            <button 
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-green-500 hover:text-green-600 transition-all duration-200"
              onClick={() => router.push('/proyectos')}
            >
              {t.serviceConsultingCta2}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceConsultingWhenTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.serviceConsultingWhenDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LightBulbIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceConsultingDecisionsTitle}</h3>
              <p className="text-gray-600">{t.serviceConsultingDecisionsDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceConsultingStrategyTitle}</h3>
              <p className="text-gray-600">{t.serviceConsultingStrategyDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceConsultingOptimizationTitle}</h3>
              <p className="text-gray-600">{t.serviceConsultingOptimizationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceConsultingTypesTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceConsultingTypesDesc}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceConsultingArchitectureTitle}</h3>
              <p className="text-gray-600">{t.serviceConsultingArchitectureDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceConsultingAuditTitle}</h3>
              <p className="text-gray-600">{t.serviceConsultingAuditDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceConsultingMigrationTitle}</h3>
              <p className="text-gray-600">{t.serviceConsultingMigrationDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceConsultingSecurityTitle}</h3>
              <p className="text-gray-600">{t.serviceConsultingSecurityDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceConsultingPerformanceTitle}</h3>
              <p className="text-gray-600">{t.serviceConsultingPerformanceDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceConsultingProcessTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceConsultingProcessDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.serviceConsultingStep1Title}</h3>
                  <p className="text-gray-600">{t.serviceConsultingStep1Desc}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.serviceConsultingStep2Title}</h3>
                  <p className="text-gray-600">{t.serviceConsultingStep2Desc}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.serviceConsultingStep3Title}</h3>
                  <p className="text-gray-600">{t.serviceConsultingStep3Desc}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.serviceConsultingStep4Title}</h3>
                  <p className="text-gray-600">{t.serviceConsultingStep4Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceConsultingBenefitsTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceConsultingBenefitsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.serviceConsultingAvoidErrorsTitle}</h3>
                  <p className="text-gray-600 text-sm">{t.serviceConsultingAvoidErrorsDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.serviceConsultingSaveTimeTitle}</h3>
                  <p className="text-gray-600 text-sm">{t.serviceConsultingSaveTimeDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.serviceConsultingBetterDecisionsTitle}</h3>
                  <p className="text-gray-600 text-sm">{t.serviceConsultingBetterDecisionsDesc}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.serviceConsultingScalabilityTitle}</h3>
                  <p className="text-gray-600 text-sm">{t.serviceConsultingScalabilityDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.serviceConsultingROITitle}</h3>
                  <p className="text-gray-600 text-sm">{t.serviceConsultingROIDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.serviceConsultingPeaceTitle}</h3>
                  <p className="text-gray-600 text-sm">{t.serviceConsultingPeaceDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.serviceConsultingFinalTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.serviceConsultingFinalDesc}
          </p>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() => router.push('/contacto')}
          >
            {t.serviceConsultingCta}
          </button>
        </div>
      </section>
    </div>
  );
}
