import Link from "next/link";
import { CTAData } from "@/types/product";

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
  const primaryCta = cta?.primaryCta || defaultCTA.primaryCta || {
    text: "Get Started",
    href: "/contact",
  };
  const secondaryCta = cta?.secondaryCta || defaultCTA.secondaryCta || {
    text: "Contact Sales",
    href: "/contact",
  };

  return (
    <section className="w-full py-24 bg-[var(--theme-color)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {heading}
        </h2>
        <p className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
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
    </section>
  );
};

export default CTASection;
