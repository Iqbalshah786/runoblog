import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Banner } from "../components/Banner";

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
  }| order(_createdAt asc)`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts = await getData();
  console.log(posts);

  return (
    <main>
      <Banner />
    </main>
  );
}
