import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center bg-[#0a192f]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')", // Placeholder port image
        }}
      >
        <div className="absolute inset-0 bg-[#020b1e]/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-gray-300 uppercase">
            Established 2003
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About eRoyal Tech Systems
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Powering Global Logistics with Intelligent Software Since 2003. With over two decades of experience, eRoyal Tech Systems has been at the forefront of digital transformation in the logistics sector, delivering robust, scalable, and secure enterprise solutions that drive global trade forward.
          </p>

          <div className="mt-12 flex items-center space-x-10">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white">20+</div>
              <div className="mt-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Years of Expertise
              </div>
            </div>
            
            <div className="h-16 w-px bg-gray-600"></div>

            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white">1k+</div>
              <div className="mt-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Global Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
