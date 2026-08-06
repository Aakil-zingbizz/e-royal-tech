import React from "react";
import fs from "fs";
import path from "path";
import NewsHero from "@/app/component/News/NewsHero";
import NewsCard from "@/app/component/News/NewsCard";
import FadeInSection from "@/app/component/ui/FadeInSection";

export const metadata = {
  title: "News & Insights | eRoyal Tech Systems",
  description: "Stay updated with the latest trends in logistics, customs clearance, and supply chain technology.",
};

export default function NewsPage() {
  const filePath = path.join(process.cwd(), "data", "news.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const news = JSON.parse(fileContents);

  return (
    <main className="min-h-screen bg-gray-50">
      <NewsHero />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item: any, index: number) => (
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
