import { Logo } from "./Logo";
import { NavLinkContainer } from "./NavLinkContainer";

export function Navbar() {
  return (
    <header className="absolute z-10 top-0 w-screen bg-black bg-opacity-20 h-[8vh] flex items-center justify-between px-[4vw]  text-base ">
      <div className="font-bold ">
        <Logo title="runo" className="text-[#F8F9FA] " />
      </div>
      <NavLinkContainer />
    </header>
  );
}
