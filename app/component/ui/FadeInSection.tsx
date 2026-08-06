"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-in";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  className?: string;
  animation?: AnimationType;
  duration?: number; // Duration in milliseconds
}

export default function FadeInSection({
  children,
  delay = 0,
  className = "",
  animation = "fade-up",
  duration = 1000,
}: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  let hiddenClasses = "";
  let visibleClasses = "";

  switch (animation) {
    case "fade-up":
      hiddenClasses = "opacity-0 translate-y-12";
      visibleClasses = "opacity-100 translate-y-0";
      break;
    case "fade-in":
      hiddenClasses = "opacity-0";
      visibleClasses = "opacity-100";
      break;
    case "slide-left":
      hiddenClasses = "opacity-0 translate-x-12";
      visibleClasses = "opacity-100 translate-x-0";
      break;
    case "slide-right":
      hiddenClasses = "opacity-0 -translate-x-12";
      visibleClasses = "opacity-100 translate-x-0";
      break;
    case "scale-up":
      hiddenClasses = "opacity-0 scale-95";
      visibleClasses = "opacity-100 scale-100";
      break;
    case "blur-in":
      hiddenClasses = "opacity-0 blur-md translate-y-8";
      visibleClasses = "opacity-100 blur-0 translate-y-0";
      break;
    default:
      hiddenClasses = "opacity-0 translate-y-12";
      visibleClasses = "opacity-100 translate-y-0";
  }

  return (
    <div
      ref={domRef}
      className={`transition-all ease-out ${
        isVisible ? visibleClasses : hiddenClasses
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
