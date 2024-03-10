interface Props {
  index: number;
  currentIndex: number;
  onClick: (index: number) => void;
}

export function Dot({ index, currentIndex, onClick }: Props) {
  return (
    <button
      className={`flex-shrink-0 ${
        currentIndex === index
          ? "bg-white first rounded-full w-[10px] h-[10px]"
          : "bg-white bg-opacity-20 first rounded-full w-[10px] h-[10px]"
      }`}
      onClick={() => onClick(index)}
    ></button>
  );
}
