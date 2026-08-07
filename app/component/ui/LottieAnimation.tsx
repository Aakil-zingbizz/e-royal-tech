"use client";

import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieAnimationProps {
  animationData: unknown;
  className?: string;
  loop?: boolean;
  preserveAspectRatio?: string;
  /** Pass explicit style to the inner Lottie SVG player */
  playerStyle?: React.CSSProperties;
}

export default function LottieAnimation({
  animationData,
  className,
  loop = true,
  preserveAspectRatio,
  playerStyle,
}: LottieAnimationProps) {
  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={loop}
        style={playerStyle ?? { width: "100%", height: "100%" }}
        rendererSettings={preserveAspectRatio ? { preserveAspectRatio } : undefined}
      />
    </div>
  );
}
