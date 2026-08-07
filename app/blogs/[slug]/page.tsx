import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlogsCard from "@/app/component/Blogs/BlogsCard";
import FadeInSection from "@/app/component/ui/FadeInSection";
import { client } from "@/lib/sanity.client";
import { PortableText } from "next-sanity";
import urlBuilder from "@sanity/image-url";

const builder = urlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 relative w-full h-auto rounded-xl overflow-hidden shadow-sm">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      );
    },
  },
};

// Static params for SSG
export async function generateStaticParams() {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const posts = await client.fetch(query);

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch current post
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "date": coalesce(publishedAt, _createdAt),
    "image": mainImage.asset->url,
    "imageWidth": mainImage.asset->metadata.dimensions.width,
    "imageHeight": mainImage.asset->metadata.dimensions.height,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    "categoryTitle": category->title,
    "categorySlug": category->slug.current,
    body
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  // Get up to 3 random posts excluding the current one
  // First, try from the same category
  const categoryQuery = `*[_type == "post" && slug.current != $slug && category->slug.current == $categorySlug] {
    title,
    "slug": slug.current,
    "date": coalesce(publishedAt, _createdAt),
    "image": mainImage.asset->url,
    "excerpt": pt::text(body),
    "category": category->title
  }`;

  let otherPosts = post.categorySlug
    ? await client.fetch(categoryQuery, {
        slug,
        categorySlug: post.categorySlug,
      })
    : [];

  if (otherPosts.length === 0) {
    const latestQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
      title,
      "slug": slug.current,
      "date": coalesce(publishedAt, _createdAt),
      "image": mainImage.asset->url,
      "excerpt": pt::text(body),
      "category": category->title
    }`;
    otherPosts = await client.fetch(latestQuery, { slug });
  }

  const randomPosts = [...otherPosts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-white">
      {/* Blog Content */}
      <section className="pt-10 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to all posts */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center text-[#006CB8] font-semibold hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to all posts
            </Link>
          </div>

          {/* Article Header */}
          <FadeInSection animation="fade-up" delay={0}>
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              {/* Author and Date in a row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-600 mb-8 border-t border-b border-gray-100 py-4">
                {post.authorName && (
                  <div className="flex items-center space-x-3">
                    {post.authorImage ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={post.authorImage}
                          alt={post.authorName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold shrink-0">
                        {post.authorName.charAt(0)}
                      </div>
                    )}
                    <span className="font-semibold text-gray-900">
                      {post.authorName}
                    </span>
                  </div>
                )}

                {post.authorName && formattedDate && (
                  <span className="hidden md:inline text-gray-300">|</span>
                )}

                {formattedDate && (
                  <div className="flex items-center text-sm font-medium">
                    <svg
                      className="w-4 h-4 mr-1.5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    {formattedDate}
                  </div>
                )}
              </div>

              {post.image && (
                <div className="w-full flex justify-center rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={post.imageWidth || 1200}
                    height={post.imageHeight || 800}
                    className="max-w-full w-auto max-h-[60vh] h-auto object-contain rounded-2xl"
                    priority
                  />
                </div>
              )}
            </div>
          </FadeInSection>

          {/* Article Body */}
          <FadeInSection animation="fade-up" delay={150}>
            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
              {post.body ? (
                <PortableText
                  value={post.body}
                  components={myPortableTextComponents}
                />
              ) : null}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Related Posts */}
      {randomPosts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection animation="fade-up" delay={0}>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                More Insights
              </h2>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {randomPosts.map((item: any, index: number) => {
                const excerptText = item.excerpt
                  ? item.excerpt.substring(0, 150) + "..."
                  : "";
                const randomFormattedDate = item.date
                  ? new Date(item.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "";

                return (
                  <FadeInSection
                    key={item.slug || index}
                    animation="fade-up"
                    delay={index * 100}
                  >
                    <BlogsCard
                      title={item.title}
                      slug={item.slug}
                      date={randomFormattedDate}
                      image={item.image}
                      excerpt={excerptText}
                      category={item.category}
                    />
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
