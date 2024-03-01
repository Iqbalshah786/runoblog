import Link from "next/link";
import { SocialMediaLinks } from "./SocialMediaLinks";

export function Footer() {
  return (
    <footer className="text-white body-font bg-[#212529]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold  tracking-widest  text-base mb-3">
              Contact the Publisher
            </h2>
            <nav className="list-none mb-10 font-normal text-[12px] leading-4 ">
              <li>
                <Link href="#">mike@runo.com</Link>
              </li>
              <li>
                <p>+944 450 904 505</p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold  tracking-widest  text-base mb-3">
              Explorate
            </h2>
            <nav className="list-none mb-10 font-normal text-[12px]">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#" className="">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Job Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Membership
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold  tracking-widest  text-base mb-3">
              Headquarter
            </h2>
            <nav className="list-none mb-10 font-normal text-[12px]">
              <li>
                <Link href="#">First Link</Link>
              </li>
              <li>
                <Link href="#" className="">
                  First Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-start items-center md:items-start">
            <h2 className="title-font font-bold  tracking-widest  text-base mb-3">
              Connections
            </h2>
            <nav className="list-none mb-10 font-normal text-[12px] flex  gap-4 items-center flex-shrink-0">
              <SocialMediaLinks />
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#343A40]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <h2 className="font-bold">2021 | RUNO Publisher Studio</h2>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start font-normal">
            Subscribe Now
          </span>
        </div>
      </div>
    </footer>
  );
}
