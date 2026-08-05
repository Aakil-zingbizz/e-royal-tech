import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Enterprise Logistics Software Suite | eRoyal Tech Systems",
  description:
    "Explore our complete suite of software solutions for customs filing, freight forwarding, trade accounting, and supply chain logistics.",
};

export default function ProductsCatalogPage() {
  const products = getAllProducts();

  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100/80 text-[#0066B3] border border-blue-200">
              Our Product Suite
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Intelligent Software for <br className="hidden sm:block" />
            <span className="text-[#0066B3]">Global Logistics &amp; Trade</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Purpose-built platforms designed to streamline customs filing, container fleet control, supply chain logistics, and freight operations with unmatched precision.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Logo and Tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="relative w-44 h-12">
                    <Image
                      src={product.logo}
                      alt={product.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                    {product.slug.toUpperCase()}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#0066B3] transition-colors">
                  {product.name}
                </h2>
                <p className="text-sm font-semibold text-[#0066B3] mb-4">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {product.shortDescription}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2.5 mb-8">
                  {product.features.items.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg
                        className="w-5 h-5 text-[#0066B3] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span>
                        <strong className="font-medium text-gray-900">{feature.title}:</strong>{" "}
                        {feature.description.slice(0, 80)}...
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066B3] text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm group-hover:shadow-md"
                >
                  Explore {product.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-gray-600 hover:text-[#0066B3] transition-colors"
                >
                  Request Demo &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#001233] text-white rounded-3xl p-8 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Need a custom integration or multi-product deployment?
          </h3>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our logistics technology consultants are ready to tailor an enterprise solution tailored to your operational workflows.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#006CB8] text-white font-medium hover:bg-blue-600 transition-all shadow-md"
          >
            Speak with an Enterprise Advisor
          </Link>
        </div>
      </div>
    </main>
  );
}
