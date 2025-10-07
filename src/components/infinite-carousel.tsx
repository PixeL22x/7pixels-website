"use client";
import React, { useEffect, useRef } from 'react';

interface CarouselItem {
  image: string;
  alt: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
}

export default function InfiniteCarousel({ items }: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        container.style.scrollBehavior = 'smooth';
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        container.style.scrollBehavior = 'auto';
      }, 150);
    };

    // Auto scroll
    const autoScroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const interval = setInterval(autoScroll, 20); // 50fps
    container.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="relative overflow-hidden py-4">
      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide"
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        {/* Render items 4 times for seamless loop */}
        {[...Array(4)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {items.map((item, index) => (
              <div 
                key={`${setIndex}-${index}`} 
                className="flex-shrink-0 w-80 h-60 rounded-3xl overflow-hidden shadow-2xl group relative transition-all duration-500 hover:scale-105 hover:shadow-green-500/20"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
