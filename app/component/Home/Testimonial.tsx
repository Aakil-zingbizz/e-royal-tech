"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TestimonialItem } from "@/types/product";

interface TestimonialProps {
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      "I am extremely satisfied with using eRoyal Tech Product (eRoyal IMPEX) and very grateful that I chose the right software product for my business, product is the very innovative and latest technology, thanks to eRoyal Tech Systems.",
    name: "Saravanan",
    title: "Managing Director, Super Shipping Service, Chennai",
  },
  {
    quote:
      "The seamless integration and intuitive interface have completely transformed how we handle our logistics operations. Highly recommend eRoyal Tech.",
    name: "Priya Sharma",
    title: "Operations Head, Global Freight Solutions",
  },
  {
    quote:
      "Outstanding customer support and a product that truly understands the complexities of modern supply chains. A game changer for our team.",
    name: "Michael Chen",
    title: "CEO, TransGlobal Logistics",
  },
];

const Testimonial = ({ testimonials }: TestimonialProps) => {
  const items = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  // Guard against index out of range if items change
  const currentIndex = activeIndex < items.length ? activeIndex : 0;

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] leading-none font-serif text-slate-200/50 select-none z-[-1] pointer-events-none">
          &ldquo;
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Quote Icon */}
          <div className="relative w-12 h-12 mb-6">
            <Image src="/home/quote.svg" alt="Quote" fill className="object-contain" />
          </div>

          {/* Testimonial Content */}
          <div className="min-h-[200px] flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#333333] font-medium leading-snug mb-10 max-w-4xl mx-auto">
              "{items[currentIndex]?.quote}"
            </h3>

            <div className="flex flex-col items-center gap-1">
              <p className="text-[#333333] font-medium text-lg">
                {items[currentIndex]?.name}
              </p>
              <p className="text-sm text-[#666666]">
                {items[currentIndex]?.title}
              </p>
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
