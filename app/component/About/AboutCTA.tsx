import React from 'react';

const AboutCTA = () => {
  return (
    <section className="w-full py-24 bg-[#056CB6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to optimize your logistics operations?
        </h2>
        
        <p className="text-lg text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of global logistics providers who trust eRoyal Tech Systems for their digital core.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#0a192f] hover:bg-[#112a4d] text-white font-semibold rounded-lg transition-colors duration-200">
            Get Started
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/40 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors duration-200">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutCTA;
