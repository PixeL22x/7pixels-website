"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function EnhancedServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const services = [
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Estrategias que conectan tu marca con millones de usuarios activos en todas las plataformas.",
      features: ["Content Strategy", "Community Management", "Influencer Marketing", "Paid Advertising"],
      gradient: "from-pink-500 via-red-500 to-yellow-500",
      delay: 0
    },
    {
      icon: "🎯",
      title: "SEO & Google Ads",
      description: "Dominamos los algoritmos para posicionar tu marca en los primeros resultados de búsqueda.",
      features: ["Technical SEO", "Keyword Research", "PPC Campaigns", "Analytics & Reporting"],
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      delay: 0.2
    },
    {
      icon: "🎨",
      title: "Creative Design",
      description: "Diseños que capturan la esencia de tu marca y la transforman en experiencias memorables.",
      features: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Print & Digital"],
      gradient: "from-green-400 via-cyan-500 to-blue-500",
      delay: 0.4
    },
    {
      icon: "⚡",
      title: "Marketing Automation",
      description: "Sistemas inteligentes que nutren leads y convierten prospects en clientes leales.",
      features: ["Email Workflows", "Lead Scoring", "CRM Integration", "Behavioral Triggers"],
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      delay: 0.6
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Sitios web que no solo se ven increíbles, sino que convierten visitantes en ventas.",
      features: ["React/Next.js", "E-commerce", "PWA", "Performance Optimization"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      delay: 0.8
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Insights profundos que revelan oportunidades ocultas y optimizan cada inversión.",
      features: ["Advanced Analytics", "Custom Dashboards", "Conversion Optimization", "ROI Tracking"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      delay: 1.0
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-full border border-green-500/20"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mr-3 text-2xl"
            >
              ⚡
            </motion.span>
            <span className="text-green-400 font-medium">Servicios Premium</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Soluciones que{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Transforman
            </span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Cada servicio está diseñado para impulsar tu negocio hacia el siguiente nivel
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: service.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* Card Background with Glassmorphism */}
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Floating Icon */}
                <motion.div
                  className="relative z-10 text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: service.delay + idx * 0.1 }}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full py-3 px-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 font-semibold rounded-xl backdrop-blur-sm hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explorar Servicio
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent, rgba(16, 185, 129, 0.1), transparent)`,
                    filter: "blur(20px)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-green-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              💡 Consulta Gratuita
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
