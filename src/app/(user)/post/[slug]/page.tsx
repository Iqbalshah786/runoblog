import { client, urlFor } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Post } from "../../../../../types";
import FormatDate from "@/app/components/FormatDate";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/app/components/RichText";
import Image from "next/image";
import { SocialMediaLinks } from "@/app/components/SocialMediaLinks";

interface Props {
  params: {
    slug: string;
  };
}

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
        <div className="border-t border-gray-300 transform -translate-y-0.5 relative left-[18vw] my-16">
          <div className="mt-8 lg:mt-4 flex gap-4 flex-col  lg:flex-row items-center  justify-between">
            <div className="flex gap-4 mb-4 flex-shrink-0">
              <Image
                src={urlFor(post.author.image).url()}
                alt="author image"
                width={50}
                height={50}
                priority={true}
                className="rounded-full"
              />
              <div>
                <h1 className="text-[#495057] font-bold  text-[12px]">
                  {post.author.name}
                </h1>
                <span className="text-[#6C757D] text-[12px] leading-5 font-normal">
                  {post.author.profession}
                </span>
              </div>
            </div>
            <ul className="flex   gap-4 flex-shrink-0">
              <SocialMediaLinks />
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
