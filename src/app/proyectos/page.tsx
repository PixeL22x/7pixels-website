"use client";
import React from "react";
import ModernNavbar from "@/components/modern-navbar";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';

export default function ProyectosPage() {
  const t = useTranslations();
  
  const proyectos = [
    {
      id: 1,
      titulo: "TechStart - Sitio Web Corporativo",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web profesional para startup tecnológica con posicionamiento SEO. En 4 meses aparecían en primera página de Google para sus palabras clave principales.",
      tecnologias: ["WordPress", "Cloudflare", "React", "Google Analytics"],
      imagen: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
      url: "#",
      destacado: true,
      cliente: "Carlos Mendoza - CEO & Founder"
    },
    {
      id: 2,
      titulo: "Boutique Elena - Tienda Online",
      categoria: "E-commerce",
      descripcion: "E-commerce completo con diseño elegante y funcionalidad perfecta. Las ventas online crecieron un 250% el primer mes después del lanzamiento.",
      tecnologias: ["WooCommerce", "WordPress", "Stripe", "SEO"],
      imagen: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      url: "#",
      destacado: true,
      cliente: "María González - Propietaria"
    },
    {
      id: 3,
      titulo: "Restaurante Gourmet - Sistema de Reservas",
      categoria: "Aplicación Web",
      descripcion: "Rediseño completo del sitio web con sistema de reservas online integrado. Ahora reciben reservas diarias a través de la web.",
      tecnologias: ["React", "Node.js", "MongoDB", "PWA"],
      imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center",
      url: "#",
      destacado: false,
      cliente: "Roberto Silva - Gerente"
    },
    {
      id: 4,
      titulo: "Consultoría Legal - Blog Corporativo",
      categoria: "Desarrollo Web",
      descripcion: "Blog empresarial con CMS integrado y estrategia SEO avanzada. Incremento significativo en tráfico orgánico y generación de leads.",
      tecnologias: ["Next.js", "Contentful", "SEO", "Analytics"],
      imagen: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center",
      url: "#",
      destacado: false,
      cliente: "Ana Torres - Socia"
    },
    {
      id: 5,
      titulo: "Claxo - Plataforma SaaS",
      categoria: "Aplicación Web",
      descripcion: "Plataforma SaaS completa desarrollada con React y Node.js. Sistema de gestión empresarial con más de 1000 usuarios activos.",
      tecnologias: ["React", "Node.js", "PostgreSQL", "AWS"],
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      url: "https://claxo.com",
      destacado: true,
      cliente: "José - CTO & Co-founder"
    },
    {
      id: 6,
      titulo: "Inmobiliaria Premium - Portal Web",
      categoria: "Desarrollo Web",
      descripcion: "Portal inmobiliario con catálogo de propiedades, filtros avanzados y sistema de contacto. Mejora en conversión de visitantes a clientes.",
      tecnologias: ["WordPress", "Cloudflare", "Google Analytics", "React"],
      imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      url: "#",
      destacado: false,
      cliente: "Miguel Rodríguez - Director"
    }
  ];

  const categorias = [t.projectsCategoryAll, t.projectsCategoryWeb, t.projectsCategoryEcommerce, t.projectsCategoryApps];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <CodeBracketIcon className="w-4 h-4 mr-2" />
            {t.projectsTitle}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-6 px-4">
            {t.projectsPageTitle}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
            {t.projectsDescription}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  categoria === "Todos"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group ${
                  proyecto.destacado ? "ring-2 ring-green-200" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={proyecto.imagen} 
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    {proyecto.destacado && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {t.projectsFeatured}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      {proyecto.categoria}
                    </span>
                    <button className="text-gray-400 hover:text-green-600 transition-colors duration-200">
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {proyecto.titulo}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {proyecto.descripcion}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 font-medium">
                      {t.projectsClient}: {proyecto.cliente}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.projectsResultsTitle}
            </h2>
            <p className="text-gray-600">
              {t.projectsResultsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1,247+</div>
              <div className="text-gray-600">{t.projectsProjectsDelivered}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">{t.projectsClientSatisfaction}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2.3x</div>
              <div className="text-gray-600">{t.projectsTrafficImprovement}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.projectsReadyTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.projectsReadyDesc}
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200">
            {t.projectsStartProject}
          </button>
        </div>
      </section>
    </div>
  );
}
