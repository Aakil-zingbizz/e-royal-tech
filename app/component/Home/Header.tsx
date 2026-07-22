import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
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
            <Link href="/" className="text-[#006CB8] font-semibold border-b-2 border-[#006CB8] py-1">
              Home
            </Link>
            <Link href="#" className="text-[#333333] hover:text-[#006CB8] font-medium transition-colors">
              About us
            </Link>
            <div className="relative group cursor-pointer">
              <div className="flex items-center text-[#333333] hover:text-[#006CB8] font-medium transition-colors">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
            <Link href="#" className="text-[#333333] hover:text-[#006CB8] font-medium transition-colors">
              Careers
            </Link>
            <Link href="#" className="text-[#333333] hover:text-[#006CB8] font-medium transition-colors">
              Events
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="#contact" className="bg-[#006CB8] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#005A9C] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006CB8]">
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
