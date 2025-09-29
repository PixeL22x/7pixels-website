"use client";
import { motion } from "motion/react";
import { memo } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { useTheme } from "@/contexts/ThemeContext";
import {
  MagnifyingGlassIcon,
  BoltIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const EnhancedServices = memo(function EnhancedServices() {
  const t = useTranslations();
  const { language } = useTheme();

  const services = [
    {
      icon: ComputerDesktopIcon,
      title: t.serviceWeb,
      description: t.serviceWebDesc,
      features: [t.serviceFeatureReact, t.serviceFeaturePWA, t.serviceFeaturePerformance, t.serviceFeatureEcommerce],
    },
    {
      icon: BoltIcon,
      title: t.serviceApps,
      description: t.serviceAppsDesc,
      features: [t.serviceFeatureReact, t.serviceFeaturePWA, t.serviceFeatureCRM, t.serviceFeaturePerformance],
    },
    {
      icon: MagnifyingGlassIcon,
      title: t.serviceSEO,
      description: t.serviceSEODesc,
      features: [t.serviceFeatureTechnical, t.serviceFeatureKeyword, t.serviceFeaturePPC, t.serviceFeatureAnalytics],
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200">
            <span className="text-green-700 font-semibold text-lg">{t.servicesTag}</span>
      </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            {t.servicesTitle}{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {t.servicesHighlight}
            </span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                   {t.servicesDescription}
          </p>
        </div>

        {/* Services Grid - Equal Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
                        <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              {/* Equal Height Card */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-lg transition-shadow duration-300 hover:shadow-xl h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-green-600" />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                          {service.title}
                        </h4>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features - Simplified */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Simple CTA Button - Always at bottom */}
                  <button className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 text-green-700 font-semibold rounded-xl transition-colors duration-200 hover:from-green-200 hover:to-blue-200 mt-auto text-sm sm:text-base">
                    {t.exploreService}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Props Section - Before CTA */}
        <div className="mt-16 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative bg-gradient-to-b from-neutral-100 to-white p-6 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-green-300 rounded-full"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 relative z-20 mb-3">
                {t.serviceFeatureFastTitle}
              </h4>
              <p className="text-gray-600 relative z-20 leading-relaxed flex-grow text-sm">
                {t.serviceFeatureFastDesc}
              </p>
            </div>
            <div className="relative bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-indigo-400 rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 relative z-20 mb-3">
                {t.serviceFeatureGoogleTitle}
              </h4>
              <p className="text-gray-600 relative z-20 leading-relaxed flex-grow text-sm">
                {t.serviceFeatureGoogleDesc}
              </p>
            </div>
            <div className="relative bg-gradient-to-b from-green-50 to-white p-6 rounded-2xl overflow-hidden border border-green-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-green-300 rounded-full"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 relative z-20 mb-3">
                {t.serviceFeatureScalableTitle}
              </h4>
              <p className="text-gray-600 relative z-20 leading-relaxed flex-grow text-sm">
                {t.serviceFeatureScalableDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Redesigned */}
        <div className="p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-3">
              {t.contactTitle}
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t.contactDescription}
            </p>
            <button 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.servicesCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default EnhancedServices;