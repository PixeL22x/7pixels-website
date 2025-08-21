"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useTranslations } from "@/hooks/useTranslations";

export default function FloatingNav() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: t.navHome, icon: "🏠" },
    { id: "stats", label: t.navStats, icon: "📊" },
    { id: "services", label: t.navServices, icon: "🎯" },
    { id: "testimonials", label: t.navTestimonials, icon: "💬" },
    { id: "contact", label: t.navContact, icon: "📧" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-2xl border border-neutral-200/50 dark:border-white/10">
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className="group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white text-neutral-700 dark:text-neutral-300"
              title={item.label}
            >
              <span className="text-lg">{item.icon}</span>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
