"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, memo } from "react";

const EnhancedServices = memo(function EnhancedServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll effects removed but keeping for potential future use
  // const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const services = [
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Estrategias que conectan tu marca con millones de usuarios activos en todas las plataformas.",
      features: ["Content Strategy", "Community Management", "Influencer Marketing", "Paid Advertising"],
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      hoverGradient: "from-green-500 via-emerald-600 to-teal-600",
      delay: 0
    },
    {
      icon: "🎯",
      title: "SEO & Google Ads",
      description: "Dominamos los algoritmos para posicionar tu marca en los primeros resultados de búsqueda.",
      features: ["Technical SEO", "Keyword Research", "PPC Campaigns", "Analytics & Reporting"],
      gradient: "from-emerald-400 via-green-500 to-lime-500",
      hoverGradient: "from-emerald-500 via-green-600 to-lime-600",
      delay: 0.2
    },
    {
      icon: "🎨",
      title: "Creative Design",
      description: "Diseños que capturan la esencia de tu marca y la transforman en experiencias memorables.",
      features: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Print & Digital"],
      gradient: "from-teal-400 via-cyan-500 to-blue-500",
      hoverGradient: "from-teal-500 via-cyan-600 to-blue-600",
      delay: 0.4
    },
    {
      icon: "⚡",
      title: "Marketing Automation",
      description: "Sistemas inteligentes que nutren leads y convierten prospects en clientes leales.",
      features: ["Email Workflows", "Lead Scoring", "CRM Integration", "Behavioral Triggers"],
      gradient: "from-lime-400 via-green-500 to-emerald-500",
      hoverGradient: "from-lime-500 via-green-600 to-emerald-600",
      delay: 0.6
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Sitios web que no solo se ven increíbles, sino que convierten visitantes en ventas.",
      features: ["React/Next.js", "E-commerce", "PWA", "Performance Optimization"],
      gradient: "from-cyan-400 via-teal-500 to-green-500",
      hoverGradient: "from-cyan-500 via-teal-600 to-green-600",
      delay: 0.8
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Insights profundos que revelan oportunidades ocultas y optimizan cada inversión.",
      features: ["Advanced Analytics", "Custom Dashboards", "Conversion Optimization", "ROI Tracking"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      hoverGradient: "from-emerald-500 via-teal-600 to-cyan-600",
      delay: 1.0
    }
  ];

  return (
          <section ref={containerRef} className="py-6 bg-neutral-900 relative overflow-hidden">
      {/* Subtle Background Effects - Much Reduced */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/8 to-emerald-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-teal-500/6 to-cyan-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-50">
        {/* Header */}
        <motion.div 
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-full border border-green-400/40"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mr-3 text-2xl"
            >
              ⚡
            </motion.span>
            <span className="text-green-300 font-semibold text-lg">Servicios Premium</span>
          </motion.div>

                    <motion.h3 className="text-5xl md:text-7xl font-black mb-6">
            {"Soluciones que Transforman".split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 2 ? "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent" : "text-white"}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h3>
          
                           <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium mb-12"
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
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              onTouchStart={() => setActiveCard(index)}
              onTouchEnd={() => setTimeout(() => setActiveCard(null), 2000)}
              className={`group relative ${activeCard === index ? 'active' : ''}`}
              style={{ perspective: "1000px" }}
            >
              {/* Card Background with Enhanced Glassmorphism */}
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-400/30 group-[.active]:border-green-400/30 transition-all duration-500 overflow-hidden group-hover:bg-white/8 group-[.active]:bg-white/8">
                {/* Primary Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 group-[.active]:opacity-15 transition-opacity duration-500`}
                  whileHover={{ scale: 1.05 }}
                  animate={{ scale: activeCard === index ? 1.05 : 1 }}
                />
                {/* Hover Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-tr ${service.hoverGradient} opacity-0 group-hover:opacity-10 group-[.active]:opacity-10 transition-opacity duration-700`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ scale: activeCard === index ? 1.1 : 1, rotate: activeCard === index ? 5 : 0 }}
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
                                          <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 group-[.active]:text-green-300 transition-colors duration-300">
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
                          className="w-2 h-2 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full mr-3"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Enhanced CTA Button */}
                  <motion.button
                    className="w-full py-3 px-6 bg-gradient-to-r from-green-500/25 to-emerald-500/25 border border-green-400/40 text-green-300 font-semibold rounded-xl backdrop-blur-sm hover:from-green-500/40 hover:to-emerald-500/40 hover:border-green-300/60 hover:text-green-200 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explorar Servicio
                  </motion.button>
                </div>

                {/* Enhanced Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.1), transparent)`,
                    filter: "blur(25px)",
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
            className="px-12 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-green-500/30 hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transition-all duration-300"
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
});

export default EnhancedServices;
