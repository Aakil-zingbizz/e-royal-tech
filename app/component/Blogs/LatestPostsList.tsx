import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LatestPost {
  title: string;
  slug: string;
  image: string;
  date: string;
  author?: string;
  authorImage?: string;
}

export default function LatestPostsList({ posts }: { posts: LatestPost[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
        Latest post
      </h2>
      <div className="flex flex-col space-y-6">
        {posts.map((post) => (
          <Link
            href={`/blogs/${post.slug}`}
            key={post.slug}
            className="group flex items-start space-x-4"
          >
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-gray-100">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="96px"
                />
              )}
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="md:text-2xl text-base font-bold text-gray-900 leading-snug group-hover:text-[#006CB8] transition-colors line-clamp-2 mb-2">
                {post.title}
              </h3>
              <div className="flex items-center text-xs text-gray-500 font-medium mt-auto">
                <span>{post.date}</span>
                {post.author && (
                  <>
                    <span className="mx-2">•</span>
                    <div className="flex items-center space-x-1.5">
                      {post.authorImage && (
                        <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="object-cover"
                            sizes="16px"
                          />
                        </div>
                      )}
                      <span>{post.author}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
