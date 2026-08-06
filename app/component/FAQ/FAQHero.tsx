import React from "react";
import FadeInSection from "@/app/component/ui/FadeInSection";

const FAQHero = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center bg-[#006CB8]/40">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')", // Abstract blue tech background
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="w-full mx-auto">
          <FadeInSection animation="fade-up" delay={0}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h1>
          </FadeInSection>
          <FadeInSection animation="fade-up" delay={150}>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Find answers to the most common questions about our logistics and
              customs clearance software.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;
