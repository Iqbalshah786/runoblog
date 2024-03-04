import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Banner } from "../components/Banner";

const query = groq`*[_type == 'post']{
  ...,
  author->,
    categories[]->
}| order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <main>
      <Banner posts={posts} />
    </main>
  );
}
