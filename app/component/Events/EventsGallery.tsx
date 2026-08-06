"use client";

import React, { useState } from "react";
import FadeInSection from "@/app/component/ui/FadeInSection";
import Image from "next/image";

const eventsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1632&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[600px]"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1712&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 min-h-[300px]"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1740&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 min-h-[300px]"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1523580494112-071d31199a06?q=80&w=1740&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 min-h-[300px]"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1740&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 min-h-[300px]"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1475721025592-567de9ec1004?q=80&w=1740&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 min-h-[300px]"
  }
];

const EventsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-min">
          {eventsData.map((event, index) => (
            <div key={event.id} className={event.className}>
              <FadeInSection animation="fade-up" delay={index * 100} className="h-full">
                <div 
                  className="group relative overflow-hidden rounded-3xl bg-gray-100 h-full w-full shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedImage(event.image)}
                >
                  {/* Image */}
                  <Image
                    src={event.image}
                    alt={`Event ${event.id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </FadeInSection>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Fullscreen Image */}
          <div 
            className="relative w-full max-w-6xl h-full max-h-[85vh] rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Fullscreen view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsGallery;
