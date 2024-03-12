import Link from "next/link";
import { Post } from "../../../types";
import { ArticleSection } from "./ArticleSection";

export interface Props {
  posts: Post[];
}

export function Section({ posts }: Props) {
  const categories = [
    { title: "All" },
    { title: "Adventure" },
    { title: "Travel" },
    { title: "Fashion" },
    { title: "Technology" },
    { title: "Branding" },
  ];
  return (
    <section className=" w-full mt-16 md:mt-24 px-[4vw]">
      <h1 className="text-[#495057]  font-bold text-[1rem] md:text-[1.875vw] my-6">
        Popular topics
      </h1>
      <div className="flex flex-col w-full ">
        <ul className="flex gap-[10px] sm:gap-4  text-[12px] sm:text-xs lg:text-lg font-bold flex-shrink-0 mb-6">
          {categories.map((category) => (
            <li key={category.title}>
              <Link href={"/"}>{category.title}</Link>
            </li>
          ))}
        </ul>
        <ArticleSection posts={posts} />
      </div>
    </section>
  );
}
