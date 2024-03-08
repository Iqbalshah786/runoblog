"use client";

import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { Search } from "./Search";
import { Separator } from "./Separator";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { Menu, X } from "lucide-react";

export function NavLinkContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="absolute z-10 top-8 right-8">
        {isOpen === true ? (
          <X
            color="white"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <Menu
            color="white"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      <div
        className={`${
          isOpen === true ? "relative right-0 top-16" : "hidden"
        }   lg:inline-block lg:top-0`}
      >
        <nav
          className={`flex flex-col lg:flex-row lg:flex-shrink-0 lg:items-center lg:gap-4`}
        >
          <ul className=" flex flex-col  lg:items-center  lg:flex-row lg:gap-6">
            <NavLinks />
            <Separator className="hidden lg:block" />
            <div className="flex gap-4">
              <SocialMediaLinks />
            </div>
            <Separator className="hidden lg:block" />
            <Search />
          </ul>
        </nav>
      </div>
    </>
  );
}
