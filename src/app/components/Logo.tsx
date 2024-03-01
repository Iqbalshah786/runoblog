import Link from "next/link";

interface Props {
  title: string;
  color: string;
}

export function Logo({ title, color }: Props) {
  return (
    <Link href="/">
      <h1 className={`${color} uppercase `}>{title}</h1>
    </Link>
  );
}
