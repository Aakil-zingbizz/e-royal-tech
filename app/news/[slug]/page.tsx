import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/app/component/News/NewsCard";
import FadeInSection from "@/app/component/ui/FadeInSection";

// Static params for SSG
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "data", "news.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const news = JSON.parse(fileContents);

  return news.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "data", "news.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const news = JSON.parse(fileContents);

  const post = news.find((p: any) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get 3 random posts excluding the current one
  const otherPosts = news.filter((p: any) => p.slug !== slug);
  const randomPosts = [...otherPosts].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Blog Content */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Article Header */}
          <FadeInSection animation="fade-up" delay={0}>
            <div className="mb-10 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#006CB8] text-sm font-semibold mb-6">
                {post.date}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                {post.title}
              </h1>
              
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </FadeInSection>

          {/* Article Body */}
          <FadeInSection animation="fade-up" delay={150}>
            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
              {post.content.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </FadeInSection>

          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
            <Link href="/news" className="text-[#006CB8] font-semibold hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to News
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animation="fade-up" delay={0}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              More Insights
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {randomPosts.map((item: any, index: number) => (
              <FadeInSection key={item.slug} animation="fade-up" delay={index * 100}>
                <NewsCard
                  title={item.title}
                  slug={item.slug}
                  date={item.date}
                  image={item.image}
                  excerpt={item.content[0]}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
