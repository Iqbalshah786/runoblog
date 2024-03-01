interface Props {
  title: string;
  color: string;
}

export function Logo({ title, color }: Props) {
  return (
    <h1 className={`${color} uppercase absolute  left-[2vw] font-bold`}>
      {title}
    </h1>
  );
}
