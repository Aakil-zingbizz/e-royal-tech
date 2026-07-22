import React from "react";
import Image from "next/image";

const LogoCarousel = () => {
  // We have 21 logos from logo1.png to logo21.png
  const logos = Array.from(
    { length: 21 },
    (_, i) => `/home/logos/logo${i + 1}.png`,
  );

  return (
    <section className="py-16 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-base font-normal text-[#333333]">
          TRUSTED BY LEADING LOGISTICS COMPANIES
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* 
          Container for the marquee effect. We duplicate the content to make it seamless. 
          The w-[max-content] ensures it takes up exactly the width of its children, 
          and then we animate it to translate -50% to hide the first half over time.
        */}
        <div className="flex w-max animate-marquee space-x-12 px-6">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 w-32 md:w-40 lg:w-48 h-24 relative flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              />
            </div>
          ))}
          {/* Second set of logos (duplicate for infinite scroll) */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 w-32 md:w-40 lg:w-48 h-24 relative flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default LogoCarousel;
