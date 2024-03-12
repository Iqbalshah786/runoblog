"use client";
import { useState } from "react";
import { Logo } from "./Logo";
import { NavLinkContainer } from "./NavLinkContainer";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`fixed z-50 top-0 w-screen bg-black/70 shadow-md  lg:bg-opacity-20 h-[8vh] flex items-center justify-between px-4 transition-all text-base ${
        isOpen === true ? "h-[100vh]" : ""
      }`}
    >
      <div className={`font-bold ${isOpen === true ? "absolute top-4" : ""}`}>
        <Logo title="runo" className="text-[#F8F9FA]" isOpen={isOpen} />
      </div>
      <div className={`${isOpen === true ? "absolute top-4 right-4" : ""}`}>
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
      <NavLinkContainer isOpen={isOpen} />
    </header>
  );
}
