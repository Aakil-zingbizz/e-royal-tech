"use client";
import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-[#0f172a] mb-10 tracking-tight">
          CONTACT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form Container */}
          <div className="lg:col-span-2 bg-[#F1F8FF] rounded-[2rem] p-8 md:p-12">
            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-[#333333] uppercase"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-[#E4F2FF] text-[#333333] placeholder:text-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006CB8] border-transparent"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-[#333333] uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full bg-[#E4F2FF] text-[#333333] placeholder:text-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006CB8] border-transparent"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-bold text-[#333333] uppercase"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="ENTER COMPANY NAME"
                    className="w-full bg-[#E4F2FF] text-[#333333] placeholder:text-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006CB8] border-transparent"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="industry"
                    className="text-sm font-bold text-[#333333] uppercase"
                  >
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    placeholder="ENTER INDUSTRY"
                    className="w-full bg-[#E4F2FF] text-[#333333] placeholder:text-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006CB8] border-transparent"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="address"
                  className="text-sm font-bold text-[#333333] uppercase"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="ENTER YOUR ADDRESS"
                  className="w-full bg-[#E4F2FF] text-[#333333] placeholder:text-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006CB8] border-transparent"
                />
              </div>

              {/* Row 4 */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-[#333333] uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="ENTER YOUR MESSAGE"
                  className="w-full bg-[#E4F2FF] text-[#333333] placeholder:text-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006CB8] border-transparent resize-none"
                ></textarea>
              </div>

              {/* Optional: Add a submit button although it's not explicitly clear in the screenshot if there is one below the fold */}
              <div className="pt-4 hidden">
                <button
                  type="submit"
                  className="bg-[#006CB8] text-white font-bold uppercase tracking-wider py-3 px-8 rounded-lg hover:bg-[#005a9c] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-1 bg-[#0056b3] rounded-[2rem] p-8 md:p-10 text-white flex flex-col space-y-10">
            {/* Location */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
                Location
              </h3>
              <a
                href="https://maps.app.goo.gl/FmmqpuHpQzA2QWvo9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] leading-relaxed opacity-90 hover:text-blue-200 transition-colors block"
              >
                No: 5/41, Balaji Nagar, 5th Cross Street,
                <br />
                Ekkattuthangal, Chennai - 600 032,
                <br />
                Tamilnadu, India
              </a>
            </div>

            {/* Mail */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
                Mail
              </h3>
              <div className="flex flex-col space-y-1.5 text-[15px] opacity-90">
                <a
                  href="mailto:admin@royaltechsystems.co.in"
                  className="hover:text-blue-200 transition-colors"
                >
                  admin@royaltechsystems.co.in
                </a>
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="hover:text-blue-200 transition-colors"
                >
                  sales@royaltechsystems.co.in
                </a>
                <a
                  href="mailto:info@royaltechsystems.co.in"
                  className="hover:text-blue-200 transition-colors"
                >
                  info@royaltechsystems.co.in
                </a>
              </div>
            </div>

            {/* Call */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
                Call
              </h3>
              <div className="flex flex-col space-y-2 text-[15px] opacity-90">
                <p>
                  Local:{" "}
                  <a
                    href="tel:04442669886"
                    className="hover:text-blue-200 transition-colors"
                  >
                    044-4266 9886
                  </a>
                </p>
                <p>
                  Mobile:{" "}
                  <a
                    href="tel:9385413685"
                    className="hover:text-blue-200 transition-colors"
                  >
                    93854 13685
                  </a>{" "}
                  <span className="mx-1">|</span>{" "}
                  <a
                    href="tel:9840241678"
                    className="hover:text-blue-200 transition-colors"
                  >
                    98402 41678
                  </a>
                </p>
                <p>
                  Sales:{" "}
                  <a
                    href="tel:8939217565"
                    className="hover:text-blue-200 transition-colors"
                  >
                    8939217565
                  </a>{" "}
                  <span className="mx-1">|</span>{" "}
                  <a
                    href="tel:9840668986"
                    className="hover:text-blue-200 transition-colors"
                  >
                    98406 68986
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
