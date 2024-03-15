import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { Separator } from "./Separator";
import { SocialMediaLinks } from "./SocialMediaLinks";

interface Props {
  isOpen: boolean;
}

export function NavLinkContainer({ isOpen }: Props) {
  return (
    <>
      <div
        className={`${
          isOpen === true
            ? "w-full h-full flex items-center justify-center"
            : "hidden"
        }   lg:inline-block lg:top-0`}
      >
        <nav
          className={`flex flex-col lg:flex-row lg:flex-shrink-0 items-center lg:gap-4 ${
            isOpen === true ? " w-full " : ""
          }`}
        >
          <ul className={`flex flex-col items-center  lg:flex-row gap-6 `}>
            <NavLinks />
            <h1 className="font-semibold text-slate-300 hover:text-[#F8F9FA] pb-1 transition-all duration-300">
              <Link href={"/studio"}>Admin</Link>
            </h1>
            <Separator className="hidden lg:block" />

            <div className="flex gap-4">
              <SocialMediaLinks />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}
