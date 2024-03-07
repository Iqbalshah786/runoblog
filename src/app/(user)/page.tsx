import { client, urlFor } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import Image from "next/image";
import Link from "next/link";
import post from "../sanity/schemaTypes/post";

async function getData() {
  const query = groq`*[_type == 'post']{
    ...,
    author->,
    categories[]->
}| order(_updatedAt desc)`;

  // *[_type == "todo"] | order(priority desc, _updatedAt desc) articles query
  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const posts = await getData();
  // console.log(posts);

  return (
    <main className="flex flex-col w-screen bg-[#F8F9FA]">
      <Banner />
      <Section posts={posts} />
    </main>
  );
}
