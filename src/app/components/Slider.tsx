"use client";
import { urlFor } from "@/lib/createClient";
import { useEffect, useState } from "react";
import { Dot } from "./Dot";
import RenderCategories from "./RenderCategories";
import FormatDate from "./FormatDate";

export function Slider({ bannerData }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${urlFor(
            bannerData[currentIndex].BannerImage.asset
          ).url()})`,
        }}
        className="w-full h-full bg-center bg-cover bg-no-repeat duration-300"

        // bg-green-500 md:bg-blue-500 lg:bg-red-500
      >
        <div className="absolute top-[19.178vh] w-[70vw] left-[15vw] lg:left-[4vw] flex flex-col gap-8 lg:gap-4  animate__animated animate__backInRight">
          <div
            className={
              bannerData[currentIndex].categories.length > 1
                ? "flex gap-4 items-center"
                : ""
            }
          >
            {RenderCategories(bannerData[currentIndex].categories)}
          </div>
          <div>
            <h1 className="text-white lg:text-[36px] inline-block lg:w-[35vw] font-bold">
              {bannerData[currentIndex].title}
            </h1>
          </div>
          <div className="flex gap-4 items-start flex-shrink-0">
            <span className="text-white font-normal text-[14px]">
              {FormatDate(bannerData[currentIndex]._updatedAt)}
            </span>
            <span className="bg-white h-[2px] w-12 relative top-2"></span>
            <span className="lg:w-[50%] text-white">
              {bannerData[currentIndex].description}
            </span>
          </div>
        </div>
      </div>

      <div className="flex absolute top-[38vh] lg:top-[55vh] lg:left-[4vw] w-[10vw] left-[45vw] gap-4 ">
        {bannerData.map((_: any, index: number) => (
          <Dot
            key={index}
            index={index}
            currentIndex={currentIndex}
            onClick={setCurrentIndex}
          />
        ))}
      </div>
    </>
  );
}
