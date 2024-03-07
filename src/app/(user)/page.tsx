import { client, urlFor } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import Image from "next/image";
import Link from "next/link";

// async function getBannerImage() {
//   const query = groq`
//   *[_type == 'post']{
//     bannerImages,
//       title,
//       description,
//       _createdAt,

//   }
//   `;
//   const data = await client.fetch(query);
//   return data;
// }

async function getData() {
  const query = groq`*[_type == 'post']{
    ...,
    author->,
    categories[]->
  }| order(_createdAt desc)`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const posts = await getData();

  return (
    <main className="flex flex-col w-screen bg-[#F8F9FA]">
      <Banner />
      <Section posts={posts} />
    </main>
  );
}
