"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "@/hooks/useTranslations";
import { useTheme } from "@/contexts/ThemeContext";
import { 
  CheckCircleIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  HandRaisedIcon,
  CogIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const ModernContactForm = () => {
  const t = useTranslations();
  const { language } = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [] as string[],
    message: ""
  });
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Redirección después de 5 segundos cuando el mensaje se envía
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, router]);

  const serviceOptions = [
    { id: "web", label: t.serviceWeb, icon: <ComputerDesktopIcon className="w-5 h-5" /> },
    { id: "ecommerce", label: t.serviceEcommerce, icon: <ShoppingBagIcon className="w-5 h-5" /> },
    { id: "seo", label: t.serviceSEO, icon: <MagnifyingGlassIcon className="w-5 h-5" /> },
    { id: "apps", label: t.serviceApps, icon: <DevicePhoneMobileIcon className="w-5 h-5" /> },
    { id: "maintenance", label: t.serviceMaintenance, icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
    { id: "consulting", label: t.serviceConsulting, icon: <BriefcaseIcon className="w-5 h-5" /> }
  ];



  const steps = [
    { id: "contact", title: t.formStepContact, icon: <HandRaisedIcon className="w-5 h-5" /> },
    { id: "services", title: t.formStepServices, icon: <CogIcon className="w-5 h-5" /> },
    { id: "message", title: t.formStepMessage, icon: <ChatBubbleLeftRightIcon className="w-5 h-5" /> }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {};
    
    switch (step) {
      case 0:
        if (!formData.name.trim()) newErrors.name = t.formErrorNameRequired;
        if (!formData.email.trim()) newErrors.email = t.formErrorEmailRequired;
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = t.formErrorEmailInvalid;
        }
        break;
      case 1:
        if (formData.services.length === 0) {
          newErrors.services = t.formErrorServicesRequired;
        }
        break;
      case 2:
        if (!formData.message.trim()) newErrors.message = t.formErrorMessageRequired;
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: formData.services.map(id => 
            serviceOptions.find(s => s.id === id)?.label
          ).join(", ")
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-12 border border-green-500/30 shadow-2xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircleIcon className="w-16 h-16 text-white" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
            >
              {t.formSuccessTitle}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
            >
              {t.formSuccessMessage}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {language === 'es' ? 'Redirigiendo al inicio en 5 segundos...' : 'Redirecting to home in 5 seconds...'}
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  index <= currentStep
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-400 text-white"
                    : "border-gray-600 text-gray-400"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {step.icon}
              </motion.div>
              {index < steps.length - 1 && (
                <div className={`w-8 h-1 mx-2 rounded ${
                  index < currentStep ? "bg-green-500" : "bg-gray-600"
                }`} />
              )}
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white text-center">
          {steps[currentStep].title}
        </h3>
      </div>

      {/* Form Steps */}
      <motion.div
        className="bg-white/90 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-300 dark:border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={currentStep}
      >
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.formLabelName}
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ${
                    focusedField === "name" ? "border-green-400 shadow-lg shadow-green-400/25" : "border-gray-600"
                  } ${errors.name ? "border-red-400" : ""}`}
                  placeholder={t.formPlaceholderName}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.formLabelEmail}
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ${
                    focusedField === "email" ? "border-green-400 shadow-lg shadow-green-400/25" : "border-gray-600"
                  } ${errors.email ? "border-red-400" : ""}`}
                  placeholder={t.formPlaceholderEmail}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.formLabelCompany}
                </label>
                <motion.input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ${
                    focusedField === "company" ? "border-green-400 shadow-lg shadow-green-400/25" : "border-gray-600"
                  }`}
                  placeholder={t.formPlaceholderCompany}
                />
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t.formServicesQuestion}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceOptions.map((service) => (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceToggle(service.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      formData.services.includes(service.id)
                        ? "border-green-400 bg-green-500/10 text-green-400"
                        : "border-gray-600 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:border-gray-500"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <span className="font-medium">{service.label}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
              {errors.services && <p className="text-red-400 text-sm mt-2">{errors.services}</p>}
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.formLabelMessage}
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none ${
                    focusedField === "message" ? "border-green-400 shadow-lg shadow-green-400/25" : "border-gray-600"
                  } ${errors.message ? "border-red-400" : ""}`}
                  placeholder={t.formPlaceholderMessage}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Resumen */}
              <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-4 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-3">{t.formSummaryTitle}</h4>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><strong>{t.formSummaryContact}</strong> {formData.name} ({formData.email})</p>
                  {formData.company && <p><strong>{t.formSummaryCompany}</strong> {formData.company}</p>}
                  <p><strong>{t.formSummaryServices}</strong> {formData.services.map(id => 
                    serviceOptions.find(s => s.id === id)?.label
                  ).join(", ")}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <motion.button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              currentStep === 0
                ? "opacity-50 cursor-not-allowed text-gray-500"
                : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10"
            }`}
            whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
          >
            {t.formButtonPrevious}
          </motion.button>

          {currentStep < steps.length - 1 ? (
            <motion.button
              type="button"
              onClick={nextStep}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.formButtonNext}
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-green-400 hover:to-emerald-400"
              }`}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  {t.formButtonSending}
                </span>
              ) : (
                t.formButtonSubmit
              )}
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ModernContactForm;
