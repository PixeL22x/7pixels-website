"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function OptimizedParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const lastRenderTime = useRef(0);

  // Throttled mouse handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    // Reduced particle count for better performance
    const colors = ["#10b981", "#059669", "#6366f1"];
    const particleCount = 30; // Reduced from 100

    // Initialize particles
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1, // Reduced velocity
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 1, // Smaller particles
        opacity: Math.random() * 0.3 + 0.1, // Lower opacity
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Optimized animation loop with FPS limiting
    const animate = (currentTime: number) => {
      // Limit to 30 FPS for better performance
      if (currentTime - lastRenderTime.current < 33) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastRenderTime.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Simplified mouse interaction - only for nearby particles
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = dx * dx + dy * dy; // Skip sqrt for performance

        if (distance < 10000) { // 100px squared
          const force = (10000 - distance) / 10000;
          particle.vx += dx * force * 0.005; // Reduced force
          particle.vy += dy * force * 0.005;
        }

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections only for close particles (reduced connection distance)
        if (index % 2 === 0) { // Only check every other particle
          particlesRef.current.slice(index + 1, index + 5).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distanceSquared = dx * dx + dy * dy;

            if (distanceSquared < 4900) { // 70px squared
              const distance = Math.sqrt(distanceSquared);
              ctx.globalAlpha = (1 - distance / 70) * 0.1;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Add throttled mouse listener
    let mouseMoveTimeout: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (mouseMoveTimeout) return;
      mouseMoveTimeout = window.setTimeout(() => {
        handleMouseMove(e);
        mouseMoveTimeout = 0;
      }, 16); // ~60fps throttle
    };

    window.addEventListener("mousemove", throttledMouseMove, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mouseMoveTimeout) {
        clearTimeout(mouseMoveTimeout);
      }
    };
  }, [handleMouseMove]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        mixBlendMode: "screen",
        width: "100%",
        height: "100%"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
