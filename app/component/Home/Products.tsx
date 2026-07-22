import React from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "eROYAL SCM",
    logo: "/home/product-logo/scm.png",
    description:
      "An all-in-one NVOCC solution for cargo management, HBLs, customs compliance, and live tracking.",
    link: "#",
  },
  {
    id: 2,
    title: "eROYAL ICON",
    logo: "/home/product-logo/icon.png",
    description:
      "An all-in-one NVOCC solution for cargo management, HBLs, customs compliance, and live tracking.",
    link: "#",
  },
  {
    id: 3,
    title: "eROYAL FREIGHT",
    logo: "/home/product-logo/freight.png",
    description:
      "An all-in-one NVOCC solution for cargo management, HBLs, customs compliance, and live tracking.",
    link: "#",
  },
  {
    id: 4,
    title: "eROYAL NVOCC",
    logo: "/home/product-logo/nvocc.png",
    description:
      "An all-in-one NVOCC solution for cargo management, HBLs, customs compliance, and live tracking.",
    link: "#",
  },
  {
    id: 5,
    title: "eROYAL IMPEX",
    logo: "/home/product-logo/impex.png",
    description:
      "An all-in-one NVOCC solution for cargo management, HBLs, customs compliance, and live tracking.",
    link: "#",
  },
  {
    id: 6,
    title: "eROYAL IMPEX-SEZ",
    logo: "/home/product-logo/impex-sez.png",
    description:
      "An all-in-one NVOCC solution for cargo management, HBLs, customs compliance, and live tracking.",
    link: "#",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-[#333333] mb-4">
            Everything You Need to Manage Logistics
          </h2>
          <p className="text-lg text-slate-600">
            Discover a complete suite of intelligent solutions designed to
            simplify logistics, enhance efficiency, and support every stage of
            global trade.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#006CB8]/30 rounded-xl p-8 flex flex-col justify-between items-start transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                {/* Product Logo Placeholder */}
                <div className="mb-6 relative w-40 h-10">
                  <Image
                    src={product.logo}
                    alt={product.title}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#333333] mb-4">
                  {product.title}
                </h3>
                <p className="text-[15px] text-[#333333] leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={product.link}
                className="inline-flex items-center text-[#007cc0] font-semibold hover:text-[#005a9c] transition-colors"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1.5 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
