import React from "react";
import Image from "next/image";

const IndustriesWeServe = () => {
  const cards = [
    {
      title: "Freight Forwarding",
      description:
        "Streamline air, ocean, and multimodal freight with one intelligent platform—manage bookings, documentation, tracking, and billing across global operations with ease.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8c738759be?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Freight Forwarding",
      description:
        "Streamline air, ocean, and multimodal freight with one intelligent platform—manage bookings, documentation, tracking, and billing across global operations with ease.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8c738759be?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Freight Forwarding",
      description:
        "Streamline air, ocean, and multimodal freight with one intelligent platform—manage bookings, documentation, tracking, and billing across global operations with ease.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8c738759be?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Freight Forwarding",
      description:
        "Streamline air, ocean, and multimodal freight with one intelligent platform—manage bookings, documentation, tracking, and billing across global operations with ease.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8c738759be?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[#333333] mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Powering smarter supply chains and total visibility across
            high-demand global markets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F1F5F9] rounded-[2rem] p-3 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="w-full sm:w-[45%] h-64 sm:h-[280px] relative rounded-3xl overflow-hidden flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content Container */}
              <div className="w-full sm:w-[55%] flex flex-col justify-center items-center text-center py-6 px-4 sm:px-6 sm:pl-2">
                <h3 className="text-2xl font-medium text-[#333333] mb-4">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#333333]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
