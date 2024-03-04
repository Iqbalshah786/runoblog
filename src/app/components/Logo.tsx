import Link from "next/link";

interface Props {
  title: string;
  className: string;
}

export function Logo({ title, className }: Props) {
  return (
    <Link href="/">
      <h1 className={`${className} uppercase text-[1.25rem]`}>{title}</h1>
    </Link>
  );
}
