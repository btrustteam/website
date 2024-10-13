"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import DropDown from "./dropdown";

interface Props {
  mobileActive: boolean;
  handleToggle: () => void;
  closeNav: () => void;
}

export default function Nav({ mobileActive, handleToggle, closeNav }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string>("");

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
        { title: "Apply", url: "/builders/apply", new_tab: false },
        {
          title: "Meet the Builders",
          url: "/builders/meet-builders",
          new_tab: false,
        },
      ],
    },
    { title: "About Us", url: "/about", sub_nav: [], new_tab: false },
    {
      title: "Blog",
      url: "https://blog.btrust.tech",
      sub_nav: [],
      new_tab: true,
    },
    { title: "Media", url: "/media", sub_nav: [] },
    { title: "Contact Us", url: "/contact", sub_nav: [], new_tab: false },
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

  function mobileShowDropdown(
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    title: string
  ) {
    e.preventDefault();
    const navItem = findNavItem(title);

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    if (navItem?.sub_nav.length! > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      if (mobileActiveDropdown === navItem?.title!) {
        setMobileActiveDropdown("");
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        setMobileActiveDropdown(navItem?.title!);
      }
      return;
    }
  }

  function handleMobileOnclick() {
    closeNav();
  }

  function handleSubNav() {
    setMobileActiveDropdown("");
    closeNav();
  }

  return (
    <div className="sticky top-0 flex w-full lg:px-[6.5rem] lg:pt-12 lg:pb-4 z-[1000]">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between border border-grey-black rounded-lg p-6 w-full bg-btrust-white-opacity backdrop-blur-[0.625rem]">
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
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
                <DropDown
                  items={item.sub_nav}
                  setActiveDropdown={setActiveDropdown}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="flex flex-col w-full relative lg:hidden">
        <div className="lg:hidden flex justify-between items-center border-t-[0.6px] border-t-[#333] border-b-[0.6px] border-b-[#333] bg-btrust-white-opacity px-[1.5rem] w-full py-[0.75rem]">
          <div
            className="flex items-center justify-center"
            onClick={() => router.push("/")}
          >
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              src={"/logo.svg"}
              alt={"Logo"}
              className={"w-[3.5rem] h-[1.5rem]"}
            />
          </div>
          <div
            className="flex h-[3rem] w-[3rem] items-center justify-center p-[0.5rem] rounded-[0.4375rem] border-[0.6px] border-[#272727] bg-mobile-bg"
            onClick={handleToggle}
          >
            {mobileActive ? (
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                src={"/close.svg"}
                alt="Hamburger"
                className="w-[3rem] h-[3rem] object-cover"
              />
            ) : (
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                src={"/hamburger.svg"}
                alt="Hamburger"
                className="w-[1.5rem] h-[1.5rem] object-cover"
              />
            )}
          </div>
        </div>
        {mobileActive && (
          <div className="bg-[#191919] flex flex-col gap-[2.375rem] text-[1.125rem] leading-[144.444%] p-[1.5rem] w-full h-screen mt-4 top-0 left-0">
            {navItems.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <div className="flex items-center gap-2">
                  <Link
                    className={`${
                      pathname === item.url
                        ? "text-active-white font-semibold"
                        : "text-grey-black font-normal"
                    }`}
                    href={item.url}
                    target={item.new_tab ? "_blank" : ""}
                    onClick={handleMobileOnclick}
                  >
                    {item.title}
                  </Link>
                  {item.sub_nav.length !== 0 && (
                    <Image
                      src={"/caret_down.svg"}
                      alt="dropdown"
                      width={0}
                      height={0}
                      sizes={"100vw"}
                      className="cursor-pointer w-[1rem] h-[1rem]"
                      onClick={(e) => mobileShowDropdown(e, item.title)}
                    />
                  )}
                </div>
                {mobileActiveDropdown === item.title && (
                  <div className="flex flex-col gap-6 mt-6">
                    {item.sub_nav.map((sub, index) => (
                      <Link
                        key={index}
                        className={`${
                          pathname === sub.url
                            ? "text-active-white font-semibold"
                            : "text-grey-black font-normal"
                        } pl-6`}
                        href={sub.url}
                        onClick={() => handleSubNav()}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
