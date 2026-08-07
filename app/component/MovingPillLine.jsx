"use client";

import { useEffect, useRef, useState, useId } from "react";

// Swap this for the exact `d` attribute of the line you're copying.
// Any shape works — straight, curved, stepped — the animation follows
// the actual rendered path length, not fixed pixel math.
const DEMO_PATH = "M780,20 H80 Q40,20 40,60 V180";

export default function MovingPillLine({
  d = DEMO_PATH,
  viewBox = "0 0 800 200",
  pillLength = 26,      // length of the moving dash, in path units
  pillCount = 2,         // how many pills travel the line at once, evenly spaced
  speed = 6,              // seconds for one pill to travel the full path
  strokeWidth = 3,
  trackColor = "#ABE7F8", // static background line color
  pillColor = "#3711e1",  // moving pill color
}) {
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, [d]);

  // One repeat of "dash + gap" per pill, spaced evenly across the path.
  const period = length / pillCount;
  const gap = Math.max(period - pillLength, 0);

  return (
    <div style={{ width: "100%" }}>
      <svg
        viewBox={viewBox}
        width="100%"
        style={{ display: "block", overflow: "visible" }}
      >
        <defs>
          <linearGradient id={`track-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="15%" stopColor={trackColor} stopOpacity="0.35" />
            <stop offset="50%" stopColor={trackColor} stopOpacity="0.85" />
            <stop offset="85%" stopColor={trackColor} stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* static gradient track — also used to measure the real path length */}
        <path
          ref={pathRef}
          d={d}
          stroke={`url(#track-${uid})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />

        {/* the moving pill(s) — one <path>, the dash pattern repeats pillCount times */}
        {length > 0 && (
          <path
            d={d}
            fill="none"
            stroke={pillColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${pillLength} ${gap}`}
            className={`pill-${uid}`}
          />
        )}
      </svg>

      {length > 0 && (
        <style>{`
          .pill-${uid} {
            animation: dash-${uid} ${speed}s linear infinite;
          }
          @keyframes dash-${uid} {
            to { stroke-dashoffset: ${-period}; }
          }
          @media (prefers-reduced-motion: reduce) {
            .pill-${uid} { animation: none; }
          }
        `}</style>
      )}
    </div>
  );
}
