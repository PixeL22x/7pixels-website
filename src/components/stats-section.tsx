"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardTitle, CardDescription, CardSkeletonContainer, StatsSkeleton } from "@/components/ui/animated-card";
import { useTranslations } from "@/hooks/useTranslations";
import { 
  RocketLaunchIcon, 
  StarIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

export default function StatsSection() {
  const t = useTranslations();

  const stats = [
    {
      title: "Proyectos Entregados",
      description: "Sitios web profesionales desarrollados con tecnología moderna y resultados medibles.",
      number: "1,247",
      color: "green",
      icons: [
        <ComputerDesktopIcon key="1" className="h-4 w-4 text-green-600" />,
        <RocketLaunchIcon key="2" className="h-5 w-5 text-green-600" />,
        <ChartBarIcon key="3" className="h-4 w-4 text-green-600" />
      ]
    },
    {
      title: "Satisfacción Cliente",
      description: "Nuestros clientes renuevan y recomiendan nuestros servicios constantemente.",
      number: "4.9/5",
      color: "blue",
      icons: [
        <StarIcon key="1" className="h-4 w-4 text-blue-600" />,
        <ChatBubbleLeftRightIcon key="2" className="h-5 w-5 text-blue-600" />,
        <StarIcon key="3" className="h-4 w-4 text-blue-600" />
      ]
    },
    {
      title: "Posicionamiento Google",
      description: "Estrategias SEO efectivas y técnicas avanzadas que posicionan tu negocio en los primeros resultados de búsqueda.",
      number: "2.3x",
      color: "purple",
      icons: [
        <MagnifyingGlassIcon key="1" className="h-4 w-4 text-purple-600" />,
        <ChartBarIcon key="2" className="h-5 w-5 text-purple-600" />,
        <MagnifyingGlassIcon key="3" className="h-4 w-4 text-purple-600" />
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Números reales de proyectos reales con clientes satisfechos
          </p>
        </div>

        <div className="grid max-w-6xl mx-auto grid-cols-1 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="min-h-[280px] sm:min-h-[300px] md:min-h-[320px] h-full">
                <CardSkeletonContainer className="h-32 sm:h-36 md:h-40">
                  <StatsSkeleton
                    icons={stat.icons}
                    mainNumber={stat.number}
                    color={stat.color}
                  />
                </CardSkeletonContainer>
                <CardTitle className="text-sm sm:text-base font-semibold">{stat.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">
                  {stat.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}