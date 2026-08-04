"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SEZData } from "@/types/product";

interface SEZSectionProps {
  sez: SEZData;
}

const SEZSection: React.FC<SEZSectionProps> = ({ sez }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!sez) return null;

  const {
    badge = "Specialized Module",
    heading = "Special Economic Zone (SEZ) Customs Filing",
    description,
    features = [],
    benefits = [],
    image = "/products/SEZ.png",
  } = sez;

  // Split heading into two visually balanced lines with highlight
  const formatHeading = (text: string) => {
    if (text.includes("Special Economic Zone (SEZ)")) {
      return (
        <>
          <span className="block">Special Economic Zone (SEZ)</span>
          <span className="block text-[#0066B3]">Customs Filing</span>
        </>
      );
    }
    const words = text.split(" ");
    if (words.length > 3) {
      const mid = Math.ceil(words.length / 2);
      const firstHalf = words.slice(0, mid).join(" ");
      const secondHalf = words.slice(mid).join(" ");
      return (
        <>
          <span className="block">{firstHalf}</span>
          <span className="block text-[#0066B3]">{secondHalf}</span>
        </>
      );
    }
    return text;
  };

  return (
    <section id="sez-section" className="w-full">
      {/* Top Hero Section with Blue Aurora Gradient */}
      <div
        className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-white"
        style={{
          background: `
            radial-gradient(ellipse 70% 90% at 0% 50%, rgba(0, 102, 179, 0.28) 0%, rgba(96, 165, 250, 0.18) 45%, rgba(239, 246, 255, 0.05) 75%, transparent 100%),
            radial-gradient(ellipse 70% 90% at 100% 50%, rgba(0, 102, 179, 0.28) 0%, rgba(96, 165, 250, 0.18) 45%, rgba(239, 246, 255, 0.05) 75%, transparent 100%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(224, 242, 254, 0.35) 0%, transparent 80%),
            linear-gradient(180deg, #FFFFFF 0%, #F5F9FE 50%, #FFFFFF 100%)
          `,
        }}
      >
        {/* Aurora Ambient Light Pillars & Dotted Grid Texture with Bottom Fade */}
        <div
          className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(180deg, black 0%, black 60%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(180deg, black 0%, black 60%, transparent 95%)",
          }}
        >
          {/* Left Aurora Glow Beam */}
          <div
            className="absolute -top-1/4 -left-1/4 w-[75%] h-[150%] rounded-full opacity-65 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0, 102, 179, 0.45) 0%, rgba(96, 165, 250, 0.28) 45%, transparent 75%)",
              filter: "blur(110px)",
            }}
          />

          {/* Right Aurora Glow Beam */}
          <div
            className="absolute -top-1/4 -right-1/4 w-[75%] h-[150%] rounded-full opacity-65 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0, 102, 179, 0.45) 0%, rgba(96, 165, 250, 0.28) 45%, transparent 75%)",
              filter: "blur(110px)",
            }}
          />

          {/* Center Soft Ice Blue Top Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[320px] rounded-full opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(186, 230, 253, 0.65) 0%, transparent 70%)",
              filter: "blur(85px)",
            }}
          />

          {/* Fine Dotted Matrix Grid (matching reference image) */}
          <div
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0066B3 1.2px, transparent 1.2px)",
              backgroundSize: "22px 22px",
              maskImage:
                "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 20%, black 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 20%, black 85%)",
            }}
          />
        </div>

        {/* Smooth Bottom Feathering Overlay */}
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14">
            {/* Left Column: Information */}
            <div className="w-full md:w-[44%] lg:w-[40%] flex flex-col justify-center shrink-0">
              {/* Pill Badge */}
              {badge && (
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs sm:text-sm font-semibold text-[#0066B3] shadow-sm mb-4 w-fit backdrop-blur-sm">
                  <span className="px-2 py-0.5 rounded-md bg-[#0066B3] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                    NEW
                  </span>
                  <span>{badge}</span>
                  <svg
                    className="w-3.5 h-3.5 text-[#0066B3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.5rem] font-bold text-[#0A192F] tracking-tight leading-[1.2]">
                {formatHeading(heading)}
              </h2>

              {/* Description */}
              <p className="text-black mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.02rem] leading-relaxed">
                {description}
              </p>

              {/* Checkmark Highlights from benefits */}
              <div className="flex flex-wrap items-center gap-y-2.5 gap-x-5 sm:gap-x-6 mt-7 pt-6 border-t border-gray-200/70 text-xs sm:text-sm font-medium text-gray-600">
                {(benefits.length > 0
                  ? benefits.slice(0, 3)
                  : [
                      "Purpose-built for Special Economic Zone operations",
                      "Integrated with eRoyal IMPEX customs workflows",
                      "Reduced manual documentation",
                    ]
                ).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#0066B3] flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Clean Large Image */}
            <div className="w-full md:w-[56%] lg:w-[60%] relative flex items-center justify-center">
              <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] lg:h-[580px] xl:h-[640px] transform lg:scale-105 transition-transform duration-500 hover:scale-110">
                <Image
                  src={image}
                  alt="eRoyal IMPEX SEZ Customs Filing Interface"
                  fill
                  className="object-contain drop-shadow-[0_25px_60px_rgba(0,102,179,0.2)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Clean Section: Specialized SEZ Capabilities Grid */}
      {features.length > 0 && (
        <div id="sez-features-grid" className="w-full bg-white pt-6 pb-16 sm:pb-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0066B3]">
                Specialized SEZ Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mt-2">
                Engineered for High-Volume SEZ Workflows
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-[0_8px_24px_rgba(0,102,179,0.08)] hover:border-blue-200 hover:bg-white transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#0066B3] flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[#0066B3] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-[#0A192F] text-base sm:text-lg group-hover:text-[#0066B3] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SEZSection;
