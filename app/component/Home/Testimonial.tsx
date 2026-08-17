"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TestimonialItem } from "@/types/product";
import FadeInSection from "@/app/component/ui/FadeInSection";

interface TestimonialProps {
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      "We had a very good experience with EROYAL TECH and their product EROYAL IMPEX. The customer support was very responsive and helpful whenever we had queries. The overall process was simple and easy to use, which made things very convenient. Wishing the SOFT GLOBAL team continued success! 👍",
    name: "SH LOGISTICS PVT LTD",
    title: "",
  },
  {
    quote:
      "We wanted to share our appreciation for the e Royal application, which has been a real game changer in our daily customs operations. Filing BE and SB through the platform is smooth and straightforward, saving us both time and effort. The seamless electronic exchanges and always up‑to‑date HSN and notification masters make compliance much easier.",
    name: "SUDARSHAN CARGO PVT LTD",
    title: "",
  },
  {
    quote:
      "We have recently started using AI to create our operational checklists, and it has been extremely helpful for our team. Earlier, preparing the checklist used to take a considerable amount of time, but with the help of AI, the process has become much faster and more efficient.",
    name: "Shree Parvathy Shipping",
    title: "",
  },
  {
    quote:
      "We are using the Eroyal software. The support team is available anytime for filing related to ICEGATE and for resolving queries immediately. DGFT notification updates are provided regularly. The software is user-friendly, and ICEGATE filing for BE/SB/IRN is very fast.",
    name: "DIPANKAR ROY",
    title: "Director, S & S Logistics",
  },
  {
    quote:
      "We hereby wish to give feedback that the online customs filing software from M/S ERoyaltech systems is excellent. Their back end support and 24x7 customer service is also really wonderful. We are really pleased to use their service.",
    name: "BALAJI GOVIND",
    title: "Director, Venjoh Logistics Pvt Ltd",
  },
  {
    quote:
      "We had good experience from E-Royal Impex team (Mr Bala Guru) and also we are receiving good support from back end team every time.",
    name: "PRADEEP CARGO SERVICES PVT LTD",
    title: "",
  },
  {
    quote:
      "We are very glad to appreciate your service in Customs documentation in our SEZ unit. Your application was very user friendly, learning of application process by lower level team member also very easy. The platform running as well as updating was very quick and speed.",
    name: "ATC Tires Private Limited",
    title: "",
  },
  {
    quote:
      "We would like to express our sincere appreciation for the outstanding work done by the E-Royal team. Your dedication to quality, technical expertise, and ability to meet strict deadlines have been truly impressive.",
    name: "MOVEMAX SYSTEM LOGISTICS PRIVATE LIMITED",
    title: "",
  },
  {
    quote:
      "We sincerely appreciate the excellent service and support provided by your team. Royal Tech software has been user-friendly, reliable, and highly efficient, greatly supporting our operations. We especially value your team’s dedication and quick responsiveness in resolving issues at any time.",
    name: "Jupiter Sea & Air Services Pvt Ltd.",
    title: "",
  },
  {
    quote:
      "We would like to express our sincere appreciation for the excellent support and service provided by your team in relation to the customs filing processes. Your software has proven to be highly efficient, reliable, and user-friendly, enabling smooth handling of our customs documentation.",
    name: "SEAGULL C & F AGENCIES PVT LTD",
    title: "",
  },
];

const Testimonial = ({ testimonials }: TestimonialProps) => {
  const items = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  // Guard against index out of range if items change
  const currentIndex = activeIndex < items.length ? activeIndex : 0;

  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#F1F5F9] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Quote Watermark Background */}
        <FadeInSection animation="fade-in" duration={1500}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] leading-none font-serif text-slate-200/50 select-none z-[-1] pointer-events-none">
            &ldquo;
          </div>
        </FadeInSection>

        <div className="flex flex-col items-center text-center">
          {/* Quote Icon */}
          <FadeInSection animation="fade-up" delay={0}>
            <div className="relative w-12 h-12 mb-6">
              <Image src="/home/quote.svg" alt="Quote" fill className="object-contain" />
            </div>
          </FadeInSection>

          {/* Testimonial Content Track */}
          <div className="min-h-[250px] w-full max-w-4xl mx-auto overflow-hidden relative flex flex-col justify-center">
            <div
              className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div key={index} className="w-full shrink-0 flex flex-col justify-center px-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#333333] font-medium-override font-manrope leading-snug mb-10 mx-auto">
                    "{item.quote}"
                  </h3>

                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[#333333] font-medium text-lg">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#666666]">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          {items.length > 1 && (
            <div className="flex items-center gap-6 mt-12">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-[#333333] hover:text-[#006CB8] focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentIndex === index
                        ? "bg-[#006CB8]"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-[#333333] hover:text-[#006CB8] focus:outline-none"
                aria-label="Next Testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
