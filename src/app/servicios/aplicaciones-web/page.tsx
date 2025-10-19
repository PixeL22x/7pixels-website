"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ModernNavbar from "@/components/modern-navbar";
import { CodeBracketIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';

export default function AplicacionesWebPage() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <CodeBracketIcon className="w-4 h-4 mr-2" />
            {t.serviceAppsSubtitle}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {t.serviceAppsTitle}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.serviceAppsDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => router.push('/contacto')}
            >
              {t.serviceAppsCta}
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
              {t.serviceAppsWhyTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.serviceAppsWhyDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceAppsCustomTitle}</h3>
              <p className="text-gray-600">{t.serviceAppsCustomDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CogIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceAppsAutomationTitle}</h3>
              <p className="text-gray-600">{t.serviceAppsAutomationDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceAppsSecureTitle}</h3>
              <p className="text-gray-600">{t.serviceAppsSecureDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceAppsTypesTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceAppsTypesDesc}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceAppsDashboardTitle}</h3>
              <p className="text-gray-600">{t.serviceAppsDashboardDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceAppsManagementTitle}</h3>
              <p className="text-gray-600">{t.serviceAppsManagementDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceAppsMobileTitle}</h3>
              <p className="text-gray-600">{t.serviceAppsMobileDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceAppsIntegrationTitle}</h3>
              <p className="text-gray-600">{t.serviceAppsIntegrationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceAppsProcessTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceAppsProcessDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.serviceAppsStep1Title}</h3>
                  <p className="text-gray-600">{t.serviceAppsStep1Desc}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.serviceAppsStep2Title}</h3>
                  <p className="text-gray-600">{t.serviceAppsStep2Desc}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.serviceAppsStep3Title}</h3>
                  <p className="text-gray-600">{t.serviceAppsStep3Desc}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.serviceAppsStep4Title}</h3>
                  <p className="text-gray-600">{t.serviceAppsStep4Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.serviceAppsFinalTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.serviceAppsFinalDesc}
          </p>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() => router.push('/contacto')}
          >
            {t.serviceAppsFinalCta}
          </button>
        </div>
      </section>
    </div>
  );
}
