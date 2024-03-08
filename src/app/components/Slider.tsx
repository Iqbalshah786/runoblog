"use client";
import { urlFor } from "@/lib/createClient";
import { useState } from "react";

export function Slider({ bannerData }: any) {
  const [currentIndex, setCurrentIndex] = useState(2);
  return (
    <div
      style={{
        backgroundImage: `url(${urlFor(
          bannerData[1].bannerImages[currentIndex].asset
        ).url()})`,
      }}
      className="w-full h-full bg-center bg-cover bg-no-repeat duration-300 "
    ></div>
  );
}
