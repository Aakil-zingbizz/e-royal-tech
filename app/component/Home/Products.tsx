import React from "react";
import Link from "next/link";
import FadeInSection from "@/app/component/ui/FadeInSection";

const products = [
  {
    id: 1,
    title: "IMPEX",
    slug: "impex",
    description:
      "Simplify Shipping Bills, Bills of Entry, and ICEGATE customs filing with a secure, cloud-based platform.",
    link: "/products/impex",
    color: "#D39F4A",
    bgClass: "bg-gradient-to-br from-[#FFFBF4] to-[#FCEFDA]",
    watermark: "Impex",
  },
  {
    id: 2,
    title: "FREIGHT",
    slug: "freight",
    description:
      "Multi-modal freight forwarding ERP covering quotations, digital BL/AWB documentation, job costing, and milestone tracking.",
    link: "/products/freight",
    color: "#2175BE",
    bgClass: "bg-gradient-to-br from-[#F2F7FC] to-[#DDEAF6]",
    watermark: "Freight",
  },
  {
    id: 3,
    title: "ACCOUNTS",
    slug: "accounts",
    description:
      "Manage accounting, invoicing, financial reporting, and business transactions with an integrated platform.",
    link: "/products/accounts",
    color: "#4472C4",
    bgClass: "bg-gradient-to-br from-[#F4F6FC] to-[#E4E9F5]",
    watermark: "accounts",
  },
  {
    id: 4,
    title: "SCM",
    slug: "scm",
    description:
      "End-to-end supply chain platform orchestrating multi-location warehousing, automated order fulfillment, and live tracking.",
    link: "/products/scm",
    color: "#05B6E9",
    bgClass: "bg-gradient-to-br from-[#F0FAFF] to-[#DEEDF9]",
    watermark: "SCM",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection animation="fade-up" delay={0}>
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
        </FadeInSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => {
            const isLeftSide = index % 2 === 0;
            return (
              <FadeInSection 
                key={product.id} 
                animation={isLeftSide ? "slide-right" : "slide-left"} 
                delay={index * 150}
              >
                <div
                  className={`relative overflow-hidden rounded-[2rem] p-8 md:p-10 flex flex-col justify-between items-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-full ${product.bgClass} group`}
                >
                  {/* Full Card Clickable Link */}
                  <Link
                    href={product.link}
                    className="absolute inset-0 z-0"
                    aria-label={`Explore ${product.title}`}
                  />

                  {/* Watermark Background Text */}
                  <div
                    className="absolute right-0 bottom-[-10px] md:bottom-[-20px] text-[100px] md:text-[130px] font-black leading-none select-none pointer-events-none opacity-[0.15] tracking-tighter z-0"
                    style={{ color: product.color }}
                  >
                    {product.watermark}
                  </div>

                  <div className="relative z-10 w-full mb-8 pointer-events-none">
                    {/* Title Section */}
                    <div className="mb-6">
                      <span className="text-sm font-bold text-gray-800 block mb-1">
                        e-Royal
                      </span>
                      <h3
                        className="text-4xl md:text-[42px] font-extrabold-override font-manrope tracking-tight"
                        style={{ color: product.color }}
                      >
                        {product.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[15px] text-gray-700 leading-relaxed max-w-[95%] min-h-[80px]">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="relative z-20 flex flex-wrap items-center gap-6 mt-auto">
                    <Link
                      href={product.link}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-90"
                      style={{ backgroundColor: product.color }}
                    >
                      Explore {product.title} &rarr;
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium hover:opacity-80 transition-opacity"
                      style={{ color: product.color }}
                    >
                      Request Demo &rarr;
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
