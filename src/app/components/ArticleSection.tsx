import Image from "next/image";
import { Props } from "./Section";
import { urlFor } from "@/lib/createClient";
import Link from "next/link";

export function ArticleSection({ posts }: Props) {
  return (
    <div className="w-full grid md:grid-cols-4 gap-6">
      {posts.map((post) => (
        <Link href="/" key={post._id} className=" w-[310px]ß">
          <div className="w-full flex flex-col bg-[#FFFFFF] rounded-lg relative mb-6  overflow-hidden">
            <div className="img-container w-full h-[310px] relative">
              <Image
                src={urlFor(post.mainImage.asset).url()}
                alt={post.title}
                fill={true}
                className=" object-cover"
              />
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="bg-white  bg-opacity-30 text-[#fff] font-bold text-[12px] mt-4 absolute top-0 right-4 py-[6px] px-[10px] rounded-[8px]"
                >
                  {category.title}
                </span>
              ))}
            </div>

            <div className="createdAt flex flex-col px-6 gap-4 mt-4 ">
              <span className="text-[#6C757D] font-normal text-[12px]">
                {new Date(post._updatedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <h1 className="text-[#495057] font-bold  text-[1rem]">
                {post.title}
              </h1>
              <p className="text-[#6C757D] text-[12px] leading-5 font-normal">
                {post.description}
              </p>
              <hr />
              <div className="flex gap-4 mb-4">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt="author image"
                  width={50}
                  height={50}
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
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
