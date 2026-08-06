"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SEZData } from "@/types/product";
import FadeInSection from "@/app/component/ui/FadeInSection";

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

  const formatHeading = (text: string) => {
    if (text.includes("Special Economic Zone (SEZ)")) {
      return (
        <>
          <span className="block">Special Economic Zone (SEZ)</span>
          <span className="block text-[var(--theme-color)]">Customs Filing</span>
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
          <span className="block text-[var(--theme-color)]">{secondHalf}</span>
        </>
      );
    }
    return text;
  };

  return (
    <section id="sez-section" className="w-full">
      <FadeInSection animation="slide-left" duration={1200}>
        <div className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 animate-gradient-shift">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[rgba(var(--theme-color-rgb),0.15)] blur-[120px] animate-float pointer-events-none" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[rgba(var(--theme-color-rgb),0.12)] blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full bg-[rgba(var(--theme-color-rgb),0.1)] blur-[100px] animate-float pointer-events-none" style={{ animationDelay: '4s' }} />
          
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14">
              <div className="w-full md:w-[44%] lg:w-[50%] flex flex-col justify-center shrink-0">
                {badge && (
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-sm mb-4 w-fit backdrop-blur-sm">
                    <span className="px-2 py-0.5 rounded-md bg-[var(--theme-color)] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                      NEW
                    </span>
                    <span>{badge}</span>
                    <svg className="w-3.5 h-3.5 text-[var(--theme-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.5rem] font-bold text-white tracking-tight leading-[1.2]">
                  {formatHeading(heading)}
                </h2>

                <p className="text-white/80 mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.02rem] leading-relaxed w-11/12">
                  {description}
                </p>
              </div>

              <div className="w-full md:w-[56%] lg:w-[50%] relative flex items-center justify-center mt-10 md:mt-0">
                <div className="relative w-full transform lg:scale-105">
                  <div className="relative w-full drop-shadow-[0_25px_60px_rgba(var(--theme-color-rgb),0.2)]">
                    <Image src={image} alt="eRoyal IMPEX SEZ Customs Filing Interface" width={1200} height={900} className="w-full h-auto rounded-[24px]" priority />
                  </div>

                  {(benefits.length > 0 ? benefits.slice(0, 3) : [
                    "Purpose-built for Special Economic Zone operations",
                    "Integrated with eRoyal IMPEX customs workflows",
                    "Reduced manual documentation",
                  ]).map((benefit, index) => {
                    const positions = [
                      "top-[2%] left-[-2%] sm:top-[0%] sm:left-[-6%] lg:top-[-4%] lg:left-[-8%]",
                      "top-[20%] right-[-2%] sm:top-[18%] sm:right-[-4%] lg:top-[15%] lg:right-[-5%]",
                      "bottom-[25%] left-[-4%] sm:bottom-[22%] sm:left-[-10%] lg:bottom-[20%] lg:left-[-15%]",
                    ];
                    const words = benefit.split(" ");
                    const midIndex = Math.ceil(words.length / 2);
                    const line1 = words.slice(0, midIndex).join(" ");
                    const line2 = words.slice(midIndex).join(" ");
                    return (
                      <div key={index} className={`absolute ${positions[index]} z-20 flex items-center justify-center p-2.5 sm:p-3 lg:px-4 lg:py-3 bg-gradient-to-br from-[#E3F1FE] via-[#ECF5FE] to-[#F9FCFF] shadow-[0_0px_4px_0px_rgba(0,0,0,0.10)] rounded-xl lg:rounded-2xl min-w-[140px] sm:min-w-[160px] lg:min-w-[200px] animate-float hover:scale-105 transition-transform duration-300`} style={{ animationDelay: `${index * 1.5}s` }}>
                        <p className="text-[9.5px] sm:text-[10.5px] lg:text-[11.5px] font-semibold text-center leading-snug text-[#1E293B] whitespace-nowrap">
                          {line1}
                          <br />
                          {line2}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {features.length > 0 && (
        <div id="sez-features-grid" className="w-full bg-white pt-6 pb-16 sm:pb-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection animation="fade-up" duration={1000}>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--theme-color)]">
                  Specialized SEZ Capabilities
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mt-2">
                  Engineered for High-Volume SEZ Workflows
                </h3>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {features.map((feature, idx) => (
                <FadeInSection key={idx} animation="fade-up" duration={1000} delay={idx * 150}>
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-[0_8px_24px_rgba(var(--theme-color-rgb),0.08)] hover:border-[rgba(var(--theme-color-rgb),0.3)] hover:bg-white transition-all duration-300 group h-full">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(var(--theme-color-rgb),0.08)] border border-[rgba(var(--theme-color-rgb),0.2)] text-[var(--theme-color)] flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[var(--theme-color)] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="font-bold text-[#0A192F] text-base sm:text-lg group-hover:text-[var(--theme-color)] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SEZSection;
