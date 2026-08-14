import Image from "next/image";
import Link from "next/link";
import { Product, ProductBannerData } from "@/types/product";
import FadeInSection from "@/app/component/ui/FadeInSection";
import LottieAnimation from "@/app/component/ui/LottieAnimation";
import heroPillAnimation from "@/LottieAnimations/hero-pill.json";
import { replaceLottieColor } from "@/lib/lottieColorReplace";

interface ProductBannerProps {
  banner?: ProductBannerData;
  product?: Product;
}

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

  const highlightColor = "var(--theme-color)";

  // Recolour the pill animation to match this product's theme
  const IMPEX_AMBER = "#FFAA22";
  const productThemeColor = product?.themeColor || "#D39F4A";
  const themedPillAnimation = replaceLottieColor(
    heroPillAnimation,
    IMPEX_AMBER,
    productThemeColor,
  );

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
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-white via-blue-50/30 to-blue-50/60 flex flex-col items-center">
      {/* Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center py-10 md:py-14">
        <FadeInSection animation="fade-up" delay={0} duration={800}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium-override tracking-tight mb-3 md:mb-4 font-manrope">
            <span className="text-black">{titlePrefix}</span>
            <span style={{ color: highlightColor }}>{titleHighlight}</span>
          </h1>
        </FadeInSection>

        <FadeInSection animation="fade-up" delay={150} duration={800}>
          <h2 className="text-lg md:text-2xl font-medium text-gray-900 mb-4 md:mb-6">
            {tagline}
          </h2>
        </FadeInSection>

        <FadeInSection animation="fade-up" delay={300} duration={800}>
          <p className="text-gray-600 text-sm md:text-lg max-w-3xl leading-relaxed mb-6 md:mb-8">
            {description}
          </p>
        </FadeInSection>

        {highlights && highlights.length > 0 && (
          <FadeInSection
            animation="fade-up"
            delay={450}
            duration={800}
            className="w-full max-w-3xl flex items-center justify-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8 w-full">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2.5 md:p-3.5 rounded-2xl bg-gradient-to-br from-[#E3F1FE] via-[#ECF5FE] to-[#F9FCFF] shadow-[0_0px_4px_0px_rgba(0,0,0,0.10)] hover:shadow-md transition-shadow text-center flex-1 min-w-[180px] md:min-w-[200px]"
                >
                  <span className="text-[11px] md:text-sm font-semibold text-[#1E293B] leading-snug">
                    {(() => {
                      const isCenter =
                        index === Math.floor(highlights.length / 2);
                      if (isCenter) {
                        const words = highlight.split(" ");
                        if (words.length > 2) {
                          const mid = Math.ceil(words.length / 2);
                          return (
                            <>
                              {words.slice(0, mid).join(" ")}
                              <br />
                              {words.slice(mid).join(" ")}
                            </>
                          );
                        }
                      }
                      return highlight;
                    })()}
                  </span>
                </div>
              ))}
            </div>
          </FadeInSection>
        )}

        <FadeInSection animation="fade-up" delay={600} duration={800}>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-[var(--theme-color)] text-white font-medium hover:bg-[var(--theme-color)] transition-all shadow-md hover:shadow-lg text-sm md:text-base"
            >
              {primaryCta.text}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-white text-[var(--theme-color)] font-medium border border-[var(--theme-color)] hover:bg-[rgba(var(--theme-color-rgb),0.08)] transition-all shadow-sm text-sm md:text-base"
            >
              {secondaryCta.text}
            </Link>
          </div>
        </FadeInSection>
      </div>

      {/* Full-width pill animation — covers the full banner regardless of height */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
      >
        <LottieAnimation
          animationData={themedPillAnimation}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        />
      </div>

      {/* Dashboard Image Section (At original large size) */}
      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center mb-16 md:mb-24">
        <FadeInSection
          animation="scale-up"
          delay={750}
          duration={1000}
          className="w-full h-full relative"
        >
          {/* Blurred Sphere Glow with #016CB8 */}
          <div
            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[1000px] md:h-[650px] rounded-full -z-20 pointer-events-none opacity-50"
            style={{
              backgroundColor: "var(--theme-color)",
              filter: "blur(70px)",
            }}
          />

          <Image
            src={mockupImage}
            alt={`${titlePrefix} ${titleHighlight} Mockup`}
            fill
            className="object-contain object-top -top-20 z-10"
            priority
          />
        </FadeInSection>
      </div>
    </section>
  );
};

export default ProductBanner;
