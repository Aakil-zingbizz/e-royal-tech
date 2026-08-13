import React from "react";
import Link from "next/link";
import FadeInSection from "@/app/component/ui/FadeInSection";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#001233] overflow-hidden">
      {/* Background Video Setup */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/home/ship-flight-animation.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text readability against the background */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#001233] via-[#001233]/80 to-transparent" /> */}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center items-center">
        <div>
          <FadeInSection animation="fade-up" delay={150}>
            <h1
              className="text-8xl font-extrabold-override tracking-tight text-[#1c659c] mb-6 leading-[1] text-center font-manrope"
              style={{
                textShadow:
                  "0 0 20px rgba(223, 241, 255, 0.8), 0 0 80px rgba(223, 241, 255, 0.8)",
              }}
            >
              21+ Years Simplifying
              <br />
              <span className="text-[#2480c6]">Global Trade Operations</span>
            </h1>
          </FadeInSection>
        </div>
      </div>

      {/* Bottom Buttons Wrapper */}
      <div className="absolute z-20 bottom-24 left-0 w-full px-4 sm:px-6 lg:px-8">
        <FadeInSection animation="fade-up" delay={450}>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link
              href="#demo"
              className="inline-flex items-center font-manrope font-bold-override justify-center px-8 py-3.5 text-base text-[#006CB8] transition-all duration-200 bg-white border border-transparent rounded-full hover:bg-[#005A9C] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006CB8]"
            >
              Request a Demo
            </Link>
            <Link
              href="#solutions"
              className="inline-flex font-manrope font-bold-override items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-full hover:bg-gray-50 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Explore Our Solutions
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
