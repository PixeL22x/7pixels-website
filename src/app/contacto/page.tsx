"use client";
import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import ModernNavbar from '@/components/modern-navbar';
import ModernContactForm from '@/components/modern-contact-form';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Modern Navbar */}
      <ModernNavbar />
      
      {/* Header Section */}
      <div className="pt-16 pb-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-sm font-medium mb-6">
            📞 {t.contactBadge}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t.contactFormTitle}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t.contactFormDescription}
            </p>
          </div>
          
          <ModernContactForm />
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t.contactInfoTitle}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t.contactInfoDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t.contactEmail}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.emailAddress}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.contactEmailDescription}
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t.contactPhone}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                +34 {t.phoneNumber}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.contactPhoneDescription}
              </p>
            </div>

            {/* Office */}
            <div className="text-center p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t.contactOffice}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.officeLocation}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.contactOfficeDescription}
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="text-center mt-12 p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t.contactScheduleTitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              {t.contactSchedule}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t.contactScheduleDescription}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.contactCtaTitle}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t.contactCtaDescription}
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            {t.contactCta}
          </button>
        </div>
      </section>
    </div>
  );
}
