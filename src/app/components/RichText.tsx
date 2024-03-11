import { urlFor } from "@/lib/createClient";
import Image from "next/image";
import { list } from "postcss";
import { types } from "util";

export const RichText = () => {
  types: {
    image: ({ value }: any) => {
      return (
        <div>
          <Image
            src={urlFor(value).url()}
            alt="Post image"
            priority={true}
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      );
    };
  }
  list: {
    bullet: ({ children }: any) => <ul>{children}</ul>;
  }
  number: ({ children }: any) => <ol>{children}</ol>;
  block: {
    h1: ({ children }: any) => <h1>{children}</h1>;
    h2: ({ children }: any) => <h2>{children}</h2>;
    h3: ({ children }: any) => <h3>{children}</h3>;
    h4: ({ children }: any) => <h4>{children}</h4>;
    blockquote: ({ children }: any) => <blockquote>{children}</blockquote>;
  }
};
