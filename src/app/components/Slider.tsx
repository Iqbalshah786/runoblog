"use client";
import { urlFor } from "@/lib/createClient";
import { useState } from "react";

export function Slider({ bannerData }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPost = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? bannerData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextPost = () => {
    const isLastIndex = currentIndex === bannerData.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${urlFor(
            bannerData[currentIndex].BannerImage.asset
          ).url()})`,
        }}
        className="w-full h-full bg-center bg-cover bg-no-repeat duration-300"
      >
        <div className="absolute top-[25vh] left-[4vw] flex flex-col gap-4">
          <div
            className={
              bannerData[currentIndex].categories.length > 1
                ? "flex gap-4 items-center"
                : ""
            }
          >
            {bannerData[currentIndex].categories.map((category: any) => (
              <div key={category._id}>
                <span className="bg-white  bg-opacity-30 text-[#fff] font-bold text-[12px] mt-4  py-[6px] px-[10px] rounded-[8px]">
                  {category.title}
                </span>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-white lg:text-[36px] inline-block lg:w-[35vw] font-bold">
              {bannerData[currentIndex].title}
            </h1>
          </div>
          <div className="flex gap-4 items-start flex-shrink-0">
            <span className="text-white font-normal text-[14px]">
              {new Date(bannerData[currentIndex]._updatedAt).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )}
            </span>
            <span className="bg-white h-[2px] w-12 relative top-2"></span>
            <span className="lg:w-[50%] text-white">
              {bannerData[currentIndex].description}
            </span>
          </div>
        </div>
      </div>

      <div className="lg:flex absolute lg:top-[55vh] left-[4vw]  gap-4  ">
        <button
          className={
            currentIndex === 0
              ? "bg-white first rounded-full w-[10px] h-[10px]"
              : "bg-white bg-opacity-20 first rounded-full w-[10px] h-[10px]"
          }
          onClick={() => setCurrentIndex(0)}
        ></button>
        <button
          className={
            currentIndex === 1
              ? "bg-white first rounded-full w-[10px] h-[10px]"
              : "bg-white bg-opacity-20 first rounded-full w-[10px] h-[10px]"
          }
          onClick={() => setCurrentIndex(1)}
        ></button>
        <button
          className={
            currentIndex === 2
              ? "bg-white first rounded-full w-[10px] h-[10px]"
              : "bg-white bg-opacity-20 first rounded-full w-[10px] h-[10px]"
          }
          onClick={() => setCurrentIndex(2)}
        ></button>
      </div>
    </>
  );
}
