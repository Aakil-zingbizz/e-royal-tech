import Image from "next/image";
import Link from "next/link";
import { Product, ProductBannerData } from "@/types/product";

interface ProductBannerProps {
  banner?: ProductBannerData;
  product?: Product;
}

const productColors: Record<string, string> = {
  scm: "#006CB8", // Blue
  freight: "#0A2540", // Dark Blue
  nvocc: "#800000", // Maroon Red
  impex: "#FFB800", // Yellow
  icon: "#FF6B00", // Orange
};

const ProductBanner = ({ banner, product }: ProductBannerProps) => {
  const titlePrefix = banner?.titlePrefix || product?.titlePrefix || "eRoyal";
  const titleHighlight =
    banner?.titleHighlight || product?.titleHighlight || "IMPEX";
  const tagline =
    banner?.tagline ||
    product?.tagline ||
    "Smart Customs Filing for Faster Global Trade";
  const description =
    banner?.description ||
    product?.shortDescription ||
    product?.banner?.description ||
    "Simplify Shipping Bills, Bills of Entry, and ICEGATE filing with a secure, cloud-based customs management platform built for customs brokers, importers, exporters, and logistics professionals.";

  const slug = (product?.slug || titleHighlight || "").toLowerCase();
  const highlightColor =
    banner?.highlightColor ||
    product?.banner?.highlightColor ||
    productColors[slug] ||
    productColors[titleHighlight.toLowerCase()] ||
    "#FFB800";

  const highlights = banner?.highlights ||
    product?.banner?.highlights || [
      "24/7 Expert Technical Support",
      "Regular Compliance & Software Updates",
      "Secure Cloud-Based Platform",
    ];

  const primaryCta = banner?.primaryCta ||
    product?.banner?.primaryCta || {
      text: "Request a Demo",
      href: "/contact",
    };

  const secondaryCta = banner?.secondaryCta ||
    product?.banner?.secondaryCta || {
      text: "Explore Our Solutions",
      href: "/products",
    };

  const mockupBadge = banner?.mockupBadge ||
    product?.banner?.mockupBadge || {
      title: `${titleHighlight}`,
      subtitle: `${tagline}`,
    };

  const mockupImage =
    banner?.mockupImage ||
    product?.banner?.mockupImage ||
    product?.mockupImage ||
    "/e-icon-mockup.png";
  const productLogo = product?.logo;

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-r from-white via-blue-50/30 to-blue-50/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              <span className="text-black">{titlePrefix}</span>{" "}
              <span style={{ color: highlightColor }}>{titleHighlight}</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mt-2">
              {tagline}
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed mt-4">
              {description}
            </p>

            {highlights && highlights.length > 0 && (
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 max-w-2xl w-full">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-3 md:p-3.5 rounded-2xl bg-gradient-to-br from-[#E3F1FE] via-[#ECF5FE] to-[#F9FCFF] shadow-[0_0px_4px_0px_rgba(0,0,0,0.10)] hover:shadow-md transition-shadow text-center"
                  >
                    <span className="text-xs md:text-sm font-semibold text-[#1E293B] leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0066B3] text-white font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                {primaryCta.text}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#0066B3] font-medium border border-[#0066B3] hover:bg-blue-50 transition-all shadow-sm"
              >
                {secondaryCta.text}
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-8 lg:pt-0">
            {mockupBadge && (
              <div className="mb-4 text-center">
                <h3
                  className="text-3xl md:text-4xl font-bold uppercase tracking-wide"
                  style={{
                    color:
                      highlightColor === "#FFB800" ? "#0066B3" : highlightColor,
                  }}
                >
                  {mockupBadge.title}
                </h3>
                <p className="text-gray-600 font-medium text-lg mt-1">
                  {mockupBadge.subtitle}
                </p>
              </div>
            )}

            <div className="relative w-full max-w-162.5 aspect-4/3 flex items-center justify-center">
              {/* Blurred Sphere Glow with #016CB8 */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full -z-10 pointer-events-none opacity-50"
                style={{
                  backgroundColor: "#016CB8",
                  filter: "blur(70px)",
                }}
              />
              <Image
                src={mockupImage}
                alt={`${titlePrefix} ${titleHighlight} Mockup`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
