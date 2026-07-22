import Hero from "./component/Home/Hero";
import LogoCarousel from "./component/Home/LogoCarousel";
import IndustriesWeServe from "./component/Home/IndustriesWeServe";
import Testimonial from "./component/Home/Testimonial";
import Products from "./component/Home/Products";
import Contact from "./component/Home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LogoCarousel />
      <IndustriesWeServe />
      <Testimonial />
      <Products />
      <Contact />
    </main>
  );
}
