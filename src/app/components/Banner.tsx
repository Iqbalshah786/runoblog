import Image from "next/image";
import { Post } from "../../../types";
import { groq } from "next-sanity";
import { client } from "@/lib/createClient";

async function getBannerData() {
  const query = groq`*[_type == "post"]{
    ...,
    author->,
      categories[]->
  } | order(_createdAt desc)[0...3]`;
  const data = await client.fetch(query);
  return data;
}

export async function Banner() {
  const bannerData = await getBannerData();

  return (
    <div className="bg-class w-full h-[60vh] px-[4vw]">
      {bannerData.map((post: Post) => (
        <div
          key={post._id}
          style={{ backgroundImage: `` }}
          className="w-full bg-cover duration-500"
        >
          <h1 className="mt-10 text-[#f04242]">{post.author.name}</h1>
        </div>
      ))}
    </div>
  );
}
