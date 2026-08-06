import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo & About */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Royal Tech Systems"
                width={180}
                height={60}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#333333] leading-relaxed max-w-xs pr-4">
              Transforming Technology with Innovation in the logistics sector
              since 2003.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl font-bold text-[#333333] uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col space-y-4 text-[15px] text-[#333333]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  Careers
                </Link>
              </li>
              {/* <li>
                <Link
                  href="events"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  Events
                </Link>
              </li> */}
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="faq"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl font-bold text-[#333333] uppercase tracking-wider">
              CONTACT
            </h4>
            <div className="flex flex-col space-y-5 text-[15px] text-[#333333]">
              <p className="leading-relaxed pr-8">
                No: 5/41, Balaji Nagar, 5th Cross Street,
                <br />
                Ekkattuthangal, Chennai - 600 032,
                <br />
                Tamilnadu, India
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:admin@royaltechsystems.co.in"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  admin@royaltechsystems.co.in
                </a>
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  sales@royaltechsystems.co.in
                </a>
                <a
                  href="mailto:info@royaltechsystems.co.in"
                  className="hover:text-[#006CB8] transition-colors"
                >
                  info@royaltechsystems.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Phones */}
          <div className="flex flex-col space-y-6 lg:pt-[3.25rem]">
            <div className="flex flex-col space-y-4 text-[15px] text-[#333333]">
              <p>Local: 044-4266 9886</p>
              <p>
                Mobile: 93854 13685{" "}
                <span className="text-slate-300 mx-1">|</span> 98402 41678
              </p>
              <p>
                Sales: 8939217565 <span className="text-slate-300 mx-1">|</span>{" "}
                98406 68986
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-200 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-[#333333] font-medium">
          <p>Copyright © by EROYAL TECH SYSTEMS PRIVATE LIMITED</p>

          <div className="flex items-center gap-10">
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-slate-800 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-800 transition-colors">
                Terms & Conditions
              </Link>
            </div>

            <div className="flex space-x-4 items-center">
              {/* Social Icons Placeholders matching image */}
              <a
                href="#"
                className="hover:text-slate-800 transition-colors"
                aria-label="Website"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-slate-800 transition-colors"
                aria-label="Camera/Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-slate-800 transition-colors"
                aria-label="Hashtag/Social"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
