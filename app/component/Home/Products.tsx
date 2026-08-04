import React from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "eROYAL SCM",
    slug: "scm",
    logo: "/home/product-logo/scm.svg",
    description:
      "End-to-end supply chain platform orchestrating multi-location warehousing, automated order fulfillment, and live tracking.",
    link: "/products/scm",
  },
  {
    id: 2,
    title: "eROYAL ICON",
    slug: "icon",
    logo: "/home/product-logo/icon.svg",
    description:
      "Console manifest filing software engineered for air & ocean consolidators with direct customs EDI integration.",
    link: "/products/icon",
  },
  {
    id: 3,
    title: "eROYAL FREIGHT",
    slug: "freight",
    logo: "/home/product-logo/freight.svg",
    description:
      "Multi-modal freight forwarding ERP covering quotations, digital BL/AWB documentation, job costing, and milestone tracking.",
    link: "/products/freight",
  },
  {
    id: 4,
    title: "eROYAL NVOCC",
    slug: "nvocc",
    logo: "/home/product-logo/nvocc.svg",
    description:
      "Complete NVOCC solution for container inventory tracking, liner agency operations, detention billing, and slot management.",
    link: "/products/nvocc",
  },
  {
    id: 5,
    title: "eROYAL IMPEX",
    slug: "impex",
    logo: "/home/product-logo/impex.svg",
    description:
      "Simplify Shipping Bills, Bills of Entry, and ICEGATE customs filing with a secure, cloud-based platform.",
    link: "/products/impex",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-white" id="solutions">
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
              className="bg-[#006CB8]/10 hover:bg-[#006CB8]/15 border border-[#006CB8]/20 rounded-2xl p-8 flex flex-col justify-between items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
            >
              <div>
                {/* Product Logo */}
                <div className="mb-6 relative w-44 h-12">
                  <Image
                    src={product.logo}
                    alt={product.title}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#333333] mb-3 group-hover:text-[#006CB8] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={product.link}
                className="inline-flex items-center text-[#006CB8] font-semibold hover:text-[#005a9c] transition-colors"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1.5 mt-0.5 transition-transform group-hover:translate-x-1"
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
