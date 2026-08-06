"use client";

import React, { useState } from "react";
import FadeInSection from "@/app/component/ui/FadeInSection";

const faqs = [
  {
    question: "What is customs clearance software?",
    answer:
      "Customs clearance software is a digital solution that enables the process of clearing goods through customs. It assists in managing documentation, ensuring compliance with regulations, and tracking shipments to guarantee timely delivery.",
  },
  {
    question: "How does your software assist in freight forwarding?",
    answer:
      "Our software streamlines the freight forwarding process by automating tasks such as booking shipments, managing documentation, tracking cargo, and providing real-time updates. It also integrates with various carriers and customs systems for seamless operations.",
  },
  {
    question:
      "Is your software designed to meet the requirements of Indian customs regulations?",
    answer:
      "Yes, our software is designed to comply with all current Indian customs regulations. We consistently update the system to incorporate any changes in laws and procedures, ensuring ongoing compliance.",
  },
  {
    question: "Can your software integrate with existing systems?",
    answer:
      "Yes, our software is built to integrate with various existing logistics and ERP systems. We offer API support for seamless integration, allowing for a smooth transition and data sharing between platforms.",
  },
  {
    question: "What kind of support do you provide for users?",
    answer:
      "We offer comprehensive customer support, including a dedicated helpdesk, email support, and live chat. Moreover, we offer training sessions along with access to user manuals and tutorials to assist users in effectively navigating the software.",
  },
  {
    question: "What pricing options do you offer for your software?",
    answer:
      "Our pricing options are adaptable and can be customized to suit the specific needs of various businesses. We provide subscription pricing, one-time licensing options, and tiered pricing that depends on the number of users or the features needed.",
  },
  {
    question: "Is there a trial period available?",
    answer:
      "Yes, we offer a free trial period for potential users to explore the software's features and functionalities. This allows you to assess how well it meets your business needs before making a commitment.",
  },
  {
    question: "How does your software handle data security?",
    answer:
      "We prioritize data security and employ strong measures, including secure access controls and regular backup procedures. Our software complies with industry standards to protect sensitive information.",
  },
  {
    question: "Can the software handle high volumes of transactions?",
    answer:
      "Yes, our software is designed to handle high volumes of transactions efficiently. It is scalable and can accommodate the growing needs of your business without compromising performance.",
  },
  {
    question: "What kinds of reports can the software generate?",
    answer:
      "Our software can generate a variety of reports, including shipment status, customs compliance, financial summaries, and performance metrics. These reports can be adjusted to fulfil specific business requirements.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-6xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeInSection
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#006CB8] shadow-md"
                      : "border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span
                      className={`text-lg font-semibold pr-8 ${isOpen ? "text-[#006CB8]" : "text-[#0a192f]"}`}
                    >
                      {index + 1}. {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <svg
                        className={`w-6 h-6 ${isOpen ? "text-[#006CB8]" : "text-gray-400"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
