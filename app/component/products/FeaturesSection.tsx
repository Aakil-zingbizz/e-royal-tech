import React from "react";
import Image from "next/image";
import { FeaturesData, FeatureItem } from "@/types/product";

interface FeaturesSectionProps {
  features?: FeaturesData;
}

const defaultFeatures: FeaturesData = {
  heading: "Everything You Need for Seamless Customs Filing",
  description:
    "Powerful tools designed to simplify customs documentation, improve visibility, and streamline import and export operations.",
  items: [
    {
      title: "ICEGATE Filing Automation",
      badge: "ICEGATE Filing Automation",
      description:
        "Simplify Shipping Bill and Bill of Entry filing with seamless ICEGATE integration. Create, submit, and manage customs documents faster while reducing manual effort and improving accuracy.",
      icon: "/products/icons/shield.svg",
    },
    {
      title: "Secure Document Management",
      description:
        "Upload, organize, and manage customs documents through a centralized platform. Keep every shipment, declaration, and supporting document securely accessible whenever you need it.",
      icon: "/products/icons/folder.svg",
    },
    {
      title: "Real-Time Filing Tracking",
      description:
        "Monitor the status of every customs filing with real-time updates. Stay informed, reduce delays, and keep your import and export operations moving efficiently.",
      icon: "/products/icons/activity.svg",
    },
  ],
};

const FeaturesSection = ({
  features = defaultFeatures,
}: FeaturesSectionProps) => {
  const heading = features?.heading || defaultFeatures.heading;
  const description = features?.description || defaultFeatures.description;
  const items =
    features?.items && features.items.length > 0
      ? features.items
      : defaultFeatures.items;

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col justify-center items-center">
          {/* {features?.badge && (
            <div className="inline-block mb-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#0066B3] border border-blue-100">
                {features.badge}
              </span>
            </div>
          )} */}
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
            {heading}
          </h2>
          <p className="text-black text-base w-3/4">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item: FeatureItem, index: number) => {
            const iconSrc =
              item.icon?.startsWith("/") || item.icon?.startsWith("http")
                ? item.icon
                : `/products/icons/${item.icon || "shield"}.svg`;

            return (
              <div
                key={index}
                className="bg-[#006CB8]/10 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="mb-6 flex items-center justify-center h-12 w-12">
                  <Image
                    src={iconSrc}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.badge && (
                    <span className="block mb-2 font-medium text-gray-900">
                      {item.badge}
                    </span>
                  )}
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
