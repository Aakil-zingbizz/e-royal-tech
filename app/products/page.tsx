import ProductBanner from '../component/products/ProductBanner';
import FeaturesSection from '../component/products/FeaturesSection';
import CounterSection from '../component/products/CounterSection';
import TargetAudienceSection from '../component/products/TargetAudienceSection';
import LogoCarousel from '../component/Home/LogoCarousel';
import Testimonial from '../component/Home/Testimonial';
import CTASection from '../component/products/CTASection';

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ProductBanner />
      <FeaturesSection />
      <CounterSection />
      <TargetAudienceSection />
      <LogoCarousel />
      <Testimonial />
      <CTASection />
    </main>
  );
}
