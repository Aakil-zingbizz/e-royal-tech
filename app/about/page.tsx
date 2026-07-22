import React from 'react';
import AboutHero from '../component/About/AboutHero';
import AboutTechnology from '../component/About/AboutTechnology';
import AboutIndustries from '../component/About/AboutIndustries';
import AboutVisionMission from '../component/About/AboutVisionMission';
import AboutTeam from '../component/About/AboutTeam';
import AboutCTA from '../component/About/AboutCTA';

export const metadata = {
  title: 'About eRoyal Tech Systems',
  description: 'Learn about eRoyal Tech Systems, powering global logistics with intelligent software since 2003.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AboutHero />
      <AboutTechnology />
      <AboutIndustries />
      <AboutVisionMission />
      <AboutTeam />
      <AboutCTA />
      {/* Other sections of the about page can go here */}
    </main>
  );
}
