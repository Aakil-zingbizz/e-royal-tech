import React from 'react';
import FadeInSection from "@/app/component/ui/FadeInSection";

const EyeIcon = () => (
  <svg className="w-7 h-7 text-[#0a192f]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
  </svg>
);

const RocketIcon = () => (
  <svg className="w-7 h-7 text-[#0a192f]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.13 2.13l-1.07.72c-.17.11-2.92 2.05-4.22 4.74l-.9 1.86a9.42 9.42 0 00-.73 2.29l-2.44.82a1 1 0 00-.6.85 1 1 0 00.35.88l3.18 2.65-.96.96a1 1 0 000 1.41l1.41 1.41a1 1 0 001.41 0l.96-.96 2.65 3.18a1 1 0 00.77.36h.11a1 1 0 00.85-.6l.82-2.44c.75-.15 1.52-.39 2.29-.73l1.86-.9c2.69-1.3 4.63-4.05 4.74-4.22l.72-1.07V2.13h-10.22zm4.33 6.91a2 2 0 112.83-2.83 2 2 0 01-2.83 2.83z" />
  </svg>
);

const AboutVisionMission = () => {
  return (
    <section className="w-full py-20 bg-[#F1F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <FadeInSection animation="fade-up" delay={0}>
            <div className="bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 p-10 lg:p-12 h-full">
              <div className="mb-6">
                <EyeIcon />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global benchmark for logistics intelligence, transforming complex trade data into actionable insights that drive sustainable growth for the world's supply chains.
              </p>
            </div>
          </FadeInSection>

          {/* Mission Card */}
          <FadeInSection animation="fade-up" delay={150}>
            <div className="bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 p-10 lg:p-12 h-full">
              <div className="mb-6">
                <RocketIcon />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower logistics businesses with innovative, secure, and user-centric software solutions that simplify complex processes and enhance operational excellence.
              </p>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
