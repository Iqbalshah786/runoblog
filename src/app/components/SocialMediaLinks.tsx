import Link from "next/link";
import { socialIcons } from "../../../data/SocialIcons/index";
import Image from "next/image";
export function SocialMediaLinks() {
  return (
    <>
      {socialIcons.map((icon) => (
        <li key={icon.name}>
          <Link href={icon.href}>
            <Image
              src={icon.icon}
              alt={`${icon.name} icon`}
              width={icon.width}
              height={icon.height}
            />
          </Link>
        </li>
      ))}
    </>
  );
}
