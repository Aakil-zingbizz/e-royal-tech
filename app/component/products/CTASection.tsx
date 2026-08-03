import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="w-full py-24 bg-[#006CB8]">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to optimize your logistics operations?
        </h2>
        <p className="text-blue-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of global logistics providers who trust eRoyal Tech
          Systems for their digital core.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#071324] text-white font-medium hover:bg-gray-900 transition-colors shadow-sm"
          >
            Get Started
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
