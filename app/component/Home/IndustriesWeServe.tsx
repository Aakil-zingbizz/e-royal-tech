import React from "react";
import Image from "next/image";
import FadeInSection from "@/app/component/ui/FadeInSection";

const IndustriesWeServe = () => {
  const cards = [
    {
      title: "Customs Clearance",
      description:
        "Simplify ICEGATE filing, Shipping Bills, Bills of Entry, SEZ operations, and customs documentation with one intelligent platform built for customs brokers, importers, exporters, and trade professionals.",
      image: "/home/who-we-serve/customs-clearance.webp",
    },
    {
      title: "Freight Forwarding",
      description:
        "Manage air, ocean, and multimodal freight operations from quotation to delivery with integrated shipment tracking, documentation, billing, and operational workflows.",
      image: "/home/who-we-serve/freight-forwarding.webp",
    },
    {
      title: "Business Accounting",
      description:
        "Streamline accounting, invoicing, financial reporting, GST management, and business transactions with accounting software purpose-built for logistics and international trade.",
      image: "/home/who-we-serve/business-accounting.webp",
    },
    {
      title: "Supply Chain Management",
      description:
        "Improve supply chain visibility with streamlined SCMTR filing, stakeholder collaboration, shipment coordination, and compliance through one connected logistics platform.",
      image: "/home/who-we-serve/supply-chain-management.webp",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection animation="fade-up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#333333] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-[#333333] max-w-3xl mx-auto">
              Powering smarter supply chains and total visibility across
              high-demand global markets.
            </p>
          </div>
        </FadeInSection>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <FadeInSection key={index} animation="fade-up" delay={index * 150}>
              <div className="bg-[#F1F5F9] rounded-[2rem] p-3 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
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
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
