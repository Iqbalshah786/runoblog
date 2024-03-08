"use client";
import { urlFor } from "@/lib/createClient";
import { useState } from "react";

export function Slider({ bannerData }: any) {
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const nexIndex = isFirstIndex
      ? bannerData[1].bannerImages.length - 1
      : currentIndex - 1;
    setCurrentIndex(nexIndex);
  };
  const nextSlide = () => {
    const isLastIndex = currentIndex === bannerData[1].bannerImages.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${urlFor(
            bannerData[1].bannerImages[currentIndex].asset
          ).url()})`,
        }}
        className="w-full h-full bg-center bg-cover bg-no-repeat duration-300 "
      ></div>

      <div className="absolute lg:top-[45vh] left-[4vw] flex gap-4">
        <button className=" text-red-600  border-2" onClick={prevSlide}>
          prev
        </button>
        <button className="  text-red-600 border-2" onClick={prevSlide}>
          next
        </button>
      </div>
    </>
  );
}
