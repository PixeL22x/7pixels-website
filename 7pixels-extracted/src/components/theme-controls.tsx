"use client";
import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeControls() {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 right-6 z-50 flex gap-3"
    >
      {/* Dark Mode Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="group relative p-3 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-full border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Sun Icon */}
          <motion.div
            className="absolute text-yellow-500"
            animate={{ 
              opacity: theme === "light" ? 1 : 0,
              rotate: theme === "light" ? 0 : 180,
              scale: theme === "light" ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
          >
            ☀️
          </motion.div>
          
          {/* Moon Icon */}
          <motion.div
            className="absolute text-blue-300"
            animate={{ 
              opacity: theme === "dark" ? 1 : 0,
              rotate: theme === "dark" ? 0 : -180,
              scale: theme === "dark" ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
          >
            🌙
          </motion.div>
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          animate={{
            background: theme === "light" 
              ? "linear-gradient(to right, #fbbf24, #f97316)" 
              : "linear-gradient(to right, #3b82f6, #8b5cf6)"
          }}
        />
      </motion.button>

      {/* Language Toggle */}
      <motion.button
        onClick={toggleLanguage}
        className="group relative p-3 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-full border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Spanish Flag */}
          <motion.div
            className="absolute text-lg"
            animate={{ 
              opacity: language === "es" ? 1 : 0,
              rotate: language === "es" ? 0 : 180,
              scale: language === "es" ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
          >
            🇪🇸
          </motion.div>
          
          {/* English Flag */}
          <motion.div
            className="absolute text-lg"
            animate={{ 
              opacity: language === "en" ? 1 : 0,
              rotate: language === "en" ? 0 : -180,
              scale: language === "en" ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
          >
            🇺🇸
          </motion.div>
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {language === "es" ? "English" : "Español"}
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          animate={{
            background: language === "es" 
              ? "linear-gradient(to right, #ef4444, #fbbf24)" 
              : "linear-gradient(to right, #3b82f6, #ef4444)"
          }}
        />
      </motion.button>

      {/* Floating Animation Background */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-green-400/10 to-blue-400/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
