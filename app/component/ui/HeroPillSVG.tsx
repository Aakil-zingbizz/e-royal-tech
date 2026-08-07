"use client";

/**
 * HeroPillSVG — Restored to original Lottie corner positions.
 *
 * Guide lines:  path with huge x-extensions so they reach screen edges,
 *               rendered with overflow:visible.
 * Animated dot: animateMotion along only the visible portion (x=1500 → x=-60),
 *               so the dot correctly travels from right screen edge to left edge.
 *               A rotated rect ("auto" rotation) follows the path direction,
 *               giving the appearance of a travelling dash stroke.
 *
 * Corner positions match the original Lottie JSON (1440×1069 canvas):
 *   Top-right corner at  (1396→1343, 277→327)
 *   Bottom-right corner at (1343→1291, 971→1020)
 */

export default function HeroPillSVG({ className }: { className?: string }) {
  const r = 50; // corner radius (same as Lottie source)

  // Guide path — extends far beyond screen on both sides
  const guidePath = [
    "M 99999,277",
    "L 1396,277",
    `C ${1396 - r},277 1343,${277 + r} 1343,${277 + r}`,
    "L 1343,971",
    `C 1343,${971 + r} ${1343 - r},1020 1291,1020`,
    "L -99999,1020",
  ].join(" ");

  // Motion path — covers the VISIBLE portion only (slightly overhangs each edge)
  const motionPath = [
    "M 1500,277",
    "L 1396,277",
    `C ${1396 - r},277 1343,${277 + r} 1343,${277 + r}`,
    "L 1343,971",
    `C 1343,${971 + r} ${1343 - r},1020 1291,1020`,
    "L -60,1020",
  ].join(" ");

  return (
    <svg
      viewBox="0 0 1440 1069"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      <defs>
        <filter
          id="pill-glow"
          x="-200%"
          y="-200%"
          width="500%"
          height="500%"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Static grey guide line */}
      <path
        d={guidePath}
        fill="none"
        stroke="#E2E2E2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated amber dot — pill 1 */}
      <rect
        x="-30"
        y="-2.5"
        width="60"
        height="5"
        rx="2.5"
        fill="#D39E4B"
        filter="url(#pill-glow)"
      >
        <animateMotion
          path={motionPath}
          dur="5s"
          repeatCount="indefinite"
          rotate="auto"
        />
      </rect>

      {/* Animated amber dot — pill 2 (staggered by half) */}
      <rect
        x="-30"
        y="-2.5"
        width="60"
        height="5"
        rx="2.5"
        fill="#D39E4B"
        filter="url(#pill-glow)"
      >
        <animateMotion
          path={motionPath}
          dur="5s"
          begin="-2.5s"
          repeatCount="indefinite"
          rotate="auto"
        />
      </rect>
    </svg>
  );
}
