import { useState } from "react";
import { motion } from "framer-motion";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";

type FAQProps = {
  question: string;
  answer: string;
  lists?: string[];
};

export default function FAQItem({ question, answer, lists }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="flex flex-col justify-center gap-6">
      {/* Question Section */}
      <div
        className="flex items-center cursor-pointer gap-6"
        onClick={toggleOpen}
      >
        {/* Rotating caret */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center"
        >
          <DynamicImage
            className="w-[1.5rem] h-[1.5rem]"
            src="/big_caret_down.svg"
            alt="caret"
          />
        </motion.div>
        <h3 className="text-[1.5rem] font-poppins font-semibold w-[52.5625rem] text-active-white leading-[133.333%]">
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
        className="overflow-hidden ml-12 w-[52.5625rem]"
      >
        <Paragraph className="!text-[#A5A5A5] leading-[175%]">
          {answer}
        </Paragraph>
        {lists && (
          <ul className="list-disc pl-5">
            {lists.map((list, index) => (
              <li
                className="text-[#A5A5A5] text-base font-poppins leading-[175%]"
                key={index}
              >
                {list}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
