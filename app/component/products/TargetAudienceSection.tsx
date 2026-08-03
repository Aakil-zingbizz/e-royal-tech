import Image from 'next/image';

const TargetAudienceSection = () => {
  const audiences = [
    {
      title: 'Customs Brokers\n& CHAs',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Importers &\nExporters',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M12 2v20" />
        </svg>
      )
    },
    {
      title: 'Freight\nForwarders',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      title: 'NVOCC\nOperators',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20" />
          <path d="M5 20L3 14l2-8h14l2 8-2 6" />
          <path d="M8 14h8" />
          <path d="M12 14v6" />
          <path d="M6 6h12" />
        </svg>
      )
    },
    {
      title: 'Shipping\nAgencies',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20" />
          <path d="M12 2v10" />
          <path d="m15 5-3-3-3 3" />
          <path d="m4 17 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" />
        </svg>
      )
    },
    {
      title: 'Logistics\nProviders',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-16 bg-white flex justify-center px-4 md:px-8">
      <div className="max-w-[1400px] w-full bg-[#F4F7FC] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-sm">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          <div className="inline-flex">
            <span className="px-5 py-1.5 rounded-full border border-blue-200 text-[#0066B3] text-sm font-semibold bg-white shadow-sm">
              Who We Serve
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0A192F] mt-6 leading-[1.2]">
            Built for Businesses That <br className="hidden lg:block" />
            Keep <span className="text-[#0066B3]">Global Trade Moving</span>
          </h2>
          
          <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
            Whether you're filing customs declarations, managing cross-border
            shipments, or coordinating logistics operations, eRoyal IMPEX provides
            a faster, smarter way to manage <span className="font-semibold text-gray-800">ICEGATE filing</span>, streamline <span className="font-semibold text-gray-800">customs 
            documentation</span>, ensure <span className="font-semibold text-gray-800">regulatory compliance</span>, and simplify <span className="font-semibold text-gray-800">import-
            export workflows</span>—all from one secure, cloud-based platform.
          </p>

          {/* Divider */}
          <div className="relative flex items-center py-10 max-w-2xl">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-6 text-[#0066B3] font-bold text-sm tracking-wide">Trusted by</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Grid of items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {audiences.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#0066B3] bg-[#F0F5FA] rounded-xl">
                  {item.icon}
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base whitespace-pre-line leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-full overflow-hidden">
           <div className="absolute inset-0 w-full h-full lg:[clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)]">
              <Image 
                src="/global-logistics.png" 
                alt="Global Logistics and Trade" 
                fill 
                className="object-cover"
                priority
              />
           </div>
           {/* Gradient overlay for blending */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FC] via-transparent to-transparent lg:hidden"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FC] to-transparent w-1/4 hidden lg:block z-10" style={{ transform: 'translateX(10%)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
