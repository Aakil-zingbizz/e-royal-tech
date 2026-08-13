"use client";

import React, { useState, useEffect, useRef } from "react";
import { CounterData } from "@/types/product";

interface CounterSectionProps {
  counter?: CounterData;
}

const defaultCounter: CounterData = {
  target: 100000,
  suffix: "+",
  description:
    "Trusted by businesses to streamline customs documentation and ICEGATE filing. Helping keep import and export operations accurate, compliant, and efficient.",
};

const CounterSection = ({ counter = defaultCounter }: CounterSectionProps) => {
  const target = counter?.target || defaultCounter.target;
  const suffix = counter?.suffix ?? defaultCounter.suffix;
  const description = counter?.description || defaultCounter.description;

  const [count, setCount] = useState(0);
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
      { threshold: 0.3 },
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
  const formattedCount = new Intl.NumberFormat("en-IN").format(count);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[300px] py-24 md:py-32 flex flex-col items-center justify-center text-center"
    >
      {/* Blurred oval background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[100px] md:h-[140px] bg-[var(--theme-color)] opacity-[50] blur-[80px] md:blur-[100px] rounded-[100%] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl md:text-7xl lg:text-[5rem] font-bold text-[var(--theme-color)] mb-6 tracking-tight ">
          {formattedCount}
          {suffix}
        </h2>
        <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default CounterSection;
