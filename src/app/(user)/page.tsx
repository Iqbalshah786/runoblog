import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Section } from "../components/Section";

export const revalidate = 30;

async function getData() {
  const query = groq`*[_type == 'post']{
    ...,
    author->,
    categories[]->
}| order(_updatedAt desc)`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const posts = await getData();

  return (
    <main className="flex flex-col w-screen bg-[#F8F9FA]">
      <Section posts={posts} />
    </main>
  );
}
