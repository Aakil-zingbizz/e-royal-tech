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

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ProductBanner banner={product.banner} product={product} />
      <FeaturesSection features={product.features} />
      {product.sez && <SEZSection sez={product.sez} />}
      <CounterSection counter={product.counter} />
      <TargetAudienceSection targetAudience={product.targetAudience} />
      {/* Combined Counter & Target Audience sections with ONE single shared blurred sphere */}
      {/* <div className="relative w-full overflow-hidden">
        <div
          className="absolute -left-28 md:-left-40 top-20 md:top-28 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full pointer-events-none opacity-20 z-0"
          style={{
            backgroundColor: "#016CB8",
            filter: "blur(75px)",
          }}
        />
        <div className="relative z-10">
        </div>
      </div> */}
      <LogoCarousel {...(product.logoCarousel || {})} />
      <Testimonial testimonials={product.testimonials} />
      <CTASection cta={product.cta} />
    </main>
  );
}
