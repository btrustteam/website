"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface DropdownItems {
  title: string;
  url: string;
}

interface DropDownProps {
  items: DropdownItems[];
}

export default function DropDown({ items }: DropDownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col items-center justify-center rounded-lg bg-dropdown-bg border border-black-4 py-2 top-8 left-[-60%] webkit-backdrop-blur absolute"
    >
      {items.map((item, index) => (
        <div
          className={`flex items-center justify-center py-4 px-8 ${
            index != 0 ? "border-t-[0.0625rem] border-black-4" : ""
          }`}
          key={index}
        >
          <Link
            className={`font-poppins text-base text-[#E7E7E7] text-center min-w-max`}
            href={item.url}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </motion.div>
  );
}
