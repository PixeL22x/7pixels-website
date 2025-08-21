"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

export default function ModernTestimonials() {
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
      testimonial: "7Pixels no solo cumplió con nuestras expectativas, las superó completamente. En 6 meses logramos un crecimiento del 300% en ventas online. Su enfoque estratégico y creatividad son excepcionales.",
      result: "+300% Ventas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "María González",
      company: "Fashion Boutique",
      role: "Creative Director",
      avatar: "👩‍💼",
      rating: 5,
      testimonial: "La transformación de nuestra marca fue increíble. Pasamos de 1K a 50K seguidores en redes sociales y triplicamos nuestras ventas. El equipo de 7Pixels entiende perfectamente las tendencias digitales.",
      result: "50K Seguidores",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Roberto Silva",
      company: "Restaurante Gourmet",
      role: "Owner",
      avatar: "👨‍🍳",
      rating: 5,
      testimonial: "Gracias a la estrategia de marketing digital de 7Pixels, nuestro restaurante se convirtió en el más popular de la ciudad. Reservas completas todos los días y una comunidad online increíble.",
      result: "100% Ocupación",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Ana Torres",
      company: "E-learning Platform",
      role: "Marketing Manager",
      avatar: "👩‍🎓",
      rating: 5,
      testimonial: "El ROI que conseguimos con 7Pixels fue impresionante. Optimizaron nuestras campañas de Google Ads y redujeron el costo por adquisición en un 60% mientras aumentaban las conversiones.",
      result: "60% Menos CAC",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
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
          className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-full border border-green-500/20"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mr-3 text-2xl"
            >
              💬
            </motion.span>
            <span className="text-green-400 font-medium">Historias de Éxito</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Resultados que{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Hablan
            </span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Nuestros clientes son nuestra mejor carta de presentación
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
            
            <div className="relative z-10 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-yellow-400 text-2xl"
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
                className="text-xl text-gray-300 mb-8 leading-relaxed italic"
              >
                &ldquo;{testimonials[activeTestimonial].testimonial}&rdquo;
              </motion.blockquote>

              {/* Result Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-full text-white font-bold text-lg shadow-xl`}
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
              <h4 className="text-3xl font-bold text-white mb-2">
                {testimonials[activeTestimonial].name}
              </h4>
              <p className="text-green-400 text-lg font-medium mb-1">
                {testimonials[activeTestimonial].role}
              </p>
              <p className="text-gray-400">
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
                  : 'bg-gray-600 hover:bg-gray-500'
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
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              } border backdrop-blur-sm`}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <div className="text-white font-semibold mb-1">{testimonial.name}</div>
              <div className="text-gray-400 text-sm">{testimonial.company}</div>
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
