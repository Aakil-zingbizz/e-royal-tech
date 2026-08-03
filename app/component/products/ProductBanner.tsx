import Image from 'next/image';
import Link from 'next/link';

const ProductBanner = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-r from-white via-blue-50/30 to-blue-50/60">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-black">eRoyal</span>{' '}
              <span className="text-[#FFB800]">IMPEX</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mt-2">
              Smart Customs Filing for Faster Global Trade
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed mt-4">
              Simplify Shipping Bills, Bills of Entry, and ICEGATE filing with a secure, 
              cloud-based customs management platform built for customs brokers, 
              importers, exporters, and logistics professionals.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-blue-50/80 text-gray-800 text-sm font-semibold border border-blue-100 shadow-sm">
                <span className="text-center w-full">24/7 Expert Technical<br/>Support</span>
              </div>
              <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-blue-50/80 text-gray-800 text-sm font-semibold border border-blue-100 shadow-sm">
                <span className="text-center w-full">Regular Compliance &<br/>Software Updates</span>
              </div>
              <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-blue-50/80 text-gray-800 text-sm font-semibold border border-blue-100 shadow-sm">
                <span className="text-center w-full">Secure Cloud-Based<br/>Platform</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link 
                href="/request-demo"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0066B3] text-white font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Request a Demo
              </Link>
              <Link 
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#0066B3] font-medium border border-[#0066B3] hover:bg-blue-50 transition-all shadow-sm"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-8 lg:pt-0">
            <div className="mb-4 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0066B3] uppercase tracking-wide">E-ICON</h3>
              <p className="text-gray-600 font-medium text-lg mt-1">Console Manifest Filing Software</p>
            </div>
            
            <div className="relative w-full max-w-[650px] aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl -z-10 w-[80%] h-[80%] mx-auto my-auto"></div>
              <Image 
                src="/e-icon-mockup.png"
                alt="E-ICON Console Manifest Filing Software Mockup"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
