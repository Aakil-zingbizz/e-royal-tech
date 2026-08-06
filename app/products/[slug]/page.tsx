import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs } from "@/lib/products";
import ProductBanner from "@/app/component/products/ProductBanner";
import FeaturesSection from "@/app/component/products/FeaturesSection";
import SEZSection from "@/app/component/products/SEZSection";
import CounterSection from "@/app/component/products/CounterSection";
import TargetAudienceSection from "@/app/component/products/TargetAudienceSection";
import LogoCarousel from "@/app/component/Home/LogoCarousel";
import Testimonial from "@/app/component/Home/Testimonial";
import CTASection from "@/app/component/products/CTASection";
import AIFeatureSection from "@/app/component/products/AIFeatureSection";
import FadeInSection from "@/app/component/ui/FadeInSection";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | eRoyal Tech Systems",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - ${product.tagline} | eRoyal Tech`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - ${product.tagline}`,
      description: product.shortDescription,
      images: [
        {
          url: product.mockupImage,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : "0, 108, 184";
  };
  const themeColor = product.themeColor || "#006CB8";
  const themeColorRgb = hexToRgb(themeColor);

  return (
    <main
      className="flex min-h-screen flex-col bg-white overflow-hidden"
      style={
        {
          "--theme-color": themeColor,
          "--theme-color-rgb": themeColorRgb,
        } as React.CSSProperties
      }
    >
      <ProductBanner banner={product.banner} product={product} />

      <FeaturesSection features={product.features} />

      {product.sez && <SEZSection sez={product.sez} />}

      <FadeInSection animation="scale-up" duration={1000}>
        <CounterSection counter={product.counter} />
      </FadeInSection>

      <FadeInSection animation="blur-in" duration={1200}>
        <TargetAudienceSection targetAudience={product.targetAudience} />
      </FadeInSection>

      {(slug === "impex" || slug === "freight") && (
        <FadeInSection animation="scale-up" duration={1200}>
          <AIFeatureSection />
        </FadeInSection>
      )}

      <FadeInSection animation="fade-in" duration={1000}>
        <LogoCarousel {...(product.logoCarousel || {})} />
      </FadeInSection>

      <FadeInSection animation="slide-right" duration={1200}>
        <Testimonial testimonials={product.testimonials} />
      </FadeInSection>

      <FadeInSection animation="blur-in" duration={1500}>
        <CTASection cta={product.cta} />
      </FadeInSection>
    </main>
  );
}
