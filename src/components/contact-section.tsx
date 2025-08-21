"use client";
import { motion } from "motion/react";
import { useTranslations } from "@/hooks/useTranslations";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactSection() {
  const t = useTranslations();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  
  // Estados del formulario
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  // Manejar cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validar email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🔥 FORMULARIO ENVIADO:', formData);
    
    // Validaciones
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'El nombre es requerido' });
      return;
    }
    
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'El email es requerido' });
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      setFormStatus({ type: 'error', message: 'El email no es válido' });
      return;
    }
    
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'El mensaje es requerido' });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Enviando mensaje...' });

    try {
      console.log('📡 Enviando a API:', formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📩 Respuesta API:', response.status);
      const data = await response.json();
      console.log('📄 Data recibida:', data);

      if (response.ok) {
        console.log('✅ EMAIL ENVIADO EXITOSAMENTE');
        setFormStatus({ type: 'success', message: '¡Mensaje enviado correctamente! Te contactaremos pronto.' });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        console.log('❌ Error en respuesta:', data);
        setFormStatus({ type: 'error', message: data.error || 'Error al enviar el mensaje' });
      }
    } catch (error) {
      console.log('🚨 Error de conexión:', error);
      setFormStatus({ type: 'error', message: 'Error de conexión. Inténtalo de nuevo.' });
    }
  };

  const contactCards = [
    {
      icon: "📧",
      title: t.contactEmail,
      value: t.emailAddress,
      href: `mailto:${t.emailAddress}`,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      icon: "📱",
      title: t.contactPhone,
      value: `+34 ${t.phoneNumber}`,
      href: `tel:+34${t.phoneNumber.replace(/\s/g, '')}`,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: "📍",
      title: t.contactOffice,
      value: t.officeLocation,
      href: "#",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-neutral-900 via-black to-neutral-800 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', left: '50%' }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 mb-8 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-500/20"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-green-400 font-medium">💌 Contacto</span>
            <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>
          
          <h3 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            {t.contactTitle.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 2 || index === 3 ? "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent" : ""}
              >
                {word}{' '}
              </motion.span>
            ))}
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.contactDescription}
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative group cursor-pointer`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`relative p-8 rounded-2xl ${card.bgColor} backdrop-blur-sm border ${card.borderColor} transition-all duration-300 group-hover:border-opacity-60`}>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    scale: hoveredCard === index ? 1.2 : 1,
                    rotate: hoveredCard === index ? 10 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>
                
                {/* Content */}
                <h4 className="text-white font-bold text-xl mb-2">{card.title}</h4>
                <motion.a
                  href={card.href}
                  className={`text-lg bg-gradient-to-r ${card.color} bg-clip-text text-transparent font-medium hover:underline block`}
                  whileHover={{ scale: 1.05 }}
                >
                  {card.value}
                </motion.a>
                
                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100`}
                  style={{
                    background: `linear-gradient(45deg, transparent, transparent)`,
                    border: `2px solid transparent`,
                    backgroundImage: hoveredCard === index ? `linear-gradient(45deg, var(--tw-gradient-stops))` : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Form Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Interactive elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-3xl font-bold text-white mb-4">
                {t.contactFormTitle}
              </h4>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas con una propuesta personalizada.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "🚀 Respuesta en 24 horas",
                "💡 Consulta gratuita",
                "📈 Propuesta personalizada",
                "🎯 Estrategia a medida"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-neutral-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                { number: "500+", label: "Proyectos" },
                { number: "24h", label: "Respuesta" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-neutral-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Enhanced form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
              {/* Form glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-3xl blur opacity-50"></div>
              
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Status Message */}
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center font-medium ${
                      formStatus.type === 'success' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : formStatus.type === 'error'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}

                {[
                  { placeholder: t.formName, type: "text", icon: "👤", name: "name", required: true },
                  { placeholder: t.formEmail, type: "email", icon: "📧", name: "email", required: true },
                  { placeholder: t.formCompany, type: "text", icon: "🏢", name: "company", required: false },
                ].map((field, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl opacity-60">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof FormData]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedInput(field.placeholder)}
                      onBlur={() => setFocusedInput(null)}
                      required={field.required}
                      className={`w-full pl-14 pr-4 py-4 rounded-xl bg-white/10 border transition-all duration-300 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 ${
                        focusedInput === field.placeholder ? 'border-green-400/50 bg-white/15' : 'border-white/20'
                      }`}
                    />
                  </motion.div>
                ))}
                
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <div className="absolute left-4 top-4 text-xl opacity-60">💬</div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.formMessage}
                    rows={4}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput(null)}
                    required
                    className={`w-full pl-14 pr-4 py-4 rounded-xl bg-white/10 border transition-all duration-300 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 resize-none ${
                      focusedInput === 'message' ? 'border-green-400/50 bg-white/15' : 'border-white/20'
                    }`}
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: formStatus.type !== 'loading' ? 1.02 : 1 }}
                  whileTap={{ scale: formStatus.type !== 'loading' ? 0.98 : 1 }}
                >
                  <span className="relative z-10">
                    {formStatus.type === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      t.contactCta
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-neutral-300 mb-8 text-lg">{t.contactSocial}</p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: "📘", name: "Facebook", color: "hover:bg-blue-500/20" },
              { icon: "📷", name: "Instagram", color: "hover:bg-pink-500/20" },
              { icon: "🐦", name: "Twitter", color: "hover:bg-sky-500/20" },
              { icon: "💼", name: "LinkedIn", color: "hover:bg-blue-600/20" }
            ].map((social, index) => (
              <motion.button 
                key={index}
                className={`w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 backdrop-blur-sm border border-white/10 ${social.color}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}