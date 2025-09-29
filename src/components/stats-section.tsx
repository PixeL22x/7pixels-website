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
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Números reales de proyectos reales con clientes satisfechos
          </p>
        </div>
        
        <div className="grid max-w-5xl mx-auto grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="min-h-[320px]">
                <CardSkeletonContainer>
                  <StatsSkeleton 
                    icons={stat.icons}
                    mainNumber={stat.number}
                    color={stat.color}
                  />
                </CardSkeletonContainer>
                <CardTitle>{stat.title}</CardTitle>
                <CardDescription>
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