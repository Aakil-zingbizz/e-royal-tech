import Link from "next/link";
import { CTAData } from "@/types/product";
import LottieAnimation from "@/app/component/ui/LottieAnimation";
import ctaPillAnimation from "@/LottieAnimations/cta-pill.json";

interface CTASectionProps {
  cta?: CTAData;
}

const defaultCTA: CTAData = {
  heading: "Ready to optimize your logistics operations?",
  description:
    "Join hundreds of global logistics providers who trust eRoyal Tech Systems for their digital core.",
  primaryCta: {
    text: "Get Started",
    href: "/contact",
  },
  secondaryCta: {
    text: "Contact Sales",
    href: "/contact",
  },
};

const CTASection = ({ cta = defaultCTA }: CTASectionProps) => {
  const heading = cta?.heading || defaultCTA.heading;
  const description = cta?.description || defaultCTA.description;
  const primaryCta = cta?.primaryCta ||
    defaultCTA.primaryCta || {
      text: "Get Started",
      href: "/contact",
    };
  const secondaryCta = cta?.secondaryCta ||
    defaultCTA.secondaryCta || {
      text: "Contact Sales",
      href: "/contact",
    };

  return (
    <section className="relative w-full py-16 md:py-24 flex items-center justify-center">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
          style={{ aspectRatio: "3456 / 520" }}
        >
          <LottieAnimation
            animationData={ctaPillAnimation}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[var(--theme-color)] rounded-3xl overflow-hidden h-[520px] flex items-center justify-center px-6 sm:px-10 lg:px-16">
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {heading}
            </h2>
            <p className="text-white text-lg md:text-xl mb-10 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#071324] text-white font-medium hover:bg-gray-900 transition-colors shadow-sm"
              >
                {primaryCta.text}
              </Link>
              <Link
                href={secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                {secondaryCta.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
