import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
}

const NewsCard = ({ title, slug, date, image, excerpt }: NewsCardProps) => {
  return (
    <Link href={`/news/${slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-sm font-semibold text-[#006CB8] mb-3">
            {date}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#006CB8] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
            {excerpt}
          </p>
          
          <div className="mt-auto flex items-center text-sm font-bold text-[#006CB8] group-hover:text-[#005A9C] transition-colors">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
