import React from "react";
import FAQHero from "@/app/component/FAQ/FAQHero";
import FAQSection from "@/app/component/FAQ/FAQSection";

export const metadata = {
  title: "FAQ | eRoyal Tech Systems",
  description:
    "Frequently Asked Questions about our customs clearance and freight forwarding software.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <FAQHero />
      <FAQSection />
    </main>
  );
}
