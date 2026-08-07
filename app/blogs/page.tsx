import React from "react";
import Link from "next/link";
import BlogsCard from "@/app/component/Blogs/BlogsCard";
import FeaturedCarousel from "@/app/component/Blogs/FeaturedCarousel";
import LatestPostsList from "@/app/component/Blogs/LatestPostsList";
import FadeInSection from "@/app/component/ui/FadeInSection";
import { client } from "@/lib/sanity.client";

export const metadata = {
  title: "Blogs & Insights | eRoyal Tech Systems",
  description:
    "Stay updated with the latest trends in logistics, customs clearance, and supply chain technology.",
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params?.category;

  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "date": coalesce(publishedAt, _createdAt),
    "image": mainImage.asset->url,
    "excerpt": pt::text(body),
    isFeatured,
    "category": category->title,
    "categorySlug": category->slug.current,
    "author": author->name,
    "authorImage": author->image.asset->url
  }`;
  
  const categoriesQuery = `*[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current
  }`;

  const [allBlogs, categories] = await Promise.all([
    client.fetch(query),
    client.fetch(categoriesQuery)
  ]);

  const featuredPosts = allBlogs
    .filter((post: any) => post.isFeatured)
    .slice(0, 3);
    
  const featuredSlugs = new Set(featuredPosts.map((p: any) => p.slug));
  const regularPosts = allBlogs.filter((post: any) => !featuredSlugs.has(post.slug));

  const latestPosts = regularPosts.slice(0, 4);
  
  // Filter remaining posts based on category selection
  const remainingPosts = selectedCategory 
    ? allBlogs.filter((post: any) => post.categorySlug === selectedCategory)
    : allBlogs;

  // Format dates
  const formatPost = (item: any) => {
    const excerptText = item.excerpt ? item.excerpt.substring(0, 150) + "..." : "";
    const formattedDate = item.date 
      ? new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) 
      : "";
    return { ...item, date: formattedDate, excerpt: excerptText };
  };

  const formattedFeatured = featuredPosts.map(formatPost);
  const formattedLatest = latestPosts.map(formatPost);
  const formattedRemaining = remainingPosts.map(formatPost);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section: Featured + Latest */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
              {/* Left: Featured Carousel */}
              <div className="lg:col-span-8 xl:col-span-8">
                <FadeInSection animation="fade-up" delay={0}>
                  {formattedFeatured.length > 0 ? (
                    <FeaturedCarousel posts={formattedFeatured} />
                  ) : (
                    <div className="w-full h-[450px] lg:h-[500px] bg-white border border-gray-100 rounded-[2rem] flex items-center justify-center text-gray-500 shadow-sm">
                      No featured posts yet. Check "Is Featured" in Sanity Studio!
                    </div>
                  )}
                </FadeInSection>
              </div>
              
              {/* Right: Latest Posts */}
              <div className="lg:col-span-4 xl:col-span-4">
                <FadeInSection animation="fade-up" delay={100}>
                  <LatestPostsList posts={formattedLatest} />
                </FadeInSection>
              </div>
            </div>

          {/* Bottom Section: Categories & Posts Grid */}
          <div className="pt-10 border-t border-gray-200">
            <FadeInSection animation="fade-up" delay={0}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                  {selectedCategory ? "Filtered Blogs" : "All Blogs"}
                </h2>
                
                {/* Category Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <Link 
                    href="/blogs"
                    scroll={false}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      !selectedCategory 
                        ? "bg-[#006CB8] text-white" 
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    All
                  </Link>
                  {categories.map((cat: any) => (
                    <Link
                      key={cat.slug}
                      href={`/blogs?category=${cat.slug}`}
                      scroll={false}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                        selectedCategory === cat.slug
                          ? "bg-[#006CB8] text-white"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeInSection>
            
            {formattedRemaining.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {formattedRemaining.map((item: any, index: number) => (
                  <FadeInSection
                    key={item.slug || index}
                    animation="fade-up"
                    delay={index * 100}
                  >
                    <BlogsCard
                      title={item.title}
                      slug={item.slug}
                      date={item.date}
                      image={item.image}
                      excerpt={item.excerpt}
                      category={item.category}
                    />
                  </FadeInSection>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-gray-500 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
                No blogs found for this category.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
