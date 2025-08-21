"use client";
import React, { useEffect, useState, useMemo, memo } from "react";
import { motion } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useTranslations } from "@/hooks/useTranslations";

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
    <BackgroundLines 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      svgOptions={{ duration: 15 }} // Slower animation for better performance
    >
      {/* Simplified gradient orbs with CSS transforms */}
      <div className="absolute inset-0 overflow-hidden will-change-transform">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            left: "10%",
            top: "20%",
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            right: "10%",
            bottom: "20%",
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          }}
        />
      </div>

      {/* Optimized floating shapes - fewer elements */}
      <div className="absolute inset-0 will-change-transform">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 opacity-40"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 10}%`,
              clipPath: i % 2 === 0 ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
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
          className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10"
        >
          <span className="text-sm font-medium text-green-400">
            {t.heroTag}
          </span>
          <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        {/* Optimized Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 will-change-transform"
            style={{
              background: "linear-gradient(135deg, #10b981, #059669, #047857)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
          >
            {t.heroTitle}
          </h1>
        </motion.div>

        {/* Optimized Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white mb-4 leading-tight">
            {t.heroSubtitle}{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="absolute text-green-400 animate-pulse top-0 left-full ml-1">
                |
              </span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.heroDescription}{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-bold">
              {t.heroHighlight}
            </span>
          </p>
        </motion.div>

        {/* Optimized CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            className="group px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/25"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center">
              {t.heroCta1}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.button>

          <motion.button
            className="group px-10 py-4 border-2 border-white/30 dark:border-white/20 text-white dark:text-white font-bold rounded-full text-lg backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const servicesSection = document.getElementById('services');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center">
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
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 leading-relaxed text-center">
            {t.heroFullDescription}
          </p>
        </motion.div>
      </motion.div>
    </BackgroundLines>
  );
});

export default OptimizedHero;
