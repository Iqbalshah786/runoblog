import { client, urlFor } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Post } from "../../../../../types";
import FormatDate from "@/app/components/FormatDate";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/app/components/RichText";

interface Props {
  params: {
    slug: string;
  };
}

export const generatStaticParams = async () => {
  const query = groq`*[_type == 'post']{
    slug
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug.current);
  return slugRoutes.map((slug) => ({ slug }));
};

export default async function SlugPage({ params: { slug } }: Props) {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
  }`;
  const post: Post = await client.fetch(query, { slug });

  return (
    <main className="relative  w-screen h-[50vh] text-[#495057]">
      <div className="w-[80vw] relative top-[10vh] left-[4vw] flex items-start gap-8 border-2 border-black">
        <div className="flex items-center gap-4  font-bold flex-shrink-0">
          {FormatDate(post._updatedAt)}
          <span className="bg-[#C4C4C4] h-[2px] w-12 "></span>
          <span>4 minutes</span>
        </div>
        <div className="text border-2 border-pink-600">
          <PortableText value={post?.body} components={RichText} />
        </div>
      </div>
    </main>
  );
}
