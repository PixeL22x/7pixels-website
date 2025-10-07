"use client";
import React, { useEffect, useState, useMemo, memo } from "react";
import { motion } from "motion/react";
import { useTranslations } from "@/hooks/useTranslations";
import { ComputerDesktopIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/outline";

const OptimizedHero = memo(function OptimizedHero() {
  const t = useTranslations();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Memoized typewriter texts from translations
  const typewriterTexts = useMemo(() => t.heroTypewriter, [t]);

  // Optimized mouse tracking with throttling
  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
        rafId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Optimized typewriter effect
  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, typewriterTexts]);

  // Memoized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  }), []);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-4 pb-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            left: "10%",
            top: "20%",
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            right: "10%",
            bottom: "20%",
            transform: `translate(${-mousePosition.x * 0.1}px, ${-mousePosition.y * 0.1}px)`,
          }}
        />
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute inset-0">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 rounded-full"
            style={{
              left: `${40 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [-5, 5, -5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 bg-gradient-to-r from-green-100 to-blue-100 backdrop-blur-sm rounded-full border border-green-200 text-xs sm:text-sm"
        >
          <ComputerDesktopIcon className="w-4 h-4 text-green-600 mr-2" />
          <span className="text-xs sm:text-sm font-medium text-green-700">
            {t.heroTag}
          </span>
          <div className="ml-3 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </motion.div>

        {/* Optimized Main Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 bg-gradient-to-r from-green-500 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>
        </motion.div>

        {/* Optimized Subtitle */}
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 leading-tight">
            {t.heroSubtitle}{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="absolute text-green-600 animate-pulse top-0 left-full ml-1">
                |
              </span>
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.heroDescription}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              {t.heroHighlight}
            </span>
          </p>
        </motion.div>

        {/* Optimized CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 px-4"
        >
          <motion.button
            className="group px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-full text-base sm:text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500/25 w-full sm:w-auto"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center justify-center">
              <RocketLaunchIcon className="w-5 h-5 mr-2" />
              {t.heroCta1}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.button>

          <motion.button
            className="group px-6 sm:px-10 py-3 sm:py-4 border-2 border-green-300 text-green-700 font-semibold rounded-full text-base sm:text-lg backdrop-blur-sm hover:bg-green-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/proyectos';
            }}
          >
            <span className="flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 mr-2" />
              {t.heroCta2}
              <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">↗</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Hero Description */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
            {t.heroFullDescription}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default OptimizedHero;
