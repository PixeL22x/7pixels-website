'use client';

import React, { useState, useEffect } from 'react';
import PixelCard from '@/components/PixelCard';
import ModernNavbar from '@/components/modern-navbar';
import { useTranslations } from '@/hooks/useTranslations';
import { useTheme } from '@/contexts/ThemeContext';

const portfolioItems = [
  {
    id: 1,
    title: "TechFlow Solutions",
    description: "E-commerce B2B para soluciones tecnológicas empresariales",
    tech: ["Next.js", "Shopify", "Stripe", "AI"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&auto=format",
    category: "E-commerce",
    results: "+450% conversiones"
  },
  {
    id: 2,
    title: "FinanceCore Banking",
    description: "Plataforma bancaria digital con dashboard analítico avanzado",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
    category: "Fintech",
    results: "+320% usuarios activos"
  },
  {
    id: 3,
    title: "HealthPlus Telemedicina",
    description: "App de telemedicina con reservas y consultas virtuales",
    tech: ["Vue.js", "WebRTC", "Firebase", "Stripe"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&auto=format",
    category: "Healthcare",
    results: "+500% consultas online"
  },
  {
    id: 4,
    title: "EduTech Academy",
    description: "Plataforma educativa con cursos interactivos y gamificación",
    tech: ["Angular", "Socket.io", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&auto=format",
    category: "Education",
    results: "+280% engagement"
  },
  {
    id: 5,
    title: "GreenEnergy Corp",
    description: "Portal corporativo para empresa de energías renovables",
    tech: ["Next.js", "Sanity", "Framer", "Vercel"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&auto=format",
    category: "Corporate",
    results: "+180% leads generados"
  },
  {
    id: 6,
    title: "FoodieHub Delivery",
    description: "App de delivery con geolocalización y pagos integrados",
    tech: ["React Native", "Mapbox", "Stripe", "Redis"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=250&fit=crop&auto=format",
    category: "Food & Delivery",
    results: "+600% pedidos diarios"
  },
  {
    id: 7,
    title: "PropertyPro Real Estate",
    description: "Marketplace inmobiliario con tours virtuales 360°",
    tech: ["Vue.js", "Three.js", "Laravel", "MySQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&auto=format",
    category: "Real Estate",
    results: "+340% visitas virtuales"
  },
  {
    id: 8,
    title: "FashionForward Store",
    description: "E-commerce de moda con AR fitting y recomendaciones IA",
    tech: ["Shopify Plus", "AR.js", "TensorFlow", "Klaviyo"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&auto=format",
    category: "Fashion",
    results: "+250% tiempo en sitio"
  },
  {
    id: 9,
    title: "TravelExplorer Agency",
    description: "Plataforma de viajes con reservas integradas y experiencias",
    tech: ["Nuxt.js", "Amadeus API", "PayPal", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&auto=format",
    category: "Travel",
    results: "+420% reservas online"
  },
  
];

export default function Portfolio() {
  const t = useTranslations();
  const { language } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Definir categorías después de que se inicialice el hook
  const categories = [t.portfolioAllCategories, "E-commerce", "Fintech", "Healthcare", "Education", "Corporate", "Food & Delivery", "Real Estate", "Fashion", "Travel"];

  // Actualizar selectedCategory cuando se inicialice el hook
  useEffect(() => {
    if (t.portfolioAllCategories) {
      setSelectedCategory(t.portfolioAllCategories);
    }
  }, [t.portfolioAllCategories]);

  const filteredItems = selectedCategory && selectedCategory === t.portfolioAllCategories 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Modern Navbar */}
      <ModernNavbar />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(92,184,92,0.08)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(108,194,108,0.06)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(76,154,76,0.04)_0%,_transparent_70%)]"></div>
      </div>

      {/* Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#6cb86c]/25 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

                <div className="relative z-10 pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                {t.portfolioBadge}
              </span>
            </div>
                         <h1 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              {t.portfolioTitle}{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                {t.portfolioHighlight}
              </span>
            </h1>
                         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              {t.portfolioDescription}
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                                     className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                     selectedCategory === category
                       ? 'bg-green-500 text-black shadow-lg shadow-green-500/25'
                       : 'bg-gray-200/80 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300/80 dark:hover:bg-gray-700/50 border border-gray-300/50 dark:border-gray-700/50'
                   }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <PixelCard 
                key={item.id} 
                variant="green" 
                                 className="group h-[420px] bg-gradient-to-br from-gray-100/90 via-white/80 to-gray-50/90 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-black/80 backdrop-blur-2xl border border-gray-300/30 dark:border-gray-700/30 rounded-3xl overflow-hidden hover:border-[#6cb86c]/60 transition-all duration-700 hover:shadow-2xl hover:shadow-[#5cb85c]/20 hover:-translate-y-2 transform-gpu"
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 flex flex-col">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6cb86c] via-[#5cb85c] to-[#4cae4c] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#6cb86c]/10 rounded-full blur-xl group-hover:bg-[#6cb86c]/20 transition-colors duration-500"></div>
                  
                  {/* Image Container */}
                  <div className="relative h-44 overflow-hidden rounded-t-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5cb85c]/5 to-[#6cb86c]/5 z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                      <div className="absolute top-6 left-6 w-2 h-2 bg-[#6cb86c] rounded-full animate-pulse"></div>
                      <div className="absolute top-10 right-8 w-1 h-1 bg-[#5cb85c] rounded-full animate-pulse delay-150"></div>
                      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-[#7cc87c] rounded-full animate-pulse delay-300"></div>
                    </div>
                    
                    {/* Enhanced Category Badge */}
                    <div className="absolute top-5 left-5 z-40">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#6cb86c]/20 rounded-full blur-md"></div>
                        <span className="relative text-xs font-bold text-white bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-[#6cb86c]/30 shadow-lg">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Results Badge */}
                    <div className="absolute top-5 right-5 z-40">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#5cb85c]/20 rounded-full blur-md"></div>
                        <span className="relative text-xs font-black text-[#7cc87c] bg-[#5cb85c]/20 backdrop-blur-md px-4 py-2 rounded-full border border-[#6cb86c]/40 shadow-lg">
                          {item.results}
                        </span>
                      </div>
                    </div>

                    
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-5 flex flex-col justify-between relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(92,184,92,0.03)_0%,_transparent_50%)]"></div>
                    
                    <div className="relative z-10">
                      {/* Title Section */}
                      <div className="mb-4">
                        <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-[#6cb86c] transition-all duration-300 group-hover:translate-x-1">
                          {item.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#6cb86c] to-[#5cb85c] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Tech Stack & CTA */}
                    <div className="space-y-3 relative z-10">
                      {/* Tech Stack with Enhanced Design */}
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, techIndex) => (
                          <div key={techIndex} className="relative group/tech">
                            <div className="absolute inset-0 bg-[#6cb86c]/10 rounded-full blur-sm opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative text-xs px-3 py-1.5 bg-gradient-to-r from-[#5cb85c]/15 to-[#6cb86c]/15 text-[#7cc87c] rounded-full border border-[#5cb85c]/25 hover:border-[#6cb86c]/50 hover:text-[#8dd88d] transition-all duration-300 font-medium backdrop-blur-sm">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Enhanced Hover CTA */}
                      <div className={`transition-all duration-500 transform ${hoveredCard === item.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
                        <button className="w-full py-2.5 bg-gradient-to-r from-[#5cb85c] via-[#6cb86c] to-[#4cae4c] text-white font-bold rounded-xl text-sm hover:from-[#6cb86c] hover:via-[#7cc87c] hover:to-[#5cb85c] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#5cb85c]/25 relative overflow-hidden group/btn">
                          {/* Button shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                          <span className="relative flex items-center justify-center gap-2">
                            {t.portfolioViewProject}
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6cb86c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </PixelCard>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-32 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: t.portfolioStatsProjects },
                { number: "300%", label: t.portfolioStatsROI },
                { number: "24/7", label: t.portfolioStatsSupport },
                { number: "100%", label: t.portfolioStatsSatisfaction }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-green-500/5 rounded-3xl p-12 border border-green-500/10 backdrop-blur-sm overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,197,94,0.05)_0%,_transparent_70%)]"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {t.portfolioReadyTitle}
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {t.portfolioReadyHighlight}
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  {t.portfolioReadyDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                    {t.portfolioStartProject}
                  </button>
                  <button className="bg-transparent border-2 border-green-500/50 text-green-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500/10 transition-all duration-300">
                    {t.portfolioViewMoreCases}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
