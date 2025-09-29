"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100",
        className
      )}>
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn("text-base font-semibold text-gray-800 mb-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 max-w-sm",
        className
      )}>
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn("h-40 rounded-lg z-40 mb-4", className)}>
      {children}
    </div>
  );
};

const Container = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 shadow-sm",
        className
      )}>
      {children}
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-green-400"></motion.span>
      ))}
    </div>
  );
};

// Skeleton específico para estadísticas
export const StatsSkeleton = ({ 
  icons, 
  mainNumber, 
  color = "green"
}: { 
  icons: React.ReactNode[]; 
  mainNumber: string;
  color?: string;
}) => {
  // Simplified animation without complex Framer Motion sequences

  const colorClasses = {
    green: "text-green-600",
    blue: "text-blue-600", 
    purple: "text-purple-600"
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      {/* Iconos animados */}
      <div className="flex flex-row justify-center items-center gap-2 mb-4">
        {icons.map((icon, index) => (
          <Container 
            key={index}
            className={`circle-${index + 1} ${index === 1 ? 'h-12 w-12' : 'h-8 w-8'}`}
          >
            {icon}
          </Container>
        ))}
      </div>
      
      {/* Número principal */}
      <div className={`text-3xl font-bold mb-2 ${colorClasses[color as keyof typeof colorClasses] || colorClasses.green}`}>
        {mainNumber}
      </div>
      
      {/* Sparkles sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles />
      </div>
    </div>
  );
};
