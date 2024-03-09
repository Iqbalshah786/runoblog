import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/createClient";
import { Post } from "../../../types";
import { Slider } from "./Slider";

async function getBannerData() {
  const query = groq`*[_type == "post"]{
    ...,
    author->,
      categories[]->
  } | order(_updatedAt asc)[0...3]`;
  const data = await client.fetch(query);
  return data;
}

export async function Banner() {
  const bannerData = await getBannerData();

  return (
    <div className="w-screen h-[65vh]  ">
      <Slider bannerData={bannerData} />
    </div>
  );
}
