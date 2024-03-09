"use client";
import { urlFor } from "@/lib/createClient";
import { useState } from "react";

export function Slider({ bannerData }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPost, setCurrentPost] = useState(0);
  console.log(bannerData.length);

  const prevPost = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? bannerData.length - 1 : currentIndex - 1;
    setCurrentPost(newIndex);
  };

  const nextPost = () => {
    const isLastIndex = currentIndex === bannerData.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentPost(newIndex);
  };

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const nexIndex = isFirstIndex
      ? bannerData[0].bannerImages.length - 1
      : currentIndex - 1;
    setCurrentIndex(nexIndex);
  };
  const nextSlide = () => {
    const isLastIndex = currentIndex === bannerData[0].bannerImages.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${urlFor(
            bannerData[0].bannerImages[currentIndex].asset
          ).url()})`,
        }}
        className="w-full h-full bg-center bg-cover bg-no-repeat duration-300 "
      >
        <div className="absolute top-[25vh] left-[4vw] flex flex-col gap-4">
          {bannerData[currentPost].categories.map((category: any) => (
            <div key={category._id}>
              <span className="bg-white  bg-opacity-30 text-[#fff] font-bold text-[12px] mt-4  py-[6px] px-[10px] rounded-[8px]">
                {category.title}
              </span>
            </div>
          ))}
          <div>
            <h1 className="text-white lg:text-[36px] inline-block lg:w-[35vw] font-bold">
              {bannerData[currentPost].title}
            </h1>
          </div>
          <div className="flex gap-4 items-start flex-shrink-0">
            <span className="text-white font-normal text-[14px]">
              {new Date(bannerData[currentPost]._updatedAt).toLocaleDateString(
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
              {bannerData[currentPost].description}
            </span>
          </div>
        </div>

        {/* {bannerData.categories.map((category: any) => (
          <span
            key={category._id}
            className="bg-white  bg-opacity-30 text-[#fff] font-bold text-[12px] mt-4 absolute top-0 right-4 py-[6px] px-[10px] rounded-[8px]"
          >
            {category.title}
          </span>
        ))}  */}
      </div>

      <div className="absolute lg:top-[50vh] left-[4vw] flex gap-4">
        <button className=" text-red-600  border-2" onClick={prevPost}>
          prev
        </button>
        <button className="  text-red-600 border-2" onClick={nextPost}>
          next
        </button>
      </div>
    </>
  );
}
