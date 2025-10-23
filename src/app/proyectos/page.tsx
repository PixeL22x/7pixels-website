"use client";
import React, { useState, useMemo } from "react";
import ModernNavbar from "@/components/modern-navbar";
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '@/hooks/useTranslations';
import { useMultipleMetadata } from '@/hooks/useMetadata';
import ProjectCard from '@/components/ProjectCard';

export default function ProyectosPage() {
  const t = useTranslations();
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  
  const proyectos = useMemo(() => [
    {
      id: 1,
      titulo: "MySkinVital - Centro de Estética",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web profesional para centro de estética con sistema de citas online integrado. Incremento del 300% en reservas online.",
      tecnologias: ["WordPress", "WooCommerce", "SEO", "Google Analytics"],
      imagen: "/screenshots/myskinvital/myskinvital-com-1024x768desktop-17bf4d.jpg",
      url: "https://myskinvital.com/",
      destacado: true,
      cliente: "Centro de Estética"
    },
    {
      id: 2,
      titulo: "Formentorens Aimadas - Pastelería",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web profesional para pastelería familiar Formentor, especializada en ensaimadas artesanales. Diseño que refleja la tradición y calidad de una empresa que selecciona meticulosamente sus materias primas para ofrecer productos excepcionales.",
      tecnologias: ["WordPress", "Cloudflare", "SEO", "React"],
      imagen: "/screenshots/formentorensaimadas/formentorensaimadas-com-1024x768desktop-372df6.jpg",
      url: "https://formentorensaimadas.com/",
      destacado: true,
      cliente: "Pastelería Formentor"
    },
    {
      id: 3,
      titulo: "TotGlobo - Vuelos en Globo",
      categoria: "E-commerce",
      descripcion: "Sitio web para empresa especializada en vuelos en globo. Diseño que captura la filosofía de libertad y aventura, creando una experiencia digital que invita a explorar horizontes más allá de lo previsible.",
      tecnologias: ["WooCommerce", "WordPress", "Stripe", "SEO"],
      imagen: "/screenshots/totglobo/totglobo-com-1024x768desktop-5ee5a7.jpg",
      url: "https://totglobo.com/es",
      destacado: false,
      cliente: "TotGlobo"
    },
    {
      id: 4,
      titulo: "Cardon - Primera Marca Tradicional Argentina",
      categoria: "E-commerce",
      descripcion: "E-commerce completo para Cardon, la Primera Marca Tradicional Argentina desde 1988. Diseño que refleja la identidad cultural auténtica, combinando tradición y modernidad para una marca con más de 80 locales en Argentina.",
      tecnologias: ["WordPress", "SEO", "Google Analytics", "Contentful"],
      imagen: "/screenshots/cardon/cardon-com-ar-1024x768desktop-6c6310.jpg",
      url: "https://cardon.com.ar/",
      destacado: true,
      cliente: "Cardon Argentina"
    },
    {
      id: 5,
      titulo: "ICDOA - Mobiliario de Alta Gama",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web corporativo para Industrial y Comercial DOA, líder en fabricación de mobiliario de alta gama para hoteles, oficinas y retail. Diseño que refleja la excelencia y profesionalismo de una empresa con más de 15 años de experiencia.",
      tecnologias: ["WordPress", "LMS", "WooCommerce", "SEO"],
      imagen: "/screenshots/icdoa/icdoa-com-1024x768desktop-a90de9.jpg",
      url: "https://icdoa.com/",
      destacado: false,
      cliente: "Industrial y Comercial DOA"
    },
    {
      id: 6,
      titulo: "Ubuntu Seguros - Líder en Seguros",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web corporativo para Ubuntu Seguros, líder en el sector asegurador desde 2010. Diseño que refleja la confianza y especialización de una compañía con más de 1,500 pólizas activas y 3,000+ personas aseguradas.",
      tecnologias: ["WordPress", "React", "SEO", "Google Analytics"],
      imagen: "/screenshots/ubuntuseguros/ubuntuseguros-es-1024x768desktop-786c44.jpg",
      url: "https://ubuntuseguros.es/",
      destacado: true,
      cliente: "Ubuntu Seguros"
    },
    {
      id: 7,
      titulo: "Real Club Náutico CAS - Club de Lujo",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web premium para Real Club Náutico CAS, club exclusivo con más de 24 años de experiencia. Diseño que refleja la elegancia y lujo de un club náutico con más de 1,200 socios y 145+ botes y veleros.",
      tecnologias: ["WordPress", "SEO", "Google Analytics", "Cloudflare"],
      imagen: "/screenshots/realclubnauticocas/realclubnauticocas-com-1024x768desktop-9b349c.jpg",
      url: "https://realclubnauticocas.com/",
      destacado: true,
      cliente: "Real Club Náutico CAS"
    },
    {
      id: 8,
      titulo: "Conangym Ceuta - Gimnasio Moderno",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web para Conangym Ceuta, gimnasio con nuevas instalaciones estrenadas en 2024. Diseño que refleja la modernidad y profesionalismo de un centro deportivo con equipamiento completo, clases grupales y entrenamiento personal.",
      tecnologias: ["WordPress", "WooCommerce", "SEO", "Google Analytics"],
      imagen: "/screenshots/conangymceuta/conangymceuta-es-1024x768desktop-4a03df.jpg",
      url: "https://conangymceuta.es/",
      destacado: false,
      cliente: "Conangym Ceuta"
    },
    {
      id: 9,
      titulo: "WiFi Expert - Internet 4G/5G",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web para WiFi Expert, proveedor de servicios de internet 4G y 5G para hogar y empresas. Diseño que refleja la innovación y velocidad de una empresa con más de 500 servicios activos y presencia en 7+ ciudades.",
      tecnologias: ["WordPress", "SEO", "Google Analytics", "Cloudflare"],
      imagen: "/screenshots/wifiexpert/wifiexpert-es-1024x768desktop-4c9cc7.jpg",
      url: "https://wifiexpert.es/",
      destacado: false,
      cliente: "WiFi Expert"
    },
    {
      id: 10,
      titulo: "VIVA Design - Calzado Femenino",
      categoria: "E-commerce",
      descripcion: "E-commerce completo para VIVA Design, marca de calzado femenino fabricado artesanalmente en Elche. Diseño que refleja la pasión y determinación de una marca que representa la esencia de la mujer moderna, fuerte y decidida.",
      tecnologias: ["Shopify", "E-commerce", "SEO", "Google Analytics"],
      imagen: "/screenshots/vivadesign/vivadesign-es-1024x768desktop-fc9435.jpg",
      url: "https://vivadesign.es/",
      destacado: true,
      cliente: "VIVA Design"
    },
    {
      id: 11,
      titulo: "Importaciones Rovira - Concesionario",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web para Importaciones Rovira, empresa especializada en la venta de vehículos con red logística global. Diseño que refleja la profesionalidad y confianza de un concesionario que trae autos desde Alemania con garantías completas.",
      tecnologias: ["WordPress", "WooCommerce", "SEO", "Google Analytics"],
      imagen: "/screenshots/importacionesrovira/importacionesrovira-es-1024x768desktop-29f0e2.jpg",
      url: "https://importacionesrovira.es/",
      destacado: false,
      cliente: "Importaciones Rovira"
    },
    {
      id: 12,
      titulo: "El Reencuentro - Restaurante Mediterráneo",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web para El Reencuentro, restaurante de cocina mediterránea y española ubicado en Tarifa. Diseño que refleja la calidez y ambiente relajado de un local perfecto para reunirse con amigos y familiares.",
      tecnologias: ["WordPress", "WooCommerce", "SEO", "Google Analytics"],
      imagen: "/screenshots/elreencuentro/elreencuentro-es-1024x768desktop-f1543a.jpg",
      url: "https://elreencuentro.es/",
      destacado: false,
      cliente: "El Reencuentro Tarifa"
    },
    {
      id: 13,
      titulo: "Gozzø Music - Proyecto Slam",
      categoria: "Desarrollo Web",
      descripcion: "Sitio web para Gozzø Music, proyecto artístico multidisciplinario que combina música en vivo, poesía y estudio de grabación. Diseño que refleja la creatividad y magia de un artista que lleva la poesía al espectador a través de composiciones musicales contemporáneas.",
      tecnologias: ["WordPress", "SEO", "Google Analytics", "React"],
      imagen: "/screenshots/gozzomusic/gozzomusic-com-1024x768desktop-440cef.jpg",
      url: "https://gozzomusic.com/",
      destacado: true,
      cliente: "Gozzø Music"
    },
  ], []);

  const categorias = [t.projectsCategoryAll, t.projectsCategoryWeb, t.projectsCategoryEcommerce, t.projectsCategoryApps];
  
  // Estabilizar el array de URLs para evitar bucles infinitos
  const projectUrls = useMemo(() => proyectos.map(proyecto => proyecto.url), [proyectos]);
  
  // Obtener metadatos de todos los proyectos
  const metadataList = useMultipleMetadata(projectUrls);
  
  // Filtrar proyectos según la categoría activa
  const proyectosFiltrados = categoriaActiva === "Todos" 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <CodeBracketIcon className="w-4 h-4 mr-2" />
            {t.projectsTitle}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-4 px-4">
            {t.projectsPageTitle}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl mx-auto px-4">
            {t.projectsDescription}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  categoriaActiva === categoria
                    ? "bg-green-500 text-white shadow-md"
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
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Mostrando {proyectosFiltrados.length} de {proyectos.length} proyectos
              {categoriaActiva !== "Todos" && ` en ${categoriaActiva}`}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {proyectosFiltrados.map((proyecto) => {
              // Encontrar el índice del proyecto en la lista original para obtener sus metadatos
              const originalIndex = proyectos.findIndex(p => p.id === proyecto.id);
              const metadata = metadataList[originalIndex] || { loading: true };
              
              return (
                <ProjectCard
                  key={proyecto.id}
                  proyecto={proyecto}
                  metadata={metadata}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t.projectsResultsTitle}
            </h2>
            <p className="text-gray-600">
              {t.projectsResultsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <section className="py-12 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {t.projectsReadyTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
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
