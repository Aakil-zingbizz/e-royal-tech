"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about";
  const isProductsActive = pathname.startsWith("/products");
  const isCareerActive = pathname === "/career" || pathname === "/careers";
  const isEventsActive = pathname === "/events";

  const getLinkClass = (active: boolean) =>
    active
      ? "text-[#006CB8] font-semibold border-b-2 border-[#006CB8] py-1"
      : "text-[#333333] hover:text-[#006CB8] font-medium transition-colors py-1";

  return (
    <header className="bg-[#f8fafc] sm:bg-white w-full border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <Image src="/logo.png" alt="Royal Tech Systems" width={180} height={60} className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12 items-center">
            <Link href="/" className={getLinkClass(isHomeActive)}>
              Home
            </Link>
            <Link href="/about" className={getLinkClass(isAboutActive)}>
              About us
            </Link>
            <div className="relative group cursor-pointer py-2">
              <Link href="/products" className={`flex items-center ${isProductsActive ? "text-[#006CB8] font-semibold border-b-2 border-[#006CB8] py-1" : "text-[#333333] group-hover:text-[#006CB8] font-medium transition-colors py-1"}`}>
                Products
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link
                  href="/products/impex"
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${pathname === "/products/impex" ? "bg-blue-50 text-[#006CB8]" : "text-gray-800 hover:bg-blue-50 hover:text-[#006CB8]"}`}
                >
                  eRoyal IMPEX
                  <span className="block text-xs font-normal text-gray-500">Customs &amp; ICEGATE Filing</span>
                </Link>
                <Link
                  href="/products/freight"
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${pathname === "/products/freight" ? "bg-blue-50 text-[#006CB8]" : "text-gray-800 hover:bg-blue-50 hover:text-[#006CB8]"}`}
                >
                  eRoyal FREIGHT
                  <span className="block text-xs font-normal text-gray-500">Freight Forwarding ERP</span>
                </Link>
                <Link
                  href="/products/accounts"
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${pathname === "/products/accounts" ? "bg-blue-50 text-[#006CB8]" : "text-gray-800 hover:bg-blue-50 hover:text-[#006CB8]"}`}
                >
                  eRoyal ACCOUNTS
                  <span className="block text-xs font-normal text-gray-500">Accounting &amp; Financial Management</span>
                </Link>
                <Link
                  href="/products/scm"
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${pathname === "/products/scm" ? "bg-blue-50 text-[#006CB8]" : "text-gray-800 hover:bg-blue-50 hover:text-[#006CB8]"}`}
                >
                  eRoyal SCM
                  <span className="block text-xs font-normal text-gray-500">Supply Chain &amp; Warehouse</span>
                </Link>
                <div className="border-t border-slate-100 my-1 pt-1">
                  <Link href="/products" className="block px-4 py-2 text-xs font-bold text-[#006CB8] hover:underline">
                    View All Products &rarr;
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/career" className={getLinkClass(isCareerActive)}>
              Careers
            </Link>
            <Link href="/events" className={getLinkClass(isEventsActive)}>
              Events
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-[#006CB8] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#005A9C] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006CB8]">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button className="text-[#333333] hover:text-slate-900 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
