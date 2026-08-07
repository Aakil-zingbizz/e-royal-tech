"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPost {
  title: string;
  slug: string;
  date: string;
  image: string;
  category: string;
}

export default function FeaturedCarousel({ posts }: { posts: FeaturedPost[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (posts.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [posts.length]);

  if (!posts || posts.length === 0) return null;

  return (
    <div className="relative w-full h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-lg group">
      {posts.map((post, index) => (
        <Link
          href={`/blogs/${post.slug}`}
          key={post.slug}
          className={`absolute inset-0 transition-opacity duration-1000 block ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full text-white">
            {post.category && (
              <span className="inline-flex items-center bg-white text-[#006CB8] text-xs font-bold px-3 py-1.5 rounded-full mb-5 shadow-sm">
                {post.category}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 hover:opacity-80 transition-opacity max-w-3xl">
              {post.title}
            </h2>
            <div className="flex items-center text-sm text-gray-200 font-medium">
              <span>{post.date}</span>
            </div>
          </div>
        </Link>
      ))}

      {/* Navigation Dots */}
      {posts.length > 1 && (
        <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
