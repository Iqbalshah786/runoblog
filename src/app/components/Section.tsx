import { Post } from "../../../types";
import { ArticleSection } from "./ArticleSection";

export interface Props {
  posts: Post[];
}

export function Section({ posts }: Props) {
  return (
    <section className=" w-full mt-16 md:mt-24 px-[4vw]">
      <h1 className="text-[#495057]  font-bold text-[1rem] md:text-[1.875vw] my-6">
        Blogs
      </h1>
      <div className="flex flex-col w-full ">
        <ArticleSection posts={posts} />
      </div>
    </section>
  );
}
