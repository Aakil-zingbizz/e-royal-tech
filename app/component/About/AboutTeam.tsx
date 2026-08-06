import React from "react";
import FadeInSection from "@/app/component/ui/FadeInSection";

const team = [
  {
    name: "K. Subramanian",
    studies: "Master of Computer Applications",
    role: "CEO",
    image: "/About/Team/ceo.png",
  },
  {
    name: "S. Chitra",
    studies: "Diploma in Computer Applications",
    role: "Director",
    image: "/About/Team/director.png",
  },
  {
    name: "Pravin Singh",
    studies: "MBA",
    role: "Business Development Manager",
    image: "/About/Team/Business Development Manager.png",
  },
  {
    name: "G. Sathishkumar",
    studies: "Master of Computer Applications",
    role: "Project Manager",
    image: "/About/Team/Project Manager.png",
  },
];

const AboutTeam = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection animation="fade-up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a192f] mb-6">
              Driven by Experience. Focused on Innovation.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team brings together decades of logistics domain expertise and
              cutting-edge software engineering to solve the industry's toughest
              challenges.
            </p>
          </div>
        </FadeInSection>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <FadeInSection key={index} animation="fade-up" delay={index * 150}>
              <div className="flex flex-col group h-full">
                {/* Image Container */}
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl mb-5 bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out"
                  />
                </div>

                {/* Details */}
                <div className="px-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-[#0a192f]">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 -mt-0.5">
                    {member.studies}
                  </p>
                  <p className="text-sm font-semibold text-[#006CB8] mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
