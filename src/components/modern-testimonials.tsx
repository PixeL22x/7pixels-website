"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { useTheme } from "@/contexts/ThemeContext";

export default function ModernTestimonials() {
  const t = useTranslations();
  const { language } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const testimonials = [
    {
      name: "Carlos Mendoza",
      company: "TechStart",
      role: "CEO & Founder",
      avatar: "👨‍💼",
      rating: 5,
      testimonial: language === "es" 
        ? "7Pixels creó nuestro sitio web desde cero y nos ayudó a posicionarnos en Google. En 4 meses ya aparecíamos en la primera página para nuestras palabras clave principales. Profesionales excepcionales."
        : "7Pixels created our website from scratch and helped us rank on Google. In 4 months we were already appearing on the first page for our main keywords. Exceptional professionals.",
      result: language === "es" ? "Página 1 Google" : "Google Page 1",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "María González",
      company: "Boutique Elena",
      role: "Propietaria",
      avatar: "👩‍💼",
      rating: 5,
      testimonial: language === "es"
        ? "Necesitábamos una tienda online urgente y 7Pixels nos la entregó en tiempo récord. El diseño es hermoso y funciona perfecto. Nuestras ventas online crecieron un 250% el primer mes."
        : "We urgently needed an online store and 7Pixels delivered it in record time. The design is beautiful and works perfectly. Our online sales grew 250% in the first month.",
      result: language === "es" ? "+250% Ventas" : "+250% Sales",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Roberto Silva",
      company: "Restaurante Gourmet",
      role: "Gerente",
      avatar: "👨‍🍳",
      rating: 5,
      testimonial: language === "es"
        ? "Nuestro sitio web anterior era un desastre. 7Pixels lo rediseñó completamente y ahora recibimos reservas online todos los días. El sistema de reservas funciona perfecto y se ve muy profesional."
        : "Our previous website was a disaster. 7Pixels completely redesigned it and now we receive online reservations every day. The reservation system works perfectly and looks very professional.",
      result: language === "es" ? "Reservas Diarias" : "Daily Bookings",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Ana Torres",
      company: "Consultoría Legal",
      role: "Socia Directora",
      avatar: "👩‍🎓",
      rating: 5,
      testimonial: language === "es"
        ? "Como abogada, necesitaba un sitio web que transmitiera confianza y profesionalismo. 7Pixels entendió perfectamente lo que necesitábamos. Ahora recibo consultas de clientes que me encuentran en Google."
        : "As a lawyer, I needed a website that conveyed trust and professionalism. 7Pixels perfectly understood what we needed. Now I receive inquiries from clients who find me on Google.",
      result: language === "es" ? "Más Clientes" : "More Clients",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/6 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          style={{ y }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-full border border-green-500/20"
          >

            <span className="text-green-700 font-medium">{t.testimonialsTag}</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-800 mb-6 px-4"
          >
            {t.testimonialsTitle}{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {t.testimonialsHighlight}
            </span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {t.testimonialsDescription}
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Testimonial Content */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Quote Background */}
            <div className="absolute -top-6 -left-6 text-8xl text-green-500/20 font-bold">&ldquo;</div>
            
            <div className="relative z-10 p-6 sm:p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-lg">
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-yellow-400 text-xl sm:text-2xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed italic"
              >
                &ldquo;{testimonials[activeTestimonial].testimonial}&rdquo;
              </motion.blockquote>

              {/* Result Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-full text-white font-bold text-base sm:text-lg shadow-xl`}
              >
                📈 {testimonials[activeTestimonial].result}
              </motion.div>
            </div>
          </motion.div>

          {/* Author Info */}
          <motion.div
            key={`author-${activeTestimonial}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Avatar */}
            <motion.div
              className="text-8xl mb-6 inline-block"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {testimonials[activeTestimonial].avatar}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-3xl font-bold text-gray-800 mb-2">
                {testimonials[activeTestimonial].name}
              </h4>
              <p className="text-green-600 text-lg font-medium mb-1">
                {testimonials[activeTestimonial].role}
              </p>
              <p className="text-gray-600">
                {testimonials[activeTestimonial].company}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeTestimonial === index 
                  ? 'bg-green-500 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTestimonial(index)}
              className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-green-500/20 border-green-500/50 scale-105'
                  : 'bg-white/90 border-gray-200 hover:bg-white shadow-sm hover:shadow-md'
              } border backdrop-blur-sm`}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <div className="text-gray-800 font-semibold mb-1">{testimonial.name}</div>
              <div className="text-gray-600 text-sm">{testimonial.company}</div>
              <div className={`mt-3 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${testimonial.color} text-white`}>
                {testimonial.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
