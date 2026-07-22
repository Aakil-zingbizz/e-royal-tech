import React from 'react';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#0a192f] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
    <path 
      fill="white" 
      fillRule="evenodd" 
      d="M16.707 9.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L11 13.586l4.293-4.293a1 1 0 011.414 0z" 
      clipRule="evenodd" 
    />
  </svg>
);

const AboutTechnology = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a192f] leading-tight">
              Building Technology for Every Stage of Logistics
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Our enterprise-grade software suite is designed to handle the intricate
              complexities of modern supply chains. We don't just build tools; we build
              operational backbones that empower logistics professionals to manage
              freight, customs, and transport with unprecedented precision. From small-scale agencies to multinational logistics giants, our platform adapts to the
              scale of your ambition.
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span className="text-sm font-semibold text-gray-800">Real-time Data Sync</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span className="text-sm font-semibold text-gray-800">Cloud-Native Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span className="text-sm font-semibold text-gray-800">Automated Compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span className="text-sm font-semibold text-gray-800">End-to-End Visibility</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              {/* Using a placeholder image of a dashboard/office setup */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics Software Dashboard on Monitor" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTechnology;
