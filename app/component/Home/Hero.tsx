import React from "react";
import Link from "next/link";
import FadeInSection from "@/app/component/ui/FadeInSection";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#001233] overflow-hidden">
      {/* Background Image Setup */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home/hero-image.png')`,
        }}
      />

      {/* Overlay to ensure text readability against the background */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#001233] via-[#001233]/80 to-transparent" /> */}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <FadeInSection animation="fade-up" delay={0}>
            <div className="mb-4 text-sm font-medium tracking-wider text-[#008ff5] uppercase">
              Trusted Since 2003 &nbsp;&bull;&nbsp; Logistics-Focused
              &nbsp;&bull;&nbsp; 4 Enterprise Solutions &nbsp;&bull;&nbsp; 24/7
              support
            </div>
          </FadeInSection>
          <FadeInSection animation="fade-up" delay={150}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-normal text-white mb-6 leading-tight">
              <span className="text-[#008ff5]">21+ Years</span> Simplifying
              <br />
              Global Trade Operations
            </h1>
          </FadeInSection>

          <FadeInSection animation="fade-up" delay={300}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Purpose-built software for customs, freight forwarding,
              trade accounting, supply chain logistics, and warehouse operations.
            </p>
          </FadeInSection>

          <FadeInSection animation="fade-up" delay={450}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#006CB8] border border-transparent rounded-full hover:bg-[#005A9C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006CB8]"
              >
                Request a Demo
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#006CB8] transition-all duration-200 bg-white border border-transparent rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Explore Our Solutions
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
