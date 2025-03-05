import { useState } from "react";
import { motion } from "framer-motion";

import { GrantsFaq } from ".";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";

export default function Item({ answer, question }: GrantsFaq) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div
      className={`flex flex-col justify-center ${
        isOpen ? "gap-6" : ""
      } border border-[#3B3B3B] rounded-lg p-6 mb-8`}
    >
      {/* Question Section */}
      <div
        className="flex items-center cursor-pointer gap-6"
        onClick={toggleOpen}
      >
        {/* Rotating caret */}
        <motion.div
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center"
        >
          <DynamicImage
            className="w-[1.5rem] h-[1.5rem]"
            src={`${isOpen ? "/minus.svg" : "/add.svg"}`}
            alt="caret"
          />
        </motion.div>
        <h3 className="text-[1.125rem] lg:text-[1.5rem] font-poppins font-medium w-full lg:w-[52.5625rem] text-active-white leading-[150%] lg:leading-[133.333%]">
          {question}
        </h3>
      </div>

      {/* Answer Section (Animated Height and Fade-in) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden pl-12 w-full lg:w-[52.5625rem]"
      >
        <Paragraph className="!text-[#A5A5A5] leading-[175%] w-full">
          {answer}
        </Paragraph>
      </motion.div>
    </div>
  );
}
