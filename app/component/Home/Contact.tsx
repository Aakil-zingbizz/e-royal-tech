'use client';
import React, { useState } from 'react';
import FadeInSection from "@/app/component/ui/FadeInSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection animation="fade-up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-[#333333] mb-4">
              Contact Our Team
            </h2>
            <p className="text-lg text-[#333333]">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </FadeInSection>

        {/* Form Container */}
        <FadeInSection animation="fade-up" delay={150}>
          <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-[#334155]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006CB8] focus:border-transparent transition-shadow placeholder:text-slate-400 text-[#333333] w-full"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-[#334155]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006CB8] focus:border-transparent transition-shadow placeholder:text-slate-400 text-[#333333] w-full"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-[#334155]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006CB8] focus:border-transparent transition-shadow placeholder:text-slate-400 text-[#333333] w-full"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[#334155]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006CB8] focus:border-transparent transition-shadow placeholder:text-slate-400 text-[#333333] w-full resize-none"
                ></textarea>
              </div>

              {/* Messages & Submit Button */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-green-50 text-green-700 font-medium">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-[#006CB8] text-white font-semibold py-3.5 px-8 rounded-full hover:bg-[#005A9C] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006CB8] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>

            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
