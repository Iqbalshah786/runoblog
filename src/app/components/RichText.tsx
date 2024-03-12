import { urlFor } from "@/lib/createClient";
import Image from "next/image";
import Link from "next/link";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="inline-block relative w-[30vw] h-[30vh] mr-4 ml-3 my-8">
          <Image
            src={urlFor(value).url()}
            alt="Post image"
            fill={true}
            style={{ objectFit: "cover" }}
            className="aspect-auto rounded-lg"
            priority={true}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="">{children}</ul>,
  },
  number: ({ children }: any) => <ol className="">{children}</ol>,
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-[#d4a373] font-bold text-[40px] ">{children}</h1>
    ),
    h2: ({ children }: any) => <h2 className="">{children}</h2>,
    h3: ({ children }: any) => <h3 className="">{children}</h3>,
    h4: ({ children }: any) => <h4 className="">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline">
          {children}
        </Link>
      );
    },
  },
};
