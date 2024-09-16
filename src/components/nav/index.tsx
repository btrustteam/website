"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import DropDown from "./dropdown";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const navItems = [
    {
      title: "Home",
      url: "/",
      sub_nav: [],
    },
    { title: "Grants", url: "/grants", sub_nav: [] },
    {
      title: "Builders",
      url: "/builders",
      sub_nav: [
        { title: "Apply", url: "/builders/apply" },
        { title: "Meet the Builders", url: "/builders/meet-builders" },
      ],
    },
    { title: "About Us", url: "/about", sub_nav: [] },
    { title: "Blog", url: "/blog", sub_nav: [] },
    { title: "Contact Us", url: "/contact", sub_nav: [] },
  ];

  function findNavItem(title: string) {
    for (let i = 0; i < navItems.length; i++) {
      if (title === navItems[i].title) {
        return navItems[i];
      }
    }
  }

  function handleNavClick(
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    title: string
  ) {
    event.preventDefault();
    const navItem = findNavItem(title);

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    if (navItem?.sub_nav.length! > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      if (activeDropdown === navItem?.title!) {
        setActiveDropdown("");
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        setActiveDropdown(navItem?.title!);
      }
      return;
    }
    setActiveDropdown("");
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    router.push(navItem?.url!);
  }
  return (
    <div className="flex w-full px-[6.5rem] pt-12 pb-4">
      <div className="flex items-center justify-between border border-grey-black rounded-lg p-6 w-full bg-btrust-white-opacity backdrop-blur-[0.625rem] z-0">
        <div className="flex items-center justify-center">
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            src={"/logo.svg"}
            alt={"Logo"}
            className={"w-[4rem] h-[1.6875rem]"}
          />
        </div>
        <div className="flex justify-end items-center gap-10">
          {navItems.map((item, index) => (
            <div className="flex gap-2 items-center relative" key={index}>
              <Link
                href={item.url}
                className={`${
                  pathname === item.url
                    ? "text-active-white font-semibold"
                    : "text-grey-black font-normal"
                } text-base leading-[1.5rem] font-poppins cursor-pointer hover:font-semibold hover:text-active-white`}
                target={item.new_tab ? "_blank" : ""}
              >
                {item.title}
              </Link>
              {item.sub_nav.length > 0 && (
                <Image
                  src={"/caret_down.svg"}
                  alt="dropdown"
                  width={0}
                  height={0}
                  sizes={"100vw"}
                  className="cursor-pointer w-[1rem] h-[1rem]"
                  onClick={(e) => handleNavClick(e, item.title)}
                />
              )}
              {item.sub_nav.length > 0 && activeDropdown === item.title && (
                <DropDown items={item.sub_nav} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
