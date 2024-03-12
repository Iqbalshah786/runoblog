import Link from "next/link";

interface Props {
  title: string;
  className: string;
  isOpen: boolean;
}

export function Logo({ title, className, isOpen }: Props) {
  return (
    <Link href="/">
      <h1
        className={`${className} uppercase text-[1.25rem] ${
          isOpen === true ? "" : ""
        }`}
      >
        {title}
      </h1>
    </Link>
  );
}
