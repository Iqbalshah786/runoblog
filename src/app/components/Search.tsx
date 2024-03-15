import Image from "next/image";
import { search } from "../../../data/SocialIcons/index";
export function Search() {
  return (
    <button>
      <Image src={search} alt="search icon" width={20} height={20} />
    </button>
  );
}
