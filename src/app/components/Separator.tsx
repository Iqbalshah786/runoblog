interface Props {
  className?: string;
}

export function Separator({ className }: Props) {
  return (
    <div className={`bg-[#E5E5E5]  w-[0.07rem] h-[2.5vh] ${className} `}></div>
  );
}
