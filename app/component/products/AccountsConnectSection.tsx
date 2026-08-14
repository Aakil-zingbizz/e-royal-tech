"use client";

import Image from "next/image";
import FadeInSection from "@/app/component/ui/FadeInSection";
import LottieAnimation from "@/app/component/ui/LottieAnimation";
import accountsPillAnimation from "@/LottieAnimations/accounts-pill.json";

// ── SVG icons ──────────────────────────────────────────────────────────────

const ArrowsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className ?? "w-5 h-5"}
  >
    <path d="M7 16V4m0 0L3 8m4-4l4 4" />
    <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

const TrendUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className ?? "w-5 h-5"}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

// ── Center card (ACCOUNTS financial hub) ───────────────────────────────────

function CenterCard() {
  return (
    <div
      className="w-[260px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0"
      style={{ background: "#ffffff" }}
    >
      {/* Header — e-Royal badge + title + description */}
      <div className="px-5 pt-5 pb-4">
        <p className="text-[13px] font-bold text-black mb-1">e-Royal</p>
        <p
          className="text-3xl font-black leading-tight mb-3"
          style={{ color: "var(--theme-color)" }}
        >
          ACCOUNTS
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">
          eRoyal ACCOUNTS connects accounting with eRoyal IMPEX and FREIGHT
        </p>
      </div>

      {/* Dashboard screenshot */}
      <div className="relative mx-0" style={{ height: 230 }}>
        <Image
          src="/products/accounts/accounts.webp"
          alt="eRoyal ACCOUNTS Dashboard"
          fill
          className="object-cover object-top"
          sizes="260px"
          priority
        />
      </div>
    </div>
  );
}

// ── Connection card ────────────────────────────────────────────────────────

interface ConnectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ConnectionCard({ icon, title, description }: ConnectionCardProps) {
  return (
    <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 flex flex-col gap-2 hover:border-[var(--theme-color)]/40 transition-all duration-300">
      <div className="flex items-center gap-2 text-[var(--theme-color)]">
        {icon}
        <span className="font-bold text-sm">{title}</span>
      </div>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function AccountsConnectSection() {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #06101e 0%, #091628 60%, #06101e 100%)",
      }}
    >
      {/* Radial glow behind center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--theme-color) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <FadeInSection animation="fade-up" duration={700}>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[var(--theme-color)]/40 text-[var(--theme-color)] bg-[var(--theme-color)]/10 mb-6">
              Accounting That Works Your Way
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Standalone when you need it.
              <br />
              <span style={{ color: "var(--theme-color)" }}>
                Connected when you want it.
              </span>
            </h2>

            <p className="text-white/60 text-base md:text-lg w-full mx-auto leading-relaxed">
              eRoyal ACCOUNTS is a standalone accounting platform for managing
              your financial operations, billing, and business transactions.
              When connected with eRoyal IMPEX and eRoyal FREIGHT, it brings
              customs, freight, billing, and accounting workflows
              together&mdash;giving you the flexibility to operate independently
              or as one connected business ecosystem.
            </p>
          </div>
        </FadeInSection>

        {/* ── Three-card hub visual ── */}
        <FadeInSection animation="scale-up" duration={900} delay={100}>
          {/* Full width container — cards align perfectly with section bounds */}
          <div className="relative w-full mb-12 h-[470px]">
            {/* Top-left — IMPEX pill */}
            <div
              className="absolute z-20 hidden md:block"
              style={{ left: 0, top: 0 }}
            >
              <div
                className="rounded-[1.25rem] px-8 py-6 shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #fcf4e3 50%, #f8ead2 100%)",
                  minWidth: 220,
                }}
              >
                <p className="text-[13px] font-bold text-black mb-1">e-Royal</p>
                <p
                  className="text-[2.75rem] font-black leading-none tracking-tight"
                  style={{ color: "#D39F4A" }}
                >
                  IMPEX
                </p>
              </div>
            </div>

            {/* Center — ACCOUNTS dashboard card */}
            <div
              className="absolute z-10"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <CenterCard />
            </div>

            {/* Full-width pill animation — covers the full banner regardless of height */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none z-0 translate-x-1.5"
              aria-hidden="true"
            >
              <LottieAnimation
                animationData={accountsPillAnimation}
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              />
            </div>

            {/* Bottom-right — FREIGHT pill */}
            <div
              className="absolute z-20 hidden md:block"
              style={{ right: 0, bottom: 0 }}
            >
              <div
                className="rounded-[1.25rem] px-8 py-6 shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #e8f1f9 50%, #dbe8f4 100%)",
                  minWidth: 220,
                }}
              >
                <p className="text-[13px] font-bold text-black mb-1">e-Royal</p>
                <p
                  className="text-[2.75rem] font-black leading-none tracking-tight"
                  style={{ color: "#2175BE" }}
                >
                  FREIGHT
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* ── Integration connection cards ── */}
        <FadeInSection animation="fade-up" duration={800} delay={200}>
          <div className="flex flex-col sm:flex-row gap-4">
            <ConnectionCard
              icon={<ArrowsIcon className="w-5 h-5 flex-shrink-0" />}
              title="IMPEX → Accounts"
              description="Customs transactions and documentation flow into your financial workflow."
            />
            <ConnectionCard
              icon={<ArrowsIcon className="w-5 h-5 flex-shrink-0" />}
              title="FREIGHT → Accounts"
              description="Freight operations and shipment charges connect directly with accounting."
            />
            <ConnectionCard
              icon={<TrendUpIcon className="w-5 h-5 flex-shrink-0" />}
              title="Accounts → Business"
              description="Get a clearer financial view of your complete logistics operation."
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
