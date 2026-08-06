import React from "react";
import FadeInSection from "@/app/component/ui/FadeInSection";
import Image from "next/image";

const heroImages = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1632&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1712&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1740&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523580494112-071d31199a06?q=80&w=1740&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1740&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1475721025592-567de9ec1004?q=80&w=1740&auto=format&fit=crop",
];

const EventsHero = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center bg-[#006CB8]/40 overflow-hidden">
      {/* Background Collage */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2  transform scale-105">
        {heroImages.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt="Collage Image"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0a192f]/70"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="w-full mx-auto">
          <FadeInSection animation="fade-up" delay={0}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Our Events & Gallery
            </h1>
          </FadeInSection>
          <FadeInSection animation="fade-up" delay={150}>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Discover highlights from our recent expos, industry conferences,
              and company celebrations.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;
