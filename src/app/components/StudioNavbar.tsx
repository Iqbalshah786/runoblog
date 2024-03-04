import Link from "next/link";
import { arrowBack } from "../../../data/SocialIcons";
import Image from "next/image";
import { Logo } from "./Logo";

export function StudioNavbar(props: any) {
  return (
    <div className="">
      <div className=" text-gray-100 flex items-center justify-between w-screen p-[2vh]  px- bg-black">
        <Link href={"/"} className="flex gap-4">
          <Image src={arrowBack} alt="back arrow" />
          <h1 className="hover:text-sky-400 duration-200">Go to Blog</h1>
        </Link>

        <h1 className="text-white text-2xl font-bold hidden md:inline-flex">
          Bloggers Studio
        </h1>

        <p>Studio for Blog Content </p>
      </div>

      {props.renderDefault(props)}
    </div>
  );
}
