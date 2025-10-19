"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ModernNavbar from "@/components/modern-navbar";
import { ShoppingBagIcon, CreditCardIcon, TruckIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';

export default function EcommercePage() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <ShoppingBagIcon className="w-4 h-4 mr-2" />
            {t.serviceEcommerceSubtitle}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {t.serviceEcommerceTitle}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.serviceEcommerceDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => router.push('/contacto')}
            >
              {t.serviceEcommerceCta}
            </button>
            <button 
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-green-500 hover:text-green-600 transition-all duration-200"
              onClick={() => router.push('/proyectos')}
            >
              {t.serviceEcommerceCta2}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceEcommerceFeaturesTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.serviceEcommerceFeaturesDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBagIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceEcommerceCatalogTitle}</h3>
              <p className="text-gray-600">{t.serviceEcommerceCatalogDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCardIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceEcommercePaymentsTitle}</h3>
              <p className="text-gray-600">{t.serviceEcommercePaymentsDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t.serviceEcommerceShippingTitle}</h3>
              <p className="text-gray-600">{t.serviceEcommerceShippingDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.serviceEcommerceBenefitsTitle}
            </h2>
            <p className="text-gray-600">
              {t.serviceEcommerceBenefitsDesc}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceEcommerceSpeedTitle}</h3>
              <p className="text-gray-600">{t.serviceEcommerceSpeedDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceEcommerceResponsiveTitle}</h3>
              <p className="text-gray-600">{t.serviceEcommerceResponsiveDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceEcommerceSEOTitle}</h3>
              <p className="text-gray-600">{t.serviceEcommerceSEODesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.serviceEcommerceAnalyticsTitle}</h3>
              <p className="text-gray-600">{t.serviceEcommerceAnalyticsDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.serviceEcommerceFinalTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.serviceEcommerceFinalDesc}
          </p>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() => router.push('/contacto')}
          >
            {t.serviceEcommerceFinalCta}
          </button>
        </div>
      </section>
    </div>
  );
}
