import React from "react";
import FadeInSection from "@/app/component/ui/FadeInSection";

const BlogsHero = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center bg-[#006CB8]/40 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop')", // Abstract news/tech background
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="w-full mx-auto">
          <FadeInSection animation="fade-up" delay={0}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Latest Blogs & Insights
            </h1>
          </FadeInSection>
          <FadeInSection animation="fade-up" delay={150}>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Stay updated with the latest trends in logistics, customs clearance, and supply chain technology.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
