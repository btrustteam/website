"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DropdownItems {
  title: string;
  url: string;
}

interface DropDownProps {
  items: DropdownItems[];
  setActiveDropdown: (value: string) => void;
}

export default function DropDown({ items, setActiveDropdown }: DropDownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveDropdown("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col items-center justify-center rounded-lg bg-dropdown-bg border border-black-4 py-2 top-8 left-[-60%] absolute z-50"
    >
      {items.map((item, index) => (
        <div
          className={`flex w-full items-center justify-center py-4 px-8 ${
            index != 0 ? "border-t-[0.0625rem] border-black-4" : ""
          }`}
          key={index}
        >
          <Link
            className={`font-poppins block text-base text-[#E7E7E7] text-center min-w-max w-full`}
            href={item.url}
            onClick={() => setActiveDropdown("")}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </motion.div>
  );
}
