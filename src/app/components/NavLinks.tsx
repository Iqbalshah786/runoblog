"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "About", href: "/" },
    { title: "Articles", href: "/" },
    { title: "Contact Us", href: "/" },
  ];
  const pathName = usePathname();
  return (
    <>
      {navigation.map((link) => (
        <li key={link.title} className="cursor-pointer">
          <Link
            href={link.href}
            className={`font-semibold text-slate-300 lg:hover:text-[#F8F9FA] lg:pb-1 lg:transition-all lg:duration-300 ${
              pathName === link.href ? "underline-link text-white" : ""
            }`}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );
}
