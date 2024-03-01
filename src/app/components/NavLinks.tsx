import Link from "next/link";

export function NavLinks() {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Articles", href: "/articles" },
    { title: "Contact Us", href: "/contactUs" },
  ];
  return (
    <nav className="">
      <ul className="flex items-center gap-6">
        {navigation.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className=" text-[#E5E5E5] hover:text-white pb-1 hover:border-b-[3px]  hover:border-[#D4A373]  border-transparent transition-all duration-300 "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
