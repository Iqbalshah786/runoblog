import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Section } from "../components/Section";

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
      <Section posts={posts} />
    </main>
  );
}
