import React from 'react';

const BuildingIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="3" width="15" height="13" rx="1"></rect>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8h4l3 3v5h-7V8z"></path>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

const ShipIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h.01M7 20h.01M12 20h.01M17 20h.01M22 20h.01M5 16l-2-6h18l-2 6H5zm3-6V6a2 2 0 012-2h4a2 2 0 012 2v4"></path>
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
  </svg>
);

const BoxIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline strokeLinecap="round" strokeLinejoin="round" points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line strokeLinecap="round" strokeLinejoin="round" x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const DeviceIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line strokeLinecap="round" strokeLinejoin="round" x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const ComputerIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line strokeLinecap="round" strokeLinejoin="round" x1="8" y1="21" x2="16" y2="21"></line>
    <line strokeLinecap="round" strokeLinejoin="round" x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ArrowsIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l-4-4m4 4l4-4"></path>
  </svg>
);

const NetworkIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line strokeLinecap="round" strokeLinejoin="round" x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line strokeLinecap="round" strokeLinejoin="round" x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const industries = [
  { name: 'Custom House Agents\n(CHA)', icon: <BuildingIcon /> },
  { name: 'Freight Forwarders', icon: <TruckIcon /> },
  { name: 'NVOCC Operators', icon: <ShipIcon /> },
  { name: 'Shipping Agencies', icon: <BriefcaseIcon /> },
  { name: 'Container Freight\nStations', icon: <BoxIcon /> },
  { name: 'Inland Container Depots', icon: <DeviceIcon /> },
  { name: 'Transport & Fleet\nOperators', icon: <ComputerIcon /> },
  { name: 'Import & Export\nCompanies', icon: <ArrowsIcon /> },
  { name: 'Logistics Service Providers', icon: <NetworkIcon /> },
];

const AboutIndustries = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a192f]">
            Industries We Serve
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 w-full">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 flex flex-col items-center justify-center text-center aspect-square w-[calc(50%-12px)] sm:w-[calc(33.333%-22px)] lg:w-[calc(20%-32px)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <p className="text-[13px] font-semibold text-gray-800 leading-tight whitespace-pre-line">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIndustries;
