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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-20">
            Intelligent Software for <br className="hidden sm:block" />
            <span className="text-[#0066B3]">Global Logistics &amp; Trade</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Purpose-built platforms designed to streamline customs filing,
            container fleet control, supply chain logistics, and freight
            operations with unmatched precision.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-20">
          {products.map((product) => {
            const productStyles: Record<
              string,
              { color: string; bgClass: string; watermark: string }
            > = {
              impex: {
                color: "#D39F4A",
                bgClass: "bg-gradient-to-br from-[#FFFBF4] to-[#FCEFDA]",
                watermark: "Impex",
              },
              freight: {
                color: "#2175BE",
                bgClass: "bg-gradient-to-br from-[#F2F7FC] to-[#DDEAF6]",
                watermark: "Freight",
              },
              accounts: {
                color: "#4472C4",
                bgClass: "bg-gradient-to-br from-[#F4F6FC] to-[#E4E9F5]",
                watermark: "accounts",
              },
              scm: {
                color: "#05B6E9",
                bgClass: "bg-gradient-to-br from-[#F0FAFF] to-[#DEEDF9]",
                watermark: "SCM",
              },
            };
            const style = productStyles[product.slug] || productStyles["impex"];
            const titleText =
              product.titleHighlight || product.name.replace("eRoyal ", "");

            return (
              <div
                key={product.id}
                className={`relative overflow-hidden rounded-[2rem] p-8 md:p-10 flex flex-col justify-between items-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${style.bgClass} group`}
              >
                {/* Full Card Clickable Link */}
                <Link
                  href={`/products/${product.slug}`}
                  className="absolute inset-0 z-0"
                  aria-label={`View ${titleText}`}
                />

                {/* Watermark Background Text */}
                <div
                  className="absolute right-0 bottom-[-10px] md:bottom-[-20px] text-[100px] md:text-[130px] font-black leading-none select-none pointer-events-none opacity-[0.1] tracking-tighter z-0"
                  style={{ color: style.color }}
                >
                  {style.watermark}
                </div>

                <div className="relative z-10 w-full mb-8 pointer-events-none">
                  {/* Title Section */}
                  <div className="mb-6">
                    <span className="text-sm font-bold text-gray-800 block mb-1">
                      {product.titlePrefix || "e-Royal"}
                    </span>
                    <h3
                      className="text-4xl md:text-[42px] font-extrabold-override font-manrope tracking-tight"
                      style={{ color: style.color }}
                    >
                      {titleText}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[15px] text-gray-700 leading-relaxed max-w-[95%] min-h-[80px]">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="relative z-20 flex flex-wrap items-center gap-6 mt-auto">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: style.color }}
                  >
                    Explore {titleText} &rarr;
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-bold hover:opacity-80 transition-opacity"
                    style={{ color: style.color }}
                  >
                    Request Demo &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#001233] text-white rounded-3xl p-8 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Need a custom integration or multi-product deployment?
          </h3>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our logistics technology consultants are ready to tailor an
            enterprise solution tailored to your operational workflows.
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
