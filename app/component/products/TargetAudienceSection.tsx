import React from "react";
import Image from "next/image";
import { TargetAudienceData, AudienceItem } from "@/types/product";

interface TargetAudienceSectionProps {
  targetAudience?: TargetAudienceData;
}

const renderAudienceIcon = (iconName?: string) => {
  switch (iconName) {
    case "globe":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0066B3"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="6" />
          <ellipse cx="12" cy="12" rx="2.5" ry="6" />
          <path d="M6 12h12" />
          <path d="M12 2a10 10 0 0 1 9.5 7" />
          <polyline points="22 5 21.5 9 17.5 9" />
          <path d="M12 22a10 10 0 0 1-9.5-7" />
          <polyline points="2 19 2.5 15 6.5 15" />
        </svg>
      );
    case "truck":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0066B3"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="4" width="13" height="11" rx="1" />
          <path d="M14 8h4l3 3v4h-7V8z" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
          <path d="M7 18h8" />
        </svg>
      );
    case "ship":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0066B3"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l2-7h10l2 7-2 2-5-1.5L7 15l-2-2z" />
          <path d="M9 6V3h6v3" />
          <path d="M12 3v3" />
          <path d="M2 19c2-1 4-1 6 0s4 1 6 0 4-1 6 0 2-0.5 2 0" />
        </svg>
      );
    case "anchor":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0066B3"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 15h20l-2 3H4l-2-3z" />
          <path d="M6 15v-4h4v4M11 15v-4h4v4M16 15V9h3v6" />
          <path d="M2 20c2-0.8 4-0.8 6 0s4 0.8 6 0 4-0.8 6 0 2-0.4 2 0" />
        </svg>
      );
    case "box":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0066B3"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1l8-4.6z" />
          <path d="M12 11.7l8-4.6M12 11.7v9.8M12 11.7L4 7.1" />
        </svg>
      );
    case "zap":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0066B3"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "users":
    default:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0066B3"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a4 4 0 0 0-4 4v1h8V6a4 4 0 0 0-4-4z" />
          <path d="M5 8h14l-1 2H6L5 8z" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M7 21v-2a5 5 0 0 1 10 0v2" />
          <path d="M10 17l2 2 2-2" />
        </svg>
      );
  }
};

const renderFormattedDescription = (text: string) => {
  const keywords = [
    "ICEGATE filing",
    "customs documentation",
    "regulatory compliance",
    "import-export workflows",
  ];

  let parts: React.ReactNode[] = [text];

  keywords.forEach((keyword) => {
    const nextParts: React.ReactNode[] = [];
    parts.forEach((part) => {
      if (typeof part === "string") {
        const split = part.split(keyword);
        split.forEach((sub, i) => {
          if (i > 0) {
            nextParts.push(
              <span
                key={`${keyword}-${i}`}
                className="font-semibold text-[#0066B3]"
              >
                {keyword}
              </span>,
            );
          }
          if (sub) {
            nextParts.push(sub);
          }
        });
      } else {
        nextParts.push(part);
      }
    });
    parts = nextParts;
  });

  return parts;
};

const defaultTargetAudience: TargetAudienceData = {
  badge: "Who We Serve",
  headingPrefix: "Built for Businesses That Keep",
  headingHighlight: "Global Trade Moving",
  description:
    "Whether you're filing customs declarations, managing cross-border shipments, or coordinating logistics operations, eRoyal IMPEX provides a faster, smarter way to manage ICEGATE filing, streamline customs documentation, ensure regulatory compliance, and simplify import-export workflows—all from one secure, cloud-based platform.",
  trustedByText: "Trusted by",
  audiences: [
    { title: "Customs Brokers\n& CHAs", icon: "users" },
    { title: "Importers &\nExporters", icon: "globe" },
    { title: "Freight\nForwarders", icon: "truck" },
    { title: "NVOCC\nOperators", icon: "ship" },
    { title: "Shipping\nAgencies", icon: "anchor" },
    { title: "Logistics\nProviders", icon: "box" },
  ],
  image: "/products/impex-audience.svg",
};

const TargetAudienceSection = ({
  targetAudience = defaultTargetAudience,
}: TargetAudienceSectionProps) => {
  const badge = targetAudience?.badge || defaultTargetAudience.badge;
  const headingPrefix =
    targetAudience?.headingPrefix || defaultTargetAudience.headingPrefix;
  const headingHighlight =
    targetAudience?.headingHighlight || defaultTargetAudience.headingHighlight;
  const description =
    targetAudience?.description || defaultTargetAudience.description;
  const trustedByText =
    targetAudience?.trustedByText || defaultTargetAudience.trustedByText;
  const audiences =
    targetAudience?.audiences && targetAudience.audiences.length > 0
      ? targetAudience.audiences
      : defaultTargetAudience.audiences;
  const image =
    targetAudience?.image ||
    defaultTargetAudience.image ||
    "/products/impex-audience.svg";

  const getTitleLines = () => {
    if (headingPrefix === "Built for Businesses That Keep") {
      return (
        <>
          Built for Businesses That <br />
          Keep <span className="text-[#0066B3]">{headingHighlight}</span>
        </>
      );
    }
    return (
      <>
        {headingPrefix} <br className="hidden sm:inline" />
        <span className="text-[#0066B3]">{headingHighlight}</span>
      </>
    );
  };

  return (
    <section className="w-full flex items-center justify-center lg:py-28 bg-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-[#F4F7FC] rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-slate-100">
          {/* Left Side Content */}
          <div className="w-full lg:w-[54%] xl:w-[52%] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center relative z-10">
            {badge && (
              <div className="inline-flex">
                <span className="px-4 py-1 rounded-full border border-blue-200 text-[#0066B3] text-xs sm:text-sm font-semibold bg-white shadow-sm">
                  {badge}
                </span>
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold text-[#0A192F] mt-4 leading-[1.18] tracking-tight">
              {getTitleLines()}
            </h2>

            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl">
              {renderFormattedDescription(description)}
            </p>

            {/* Trusted by Divider (Label on left + line on right) */}
            <div className="flex items-center gap-4 my-5 lg:my-6 max-w-2xl">
              <span className="text-[#0066B3] font-bold text-sm sm:text-base whitespace-nowrap">
                {trustedByText}
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Grid of items (3 columns x 2 rows) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 lg:gap-x-5 gap-y-4 lg:gap-y-5 max-w-2xl">
              {audiences.map((item: AudienceItem, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center text-[#0066B3] bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)]">
                    {renderAudienceIcon(item.icon)}
                  </div>
                  <span className="font-semibold text-gray-800 text-xs sm:text-sm whitespace-pre-line leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image with Pure C-Curve Divider */}
          <div className="w-full lg:w-[46%] xl:w-[48%] relative min-h-[360px] lg:min-h-[520px] overflow-hidden">
            {/* SVG Definition for the Smooth C-Curve Clip Path */}
            <svg width="0" height="0" className="absolute pointer-events-none">
              <defs>
                <clipPath id="c-curve-clip" clipPathUnits="objectBoundingBox">
                  <path d="M 0.25 0 L 1 0 L 1 1 L 0.25 1 C -0.0 0.0, -0.00 0.2, 0.25 0 Z" />
                </clipPath>
              </defs>
            </svg>

            <div className="absolute inset-0 w-full h-full lg:[clip-path:url(#c-curve-clip)]">
              <Image
                src={image}
                alt={
                  headingHighlight
                    ? `${headingHighlight} Visual`
                    : "Target Audience"
                }
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
