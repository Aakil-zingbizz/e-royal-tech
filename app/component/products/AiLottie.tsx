"use client";

import LottieAnimation from "@/app/component/ui/LottieAnimation";
import impexAnimation from "@/LottieAnimations/ai-impex.json";
import freightAnimation from "@/LottieAnimations/ai-freight.json";
import { useParams } from "next/navigation";

export default function AiLottie() {
  const params = useParams();
  const animationData =
    params.slug === "impex" ? impexAnimation : freightAnimation;

  return (
    <div className="relative z-20 flex-shrink-0 w-[1200px] h-[550px] p-6">
      <LottieAnimation
        animationData={animationData}
        className="w-full h-full scale-[1.8] origin-center"
      />
    </div>
  );
}
