import { client } from "@/lib/createClient";
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

// export const generatStaticParams = async () => {
//   const query = groq`*[_type == 'post']{
//     slug
//   }`;
//   const slugs = await client.fetch(query);
//   const slugRoutes = slugs.map((slug) => slug?.slug.current);
//   return slugRoutes.map((slug) => ({ slug }));
// };

export const revalidate = 30;

export default async function SlugPage({ params: { slug } }: Props) {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
  }`;
  const post: Post = await client.fetch(query, { slug });

  return (
    <main className="relative w-screen my-16 text-[#495057]">
      <div className=" w-[70vw] sm:w-[60vw] text-justify lg:w-[70vw] lg:pl-[4vw]">
        <div className="absolute  top-[-2rem] left-[22vw] md:hidden lg:block lg:left-[4vw] md:top-0 flex items-center gap-2 lg:gap-4  font-bold text-sm sm:text-lg">
          {FormatDate(post._updatedAt)}
          <span className="bg-[#C4C4C4] h-[2px] w-5 lg:inline-block lg:mx-3 lg:w-12 "></span>
          <span>4 minutes</span>
        </div>

        <div className="relative left-[18vw]">
          <PortableText value={post?.body} components={RichText} />
        </div>
      </div>
    </main>
  );
}
