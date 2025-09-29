"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PointerHighlightProps {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName
}: PointerHighlightProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={cn("relative", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Rectangle highlight */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-md border-2 opacity-0",
          rectangleClassName
        )}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      />
      
      {/* Pointer */}
      <motion.div
        className={cn(
          "absolute -right-1 -top-1 opacity-0",
          pointerClassName
        )}
        animate={{
          opacity: isHovered ? 1 : 0,
          rotate: isHovered ? 15 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M1 1L11 11M11 11H6M11 11V6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </span>
  );
}

