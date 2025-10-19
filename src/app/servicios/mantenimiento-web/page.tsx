"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ModernNavbar from "@/components/modern-navbar";
import { WrenchScrewdriverIcon, ShieldCheckIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';

export default function MantenimientoWebPage() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <WrenchScrewdriverIcon className="w-4 h-4 mr-2" />
            {t.serviceMaintenanceSubtitle}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {t.serviceMaintenanceTitle}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.serviceMaintenanceDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => router.push('/contacto')}
            >
              {t.serviceMaintenanceCta}
            </button>
            <button 
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-green-500 hover:text-green-600 transition-all duration-200"
              onClick={() => router.push('/proyectos')}
            >
              {t.serviceMaintenanceCta2}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceMaintenanceWhyTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.serviceMaintenanceWhyDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceMaintenanceSecurityTitle}</h3>
              <p className="text-gray-600">{t.serviceMaintenanceSecurityDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceMaintenanceAvailabilityTitle}</h3>
              <p className="text-gray-600">{t.serviceMaintenanceAvailabilityDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <WrenchScrewdriverIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceMaintenanceUpdatesTitle}</h3>
              <p className="text-gray-600">{t.serviceMaintenanceUpdatesDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceMaintenanceIncludesTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceMaintenanceIncludesDesc}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceMaintenanceSecurityService}</h3>
              <p className="text-gray-600">{t.serviceMaintenanceSecurityServiceDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceMaintenanceSpeedService}</h3>
              <p className="text-gray-600">{t.serviceMaintenanceSpeedServiceDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceMaintenanceMonitorService}</h3>
              <p className="text-gray-600">{t.serviceMaintenanceMonitorServiceDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceMaintenanceSupportService}</h3>
              <p className="text-gray-600">{t.serviceMaintenanceSupportServiceDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceMaintenanceReportsService}</h3>
              <p className="text-gray-600">{t.serviceMaintenanceReportsServiceDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceMaintenancePlansTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceMaintenancePlansDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.serviceMaintenancePlanBasic}</h3>
              <div className="text-3xl font-bold text-green-600 mb-6">{t.serviceMaintenancePlanBasicPrice}</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanBasicBackup}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanBasicUpdates}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanBasicSupport}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanBasicReport}</span>
                </li>
              </ul>
              <button 
                className="w-full px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-200"
                onClick={() => router.push('/contacto')}
              >
                {t.serviceMaintenancePlanBasicCta}
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">{t.serviceMaintenancePlanPopular}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.serviceMaintenancePlanPremium}</h3>
              <div className="text-3xl font-bold text-green-600 mb-6">{t.serviceMaintenancePlanPremiumPrice}</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanPremiumBackup}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanPremiumUpdates}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanPremiumSupport}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanPremiumMonitor}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{t.serviceMaintenancePlanPremiumSEO}</span>
                </li>
              </ul>
              <button 
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200"
                onClick={() => router.push('/contacto')}
              >
                {t.serviceMaintenancePlanPremiumCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.serviceMaintenanceFinalTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.serviceMaintenanceFinalDesc}
          </p>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() => router.push('/contacto')}
          >
            {t.serviceMaintenanceCta}
          </button>
        </div>
      </section>
    </div>
  );
}
