"use client";
import { motion } from "motion/react";
import { Rocket, Star, TrendingUp, MessageCircle } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { number: "500+", label: "Proyectos Completados", icon: <Rocket className="w-12 h-12 text-blue-600 dark:text-blue-400" /> },
    { number: "98%", label: "Clientes Satisfechos", icon: <Star className="w-12 h-12 text-yellow-500" /> },
    { number: "250%", label: "ROI Promedio", icon: <TrendingUp className="w-12 h-12 text-green-600 dark:text-green-400" /> },
    { number: "24/7", label: "Soporte Disponible", icon: <MessageCircle className="w-12 h-12 text-purple-600 dark:text-purple-400" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Resultados que Hablan por Sí Solos
          </h3>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Nuestros números reflejan nuestro compromiso con la excelencia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 dark:text-neutral-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
