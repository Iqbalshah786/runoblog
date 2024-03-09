import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/createClient";
import { Post } from "../../../types";
import { Slider } from "./Slider";

async function getBannerData() {
  const query = groq`*[_type == "post"]{
    ...,
    author->,
      categories[]->
  } | order(_createdAt desc)[0...3]`;
  const data = await client.fetch(query);
  return data;
}

interface BannerImage {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
interface category {
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  title: string;
  _updatedAt: string;
}

export interface BannerProps {
  title: string;
  description: string;
  images: BannerImage[];
  categories: category[];
  update_date: string;
}

export async function Banner() {
  const bannerData = await getBannerData();

  const bannerDetail: BannerProps[] = [];

  bannerData.forEach((post: Post) => {
    const images: BannerImage[] = post.bannerImages.map(
      (image: BannerImage) => ({
        _type: image._type,
        _key: image._key,
        asset: {
          _ref: image.asset._ref,
          _type: image.asset._type,
        },
      })
    );

    bannerDetail.push({
      title: post.title,
      description: post.description,
      images: images,
      categories: post.categories,
      update_date: post._updatedAt,
    });
  });

  return (
    <div className="w-screen h-[65vh]  ">
      <Slider bannerData={bannerData} />
    </div>
  );
}
