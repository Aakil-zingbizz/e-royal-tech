import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Everything You Need for Seamless Customs Filing
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Powerful tools designed to simplify customs documentation, improve 
            visibility, and streamline import and export operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-[#EBF3FA] rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
            <div className="mb-6">
              {/* Shield Icon */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              ICEGATE Filing Automation
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              <span className="block mb-2">ICEGATE Filing Automation</span>
              Simplify Shipping Bill and Bill of Entry filing with seamless ICEGATE integration. Create, submit, and manage customs documents faster while reducing manual effort and improving accuracy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EBF3FA] rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Secure Document Management
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-2">
              Upload, organize, and manage customs documents through a centralized platform. Keep every shipment, declaration, and supporting document securely accessible whenever you need it.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EBF3FA] rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Real-Time Filing Tracking
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-2">
              Monitor the status of every customs filing with real-time updates. Stay informed, reduce delays, and keep your import and export operations moving efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
