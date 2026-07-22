import React from "react";

const team = [
  {
    role: "Chief Executive Officer",
    department: "Leadership",
    image: "/About/Team/ceo.png",
  },
  {
    role: "Director",
    department: "Operations",
    image: "/About/Team/director.png",
  },
  {
    role: "Business Development Manager",
    department: "Sales & Growth",
    image: "/About/Team/Business Development Manager.png",
  },
  {
    role: "Project Manager",
    department: "Client Success",
    image: "/About/Team/Project Manager.png",
  },
];

const AboutTeam = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col group">
              {/* Image Container */}
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl mb-5 bg-gray-100">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Details */}
              <div className="px-1">
                <h3 className="text-sm sm:text-base font-bold text-[#0a192f]">
                  {member.role}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {member.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
