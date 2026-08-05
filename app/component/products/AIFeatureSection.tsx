import React from "react";
import Image from "next/image";

const DocIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#111827"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "w-9 h-9"}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

{
  /*
  Document positions (matching the reference design ">"-shape):
  Doc1: top-right     → (276, 50)
  Doc2: upper-left    → (156, 140)
  Doc3: far-left      → (36,  260)  ← touches the far left boundary (0)
  Doc4: lower-left    → (156, 380)
  Doc5: bottom-right  → (276, 470)

  All lines exit the doc box center, route vertically to y=260,
  then turn right along a shared horizontal trunk to x=520 (AI edge).
*/
}

const DocumentCluster = () => (
  <div className="relative w-[520px] h-[520px] flex-shrink-0">
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 520 520"
    >
      {/* Line paths: each doc → vertical to y=260 → horizontal trunk to AI */}
      <defs>
        <path
          id="p1"
          d="M276,86 L276,230 Q276,240 286,240 L320,240 L320,260 L520,260"
          fill="none"
        />
        <path
          id="p2"
          d="M156,176 L156,240 Q156,250 166,250 L320,250 L320,260 L520,260"
          fill="none"
        />
        <path id="p3" d="M72,260 L520,260" fill="none" />
        <path
          id="p4"
          d="M156,344 L156,280 Q156,270 166,270 L320,270 L320,260 L520,260"
          fill="none"
        />
        <path
          id="p5"
          d="M276,434 L276,290 Q276,280 286,280 L320,280 L320,260 L520,260"
          fill="none"
        />
      </defs>

      {/* Render the static lines */}
      <use href="#p1" stroke="#1a1a1a" strokeWidth="1.5" />
      <use href="#p2" stroke="#1a1a1a" strokeWidth="1.5" />
      <use href="#p3" stroke="#1a1a1a" strokeWidth="1.5" />
      <use href="#p4" stroke="#1a1a1a" strokeWidth="1.5" />
      <use href="#p5" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Vertical bracket where lines merge */}
      <line
        x1="320"
        y1="240"
        x2="320"
        y2="280"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />

      {/* Animated data pills traveling along each path */}
      {[1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <circle r="4" fill="#0066B3">
            <animate
              attributeName="opacity"
              values="0;1;1;0;0"
              keyTimes="0;0.05;0.45;0.5;1"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            keyPoints="0;1;1;1"
            keyTimes="0;0.5;0.51;1"
            calcMode="linear"
          >
            <mpath href={`#p${i}`} />
          </animateMotion>
        </g>
      ))}
    </svg>

    {/* The 5 Document Boxes */}
    <div className="absolute top-[50px] left-[276px] -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10">
      <DocIcon />
    </div>
    <div className="absolute top-[140px] left-[156px] -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10">
      <DocIcon />
    </div>
    <div className="absolute top-[260px] left-[36px] -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10">
      <DocIcon />
    </div>
    <div className="absolute top-[380px] left-[156px] -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10">
      <DocIcon />
    </div>
    <div className="absolute top-[470px] left-[276px] -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10">
      <DocIcon />
    </div>
  </div>
);

const AIBox = () => (
  <div className="relative z-20 flex-shrink-0 w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] rounded-full bg-white flex items-center justify-center mx-auto">
    <div className="w-full">
      <Image
        src="/products/ai.svg"
        alt="AI Processor Icon"
        fill
        className="object-contain"
      />
    </div>
  </div>
);

const DashboardBox = () => (
  <div className="relative z-10 flex-shrink-0 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[440px] aspect-video rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.12)] border border-slate-200 p-1 bg-white">
    <div className="relative w-full h-full bg-gray-50 overflow-hidden rounded-xl">
      <Image
        src="/products/dashboard-mockup.png"
        alt="Dashboard Data Entry Mockup"
        fill
        className="object-cover object-left-top"
      />
    </div>
  </div>
);

const AIFeatureSection = () => {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Area — Two Column: Heading Left, Description Right */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-16 mb-16 sm:mb-20">
          <div className="lg:w-[55%] shrink-0">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0066B3] block mb-3">
              AI-Powered Data Entry
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0A192F] leading-[1.2] tracking-tight">
              Automate Data Entry.
              <br /> Eliminate Manual Errors.
            </h2>
          </div>
          <div className="lg:w-[45%] flex items-center">
            <p className="text-gray-600 text-base sm:text-lg lg:text-[1.05rem] leading-relaxed">
              AI intelligently extracts information from trade documents and
              automatically populates the appropriate fields in your dashboard.
              Reduce manual data entry errors, improve data accuracy, and
              accelerate customs and freight workflows with every document you
              process.
            </p>
          </div>
        </div>
        {/* MOBILE LAYOUT (Flex Column) */}
        <div className="md:hidden flex flex-col items-center justify-center gap-0 w-full mt-8">
          <div className="relative z-10 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex-shrink-0 w-[140px] h-[140px] flex items-center justify-center">
            <DocIcon className="w-14 h-14" />
          </div>

          <div className="flex items-center justify-center w-px h-10 relative shrink-0">
            <div className="w-full h-full bg-black"></div>
            <div className="absolute left-1/2 -translate-x-1/2 h-4 w-1.5 rounded-full bg-[#0066B3] animate-feed-y-1 shadow-[0_0_8px_#0066b3]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>

          <AIBox />

          <div className="flex items-center justify-center w-px h-10 relative shrink-0 z-10">
            <div className="w-full h-full bg-black"></div>
            <div className="absolute left-1/2 -translate-x-1/2 h-4 w-1.5 rounded-full bg-[#0066B3] animate-feed-y-2 shadow-[0_0_8px_#0066b3]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>

          <DashboardBox />
        </div>

        {/* DESKTOP LAYOUT (3-Column Grid — AI is dead center) */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-0 w-full mt-4">
          {/* Left Column: Document Cluster overlaps into center */}
          <div className="flex justify-end -mr-[40px] lg:-mr-[50px] relative z-10">
            <DocumentCluster />
          </div>

          {/* Center Column: AI chip */}
          <div className="relative z-20">
            <AIBox />
          </div>

          {/* Right Column: Line + Dashboard */}
          <div className="flex items-center justify-start -ml-[40px] lg:-ml-[50px] relative z-10">
            {/* Connecting line from AI to Dashboard */}
            <svg
              width="80"
              height="10"
              viewBox="0 0 80 10"
              className="shrink-0 overflow-visible"
            >
              <defs>
                <path id="p-right" d="M0,5 L80,5" />
              </defs>
              <use
                href="#p-right"
                stroke="#1a1a1a"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Animated pill on right line */}
              <g>
                <circle r="4" fill="#0066B3">
                  <animate
                    attributeName="opacity"
                    values="0;0;0;1;1;0"
                    keyTimes="0;0.5;0.55;0.6;0.95;1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  keyPoints="0;0;0;1"
                  keyTimes="0;0.5;0.55;1"
                  calcMode="linear"
                >
                  <mpath href="#p-right" />
                </animateMotion>
              </g>
            </svg>
            <DashboardBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatureSection;
