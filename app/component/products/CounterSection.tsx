"use client";

import React, { useState, useEffect, useRef } from 'react';

const CounterSection = () => {
  const [count, setCount] = useState(0);
  const target = 100000;
  const duration = 2000; // 2 seconds animation
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(target * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  // Format as Indian numbering system: 1,00,000
  const formattedCount = new Intl.NumberFormat('en-IN').format(count);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-white flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-6xl md:text-7xl lg:text-[5rem] font-bold text-[#0066B3] mb-6 tracking-tight">
          {formattedCount}+
        </h2>
        <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed">
          Trusted by businesses to streamline customs documentation and ICEGATE filing.<br className="hidden md:block" />
          Helping keep import and export operations accurate, compliant, and efficient.
        </p>
      </div>
    </section>
  );
};

export default CounterSection;
